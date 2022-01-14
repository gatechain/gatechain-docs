/**
 * 把文件转换成文件夹形式
 * eg: demo.md  ->  demo/index.md
 */

const fs = require('fs-extra')
const path = require('path')
const docs = path.join(__dirname, '../docs')

/**
 * 移动文件
 * @param {string} src : 路径 ;
 * @param {string} rename 重命名  default : index.md 
 */
function move (src, rename = 'index.md') {
	const parseSrc = path.parse(src)
	const dest = path.join(parseSrc.dir, parseSrc.name, rename)
	fs.move(src, dest, err => {
		if (err) return console.error(err)
		console.log('move success', src, '->>>>', dest)
	})
}


const ignore = ['.vuepress', 'README.md', 'index.md','.DS_Store']

/**
 * @param {*} filePath 文件夹路径 
 */
async function getFiles (filePath) {
	const files = []
	async function deepFiles(filePath) {
		try {
			const stat = await fs.stat(filePath)
			if (stat.isDirectory()) {
				const filesString = await fs.readdirSync(filePath)
				const filesResult = filesString.filter(file => ignore.indexOf(file) === -1)

				for (let index = 0; index < filesResult.length; index++) {
					const filesItem = filesResult[index];
					await deepFiles(path.join(filePath, '/', filesItem))
				}
				return 
			} 

			files.push(filePath)
		} catch (error) {
			console.error(error)
		}
	}
	await deepFiles(filePath)
	return files
}
async function main () {
	const files = await getFiles(docs)
	if (!files.length) {
		console.log('=======  🈚️ 无转换的文件。 😊 ========')
		console.log(' 🏃‍♀️')
	}
	files.forEach(file => {
		move(file)
	})
}

main()



