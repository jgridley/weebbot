const config = require('../config.json');

exports.run = function (client, message, args) {
// Sets the status of the bot.
//    if (!argresult) argresult = "online"; // NOTE: DOES NOT CURRENTLY WORK, SHOULD BE A DEFAULT STATEMENT
        const argresult = args.join(' ');
        client.user.setStatus(argresult).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Allows the owner of the bot to set the status of the bot.',
  usage: `${config.prefix}setstatus <online, idle, dnd, invisible>`
};
