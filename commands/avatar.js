const config = require('../config.json');

exports.run = function (client, message) {
    const jimp = require('jimp');

    const avatar = message.author.displayAvatarURL;
    const noGifAvatar = avatar.replace(/.gif/i, '.png');
    setTimeout(sendAvatar, 1000);

    console.log(noGifAvatar);


    jimp.read(noGifAvatar, (err, image) => {
        if (err) throw err;
        image.resize(220, 220)
             .quality(100)
             .write('../imgs/avatar.png');
    }).catch((err) => {
        console.error(err);
    });

    function sendAvatar() {
        message.channel.send({
            files: [{
              attachment: '../imgs/avatar.png',
              name: 'avatar.png'
            }]
        });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Displays your avatar picture in the channel the command was sent in.',
  usage: `${config.prefix}avatar`
};
