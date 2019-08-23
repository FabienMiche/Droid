const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
  let uEmbed = new Discord.RichEmbed()
    .setColor(colours.medium_red)
    .setTitle("Information de l'utilisateur")
    .setThumbnail(message.author.displayAvatarURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Nom d'utilisateur:**", `${message.author.username}`, true)
    .addField("**Tag:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Créé le:**", `${message.author.createdAt}`, true)
    .setFooter(`Droid | Créé par Fabien`, bot.user.displayAvatarURL);
  message.channel.send({ embed: uEmbed });
}


module.exports.config = {
  name: "userinfo",
  aliases: ["user"]
}
