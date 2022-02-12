const { prefix } = require('../config')

module.exports = {
  name: 'message',
  execute(message, client) {
    if(!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
  
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

     if(command) command.execute(message, args, client)
  }
}