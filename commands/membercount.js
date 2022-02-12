const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'membercount',
  description: 'Count Members In Your Server',
  usage: `membercount`,
  async execute(message, args, client) {
    const { guild } = message   
    const memberCount = guild.memberCount

    const memberCountEmbed =  new MessageEmbed()
    .setTitle('Members Count:')
    .setDescription(memberCount)
    .setColor('WHITE');
    message.channel.send(memberCountEmbed)
  }
}