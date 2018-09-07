const EventEmitter = require("events");

const Player = require("./Player");

function clamp(min, max, value) {
  return Math.min(max, Math.max(min, value));
}

class Game extends EventEmitter {
  constructor(map) {
    super();
    this.players = [];

    this.lastLoopTimestamp = Date.now();
    this.gameLoopInterval = setInterval(() => this.run(), 1000 / 60);
  }

  destroy() {
    clearInterval(this.gameLoopInterval);
  }

  addPlayer(player) {
    this.players.push(player);
  }

  removePlayer(player) {
    const index = this.players.findIndex(p => p.id === player.id);
    if (~index) this.players.splice(index, 1);
  }

  run() {
    const now = Date.now();
    const deltaTime = now - this.lastLoopTimestamp;

    this.players.forEach(player => {
      const gravity = -10 * deltaTime;
      player.vel.y = player.vel.y + gravity / 1000;

      const newPos = {
        x: player.vel.x * Player.MAX_SPEED * deltaTime + player.pos.x,
        y: player.vel.y * Player.MAX_SPEED * deltaTime + player.pos.y,
      };

      newPos.x = clamp(0, 1, newPos.x);
      newPos.y = clamp(0, 1, newPos.y);

      player.setPos(newPos);
    });

    this.lastLoopTimestamp = now;
  }

  serialize() {
    return {
      players: this.players.map(player => player.serialize()),
    };
  }
}

module.exports = Game;
