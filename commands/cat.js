const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...")

  let { body } = await superagent
    .get(`http://aws.random.cat/meow`)
  if (!{ body }) return message.channel.send("I broke ! Oops my bad ! Try again.")
  let cEmbed = new Discord.RichEmbed()
    .setColor(colours.dark_red)
    .setAuthor(`Droid CATS !`, message.guild.iconURL)
    .setImage(body.file)
    .setTimestamp()
    .setFooter(`Droid | Créé par Fabien`, bot.user.displayAvatarURL);

  message.channel.send({ embed: cEmbed });

  msg.delete();
}


module.exports.config = {
  name: "cat",
  aliases: []
}
