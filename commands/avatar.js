const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Show User Avatar!',
  usage: `avatar <@user>`,
  async execute(message, args, client) {
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
    message.channel.send( new Discord.MessageEmbed()
    .setColor('WHITE')
    .setAuthor(user.username,user.avatarURL())
    .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
    .setImage(user.avatarURL(
    {dynamic : true,
    format : 'png',
    size : 1024})))
  }
}