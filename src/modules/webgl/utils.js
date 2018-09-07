export function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    throw new Error(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
    );

  return shader;
}

export function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
    throw new Error(
      "An error occurred initializing the shader program: " +
        gl.getProgramInfoLog(shaderProgram)
    );

  return shaderProgram;
}

export async function loadObjFile(fileUrl) {
  const data = await fetch(fileUrl).then(res => res.text());

  const positionsRef = [];
  const positions = [];
  const indices = [];
  const colors = [];
  const normalsRef = [];
  const normals = [];

  data.split("\n").forEach(line => {
    const [type, ...chunks] = line.split(" ");

    switch (type) {
      case "v":
        positionsRef.push(chunks);
        break;

      case "vn":
        normalsRef.push(chunks);
        break;

      case "f":
        chunks.forEach((chunk, idx) => {
          const [v, n] = chunk.split("//");

          indices.push(indices.length);

          const vertexIdx = parseInt(v, 10) - 1;
          positions.push(...positionsRef[vertexIdx]);

          const normalIdx = parseInt(n, 10) - 1;
          normals.push(...normalsRef[normalIdx]);

          colors.push(0.6, 0.6, 0.6, 1.0);
        });
        break;

      default:
        break;
    }
  });

  return {
    positions: new Float32Array(positions),
    indices: new Uint16Array(indices),
    colors: new Float32Array(colors),
    normals: new Float32Array(normals),
  };
}
