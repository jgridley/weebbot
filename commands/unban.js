const Discord = require("discord.js");

exports.run = function(client, message, args) {
    let reason = args.slice(1).join(" ");
    let user = args[0];
    let modlog = client.channels.find("name", "mod-log");
    if (!modlog) return message.reply('I cannot find a "mod-log" channel. Please create a "mod-log" channel (Case sensitive).').catch(console.error);
    if (!user) return message.reply("please supply a banned user id to unban such user.").catch(console.error);

    message.guild.unban(user);
    
const embed = new Discord.RichEmbed()
  .setAuthor("Moderator", message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField("Action:", "Unban")
  .addField("User ID:", `${user}`)
  .addField("Moderator:", `${message.author}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 3
};

exports.help = {
    name: "unban",
    description: "Unbans a user id on a Discord Server.",
    usage: "unban @<user> [reason]"
};