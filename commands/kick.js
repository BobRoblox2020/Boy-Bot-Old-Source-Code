const Discord = require('discord.js')
const errE = new Discord.MessageEmbed()
.setTitle("You don't have the permissions to use this command!")
.setColor('RED');

module.exports = {
  name: 'kick',
  description: 'Kick A Member.',
  usage: `kick <@user>`,
  async execute(message, args, client) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(errE);
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I cannot ban this user! Do they have a higher role or Do I have kick permissions?')
    
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason was provided";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor('#f02711')
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    if (!args[0]) return message.channel.send('Please mention a valid member of this server');
    if (!mentionedMember) return message.channel.send('User mentioned is not in the server.');
    if (!mentionedMember.kickable) return message.channel.send('I Cannot kick that member. ');
    try {
      await mentionedMember.send(kickEmbed);
      await message.channel.send(`${mentionedMember.user.tag} Is Kicked.`)
    } catch (err) {
      console.log('I was unable to dm the member. ' + err);
      return message.channel.send(``)
    }
    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      return message.channel.send('I was unable to kick the user. ');
    }
    }
}