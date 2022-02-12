module.exports = {
  name: 'say',
  description: 'Repeat What You Say!',
  usage: `say [words]`,
  async execute(message, args, client) {
  const content = args.join(" ")
  if(!content) return message.reply('Please Type Something To Let Me Repeat!')
  message.channel.send(content)
  }
}