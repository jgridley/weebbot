exports.run = (client, message) => {
    message.channel.sendMessage('Ping?')
        .then(msg => {
            msg.edit(`**Pong!** :smile: (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`)
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
  usage: 'ping'
};
