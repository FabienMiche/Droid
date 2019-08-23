const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    message.channel.send("Veuillez entrer un argument !");
  }
  if (args[0] == 6) {
    var alea = Math.floor(Math.random() * 6) + 1;
    message.channel.send(alea);
  } else if (args[0] == 10) {
    var alea = Math.floor(Math.random() * 10) + 1;
    message.channel.send(alea);
  }
}


module.exports.config = {
  name: "dice",
  aliases: [""]
}
