const Discord = require('discord.js');

module.exports = {
    name: "prcheck",

    async run (client, message, args) { 
        
        if(Discord.GuildMember.hasPermisson)
        message.channel.send('해당 멤버는 킥을 할 수 있습니다.'); 
    }
}
