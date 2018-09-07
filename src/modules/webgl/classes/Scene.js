export default class Scene {
  constructor(gl) {
    this.gl = gl;
    this.drawCalls = [];
    this.camera = null;
    this.size = {
      width: gl.canvas.width,
      height: gl.canvas.height,
    };
  }

  destroy() {
    this.unregisterDrawCall(this.camera.draw);
  }

  setCamera(camera) {
    this.camera = camera;
  }

  registerDrawCall(fn) {
    this.drawCalls.push(fn);
  }

  unregisterDrawCall(fn) {
    const index = this.drawCalls.indexOf(fn);
    if (~index) this.drawCalls.splice(index, 1);
  }

  setSize(width, height) {
    this.size = {
      width,
      height,
    };

    const pixelRatio = window.devicePixelRatio || 1;
    const canvasSize = {
      width: this.size.width * pixelRatio,
      height: this.size.height * pixelRatio,
    };

    Object.assign(this.gl.canvas, canvasSize);
    this.gl.viewport(0, 0, canvasSize.width, canvasSize.height);
  }

  draw(deltaTime) {
    const gl = this.gl;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    this.drawCalls.forEach(fn => fn(deltaTime));
  }
}
