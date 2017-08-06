module.exports = member => {
    const guild = member.guild;
    guild.defaultChannel.send(`Welcome ${member.user} to the server! :smile:`);
};
