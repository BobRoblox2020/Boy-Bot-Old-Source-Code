const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'support',
  description: 'Support Us!',
  usage: `support`,
  async execute(message, args, client) {
    const supportEmbed = new MessageEmbed()
    .setColor('WHITE')
    .setTitle('Support Us!')
    .setDescription('**[Discord](Your Server Invite)**')
    message.reply(supportEmbed)
  }
}