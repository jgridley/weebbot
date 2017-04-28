exports.run = function (client, message) {
// Only "Ruin332#3547" can use the /desu command to return "kawaii", else it says no.
//    let w33bknight = message.guild.roles.find("name", "W33b Knight"); // FOR IF YOU WANT IT TO BE A ROLE THAT DECIDES
//    if (message.member.roles.has(w33bknight.id)) {
    if (message.author.id === '130653190835142656') { // FOR IF YOU WANT IT TO BE AN ID THAT DECIDES, Ruin332#3547's ID
        message.channel.sendMessage('Kawaii!');
    } else {
        message.reply('who said you were weeby enough to have this command? :rage:').catch(console.error);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
};

exports.help = {
    name: 'desu',
    description: 'Only Ruin332 can use this command.',
    usage: 'desu'
};
