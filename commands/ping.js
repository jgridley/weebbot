const config = require('../config.json');

exports.run = (client, message) => {
    message.channel.send('Ping?')
        .then(msg => {
            msg.edit(`**Pong!** :smile: (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Simple ping/pong command.',
  usage: `${config.prefix}ping`
};
