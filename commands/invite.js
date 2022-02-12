const { MessageEmbed } = require('discord.js')
const { bot_id, intents } = require('../config')

module.exports = {
  name: 'invite',
  description: 'Invite Bot!',
  aliases: 'inv',
  usage: `invite`,
  async execute(message, args, client) {
    const inviteEmbed = new MessageEmbed()
    .setColor('WHITE')
    .setTitle('Invite Bot!')
    .setDescription(`**[Invite](https://discord.com/api/oauth2/authorize?client_id=${bot_id}&permissions=${intents}&scope=bot)**`)
    message.reply(inviteEmbed)
  }
}