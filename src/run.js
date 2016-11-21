// Runtime
require ('traceur');

// Dependencies
const path = require ('path');
const winston = require ('winston');

// Local
const clipboard = require ('./util/clipboard');
const showNotification = require ('./util/showNotification');
const sleep = require ('./util/sleep');

// Constants
const SLEEP_TIME = 1000;
const ICON = path.join (__dirname, '..', 'images', 'play.png');

// Configure log
winston.add (winston.transports.File, { filename: path.join (__dirname, '..', 'monitor.log') });
winston.remove (winston.transports.Console);

(async () =>
{
	var lastValue;
	winston.log ('info', 'Starting');

	while (true)
	{
		winston.log ('debug', 'Sleeping');
		await sleep (SLEEP_TIME);

		try
		{
			winston.log ('debug', 'Reading clipboard');
			let newValue = await clipboard.read ();
			if (newValue == lastValue)
				continue;

			winston.log ('info', 'New value', newValue);
			lastValue = newValue;
			if (!(/^https?:\/\/(www\.)?youtube\.com\//.test (newValue)))
				continue;

			winston.log ('info', 'It\' youtube!');
			showNotification (newValue);
		}
		catch (e)
		{
			winston.log ('error', e);
		}
	}
})();
