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
    const { scene, world, size } = this.props;

    const objId = uuidv4();

    const posX = Math.floor((Math.random() - 0.5) * 0.8 * size.width);
    const posY = Math.floor((Math.random() - 0.5) * 0.8 * size.height);

    const _size = Math.random() * 100 + 100;

    world.addCube(
      objId,
      [_size, _size, _size], // size
      [posX, 400, posY], // pos
      [0, 0, 0], // rot
      [0, 0, 0] // vel
    );

    this.objects[objId] = {
      obj: new Obj(scene, require("./assets/cube.obj")),
      // obj: new Obj(scene, require("./assets/suzanne.obj")),
      size: _size,
      color: [Math.random(), Math.random(), Math.random()],
    };
  }

  handleDraw = deltaTime => {
    const { world } = this.props;

    Object.keys(this.objects).forEach(objId => {
      const object = this.objects[objId];
      const scale = mat4.fromScaling(
        [],
        [object.size, object.size, object.size]
      );

      const m = mat4.mul([], world.getCube(objId), scale);
      object.obj.setTransform(m);
      object.obj.draw(deltaTime);
    });
  };

  render() {
    return null;
  }
}

export default withScene(ObjSpawner);
