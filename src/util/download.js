// Dependencies
const childProcess = require ('child_process');
const jsonfile = require ('jsonfile');
const path = require ('path');

const config = jsonfile.readFileSync (path.join (__dirname, '..', '..', 'config.json'));

module.exports = url => childProcess.spawn (
	config.download.terminal,
	[
		'--working-directory',
		config.download.directory || process.env ['HOME'],
		'--command',
		'youtube-dl ' + url
	]);
