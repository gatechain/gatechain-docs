const zhRouter = require('./zh')
const enRouter = require('./en')

const routes = {
	...zhRouter,
	...enRouter
}

module.exports = {
	routes
}