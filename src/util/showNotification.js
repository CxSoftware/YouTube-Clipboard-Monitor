// Dependencies
const notifications = require ('freedesktop-notifications');
const path = require ('path');

// Local
const download = require ('./download');
const play = require ('./play');
const videoinfo = require ('./videoinfo');

// Constants
const ICON_PATH = path.join (__dirname, '..', '..', 'images', 'play.png');

module.exports = url =>
{
	(async () =>
	{
		var closed = false;
		const actionCallback = a =>
		{
			if (a == 'play') play (url);
			if (a == 'download') download (url);
		};
		const data = {
			summary: 'YouTube' ,
			body: url,
			icon: ICON_PATH,
			actions: {
				default: '',
				play: 'Play',
				download: 'Download'
			}
		};
		const notification1 = notifications
			.createNotification (data)
			.on ('action', actionCallback)
			.on ('close', () => closed = true)
			.push ();

		// Get video info
		const info = await videoinfo (url);
		if (closed)
			return;

		// Create new notification
		data.body = info.title;
		notification1.close ();
		notifications
			.createNotification (data)
			.on ('action', actionCallback)
			.push ();
	})();
};
