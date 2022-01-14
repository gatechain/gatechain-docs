// 自定义首页
const fs = require('fs-extra')
const path = require('path')
const rootPath = path.join(__dirname, '..')
const distPath = path.join(rootPath, '/docs/.vuepress/dist/')
fs.copy(
	path.join(distPath, '/home/') + 'index.html', 
	distPath + 'index.html', 
)
  .then(() => {
	console.log(
		'copy: ', path.join(distPath, '/home/') + 'index.html', 
		distPath + 'index.html'
	)
  })
  .catch(err => console.error(err))

fs.copy(
	path.join(distPath, '/zh/home/') + 'index.html', 
	distPath + '/zh/index.html',
)
  .then(() => console.log('success!'))
  .catch(err => console.error(err))