module.exports = (guild, user) => {
    guild.defaultChannel.send(`${user.username} was just unbanned from the server! :slight_smile:`);
};
