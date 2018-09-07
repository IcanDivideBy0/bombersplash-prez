const protobuf = require("protobufjs");

export default class Message {
  constructor(protoUrl) {
    this.messagePromise = fetch(protoUrl)
      .then(response => response.text())
      .then(proto => protobuf.parse(proto))
      .then(({ root }) => root.lookupType("prez.Message"));
  }

  async encode(messageType, data) {
    const message = await this.messagePromise;

    const dataKey = {
      "player:update": "playerUpdate",
      "game:update": "gameUpdate",
    }[messageType];

    return message
      .encode(
        message.fromObject({
          type: messageType,
          [dataKey]: data,
        })
      )
      .finish();
  }

  async decode(buffer) {
    const message = await this.messagePromise;

    const msg = message.toObject(message.decode(buffer), {
      longs: Number,
      enums: String,
      oneofs: true,
    });

    return {
      type: msg.type,
      data: msg[msg.data],
    };
  }
}
