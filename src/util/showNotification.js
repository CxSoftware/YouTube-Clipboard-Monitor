// Dependencies
const notifications = require ('freedesktop-notifications');
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
		const actionCallback = a =>
		{
			if (a == 'play') play (url);
		};
		const data = {
			summary: 'YouTube' ,
			body: url,
			icon: ICON_PATH,
			actions: {
				default: '',
				play: 'Play'
			}
		};
		const notification1 = notifications
			.createNotification (data)
			.on ('action', actionCallback)
			.push ();

		// Get video info
		const info = await videoinfo (url);

		// Create new notification
		data.body = info.title;
		notification1.close ();
		notifications
			.createNotification (data)
			.on ('action', actionCallback)
			.push ();
	})();
};
