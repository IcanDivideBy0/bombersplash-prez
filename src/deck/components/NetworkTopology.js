import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  position: relative;
`;

const Image = styled(({ src, alt = "", children, ...props }) => (
  <div {...props}>
    <img src={src} alt={alt} />
    {children}
  </div>
))`
  z-index: 10;
  position: absolute;
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class NetworkTopology extends React.Component {
  render() {
    const { withServer } = this.props;

    return (
      <Wrapper>
        <Image
          src={
            withServer
              ? require("./images/server.svg")
              : require("./images/laptop.svg")
          }
          style={{ top: "20%", left: "50%" }}
        />
        <Image
          src={require("./images/laptop.svg")}
          style={{ top: "50%", left: "10%" }}
        />
        {withServer ? (
          <React.Fragment>
            <Image
              src={require("./images/laptop.svg")}
              style={{ top: "80%", left: "35%" }}
            />
            <Image
              src={require("./images/laptop.svg")}
              style={{ top: "80%", left: "65%" }}
            />
          </React.Fragment>
        ) : (
          <Image
            src={require("./images/laptop.svg")}
            style={{ top: "80%", left: "50%" }}
          />
        )}
        <Image
          src={require("./images/laptop.svg")}
          style={{ top: "50%", left: "90%" }}
        />

        <Svg viewBox="0 0 100 60">
          <path
            d="M10 30 L 50 15"
            fill="transparent"
            stroke="#fff"
            strokeWidth="1"
          />
          {withServer ? (
            <React.Fragment>
              <path
                d="M35 50 L 50 15"
                fill="transparent"
                stroke="#fff"
                strokeWidth="1"
              />
              <path
                d="M65 50 L 50 15"
                fill="transparent"
                stroke="#fff"
                strokeWidth="1"
              />
            </React.Fragment>
          ) : (
            <path
              d="M50 50 L 50 15"
              fill="transparent"
              stroke="#fff"
              strokeWidth="1"
            />
          )}
          <path
            d="M90 30 L 50 15"
            fill="transparent"
            stroke="#fff"
            strokeWidth="1"
          />
        </Svg>
      </Wrapper>
    );
  }
}
