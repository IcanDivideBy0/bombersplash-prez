require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const myIp = require("my-ip");
const chalk = require("chalk");
const cors = require("cors");
const bodyParser = require("body-parser");

const DataChannel = require("./net/DataChannel");
const Game = require("./classes/Game");
const Player = require("./classes/Player");

/**
 * Expose application.
 */

app.enable("trust proxy");
app.use(cors());

app.use(
  express.static(path.resolve(__dirname, "..", "public"), {
    extensions: ["html", "json"],
  })
);

app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello world!"));

/**
 *
 */

const game = new Game();

setInterval(() => {
  const serializedGame = game.serialize();

  game.players.forEach(player => {
    player.dataChannel.emit("game:update", {
      lastPacketId: player.lastPacketId,
      gameState: serializedGame,
    });
  });
}, 1000 / 20);

io.on("connection", socket => {
  const dataChannel = new DataChannel(socket);
  const player = new Player(dataChannel);

  socket.on("webrtc:create", async () => {
    await dataChannel.init();
  });

  socket.on("game:join", (isVisible, cb) => {
    player.setVisibility(isVisible);
    game.addPlayer(player);
    cb(player.id);
  });

  socket.on("prez:slideUpdate", (index, step) => {
    socket.broadcast.emit("prez:slideUpdate", index, step);
  });

  socket.once("disconnect", () => {
    player.destroy();
    dataChannel.destroy();

    game.removePlayer(player);
  });
});

/**
 * Start server
 */

const port = process.env.PORT || 3333;
http.listen(port, () => {
  console.log(chalk.rgb(10, 100, 200)(`Web server started:`));
  console.log(chalk`{bold Local:}            http://localhost:{bold ${port}}`);
  console.log(chalk`{bold On Your Network:}  http://${myIp()}:{bold ${port}}`);
});
