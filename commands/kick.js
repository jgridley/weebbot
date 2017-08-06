const Discord = require('discord.js');
const config = require('../config.json');

exports.run = function (client, message, args) {
    const reason = args.slice(1).join(' ');
    const user = message.mentions.users.first();
    const modlog = message.guild.channels.find('name', 'mod-log');
    const kickMember = message.guild.member(message.mentions.users.first());
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to kick.').catch(console.error);
    if (reason.length < 1) return message.reply('you must give a reason for kicking this user.').catch(console.error);
    if (!message.guild.member(user).kickable) return message.reply('I cannot kick this member.').catch(console.error);

    kickMember.kick().then(member => {
        message.reply(`${member.user.username} has been succesfully kicked from the server. Bye bye! :joy:`).catch(console.error);

const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} (${user.id})`, message.author.avatarURL)
  .setColor('#FF0000')
  .setTimestamp()
  .setDescription(`**Action**: Kick\n**User**: ${user.tag} (${user.id})\n**Reason**: ${args}`);
  return client.channels.get(modlog.id).send({ embed });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user from the Discord server.',
  usage: `${config.prefix}kick @<user> [reason]`
};
