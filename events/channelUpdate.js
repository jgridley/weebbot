const ddiff = require('return-deep-diff');

module.exports = (oldChannel, newChannel) => {
    console.log(ddiff(oldChannel, newChannel));
};