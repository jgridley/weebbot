module.exports = (channel, client) => {
    console.log(`A ${channel.type} channel by the name of ${channel.name} was created at ${channel.createdAt} with the ID of ${channel.id}.`);
    if (channel.type === 'text') return channel.sendMessage(`Successfully created a new ${channel.type} channel named ${channel.name}! :smiley:`);
};
