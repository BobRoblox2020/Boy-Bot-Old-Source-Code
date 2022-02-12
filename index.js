const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

client.commands = new Discord.Collection
const constant = require('./node_modules/discord.js/src/util/Constants.js')
constant.DefaultOptions.ws.properties.$browser = `Discord iOS`

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))

for(const file of eventFiles) {
  const event = require(`./events/${file}`)
  if(event.once) {
    client.once(event.name, (...args) => event.execute(...args, client))
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

const command_file = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))



for(file of command_file) {
  const command = require(`./commands/${file}`)
  const command_name = file.split('.')[0];
  if(command.name) {
    console.log(`- ${command_name} Loaded!✅`)
    client.commands.set(command.name, command)
  }else{
    continue
  }
}

client.on('message', message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    const embed = new Discord.MessageEmbed()
        .setTitle(`Hello!`)
        .setDescription(`Hey **${message.author.username},** You Need Some Help? Look Down!

        Bot Prefix: $
        Invite Link: [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
        Support Server: [Click Here](Your Server link)

        To See All Commands,  Type "$help"
        `)
        .setColor("WHITE")

    return message.channel.send(embed);
  }
})

require('./server')();

client.login(process.env.TOKEN)