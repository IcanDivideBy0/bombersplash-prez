import React from "react";
import uuidv4 from "uuid/v4";
import { mat4 } from "gl-matrix";

import { withScene, Obj } from "modules/webgl";

class ObjSpawner extends React.Component {
  objects = {};

  componentDidMount() {
    const { scene } = this.props;
    scene.registerDrawCall(this.handleDraw);

    window.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    const { scene } = this.props;
    scene.unregisterDrawCall(this.handleDraw);

    window.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.key === "h") this.spawnCube();
  };

  spawnCube() {
    const { scene, world } = this.props;

    const objId = uuidv4();

    world.addCube(
      objId,
      [100, 100, 100], // size
      [0, 400, 0], // pos
      [0, 0, 0], // rot
      [0, 0, 0] // vel
    );

    // this.objects[objId] = new Obj(scene, require("./assets/suzanne.obj"));
    this.objects[objId] = new Obj(scene, require("./assets/cube.obj"));
  }

  handleDraw = deltaTime => {
    const { world } = this.props;
    const scale = mat4.fromScaling([], [100, 100, 100]);

    Object.keys(this.objects).forEach(objId => {
      const obj = this.objects[objId];

      const m = mat4.mul([], world.getCube(objId), scale);
      obj.setTransform(m);
      obj.draw(deltaTime);
    });
  };

  render() {
    return null;
  }
}

export default withScene(ObjSpawner);
