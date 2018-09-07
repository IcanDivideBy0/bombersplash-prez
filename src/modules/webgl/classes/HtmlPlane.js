import { mat4 } from "gl-matrix";
import { ResizeSensor } from "css-element-queries";

import { initShaderProgram } from "../utils";
import vsSource from "../shaders/blinn-phong.vert";
import fsSource from "../shaders/blinn-phong.frag";

/**
 * GL functions
 */

const GL_SYMBOL = Symbol("GlHtmlPlane_DataSymbol");

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

function initVao(gl, programInfos, el) {
  const { attribs } = programInfos;
  let vertexCount = 0;
  let updateSize = null;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  /**
   * Positions
   */

  {
    const positionBuffer = gl.createBuffer();

    updateSize = (width, height) => {
      const halfWidth = width / 2;
      const halfHeight = height / 2;

      // prettier-ignore
      const positions = [
        -halfWidth,  halfHeight, 0.0,
         halfWidth,  halfHeight, 0.0,
         halfWidth, -halfHeight, 0.0,
        -halfWidth, -halfHeight, 0.0,
      ];

      gl.bindVertexArray(vao);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(positions),
        gl.STATIC_DRAW
      );
    };

    updateSize(el.offsetWidth, el.offsetHeight);

    gl.vertexAttribPointer(attribs.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attribs.vertexPosition);
  }

  /**
   * Colors
   */

  {
    // prettier-ignore
    const colors = [
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
    ];

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    gl.vertexAttribPointer(attribs.vertexColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attribs.vertexColor);
  }

  /**
   * Normals
   */

  {
    // prettier-ignore
    const normals = [
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
    ];

    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    gl.vertexAttribPointer(attribs.vertexNormals, 3, gl.FLOAT, true, 0, 0);
    gl.enableVertexAttribArray(attribs.vertexNormals);
  }

  /**
   * Vertex indices buffer
   */

  {
    // prettier-ignore
    const indices = [
      0,  3,  1,
      1,  3,  2,
    ];
    vertexCount = indices.length;

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW
    );
  }

  gl.bindVertexArray(null);

  return {
    vertexCount,
    vao,
    updateSize,
  };
}

/**
 * Main class
 */

export default class HtmlPlane {
  transformCache = {};

  constructor(scene, viewEl, modelEl) {
    this.scene = scene;
    this.viewEl = viewEl;
    this.modelEl = modelEl;
    this.modelMatrix = mat4.create();

    const gl = scene.gl;

    if (!(GL_SYMBOL in gl)) {
      gl[GL_SYMBOL] = { programInfo: initShaders(gl) };
    }

    const { programInfo } = gl[GL_SYMBOL];
    this.vaoInfo = initVao(gl, programInfo, this.modelEl);

    this.resizeSensor = new ResizeSensor(this.modelEl, () => {
      this.vaoInfo.updateSize(
        this.modelEl.offsetWidth,
        this.modelEl.offsetHeight
      );
    });
  }

  destroy() {
    if (this.resizeSensor) this.resizeSensor.detach();
  }

  setTransform(matrix) {
    this.modelMatrix = matrix;
  }

  static getCssModelMatrix(modelMatrix) {
    const cssModelMatrix = mat4.clone(modelMatrix);

    cssModelMatrix[4] *= -1;
    cssModelMatrix[5] *= -1;
    cssModelMatrix[6] *= -1;
    cssModelMatrix[7] *= -1;

    return cssModelMatrix;
  }

  static getCssViewMatrix(viewMatrix) {
    const cssViewMatrix = mat4.clone(viewMatrix);

    cssViewMatrix[1] *= -1;
    cssViewMatrix[5] *= -1;
    cssViewMatrix[9] *= -1;
    cssViewMatrix[13] *= -1;

    return cssViewMatrix;
  }

  draw = deltaTime => {
    const { gl, camera, size } = this.scene;
    const { viewMatrix, projectionMatrix } = camera;

    const {
      programInfo: { program, uniforms },
    } = gl[GL_SYMBOL];

    const { vertexCount, vao } = this.vaoInfo;

    gl.bindVertexArray(vao);
    gl.disable(gl.BLEND);

    const modelViewMatrix = mat4.create();
    mat4.mul(modelViewMatrix, viewMatrix, this.modelMatrix);

    gl.useProgram(program);
    gl.uniformMatrix4fv(uniforms.modelView, false, modelViewMatrix);
    gl.uniformMatrix4fv(uniforms.projection, false, projectionMatrix);

    const normalMatrix = mat4.clone(modelViewMatrix);
    mat4.invert(normalMatrix, normalMatrix);
    mat4.transpose(normalMatrix, normalMatrix);

    gl.uniformMatrix4fv(uniforms.normal, false, normalMatrix);

    gl.drawElements(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, 0);

    gl.enable(gl.BLEND);

    /**
     * Update HTML CSS
     */

    const fov = size.height / 2 / Math.tan(camera.getFovy() / 2);

    if (
      this.transformCache.width !== size.width ||
      this.transformCache.height !== size.height ||
      this.transformCache.fov !== fov
    ) {
      Object.assign(this.viewEl.style, {
        width: size.width + "px",
        height: size.height + "px",
        perspective: fov + "px",
      });
    }

    const cssModelMatrix = HtmlPlane.getCssModelMatrix(this.modelMatrix);
    const cssViewMatrix = HtmlPlane.getCssViewMatrix(camera.viewMatrix);

    const cssModelViewMatrix = mat4.create();
    mat4.mul(cssModelViewMatrix, cssViewMatrix, cssModelMatrix);

    if (
      this.transformCache.fov !== fov ||
      !mat4.equals(cssModelViewMatrix, this.transformCache.cssModelViewMatrix)
    ) {
      this.modelEl.style.transform = `
        translateZ(${fov}px)
        matrix3d(${cssModelViewMatrix.join(",")})
      `;
    }

    this.transformCache = {
      fov,
      ...size,
      cssModelViewMatrix,
    };
  };
}
