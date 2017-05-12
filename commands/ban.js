const Discord = require('discord.js');
const config = require('../config.json');

exports.run = function (client, message, args) {
    const reason = args.slice(1).join(' ');
    const user = message.mentions.users.first();
    const modlog = message.guild.channels.find('name', 'mod-log');
    const banMember = message.guild.member(message.mentions.users.first());
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to ban.').catch(console.error);
    if (reason.length < 1) return message.reply('you must give a reason for banning this user.').catch(console.error);
    if (!message.guild.member(user).bannable) return message.reply('I cannot ban this member.').catch(console.error);

    banMember.ban().then(member => {
        message.reply(`${member.user.username} has been succesfully banned from the server. Bye bye! :joy:`).catch(console.error);
    
const embed = new Discord.RichEmbed()
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor('#FF0000')
  .setTimestamp()
  .addField('Action:', 'Ban')
  .addField('Reason:', args)
  .addField('User:', `${user.tag}`)
  .addField('Moderator:', `${message.author.tag}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 3
};

exports.help = {
    name: 'ban',
    description: 'Bans the mentioned user from the Discord server.',
    usage: `${config.prefix}ban @<user> [reason]`
};
