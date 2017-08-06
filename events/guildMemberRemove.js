module.exports = member => {
    const guild = member.guild;
    guild.defaultChannel.send(`Goodbye ${member.user.username}, we'll miss you... :cry:`);
};
