import React from "react";
import styled from "styled-components";

import { compose, clamp } from "modules/utils";
import { withSocket, withDataChannel } from "modules/net";

import KeyboardController from "./KeyboardController";
import TouchController from "./TouchController";

const INTERVAL = 1000 / 60;

const Canvas = styled.canvas`
  position: absolute;
  top: 5vw;
  left: 5vw;
  width: 90vw;
  height: calc(100vh - 10vw);
  pointer-events: none;
`;

class Game extends React.Component {
  state = {
    inputs: {
      vel: { x: 0, y: 0 },
      jump: false,
    },
  };

  canvasRef = React.createRef();

  updateInterval = null;
  animationRequestId = null;
  lastFrameTimestamp = 0;
  spriteImage = null;

  gameState = { players: [] };
  packets = [];
  lastPacketId = 0;

  componentDidMount() {
    const { socket, dataChannel, master } = this.props;

    socket.emit("game:join", !master, playerId => {
      this.playerId = playerId;
    });

    this.inputInterval = setInterval(() => {
      const { inputs } = this.state;

      const packet = {
        packetId: ++this.lastPacketId,
        inputs,
      };

      dataChannel.emit("player:update", packet);

      this.packets.push({ ...packet, timestamp: performance.now() });
    }, 1000 / 20);

    dataChannel.on("game:update", ({ lastPacketId, gameState }) => {
      const packetIndex = this.packets.findIndex(
        p => p.packetId === lastPacketId
      );
      if (packetIndex > 0) this.packets.splice(0, packetIndex);

      this.gameState = gameState;
    });

    this.animationRequestId = requestAnimationFrame(this.handleFrame);

    const image = new Image();
    image.onload = () => {
      this.spriteImage = image;
    };
    image.crossOrigin = "Anonymous";
    image.src = require("./players.png");
  }

  componentWillUnmount() {
    clearInterval(this.inputInterval);
    cancelAnimationFrame(this.animationRequestId);
  }

  handleFrame = now => {
    if (this.lastFrameTimestamp) {
      const deltaTime = now - this.lastFrameTimestamp;
      this.draw(deltaTime);
    }

    this.lastFrameTimestamp = now;

    const frameTime = performance.now() - now;
    this.frameTimeout = setTimeout(() => {
      requestAnimationFrame(this.handleFrame);
    }, Math.max(INTERVAL - frameTime, 0));
  };

  static runSimulation(deltaTime, gameState) {
    const PLAYER_MAX_SPEED = 0.0003;
    return {
      ...gameState,
      players: gameState.players.map(player => {
        const gravity = -10 * deltaTime;
        player.vel.y = player.vel.y + gravity / 1000;

        const newPos = {
          x: player.vel.x * PLAYER_MAX_SPEED * deltaTime + player.pos.x,
          y: player.vel.y * PLAYER_MAX_SPEED * deltaTime + player.pos.y,
        };

        newPos.x = clamp(0, 1, newPos.x);
        newPos.y = clamp(0, 1, newPos.y);

        return { ...player, pos: newPos };
      }),
    };
  }

  static copyGameState(gameState) {
    return {
      ...gameState,
      players: gameState.players.map(player => ({
        ...player,
        pos: { ...player.pos },
        vel: { ...player.vel },
      })),
    };
  }

  getPredictedGameState(deltaTime) {
    let prediction = Game.copyGameState(this.gameState);

    const updatePlayerInputs = (player, inputs) => {
      const { vel, jump } = inputs;

      const hypot = Math.hypot(vel.x, vel.y);
      player.vel.x = hypot < 1 ? vel.x : vel.x / hypot;

      if (jump && player.pos.y === 0) {
        player.vel.y = 4;
      }
    };

    this.packets.forEach((packet, idx) => {
      if (idx === 0) return;
      const prevPacket = this.packets[idx - 1];

      const dt = packet.timestamp - prevPacket.timestamp;

      prediction.players.forEach(player => {
        if (player.id !== this.playerId) return;
        updatePlayerInputs(player, packet.inputs);
      });

      prediction = Game.runSimulation(dt, prediction);
    });

    if (this.packets.length) {
      const dt =
        performance.now() - this.packets[this.packets.length - 1].timestamp;

      prediction.players.forEach(player => {
        if (player.id !== this.playerId) return;
        updatePlayerInputs(player, this.state.inputs);
      });

      prediction = Game.runSimulation(dt, prediction);
    }

    return prediction;
  }

  draw = deltaTime => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");

    const size = {
      width: Math.round(window.innerWidth * 0.9),
      height: Math.round(window.innerHeight - window.innerWidth * 0.1),
    };

    Object.assign(canvas, size);
    ctx.clearRect(0, 0, size.width, size.height);
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    const playerSize = 48; //size.width / 40;

    const prediction = this.getPredictedGameState(deltaTime);
    // const prediction = this.gameState;
    prediction.players.forEach(player => {
      if (!this.spriteImage) return;
      if (player.skin < 0) return;

      ctx.save();

      ctx.translate(
        Math.round(player.pos.x * (size.width - playerSize) + playerSize / 2),
        Math.round((1 - player.pos.y) * (size.height - playerSize * 2))
      );
      if (player.vel.x) ctx.scale(Math.sign(player.vel.x), 1);

      ctx.drawImage(
        this.spriteImage,
        player.skin * 16,
        0,
        16,
        32,
        -playerSize / 2,
        0,
        playerSize,
        playerSize * 2
      );
      ctx.restore();
    });
  };

  handleInputChange = inputs => {
    this.setState({ inputs });
  };

  render() {
    const { inputs } = this.state;

    return (
      <React.Fragment>
        <KeyboardController
          onInputChange={this.handleInputChange}
          inputs={inputs}
        />
        <TouchController
          onInputChange={this.handleInputChange}
          inputs={inputs}
          style={{ zIndex: 10 }}
        />

        <Canvas innerRef={this.canvasRef} />
      </React.Fragment>
    );
  }
}

export default compose(
  withSocket,
  withDataChannel
)(Game);
