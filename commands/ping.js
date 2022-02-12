const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'Pong!',
  usage: `ping`,
  async execute(message, args, client) {
    message.reply('Pong!').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      const embed = new MessageEmbed()
      .setColor('WHITE')
      .setTitle('Result')
      .setDescription(`Bot Latency: ${ping} \n API Latency: ${client.ws.ping}`)

      resultMessage.delete()
      message.reply('Pong!', embed)
    })
  }
}