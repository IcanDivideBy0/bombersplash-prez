import React from "react";

import { withSocket, DataChannelProvider } from "modules/net";
import { Game } from "modules/game";

import Slides from "./Slides";

class PrezSlave extends React.Component {
  slidesRef = React.createRef();

  componentDidMount() {
    const { socket } = this.props;
    socket.on("prez:slideUpdate", this.handleSlideUpdate);
  }

  handleSlideUpdate = (index, step) => {
    this.slidesRef.current.updateSlidesIndex(index, step || 0);
  };

  render() {
    return (
      <React.Fragment>
        <Slides ref={this.slidesRef} />

        <DataChannelProvider
          protoUrl={`${process.env.REACT_APP_SERVER_URL}/messages.proto`}
        >
          <Game />
        </DataChannelProvider>
      </React.Fragment>
    );
  }
}

export default withSocket(PrezSlave);
