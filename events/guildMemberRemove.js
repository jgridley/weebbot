module.exports = member => {
    const guild = member.guild;
    guild.defaultChannel.sendMessage(`Goodbye ${member.user.username}, we'll miss you... :cry:`);
};
