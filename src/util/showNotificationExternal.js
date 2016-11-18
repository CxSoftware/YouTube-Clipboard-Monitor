// Dependencies
const childProcess = require ('child_process');
const showNotification = require ('./showNotification');

// Called directly
if (require.main === module)
{
	try
	{
		console.log ('Show notification for', process.argv [2]);
		showNotification (process.argv [2]);
	}
	catch (e)
	{
		console.log (e);
	}
}
// As a module
else
{
	console.log ('Exporting module...');
	module.exports = url =>
	{
		console.log ('Spawing', process.argv [0]);
		childProcess.spawn (process.argv [0], [__filename, url]);
	};
}
