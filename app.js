const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");

require("./util/eventLoader")(client);

const log = msg => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    log(`Loading a total of ${files.length} commands.`);
    files.forEach(f => {
        let props = require(`./commands/${f}`);
        log(`Loading Command: ${props.help.name}. 👌`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(aliases => {
            client.aliases.set(aliases, props.help.name);
        });
    });
});

client.reload = function(command) {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e){
            reject(e);
        }
    });
};

client.elevation = function(msg) {
    let permlvl = 0;
    let mod_role = msg.guild.roles.find("name", config.modroleid);
    if (mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;
    let admin_role = msg.guild.roles.find("name", config.adminroleid);
    if (admin_role && msg.member.roles.has(admin_role.id)) permlvl = 3;
    if (msg.author.id === require("./config.json").ownerid) permlvl = 4;
    return permlvl;
}

// Sets the "Playing ..." game status for the bot by default.
client.on("ready", () => {
    client.user.setGame("made by Joshua Gridley").catch(console.error);
});

// Catch discord.js errors and remove client token,
// Uncomment one below, comment the other out.
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g; // !2FA tokens
var errors = chalk.bold.red;

client.on("debug", e => {
    console.log(chalk.bgBlue(e.replace(regToken, "that was redacted")));
});

client.on("warn", e => {
    console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
    console.log(errors(e.replace(regToken, "that was redacted")));
});

// Gets the client token to login into the bot.
client.login(config.token).catch(error => console.log(error));