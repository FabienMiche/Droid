const Discord = require("discord.js");          // Extract the required classes from the discord.js module
const botconfig = require("./botconfig.json");  // Load the configuration of the bot : token and prefix

// Create an instance of a Discord client
const bot = new Discord.Client({disableEveryone: true});


//Initialisation
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on("ready", async () => {
  console.log(`${bot.user.username} : I'm ready to serve !`); //Message in the console to confirm the bot is ready
  bot.user.setActivity("Hello", {type : "STREAMING"});        //Choose the activity of the bot
})


//Gestionnaire de commandes / Commands handler
//Spécification du dossier de commandes / Specify the commands folder
//Cela évite d'écrire toute les commandes dans ce fichier / Instead of write everything in this file

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't find commands");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name)
    });
  });
});



bot.on("message", async message =>{
  if(message.author.bot || message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if(!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot, message, args)
});


//************** Message du bot **************

bot.on('message', message =>{
  if(message.content === 'Hola' || message.content === 'hola'){
    message.channel.send("¿Dónde ésta la biblioteca?");
  }
});

bot.on('message', message =>{
  if(message.content === 'Bonjour' || message.content === 'bonjour'){
    message.channel.send("Bonjour !");
  }
});

bot.on('message', message =>{
  if(message.content === 'Bonsoir' || message.content === 'bonsoir'){
    message.channel.send("Bonsoir !");
  }
});

bot.login(botconfig.token);
