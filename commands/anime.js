const randomanime = require("random-anime");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'anime',
  description: 'Show You The Anime Girls :)',
  usage: `anime`,
  async execute(message, args, client) {
    const anime = randomanime.anime();
    const embed = new MessageEmbed()
    .setTitle("Anime image")
    .setColor('WHITE')
    .setImage(anime)
    .setFooter(`Requested By ${message.author.username}`,message.author.displayAvatarURL({ dynamic: true, format: 'png' })
    );
    message.channel.send(embed);
  }, catch (err) {
      console.log(err);
    }
}