import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import io from "socket.io-client";

const { Provider, Consumer } = React.createContext();

/**
 * Provider
 */

export class SocketProvider extends React.Component {
  state = { socket: null };

  componentDidMount() {
    const { socketUrl } = this.props;
    const socket = io.connect(socketUrl);

    socket.on("connect", () => {
      this.setState({ socket });
    });
  }

  render() {
    const { socketUrl, ...props } = this.props;
    const { socket } = this.state;

    return socket && <Provider value={socket} {...props} />;
  }
}

/**
 * Consumer
 */

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

export function withSocket(Component) {
  function WithSocket(props, ref) {
    return (
      <Consumer>
        {socket => <Component socket={socket} ref={ref} {...props} />}
      </Consumer>
    );
  }
  WithSocket.displayName = `withSocket(${getDisplayName(Component)})`;

  return hoistNonReactStatic(React.forwardRef(WithSocket), Component);
}
