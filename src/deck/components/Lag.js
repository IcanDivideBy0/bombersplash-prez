import React from "react";
import styled, { keyframes } from "styled-components";

const Button = styled.button`
  font-size: 32px;
  color: #fff;
  background: transparent;
  border: 0.1em solid rgb(170, 51, 51);
  transition: color: .2s linear;
  cursor: pointer;

  &:hover {
    color: rgb(170, 51, 51);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const GraphicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const Code = styled.pre`
  font-size: 80%;
  color: rgb(248, 248, 242);
  background: rgb(39, 40, 34);
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  line-height: 1.5;
  padding: 0.2em;
  margin: 0.2em 0px;
  border-radius: 0.3em;
  font-size: 60%;
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

const packetOut = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  99% {
    transform: translateX(400px);
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
`;

const packetIn = keyframes`
  from {
    transform: translateX(400px);
  }
  to {
    transform: translateX(0px);
  }
`;

const AnimOut = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;

  svg {
    width: 100%;
    transform: translate(-50%, -50%);

    .packetOut {
      animation: ${packetOut} 5s linear forwards;
      animation-iteration-count: 1;
    }
    .packetIn {
      animation: ${packetIn} 5s linear forwards;
      animation-iteration-count: 1;
    }
  }
`;

export default class Lag extends React.Component {
  state = {
    playing: false,
    clientPackets: [],
    serverPackets: [],
    serverLastReceivedPacketId: 0,
  };

  lastClientPacketId = 0;
  lastServerPacketId = 0;

  componentDidMount() {
    this.handlePlay();
  }

  componentWillUnmount() {
    clearInterval(this.serverSendInterval);
    clearInterval(this.clientSendInterval);
  }

  handlePlay = () => {
    this.serverSendInterval = setInterval(this.serverSend, 2000);
    this.clientSendInterval = setInterval(this.clientSend, 1000);

    this.setState({ playing: true });
  };

  clientSend = () => {
    const packetId = ++this.lastClientPacketId;

    this.setState({
      clientPackets: [...this.state.clientPackets, { id: packetId }],
    });

    setTimeout(() => {
      this.setState({
        // clientPackets: this.state.clientPackets.filter(p => p.id !== packetId),
        serverLastReceivedPacketId: packetId,
      });
    }, 5000);
  };

  serverSend = () => {
    const packetId = ++this.lastServerPacketId;
    const ackId = this.state.serverLastReceivedPacketId;

    this.setState({
      serverPackets: [...this.state.serverPackets, { id: packetId, ackId }],
    });

    setTimeout(() => {
      this.setState({
        serverPackets: this.state.serverPackets.filter(p => p.id !== packetId),
        clientPackets: this.state.clientPackets.filter(
          p => p.id > (ackId === 0 ? 0 : ackId + 1)
        ),
      });
    }, 5000);
  };

  render() {
    const { ...props } = this.props;

    if (!this.state.playing)
      return <Button onClick={this.handlePlay}>Play</Button>;

    return (
      <Wrapper {...props}>
        <div
          style={{
            height: "calc(1.6em * 10 + .4em)",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            position: "relative",
            borderRight: ".1em solid #fff",
            paddingRight: ".2em",
            marginTop: "calc(-1.6em * 3 + .4em)",
          }}
        >
          {this.state.clientPackets.map(p => (
            <Code key={p.id}>
              {`{ id: `}
              <span style={{ color: "red" }}>{p.id}</span>
              {`, inputs }`}
            </Code>
          ))}

          <div
            style={{
              position: "absolute",
              left: "100%",
              bottom: "-.5em",
              width: "200%",
              textAlign: "left",
              paddingLeft: "1em",
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "inline-block",
                border: ".5em solid transparent",
                borderLeftColor: "#fff",
                bottom: 0,
                left: 0,
              }}
            />
            Apply to remote world state
          </div>
        </div>

        <GraphicWrapper>
          <Image>
            <img
              style={{ transform: "translateX(-25%)" }}
              src={require("./images/laptop.svg")}
              alt=""
            />
          </Image>
          <AnimOut>
            <svg viewBox="0 0 400 200">
              <g>
                <path
                  d="M0 70 H 400"
                  fill="transparent"
                  stroke="#aa6622"
                  strokeWidth="5"
                />
                <g className="packetsOut">
                  {this.state.clientPackets.map(p => (
                    <g key={p.id} className="packetOut">
                      <circle
                        cx="0"
                        cy="70"
                        r="20"
                        fill="#dbc244"
                        stroke="#aa6622"
                        strokeWidth="5"
                      />
                      <text
                        x="0"
                        y="70"
                        fontSize="20"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="#000"
                      >
                        {p.id}
                      </text>
                    </g>
                  ))}
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
                  {this.state.serverPackets.map(p => (
                    <g key={p.id} className="packetIn">
                      <circle
                        cx="0"
                        cy="130"
                        r="20"
                        fill="#5ba3c7"
                        stroke="#245269"
                        strokeWidth="5"
                      />
                      <text
                        x="0"
                        y="120"
                        fontSize="10"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="#000"
                      >
                        ACK
                      </text>
                      <text
                        x="0"
                        y="135"
                        fontSize="20"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="#000"
                      >
                        {p.ackId === 0 ? 0 : p.ackId + 1}
                      </text>
                    </g>
                  ))}
                </g>
              </g>
            </svg>
          </AnimOut>
          <Image>
            <img
              style={{ transform: "translateX(25%)" }}
              src={require("./images/server.svg")}
              alt=""
            />
          </Image>
        </GraphicWrapper>
        <div style={{ flex: 1 }}>
          Last received packet ID:
          <br />
          <Code
            style={{
              fontSize: "100%",
              display: "inline-block",
              margin: ".3em",
              padding: ".2em .5em",
            }}
          >
            {this.state.serverLastReceivedPacketId}
          </Code>
        </div>
      </Wrapper>
    );
  }
}
