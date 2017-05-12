const LolApi = require('leagueapi');
const config = require('./config.json');

LolApi.init(config.leaguekey, config.region);

LolApi.getChampions(true, (err, champs) => {
    console.log(champs);
});

LolApi.Summoner.getByName(config.summoner, (err, summoner) => {
	if (!err) {
		console.log(summoner);
	}
});

//The wrapper also accepts promises:
LolApi.Summoner.getByName(config.summoner).then((summoner) => {
    console.log(summoner);
});
