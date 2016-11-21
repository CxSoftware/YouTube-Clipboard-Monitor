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
		const info = await videoinfo (url);
		const notification = notifications.createNotification ({
			summary: 'YouTube' ,
			body: info.title,
			icon: ICON_PATH,
			actions: {
				default: '',
				play: 'Play'
			}
		});

		notification.on ('action' , a =>
		{
			if (a == 'play') play (url);
		});
		notification.push ();
	})();
};
