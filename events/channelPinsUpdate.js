module.exports = (channel, time) => {
    channel.guild.defaultChannel.sendMessage(`The pins for ${channel.name} have been updated at ${time}!`);
};