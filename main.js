const Discord=require('discord.js');

const client=new Discord.Client();

const prefix='-',

client.on('message', message =>{
      if(!message.content.startWith(prefix) || message.athor.bot)
}); 