const ddiff = require('return-deep-diff');

module.exports = (oldMember, newMember) => {
    console.log(ddiff(oldMember, newMember));
};
