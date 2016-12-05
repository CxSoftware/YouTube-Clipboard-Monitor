// Dependencies
const childProcess = require ('child_process');

// Local
const config = require ('./config');

module.exports = url => childProcess.spawn (
	config.download.terminal,
	[
		'--working-directory',
		config.download.directory || process.env ['HOME'],
		'--command',
		'youtube-dl ' + url
	]);
