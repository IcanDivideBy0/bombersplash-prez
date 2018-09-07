import React from "react";
import styled from "styled-components";

import Stick from "./Stick";

const TouchControllerStick = styled(Stick)`
  display: none;
  position: fixed;
  bottom: 2vw;
  left: 2vw;
  z-index: 1000;

  @media (hover: none) {
    display: block;
  }
`;

const JumpButton = styled.button`
  display: none;
  position: absolute;
  bottom: 7vw;
  right: 7vw;
  width: 10vw;
  height: 10vw;

  @media (hover: none) {
    display: block;
  }
`;

export default class TouchController extends React.PureComponent {
  handleInputVelChange = vel => {
    const { inputs, onInputChange } = this.props;
    onInputChange({ ...inputs, vel });
  };

  handleJumpTouch = pressed => {
    const { inputs, onInputChange } = this.props;
    onInputChange({ ...inputs, jump: pressed });
  };

  render() {
    const { inputs, ...props } = this.props;

    return (
      <React.Fragment>
        <TouchControllerStick
          value={inputs.vel}
          onChange={this.handleInputVelChange}
          {...props}
        />
        <JumpButton
          onTouchStart={() => this.handleJumpTouch(true)}
          onTouchEnd={() => this.handleJumpTouch(false)}
        />
      </React.Fragment>
    );
  }
}
