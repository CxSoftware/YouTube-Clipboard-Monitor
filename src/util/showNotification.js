// Dependencies
const libnotify = require ('libnotify-ffi');
const path = require ('path');

// Local
const play = require ('./play');
const videoinfo = require ('./videoinfo');

// Constants
const ICON_PATH = path.join (__dirname, '..', '..', 'images', 'play.png');

module.exports = url =>
{
	(async () =>
	{
		const info = await videoinfo (url);
		libnotify.createNotification ({
			summary: 'YouTube',
			body: info.title,
			icon: ICON_PATH,
			actions: {
				play: {
					label: 'Play',
					callback: () => play (url)
				},
				close: {
					callback: () => { notification = null }
				}
			}
		}).push ();
	})();
};
