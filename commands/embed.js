const Discord = require('discord.js');

module.exports = {
    name: "embed", 

    async run (client, message, args) { 

        const embed = new Discord.MessageEmbed()
        .setTitle(`Title`)
        .setDescription(`Description`);


        
        message.channel.send(ping); 
    }
}