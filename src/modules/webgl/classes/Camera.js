import { mat4 } from "gl-matrix";

export default class Camera {
  constructor(scene) {
    this.scene = scene;
    this.fovy = (45 * Math.PI) / 180;
    this.zNear = 0.1;
    this.zFar = 1e8;
    this.pos = [0, 0, 0];
    this.lookAt = [0, 0, -1];
    this.up = [0, 1, 0];

    this.viewMatrix = mat4.create();
    this.projectionMatrix = mat4.create();
  }

  setPos(pos) {
    this.pos = pos;
  }

  setLookAt(lookAt) {
    this.lookAt = lookAt;
  }

  getFovy() {
    return this.fovy;
  }

  getZNear() {
    return this.zNear;
  }

  getZFar() {
    return this.zFar;
  }

  getViewMatrix() {
    return mat4.lookAt([], this.pos, this.lookAt, this.up);
  }

  getProjectionMatrix() {
    const aspect = this.scene.size.width / this.scene.size.height;
    return mat4.perspective([], this.fovy, aspect, this.zNear, this.zFar);
  }

  update() {
    this.viewMatrix = this.getViewMatrix();
    this.projectionMatrix = this.getProjectionMatrix();
  }
}
