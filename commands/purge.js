exports.run = function(client, message, args) {
    // Mass deletes messages
    let messagecount = parseInt(args.join(" "));
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "purge",
  description: "Purges <x> amount of messages from the channel used in.",
  usage: "purge <number>"
};