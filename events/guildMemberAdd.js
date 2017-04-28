module.exports = member => {
    const guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to the server! :smile:`);
};
