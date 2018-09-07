const uuidv4 = require("uuid/v4");

const staticProperties = {
  MAX_SPEED: 0.0003,
};

class Player {
  constructor(dataChannel) {
    this.id = uuidv4();
    this.skin = Math.floor(Math.random() * 22);
    this.vel = { x: 0, y: 0 };
    this.pos = { x: 0, y: 0 };

    this.lastPacketId = 0;
    this.dataChannel = dataChannel;

    dataChannel.on("player:update", ({ packetId, inputs }) => {
      if (this.lastPacketId >= packetId) return;

      this.lastPacketId = packetId;
      this.updateInputs(inputs);
    });
  }

  destroy() {}

  updateInputs({ vel, jump }) {
    const hypot = Math.hypot(vel.x, vel.y);
    this.vel.x = hypot < 1 ? vel.x : vel.x / hypot;

    if (jump && this.pos.y === 0) {
      this.vel.y = 4;
    }
  }

  setPos(pos) {
    this.pos = pos;
  }

  setVisibility(isVisible) {
    this.isVisible = isVisible;
  }

  serialize() {
    return {
      id: this.id,
      pos: this.pos,
      vel: this.vel,
      skin: this.isVisible ? this.skin : -1,
    };
  }
}

Object.assign(Player, staticProperties);

module.exports = Player;
