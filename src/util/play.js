// Dependencies
const childProcess = require ('child_process');

// Local
const config = require ('./config');

module.exports = url => childProcess.spawn (
	config.play.player,
	[url]);
