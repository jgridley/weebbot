module.exports = (guild, user) => {
    guild.defaultChannel.sendMessage(`${user.username} was just unbanned from the server! :slight_smile:`);
};