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
                if (message.content.startsWith("+help")) {
         let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
    .setColor('#B101FC')
      message.channel.sendEmbed(embed);
        }
    });



client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+mem')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
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
    client.guilds.get("487511544528109570").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("487511545002328079").edit({
            name : "Voice Online : [" + ss+ "]"
        })
    });
    ;
});



 client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "tic")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(What a loser, playing this game with yourself :joy:)_'
    }
    message.channel.send(`Tic-tac-toe! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_Beldum Beldum_ :anger: \`(Use it like this: ${prefix}tictactoe @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
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
