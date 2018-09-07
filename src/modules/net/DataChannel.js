import Peer from "simple-peer";

import { EventEmitter } from "modules/utils";
import Message from "./messages";

// const encodeMessage = (eventName, data) =>
//   JSON.stringify({ type: eventName, data });
// const decodeMessage = message => JSON.parse(message);

export default class DataChannel extends EventEmitter {
  constructor(socket, protoUrl) {
    super();
    this.connected = false;
    this.socket = socket;
    this.message = new Message(protoUrl);
  }

  init() {
    return new Promise(resolve => {
      this.peer = new Peer({
        initiator: false,
        channelConfig: {
          ordered: false,
          maxRetransmits: 0,
        },
      });

      this.peer.on("signal", data => {
        this.socket.emit("webrtc:signal", data);
      });

      this.signalHandler = data => this.peer.signal(data);
      this.socket.on("webrtc:signal", this.signalHandler);

      this.peer.on("connect", () => {
        this.connected = true;
        resolve();
      });

      this.peer.on("data", async message => {
        const { type, data } = await this.message.decode(message);
        super.emit(type, data);
      });

      this.peer.on("close", () => {
        this.connected = false;
        super.emit("close");
      });

      this.socket.emit("webrtc:create");
    });
  }

  destroy() {
    this.socket.removeListener("webrtc:signal", this.signalHandler);

    this.peer.destroy();
    this.connected = false;
  }

  async emit(eventName, data) {
    const message = await this.message.encode(eventName, data);
    if (!this.connected || !this.peer) return;
    this.peer.send(message);
  }
}
