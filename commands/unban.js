const Discord = require('discord.js');
const config = require('../config.json');

exports.run = function (client, message, args) {
    const user = args[0];
    const modlog = message.guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (!user) return message.reply('please supply a banned user id to unban such user.').catch(console.error);

    message.guild.unban(user);
    
const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} (${message.author.id})`, message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action**: Unban\n**User**: ${user.tag} (${user.id})\n**Reason**: ${args}`);
  return client.channels.get(modlog.id).send({ embed });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 3
};

exports.help = {
    name: 'unban',
    description: 'Unbans a user id on a Discord Server.',
    usage: `${config.prefix}unban @<user> [reason]`
};
