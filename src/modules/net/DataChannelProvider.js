import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";

import DataChannel from "./DataChannel";
import { withSocket } from "./SocketProvider";

const { Provider, Consumer } = React.createContext();

/**
 * Provider
 */

class _DataChannelProvider extends React.Component {
  state = { dataChannel: null };

  componentDidMount() {
    const { socket, protoUrl } = this.props;
    const dataChannel = new DataChannel(socket, protoUrl);

    dataChannel.init().then(() => {
      this.setState({ dataChannel });
    });
  }

  render() {
    const { socket, protoUrl, ...props } = this.props;
    const { dataChannel } = this.state;

    return dataChannel && <Provider value={dataChannel} {...props} />;
  }
}

export const DataChannelProvider = withSocket(_DataChannelProvider);

/**
 * Consumer
 */

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

export function withDataChannel(Component) {
  function WithDataChannel(props, ref) {
    return (
      <Consumer>
        {dataChannel => (
          <Component dataChannel={dataChannel} ref={ref} {...props} />
        )}
      </Consumer>
    );
  }
  WithDataChannel.displayName = `withDataChannel(${getDisplayName(Component)})`;

  return hoistNonReactStatic(React.forwardRef(WithDataChannel), Component);
}
