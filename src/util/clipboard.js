// Dependencies
const copyPaste = require ('copy-paste');

module.exports = {
	read: () => new Promise ((resolve, error) =>
		copyPaste.paste ((err, result) => err ?
			error (err) : resolve (result)))
};
