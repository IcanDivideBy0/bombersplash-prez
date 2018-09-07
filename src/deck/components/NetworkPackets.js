import React from "react";
import styled, { keyframes } from "styled-components";
import classnames from "classnames";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const Image = styled.div`
  z-index: 10;
  flex: 1;
  text-align: center;

  img {
    width: 40%;
    height: 40%;
  }
`;

const packetsOut = keyframes`
  from {
    transform: translate(-80px, 20px);
  }
  to {
    transform: translate(0px, 20px);
  }
`;

const packetsIn = keyframes`
  from {
    transform: translate(0px, 80px);
  }
  to {
    transform: translate(-80px, 80px);
  }
`;

const Anim = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;

  svg {
    width: 100%;
    transform: translate(-50%, -50%);

    .packetsOut {
      animation: ${packetsOut} 1s linear infinite;
    }
    .packetsIn {
      animation: ${packetsIn} 1s linear infinite;
    }
  }
`;

export default class NetworkPackets extends React.Component {
  render() {
    const { outLabel, inLabel, symetrical, ...props } = this.props;
    const baseRatioOut = 40;
    const baseRatioIn = baseRatioOut * (symetrical ? 1 : 2);

    return (
      <Wrapper {...props}>
        <Image>
          <img src={require("./images/laptop.svg")} alt="" />
        </Image>
        <Anim className={classnames({ symetrical })}>
          <svg viewBox="0 0 400 200">
            <g>
              {outLabel && (
                <text
                  x="200"
                  y="40"
                  fontSize="40"
                  textAnchor="middle"
                  fill="#fff"
                >
                  {outLabel}
                </text>
              )}

              <path
                d="M0 70 H 400"
                fill="transparent"
                stroke="#aa6622"
                strokeWidth="5"
              />
              <g className="packetsOut">
                {Array.from({ length: 12 }, (_, idx) => idx * baseRatioOut).map(
                  v => (
                    <circle
                      key={v}
                      cx={v}
                      cy="50"
                      r="10"
                      fill="#dbc244"
                      stroke="#aa6622"
                      strokeWidth="5"
                    />
                  )
                )}
              </g>
            </g>

            <g>
              <path
                d="M0 130 H 400"
                fill="transparent"
                stroke="#245269"
                strokeWidth="5"
              />
              <g className="packetsIn">
                {Array.from(
                  { length: symetrical ? 12 : 6 },
                  (_, idx) => idx * baseRatioIn
                ).map(v => (
                  <circle
                    key={v}
                    cx={v}
                    cy="50"
                    r="10"
                    fill="#5ba3c7"
                    stroke="#245269"
                    strokeWidth="5"
                  />
                ))}
              </g>
              {inLabel && (
                <text
                  x="200"
                  y="180"
                  fontSize="40"
                  textAnchor="middle"
                  fill="#fff"
                >
                  {inLabel}
                </text>
              )}
            </g>
          </svg>
        </Anim>
        <Image>
          <img src={require("./images/server.svg")} alt="" />
        </Image>
      </Wrapper>
    );
  }
}
