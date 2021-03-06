const config = require('../config.json');

exports.run = function (client, message) {
    if (message.author.id !== config.ownerId) return;
    try {
        const code = message.content.substring(message.content.indexOf(' '));
        let evaled = eval(code);

        if (typeof evaled !== 'string')
            evaled = require('util'). inspect(evaled);
            
        message.channel.send(clean(evaled), { code: 'xl' });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};

function clean(text) {
    if (typeof (text) === 'string')
      return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'eval',
    description: 'Evaluates JavaScript code and executes it.',
    usage: `${config.prefix}eval <code>`
};
