// svg imports become their file name in tests, so a component's chosen icon can be asserted on
const path = require('node:path')

module.exports = {
	process(_source, filename) {
		return { code: `module.exports = ${JSON.stringify(path.basename(filename))};` }
	},
}
