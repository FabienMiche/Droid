const {Discord, Attachment} = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
  const attachment = new Attachment('./images/facepalm.gif');
  message.channel.send(`${message.author},`, attachment);
}


module.exports.config = {
  name: "facepalm",
  aliases: []
}
