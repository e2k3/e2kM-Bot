const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : e2k`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : e2k ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`e2kM`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});





client.on("message", message => {
      if (message.content === "+ping") {
        const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
    .setTitle('**Pong ! **')
  .addField('**`بنق البوت`**' , `${Date.now() - message.createdTimestamp}` + ' `ms`')
  message.channel.sendEmbed(embed);
    }
});







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
