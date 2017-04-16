exports.run = function(client, message, args) {
// Sets the game playing for the bot.
//        if (!argresult) argresult = null; // NOTE: DOES NOT CURRENTLY WORK, SHOULD BE A DEFAULT NULL STATEMENT
        var argresult = args.join(" ");
        client.user.setGame(argresult).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "setgame",
  description: 'Allows the owner of the bot to set the game of the bot.',
  usage: "setgame <message>"
};