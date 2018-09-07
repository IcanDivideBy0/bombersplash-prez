import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import Stats from "stats.js";

import Scene from "../classes/Scene";
import Camera from "../classes/Camera";

const FPS = 60;
const INTERVAL = 1000 / FPS;

const {
  Provider: SceneProvider,
  Consumer: SceneConsumer,
} = React.createContext();

export default class GlCanvas extends React.Component {
  static defaultProps = {
    onDraw: () => {},
  };

  state = {
    scene: null,
  };

  stats = new Stats();
  canvasRef = React.createRef();

  componentDidMount() {
    const { showStats } = this.props;

    const gl = this.canvasRef.current.getContext("webgl2");

    this.stats.showPanel(0);
    this.stats.dom.style.display = !!showStats ? "block" : "none";
    document.body.appendChild(this.stats.dom);

    const scene = new Scene(gl);
    const camera = new Camera(scene);
    scene.setCamera(camera);

    scene.registerDrawCall(this.handleDraw);

    this.setState({ scene, camera }, () => {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("orientationchange", this.handleResize);

      this.lastFrameTimestamp = 0;
      this.animationRequestId = requestAnimationFrame(this.handleFrame);
    });
  }

  componentWillUnmount() {
    const { scene } = this.state;

    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("orientationchange", this.handleResize);
    cancelAnimationFrame(this.animationRequestId);
    clearTimeout(this.frameTimeout);

    scene.unregisterDrawCall(scene.camera.draw);
    scene.unregisterDrawCall(this.handleDraw);
    scene.destroy();

    document.body.removeChild(this.stats.dom);
  }

  componentDidUpdate() {
    const { showStats } = this.props;
    this.stats.dom.style.display = !!showStats ? "block" : "none";
  }

  handleResize = () => {
    const { scene } = this.state;
    scene.setSize(window.innerWidth, window.innerHeight);
  };

  handleFrame = now => {
    if (this.lastFrameTimestamp) {
      const { scene } = this.state;

      const deltaTime = now - this.lastFrameTimestamp;

      this.stats.begin();
      scene.draw(deltaTime);
      this.stats.end();
    }

    this.lastFrameTimestamp = now;

    const frameTime = performance.now() - now;
    this.frameTimeout = setTimeout(() => {
      requestAnimationFrame(this.handleFrame);
    }, Math.max(INTERVAL - frameTime, 0));
  };

  handleDraw = deltaTime => {
    const { onDraw } = this.props;
    const { scene, camera } = this.state;

    onDraw(deltaTime, scene);
    camera.update();
  };

  render() {
    const { scene } = this.state;

    return (
      <React.Fragment>
        {scene && (
          <SceneProvider value={scene}>{this.props.children}</SceneProvider>
        )}

        <canvas
          ref={this.canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
        />
      </React.Fragment>
    );
  }
}

/**
 * Canvas HoC
 */

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

export function withScene(Component) {
  function WithScene(props, ref) {
    return (
      <SceneConsumer>
        {scene => <Component scene={scene} ref={ref} {...props} />}
      </SceneConsumer>
    );
  }
  WithScene.displayName = `withScene(${getDisplayName(Component)})`;

  return hoistNonReactStatic(React.forwardRef(WithScene), Component);
}
