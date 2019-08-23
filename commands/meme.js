const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...")

  let { body } = await superagent
    .get(`https://apis.duncte123.me/meme`)
  if (!{ body }) return message.channel.send("I broke ! Oops my bad ! Try again.")
  console.log(data.image)
  let mEmbed = new Discord.RichEmbed()
    .setColor(colours.dark_red)
    .setAuthor(`Droid MEMES !`, message.guild.iconURL)
    .setImage(body.url)
    .setTimestamp()
    .setFooter(`Droid | Créé par Fabien`, bot.user.displayAvatarURL);

  message.channel.send({ embed: mEmbed });

  msg.delete();
}

module.exports.config = {
  name: "meme",
  aliases: []
}
