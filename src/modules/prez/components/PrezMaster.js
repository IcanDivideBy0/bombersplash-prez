import React from "react";
import { mat4, vec3 } from "gl-matrix";

import { lerp } from "modules/utils";
import { withSocket, DataChannelProvider } from "modules/net";
import { GlCanvas, GlHtmlPlane, GlObj } from "modules/webgl";
import { Game } from "modules/game";
import physics from "modules/physics";

import Slides from "./Slides";
import CubeSpawner from "./CubeSpawner";

import "./PrezMaster.css";

const htmlPlaneTransform = mat4.create();
mat4.rotate(htmlPlaneTransform, mat4.create(), -Math.PI / 2, [1, 0, 0]);
mat4.translate(htmlPlaneTransform, htmlPlaneTransform, [0, 0, 0]);
// mat4.scale(htmlPlaneTransform, htmlPlaneTransform, [1 / 10, 1 / 10, 1 / 10]);

function lerpVec3(v1, v2, alpha) {
  return [
    lerp(v1[0], v2[0], alpha),
    lerp(v1[1], v2[1], alpha),
    lerp(v1[2], v2[2], alpha),
  ];
}

class PrezMaster extends React.Component {
  state = {
    world: null,
    freeCamera: false,
  };

  mousePos = { x: 0.5, y: 0.5 };
  size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  cameraPos = null;

  async componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("keypress", this.handleKeyPress);

    const { PrezWorld } = await physics();

    const world = new PrezWorld();
    world.addGround(
      [this.size.width, 1, this.size.height], // size
      [0, 0, 0], // pos
      [0, 0, 0] // rot
    );

    this.setState({ world });
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("keypress", this.handleKeyPress);
  }

  handleMouseMove = evt => {
    this.mousePos = {
      x: evt.clientX / this.size.width,
      y: evt.clientY / this.size.height,
    };
  };

  handleKeyPress = evt => {
    if (evt.key === "t") {
      this.setState({
        freeCamera: !this.state.freeCamera,
      });
    }
  };

  handleSlideChange = (index, step) => {
    const { socket } = this.props;
    socket.emit("prez:slideUpdate", index, step);
  };

  handleSceneDraw = (deltaTime, scene) => {
    const { world } = this.state;
    if (world) world.step(deltaTime * 10);

    const zEye =
      scene.size.height / 2 / Math.tan(scene.camera.getFovy() / 2) +
      scene.camera.getZNear();

    let v;

    if (this.state.freeCamera) {
      v = vec3.fromValues(0, 0, -zEye * 2);
      // vec3.rotateZ(v, v, [0, 0, 0], this.mousePos.y * Math.PI);
      vec3.rotateX(
        v,
        v,
        [0, 0, 0],
        (lerp(0.2, 0.7, this.mousePos.y) * Math.PI) / 2
      );
      vec3.rotateY(v, v, [0, 0, 0], lerp(1.5, 0.5, this.mousePos.x) * Math.PI);
    } else {
      v = vec3.fromValues(0, 0, -zEye);
      vec3.rotateX(v, v, [0, 0, 0], Math.PI / 2);
      vec3.rotateY(v, v, [0, 0, 0], Math.PI);
    }

    this.cameraPos = this.cameraPos || v;

    this.cameraPos = lerpVec3(this.cameraPos, v, deltaTime / 100);

    scene.camera.setPos(this.cameraPos);
    scene.camera.setLookAt([0, 0, 0]);
  };

  handleSuzanneDraw = (deltaTime, obj) => {
    const m = mat4.create();
    mat4.rotate(m, m, ((performance.now() / 1000) * Math.PI) / 2, [0, 1, 0]);
    mat4.translate(m, m, [0, 10, 0]);
    mat4.scale(m, m, [10, 10, 10]);
    obj.setTransform(m);
  };

  render() {
    const { world, freeCamera } = this.state;

    return (
      <GlCanvas onDraw={this.handleSceneDraw} showStats={freeCamera}>
        <GlHtmlPlane transformMatrix={htmlPlaneTransform}>
          {true && (
            <div
              className="PrezMasterGLHTMLWrapper"
              style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
              }}
            >
              <Slides onSlideChange={this.handleSlideChange} />

              <DataChannelProvider
                protoUrl={`${process.env.REACT_APP_SERVER_URL}/messages.proto`}
              >
                <Game master />
              </DataChannelProvider>
            </div>
          )}
        </GlHtmlPlane>

        {world && <CubeSpawner world={world} size={this.size} />}

        {false && (
          <GlObj
            onDraw={this.handleSuzanneDraw}
            objUrl={require("./assets/suzanne.obj")}
          />
        )}
      </GlCanvas>
    );
  }
}

export default withSocket(PrezMaster);
