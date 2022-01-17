# GateChain Documents

> Welcome to GateChain's Documents! Please choose your language.

### start
npm install 

<!-- dev -->
npm run dev

<!-- build -->
npm run build:base

<!-- git pull && build -->
npm run build

```js
// .config.pre.js
// "build:docs": "export VUE_PRESS_BASE=deploy_docs &&  npm run build:shell"
// VUE_PRESS_BASE=deploy_docs

module.exports = {
	base: '/Users/tong/Desktop/work/docs-gatebridge/dist/',
	deploy_docs: '/Users/tong/Desktop/work/docs-gatebridge/docs_dist/docs',
}
```
