module.exports = (channel, time) => {
    channel.guild.defaultChannel.send(`The pins for ${channel.name} have been updated at ${time}!`);
};
