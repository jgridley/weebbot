const config = require('../config.json');

exports.run = function (client, message) {
    if (!message.guild) return;

    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'summon',
  description: 'Joins the channel the user is in.',
  usage: `${config.prefix}summon`
};
