import React from "react";
import { mat4 } from "gl-matrix";

import Obj from "../classes/Obj";
import { withScene } from "./GlCanvas";

class GlHtmlPlane extends React.PureComponent {
  static defaultProps = {
    onDraw: () => {},
    transformMatrix: mat4.create(),
  };

  componentDidMount() {
    const { scene, objUrl } = this.props;
    scene.registerDrawCall(this.handleDraw);

    this.obj = new Obj(scene, objUrl);
  }

  componentWillUnmount() {
    const { scene } = this.props;
    scene.unregisterDrawCall(this.handleDraw);
  }

  handleDraw = deltaTime => {
    const { onDraw, transformMatrix } = this.props;

    this.obj.setTransform(transformMatrix);
    const res = onDraw(deltaTime, this.obj);
    if (res !== false) this.obj.draw(deltaTime);
  };

  render() {
    return null;
  }
}

export default withScene(GlHtmlPlane);
