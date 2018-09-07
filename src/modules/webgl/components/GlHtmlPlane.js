import React from "react";
import { mat4 } from "gl-matrix";

import HtmlPlane from "../classes/HtmlPlane";
import { withScene } from "./GlCanvas";

class GlHtmlPlane extends React.Component {
  static defaultProps = {
    onDraw: () => {},
    transformMatrix: mat4.create(),
  };

  viewRef = React.createRef();
  modelRef = React.createRef();

  componentDidMount() {
    const { scene } = this.props;
    scene.registerDrawCall(this.handleDraw);

    this.htmlPlane = new HtmlPlane(
      scene,
      this.viewRef.current,
      this.modelRef.current
    );
  }

  componentWillUnmount() {
    const { scene } = this.props;
    scene.unregisterDrawCall(this.handleDraw);

    this.htmlPlane.destroy();
  }

  handleDraw = deltaTime => {
    const { onDraw, transformMatrix } = this.props;

    this.htmlPlane.setTransform(transformMatrix);
    const res = onDraw(deltaTime, this.htmlPlane);
    if (res !== false) this.htmlPlane.draw(deltaTime);
  };

  render() {
    return (
      <div
        ref={this.viewRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={this.modelRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transformStyle: "preserve-3d",
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withScene(GlHtmlPlane);
