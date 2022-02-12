const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'serverinfo',
  description: 'Check Server Info!',
  usage: `serverinfo`,
  async execute(message, args, client) {
    let embed = new MessageEmbed()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(client.user.avatarURL())
    .setColor('WHITE')
    .setFooter(`Requested | ${message.author.tag}`, message.author.avatarURL())
    .addField('> :star: ID Server :', `${message.guild.id}`)
    .addField('> :crown: Owner Server :', `${message.guild.owner}`)
    .addField('> :calendar: Created : ', `${message.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${message.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${message.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${message.guild.region}`)
    .setTimestamp()
 message.channel.send(embed)
  }
}