const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'boost',
  description: 'Check Server Boost!',
  usage: `boost`,
  async execute(message, args, client) {
    if(message.author.bot || !message.guild) return message.reply("this command for server only")
 
    
    let level = message.guild.premiumTier === 0 ? "No Level" : `${message.guild.premiumTier}`;
 
    let boost = message.guild.premiumSubscriptionCount;
    
    
    
    let embed = new MessageEmbed()
    .setTitle(`Boost of ${message.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor("#e700ff")
 
 message.channel.send(embed)
  }
}