// Runtime
require ('traceur');

// Dependencies
const path = require ('path');

// Local
const clipboard = require ('./util/clipboard');
const showNotification = require ('./util/showNotification');
const sleep = require ('./util/sleep');

// Constants
const SLEEP_TIME = 1000;
const ICON = path.join (__dirname, '..', 'images', 'play.png');

(async () =>
{
	var lastValue;

	while (true)
	{
		console.log ('Sleeping...');
		await sleep (SLEEP_TIME);

		try
		{
			console.log ('Reading clipboard')
			let newValue = await clipboard.read ();
			if (newValue == lastValue)
				continue;

			console.log ('New value', newValue);
			lastValue = newValue;
			if (!(/^https?:\/\/(www\.)?youtube\.com\//.test (newValue)))
				continue;

			console.log ('It\' youtube!');
			showNotification (newValue);
		}
		catch (e)
		{
			console.log (e);
		}
	}
})();
