const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async(bot, message, args) => {
  let sEmbed = new Discord.RichEmbed()
  .setColor(colours.light_blue)
  .setTitle("Information du serveur")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
  .addField("**Nom du serveur**", `${message.guild.name}`, true)
  .addField("**Propriétaire**", `${message.guild.owner}`, true)
  .addField("**Membres**", `${message.guild.memberCount}`, true)
  .addField("**Nombre de rôles**", `${message.guild.roles.size}`, true)
  .setFooter(`Droid | Créé par Fabien`, bot.user.displayAvatarURL);
  message.channel.send({embed: sEmbed});
}


module.exports.config = {
  name : "serverinfo",
  aliases : ["si", "serverdesc"]
}
