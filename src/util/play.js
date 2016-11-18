// Dependencies
const childProcess = require ('child_process');

module.exports = url => childProcess.spawn ('vlc', [url]);
