module.exports = (channel, client, guild) => {
    console.log(`A ${channel.type} channel by the name of ${channel.name} was deleted.`);
    channel.guild.defaultChannel.send(`The ${channel.name} channel was deleted! :no_mouth:`);
};
