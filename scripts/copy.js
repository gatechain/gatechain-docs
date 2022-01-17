const fs = require('fs-extra')
const path = require('path')

const distPath = path.join(__dirname, '../docs/.vuepress/dist/')
const deployPathDefault = path.join(__dirname, '../dist')


function getConfig () {
	let config = {
		deploy: deployPathDefault
	}
	
	try {
		const configPath = path.join(__dirname, '../.config.pre.js')
		const preConfig = require(configPath)
		console.log(preConfig, 'preConfig')
		config = {...config, ...preConfig}
	} catch (error) {

	}
	return config
}



function mkDir (src) {
	fs.emptyDirSync(src)
}

function copy (src, dest) {
	fs.copy(src, dest).then(() => {
		console.log('=========================')
		console.log('======== 部署成功 =======')
		console.log('=========================')
	}).catch(err => {
		console.log(err, 'error')
	})
}


function main () {
	const config = getConfig()
	console.log(process.env.VUE_PRESS_BASE, 'process.env.VUE_PRESS_DEST')
	const dest = config[process.env.VUE_PRESS_BASE || 'base']
	mkDir(dest)
	copy(distPath, dest)
}
main()

module.exports = getConfig


