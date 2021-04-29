const Discord = require('discord.js');

module.exports = {
    name: "ping",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle(`핑 / Ping`)
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);

        
        message.channel.send(embed); 
    }
}