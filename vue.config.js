let config
try {
	config = require('./src/vue.config')
} catch (error) {
	config = {  }
}
module.exports = config