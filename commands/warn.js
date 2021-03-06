const Discord = require('discord.js');
const config = require('../config.json');

exports.run = function (client, message, args) {
    const reason = args.slice(1).join(' ');
    const user = message.mentions.users.first();
    const modlog = message.guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (reason.length < 1) return message.reply('you must give a reason for warning a user.').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to warn.').catch(console.error);
    
const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} (${message.author.id})`, message.author.avatarURL)
  .setColor('#0000FF')
  .setTimestamp()
  .setDescription(`**Action**: Warning\n**User**: ${user.tag} (${user.id})\n**Reason**: ${args}`);
  return client.channels.get(modlog.id).send({ embed });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 2
};

exports.help = {
    name: 'warn',
    description: 'Gives a warning to the mentioned user.',
    usage: `${config.prefix} @<user> [reason]`
};
