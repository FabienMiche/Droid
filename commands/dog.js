const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async(bot, message, args) => {
  let msg = await message.channel.send("Generating...")

  let{body} = await superagent
  .get(`https://dog.ceo/api/breeds/image/random`)
  if(!{body}) return message.channel.send("I broke ! Oops my bad ! Try again.")
    let dEmbed = new Discord.RichEmbed()
    .setColor(colours.dark_red)
    .setAuthor(`Droid DOGS !`, message.guild.iconURL)
    .setImage(body.message)
    .setTimestamp()
    .setFooter(`Droid | Créé par Fabien`, bot.user.displayAvatarURL);

    message.channel.send({embed: dEmbed});

    msg.delete();
}


module.exports.config = {
  name : "dog",
  aliases : []
}
