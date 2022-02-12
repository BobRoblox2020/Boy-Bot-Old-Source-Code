const { MessageEmbed } = require('discord.js')
const { prefix } = require('../config')

module.exports = {
  name: 'help',
  aliases: ['cmds', 'commands'],
  description: 'Help Commands!',
  usage: `help [**commands**]`,
  async execute(message, args, client) {
    message.react('✅')
    if(args[0]) {
      const ctg = client.commands.get(args[0])
      if(!ctg) return message.reply('Invaid!')
      const name = ctg.name
      const desc = ctg.description
      const usag = ctg.usage
      const allies = ctg.aliases

      const ctgEmbed = new MessageEmbed()
      .setTitle(`Name: ${name} \nDescription: ${desc} \nUsage: **${usag}** \nAliases: ${allies}`)
      .setColor('#964B00')
      .setTimestamp()
      message.channel.send(ctgEmbed)
    }else {
      let cmds = client.commands.map(command => command.name)

      const allEmbed = new MessageEmbed()
      .setTitle(`Here Are Bot's Commands: `)
      .setDescription(`**${cmds.join('\n ')}** \n \n **:ping_pong: ${client.ws.ping} ms** \n **:open_file_folder: Currently In ${client.guilds.cache.size} Servers.** \n **:man_pouting: ${client.users.cache.size} Users Is Using Bot!**`)
      .setColor('WHITE')
      .setAuthor('More Info About Commands, Just Type $help {commandname}')
      .setTimestamp();

      message.channel.send(allEmbed)
    }
  }
}