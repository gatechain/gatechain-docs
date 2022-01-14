const path = require('path')
const isProdEnv = process.env.NODE_ENV === 'production'
const {routes} = require('./routes')

const base = isProdEnv ? '/docs/' : '/'

module.exports = {
	base,
	theme: '@vuepress/default',
	locales: {  // 站点语言配置
		'/': {
			lang: 'zh-CN',
			title: 'GateChain Doc',
			description: 'GateChain Doc'
		},
		'/en/': {
			lang: 'en-US', // 将会被设置为 <html> 的 lang 属性 默认英文
			title: 'GateChain Doc',
			description: 'GateChain Doc'
		}
		
	},
	themeConfig: {  //主题配置
		logo: '/assets/img/logo.svg',
		lastUpdated: 'Last Updated', // string | boolean
		smoothScroll: true,
		nextLinks: true,  //是否展示上/下一篇链接
		prevLinks: true,
		sidebarDepth: 2,
		locales: routes 
	},
	head: [
		['script', { src: '/assets/js/jquery.min.js' }],
		['script', { src: '/assets/js/jquery.fancybox.min.js' }],
		['link', { rel: 'stylesheet', href: '/assets/css/jquery.fancybox.min.css' }]
	],
	markdown: {
		extendMarkdown: md => md.use(require('./plugins/fancybox'))
	},
	chainWebpack: require('./plugins/fancybox').webpack,
	configureWebpack: {
		resolve: {
			alias: {
				'@assets': path.join(__dirname, 'public/assets/')
			}
		}
	},
	plugins: [
		'vuepress-plugin-mathjax',
		['@vuepress/search', {
			searchMaxSuggestions: 14
		}]
	]
}