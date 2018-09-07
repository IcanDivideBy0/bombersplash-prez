import { mat4 } from "gl-matrix";

import { initShaderProgram, loadObjFile } from "../utils";
import vsSource from "../shaders/blinn-phong.vert";
import fsSource from "../shaders/blinn-phong.frag";

/**
 * GL functions
 */

const cache = {};

function initShaders(gl) {
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  return {
    program: shaderProgram,
    attribs: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
      vertexNormals: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
    },
    uniforms: {
      modelView: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      projection: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      normal: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
    },
  };
}

function initVao(gl, programInfos, objData) {
  const { attribs } = programInfos;
  const { indices, positions, colors, normals } = objData;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attribs.vertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.vertexPosition);

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attribs.vertexColor, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.vertexColor);

  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attribs.vertexNormals, 3, gl.FLOAT, true, 0, 0);
  gl.enableVertexAttribArray(attribs.vertexNormals);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

  gl.bindVertexArray(null);

  return {
    vertexCount: indices.length,
    vao,
  };
}

async function setupGlObj(gl, objUrl) {
  const objKey = `GlObj_DataSymbol_${objUrl}`;

  if (!(objKey in cache)) {
    cache[objKey] = {
      objData: loadObjFile(objUrl),
      glSymbol: Symbol(objKey),
    };
  }

  const { objData, glSymbol } = cache[objKey];

  if (!(glSymbol in gl)) {
    gl[glSymbol] = objData.then(data => {
      const programInfo = initShaders(gl);
      const vaoInfo = initVao(gl, programInfo, data);

      return { programInfo, vaoInfo };
    });
  }

  gl[glSymbol] = await gl[glSymbol];

  return glSymbol;
}

/**
 * Main class
 */

export default class Obj {
  constructor(scene, objUrl) {
    this.scene = scene;
    this.objUrl = objUrl;
    this.modelMatrix = mat4.create();

    setupGlObj(scene.gl, objUrl).then(glSymbol => {
      this.glSymbol = glSymbol;
    });
  }

  setTransform(matrix) {
    this.modelMatrix = matrix;
  }

  draw = deltaTime => {
    if (!this.glSymbol) return;

    const {
      gl,
      camera: { viewMatrix, projectionMatrix },
    } = this.scene;

    const {
      programInfo: { program, uniforms },
      vaoInfo: { vertexCount, vao },
    } = gl[this.glSymbol];

    gl.bindVertexArray(vao);

    const modelViewMatrix = mat4.create();
    mat4.mul(modelViewMatrix, viewMatrix, this.modelMatrix);

    gl.useProgram(program);
    gl.uniformMatrix4fv(uniforms.modelView, false, modelViewMatrix);
    gl.uniformMatrix4fv(uniforms.projection, false, projectionMatrix);

    // const scaling = mat4.getScaling([], modelMatrix);
    // const normalMatrix = mat4.create();
    // mat4.scale(normalMatrix, modelMatrix, [
    //   1 / scaling[0],
    //   1 / scaling[1],
    //   1 / scaling[2]
    // ]);
    // mat4.mul(normalMatrix, viewMatrix, normalMatrix);

    const normalMatrix = mat4.clone(modelViewMatrix);
    mat4.invert(normalMatrix, normalMatrix);
    mat4.transpose(normalMatrix, normalMatrix);

    gl.uniformMatrix4fv(uniforms.normal, false, normalMatrix);

    gl.drawElements(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, 0);
  };
}
