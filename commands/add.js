exports.run = function(client, message, args) {
    // Adds numbers together    
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "add",
  description: "Adds numbers together.",
  usage: "add <number 1> <number 2> ..."
};