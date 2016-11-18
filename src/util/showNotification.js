// Dependencies
const libnotify = require ('libnotify-ffi');
const path = require ('path');

// Local
const play = require ('./play');

// Constants
const ICON_PATH = path.join (__dirname, '..', '..', 'images', 'play.png');

module.exports = (url) =>
	libnotify.createNotification ({
		summary: 'YouTube',
		body: url,
		icon: ICON_PATH,
		actions: {
			play: {
				label: 'Play',
				callback: () => play (url)
			}
		}
	}).push ();
