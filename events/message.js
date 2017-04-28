const config = require('../config.json');

module.exports = message => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  const client = message.client;
  const command = message.content.split(' ')[0].slice(config.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
