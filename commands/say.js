exports.run = function(client, message, args) {
// /say "message here", bot says the message.
    message.channel.sendMessage(args.join(" ")).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Allows the bot to type what you say!",
  usage: "say <message>"
};