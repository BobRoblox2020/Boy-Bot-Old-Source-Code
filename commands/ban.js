const { MessageEmbed } = require('discord.js')

module.exports={
	name: 'ban',
	description: 'Ban a member!',
  usage: 'ban [user]',
	async execute(message, args, client, eC){
		let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("BAN_MEMBERS")){
    	const errE = new MessageEmbed()
    	.setTitle("You don't have the permissions to use this command!")
    	.setColor('RED');
    	message.channel.send(errE)
    }

    else{
        if(!member)
            return message.channel.send("Please mention a valid member of this server");
        if(!member.bannable) 
            return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";

        member.ban({reason: reason})
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban the user`));
            const e1 = new MessageEmbed()
             .setColor('GREEN')
             .setTitle(`${member.user.tag} has been banned by ${message.author.tag}.\nReason: ${reason}`);
        message.channel.send(e1);
        const e2 = new MessageEmbed()
             .setColor('RED')
             .setTitle(`You have been banned by ${message.author.tag} in ${message.guild}.\nReason: ${reason}`);
        member.send(e2)
	}
}
}