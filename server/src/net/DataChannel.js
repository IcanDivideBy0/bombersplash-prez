const EventEmitter = require("events");
const Peer = require("simple-peer");
const wrtc = require("wrtc");

const { encodeMessage, decodeMessage } = require("./messages");

// const encodeMessage = (eventName, data) =>
//   JSON.stringify({ type: eventName, data });
// const decodeMessage = message => JSON.parse(message);

class DataChannel extends EventEmitter {
  constructor(socket) {
    super();
    this.connected = false;
    this.socket = socket;
  }

  init() {
    return new Promise(resolve => {
      this.peer = new Peer({
        initiator: true,
        wrtc,
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
        const { type, data } = await decodeMessage(message);
        super.emit(type, data);
      });

      this.peer.on("close", () => {
        this.connected = false;
        super.emit("close");
      });

      this.peer.on("error", error => {
        console.error(error);
      });
    });
  }

  destroy() {
    if (this.peer) this.peer.destroy();
    this.connected = false;
  }

  async emit(eventName, data) {
    const message = await encodeMessage(eventName, data);
    if (!this.connected || !this.peer) return;
    this.peer.send(message);
  }
}

module.exports = DataChannel;
