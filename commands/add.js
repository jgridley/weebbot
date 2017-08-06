const config = require('../config.json');

exports.run = function (client, message, args) {
    const numArray = args.map(n => parseInt(n));
    const total = numArray.reduce((p, c) => p + c);

    message.channel.send(total).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'add',
  description: 'Adds numbers together.',
  usage: `${config.prefix}add <number 1> <number 2>`
};
