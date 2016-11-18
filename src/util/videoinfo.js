// Dependencies
const youtubedl = require ('youtube-dl');

module.exports = url => new Promise ((resolve, error) =>
	youtubedl.getInfo (url, (err, info) =>
		err ? error (err) : resolve (info)));
