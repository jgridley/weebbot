const Discord = require('discord.js');

exports.run = function (client, message) {
    const user = message.mentions.users.first();
    const modlog = client.channels.find('name', 'mod-log');
    const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (!muteRole) return message.reply('I cannot find a "Muted" role. Please create a "Muted" role (Case sensitive)').catch(console.error);
    if (message.mentions.users.size === 0) return message.reply('please mention a user to unmute.').catch(console.error);

    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("I don't have the permissions (MANAGE_ROLES_OR_PERMISSIONS) to do this.").catch(console.error);
    
const embed = new Discord.RichEmbed()
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Unmute')
  .addField('User:', `${user.tag}`)
  .addField('Moderator:', `${message.author.tag}`);

    if (message.guild.member(user).roles.has(muteRole.id));
        message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error).then(() => {
                message.channel.sendMessage(`${user} has been unmuted serverwide. :smile:`).catch(console.error);
    });
  });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['um'],
    permLevel: 2
};

exports.help = {
    name: 'unmute',
    description: 'Unmutes a mentioned user.',
    usage: 'unmute @<user>'
};
