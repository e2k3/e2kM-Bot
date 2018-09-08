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


    client.on('message' , message => {
    if (message.content === '+help') {
             let embed = new Discord.RichEmbed()

          .setThumbnail(message.author.avatarURL)
          .addField("**🌐 الأوامر العامه**","** **")
          .addField("**+Soon**","**عرض صورتك الشخصية**")
          .addField("**+Soon**","**عرض جميع معلومات السيرفر**")
           .addField("**+Soon**","**عرض معلومات عنك**")
       .addField("**+help**","**ارسال هذه الأوامر للعضو في الخاص**")
       .addField("**+ping**","** عرض سرعة اتصال البوت**")
    .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });
    client.on('message', message => {
                if (message.content.startsWith("!help")) {
         let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
    .setColor('#B101FC')
      message.channel.sendEmbed(embed);
        }
    });





var ss = 0;

client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("487511545002328079").edit({
            name : "Voice Online : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("487511545002328079").edit({
            name : "Voice Online : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("487511545002328079").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("487511545002328079").edit({
            name : "Voice Online : [" + ss+ "]"
        })
    });
    client.user.setGame("HerpoPlex Community©", "https://twitch.tv/©%22);
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
