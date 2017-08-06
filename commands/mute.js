const Discord = require('discord.js');
const config = require('../config.json');

exports.run = function (client, message, args) {
    const reason = args.slice(1).join(' ');
    const user = message.mentions.users.first();
    const modlog = message.guild.channels.find('name', 'mod-log');
    const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (!muteRole) return message.reply('I cannot find a "Muted" role. Please create a "Muted" role (Case sensitive)').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to mute.').catch(console.error);
    if (reason.length < 1) return message.reply('you must give a reason for muting a user.').catch(console.error);

    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("I don't have the permissions (MANAGE_ROLES_OR_PERMISSIONS) to do this.").catch(console.error);

const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag} (${user.id})`, message.author.avatarURL)
  .setColor('#FF0000')
  .setTimestamp()
  .setDescription(`**Action**: Mute\n**User**: ${user.tag} (${user.id})\n**Reason**: ${args}`);

    message.guild.member(user).addRole(muteRole).catch(console.error).then(() => {
        client.channels.get(modlog.id).send({ embed }).catch(console.error).then(() => {
            message.channel.send(`${user} has been muted serverwide. :grimacing:`).catch(console.error);
    });
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['m'],
    permLevel: 2
};

exports.help = {
    name: 'mute',
    description: 'Mutes a mentioned user.',
    usage: `${config.prefix}mute @<user> [reason]`
};
