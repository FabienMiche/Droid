const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix

module.exports.run = async(bot, message, args) => {
  if(args[0] == "help") return message.channel.send(`Essayez plutôt ${prefix}help, ça sera mieux je pense :).`)

  if(args[0]) {
    let command = args[0]
    if(bot.commands.has(command)){
      command = bot.commands.get(command);
      var SHembed = new Discord.RichEmbed()
      .setColor(colours.light_blue)
      .setAuthor(`TestBOT HELP `, message.guild.iconURL)
      .setDescription(`Le préfix du bot est : ${prefix}\n\n**Commande:** ${command.config.name}\n**Description:** ${command.config.description || "Aucune description"} \n**Utilisation:** ${command.config.usage || "Aucune utilisation"}\n**Accessible par :** ${command.config.accesableby || "Membres"}\n**Alias :** ${command.config.noalias || command.config.aliases}`)
      message.channel.send(SHembed);
    }
  }

  if(!args[0]){
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`Help command ! `, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(colours.light_red)
    .setDescription(`${message.author.username} regarde tes MP !`)

    let Sembed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setAuthor(`TestBOT help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Commandes disponibles pour le BOT !\n Le préfix du bot est : ${prefix }`)
    .addField(`Commandes :`, "``cat`` ``dog`` ``meme`` ``help`` ``serverinfo`` ``userinfo``")
    .setFooter("Droid v0.1", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed)
  }
}


module.exports.config = {
  name : "help",
  aliases : ["h"],
  usage : "!usage",
  description : "",
  noalias : "Aucun alias",
  accesableby : "Membres"
}
