module.exports = (guild, client) => {
    console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username} at ${new Date()}`);
    // Sends a message in the default channel saying "I have joined 'name of server'."
    guild.defaultChannel.send(`I have joined ${guild.name}! Hello! :smile:`);
};
