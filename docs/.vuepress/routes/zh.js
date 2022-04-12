const zhRouter = {
	'/': {
		selectText: '选择语言',
		label: '简体中文',
		serviceWorker: {
			updatePopup: {
				message: "发现新内容可用.",
				buttonText: "刷新"
			}
		},
		nav: [
			{ text: 'Home', link: '/home/' },
			{ text: 'GateChain', link: '/gatechain/concepts/account/' },
			{ text: '开发', link: '/developers/gatechain-build/' },
			{ text: '集成', link: '/integration/rpc-node-list/' },
			{ text: 'FAQ', link: '/faq/faq/' },
			// { text: '了解更多', items: [{ text: '更多1', link: '/chinese/' }, { text: '更多2', link: '/japanese/' }] },
		],
		sidebar: {
			'/home/': [
				{
					title: '概述',
					path: '/home/',
				},
				{
					title: '生态',
					path: '/home/ecosystem/',
				},
				{
					title: '典型应用',
					path: '/home/application/',
				},
				{
					title: 'EVM介绍',
					path: '/home/evm/',
				},
				{
					title: 'MetaMask配置',
					path: '/home/tool-metamask/',
				},
				{
					title: '学术研究',
					path: '/home/academic-research/',
				},
				{
					title: '规范说明',
					path: '/home/terms/',
				},
				{
					title: '快速入门',
					path: '/home/quick-start/',
				},
				{
					title: '进阶使用',
					path: '/home/advanced-docs/',
				}
			],
			'/gatechain/': [
				{
					title: '概念',
					//path: '/gatechain/',
					children: [
						['/gatechain/concepts/account/', '账户体系'],
						['/gatechain/concepts/revocable-tx/', '可撤回交易'],
						['/gatechain/concepts/delay/', '延迟到账']
					]
				},
				{
					title: '资产',
					path: '/gatechain/gatechain-asset/',
				},
				{
					title: '多签',
					path: '/gatechain/gatechain-multisig/',
				},
				{
					title: '安全保障',
					path: '/gatechain/gatechain-security/',
				},
				{
					title: '挖矿的概念',
					path: '/gatechain/gatechain-pos/',
				},
				{
					title: '学术研究',
					path: '/gatechain/gatechain-research/',
				},
				{
					title: '区块浏览器',
					path: '/gatechain/explorer/',
				},
				{
					title: '申请测试币',
					path: '/gatechain/facuet/',
				},
			],
			'/developers/': [
				{
					title: '部署',
					path: '/developers/gatechain-build/',
				},
				{
					title: '挖矿',
					path: '/developers/gatechain-pos/',
				},
				{
					title: 'CLI',
					path: '/developers/cli/',
					children: [
						['/developers/cli/', '概述'],
						['/developers/cli/account/', '账户'],
						['/developers/cli/con-account/', '共识账户'],
						['/developers/cli/vault-account/', '保险账户'],
						['/developers/cli/block/', '区块'],
						['/developers/cli/tx/', '交易'],
						['/developers/cli/revocable-tx/', '可撤回交易'],
						['/developers/cli/token/', '代币'],
						['/developers/cli/foundation/', '基金会'],
						['/developers/cli/staking/', '抵押'],
						['/developers/cli/distribution/', '分发'],

					]
				},
				{
					title: 'RPC',
					path: '/developers/api/',
					children: [
						['/developers/api/', '概述'],
						['/developers/api/account/', '账户'],
						['/developers/api/con-account/', '共识账户'],
						['/developers/api/vault-account/', '保险账户'],
						['/developers/api/block/', '区块'],
						['/developers/api/tx/', '交易'],
						['/developers/api/revocable-tx/', '可撤回交易'],
						['/developers/api/token/', '代币'],
						['/developers/api/foundation/', '基金会'],
						['/developers/api/staking/', '抵押'],
						['/developers/api/distribution/', '分发'],

					]
				},
				{
					title: 'EVM_RPC',
					path: '/developers/json-rpc/',
				},
				{
					title: 'Web3JS',
					path: 'https://web3js.readthedocs.io/en/v1.2.11/',
					target: '_blank'
				},
			],
			'/integration/': [
				{
					title: 'RPC节点',
					path: '/integration/rpc-node-list/',
				},
				{
					title: '交易平台集成文档',
					path: '/integration/gatechain-platform/',
				},
				{
					title: 'Hipo PoS挖矿',
					path: '/integration/hipo-pos/',
				},
				{
					title: 'GateChain Endpoints说明',
					path: '/integration/endpoints/',
				},
				{
					title: '在GateChain部署智能合约',
					path: '/integration/smart-contract/',
				},
				{
					title: 'GateOracle',
					path: '/integration/gateoracle/',
				},
				{
					title: 'GateSwap',
					path: '/integration/gateswap/',
				},
				{
					title: 'GateBridge',
					path: '/integration/gatebridge-principles/',
					children: [
						['/integration/gatebridge-principles/', '核心原理'],
						['/integration/gatebridge-use/', '使用说明']
					]
				},
				{
					title: 'Issue Token',
					path: '/integration/issuetoken/',
				},
				{
					title: 'NFT',
					path: '/integration/nft/',
					children: [
						['/integration/nft/', '发行合约'],
						['/integration/metamask-mobile/', '在MetaMask手机端查看自己的NFT'],
						['/integration/gatescan/', '在GateScan查询NFT信息'],
					]
				},
				{
					title: 'Tools',
					path: '/integration/tool/',
					children: [
						['/integration/tool/', '介绍'],
						['/integration/tool-metamask/', 'MetaMask'],
						['/integration/tool-remix/', 'Remix'],
						['/integration/tool-truffle/', 'Truffle'],
					]
				},
				{
					title: '桌面版钱包',
					path: '/integration/gatechain-wallet/',
				},
			],
			'/faq/': [
				{
					title: '常见问题',
					path: '/faq/faq/',
				},
				{
					title: '更多帮助',
					path: '/faq/',
				},
			],
		}
	},
}

module.exports = zhRouter
