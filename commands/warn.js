const Discord = require('discord.js');

exports.run = function (client, message, args) {
    const reason = args.slice(1).join(' ');
    const user = message.mentions.users.first();
    const modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (reason.length < 1) return message.reply('you must give a reason for warning a user.').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to warn.').catch(console.error);
    
const embed = new Discord.RichEmbed()
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor('#0000FF')
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('Reason:', args)
  .addField('User:', `${user}#${user.discriminator}`)
  .addField('Moderator:', `${message.author}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
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
    usage: 'warn @<user> [reason]'
};
