const config = require('../config.json');

exports.run = function (client, message) {
    if (!message.guild) return;

    if (message.guild.me.voiceChannel) {
      message.member.voiceChannel.leave();
        message.reply('I have successfully left the channel!');
    } else if (!message.guild.me.voiceChannel) { 
            message.reply('I must be in a voice channel first!');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'disconnect',
  description: 'Leaves the channel the bot is in.',
  usage: `${config.prefix}disconnect`
};
