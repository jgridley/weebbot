exports.run = function (client) {
    // Message from "Joshiebottesting" /send, sends to channel "Reeeeeeeee" "Hello from other channel!"
    client.channels.get('296458314106011650').sendMessage('Hello from other channel! :joy:').catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'send',
  description: 'Send a message from a random channel to the "Reeeeeeeee" channel c:',
  usage: 'send'
};
