module.exports = member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to the server! :smile:`);
};