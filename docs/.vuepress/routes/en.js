const enRouter = {
	'/en/': {
		selectText: 'Languages',
		label: 'English',
		ariaLabel: 'Languages',
		serviceWorker: {
			updatePopup: {
				message: "New content is available.",
				buttonText: "Refresh"
			}
		},
		nav: [
			{ text: 'Home', link: '/en/home/' },
			{ text: 'GateChain', link: '/en/gatechain/concepts/account/' },
			{ text: 'Developers', link: '/en/developers/gatechain-build/' },
			{ text: 'Integration', link: '/en/integration/rpc-node-list/' },
			{ text: 'FAQ', link: '/en/faq/' },
		],
		sidebar: {
			'/en/home/': [
				{
					title: 'Overview',
					path: '/en/home/',
				},
				{
					title: 'Ecosystem',
					path: '/en/home/ecosystem/',
				},
				{
					title: 'Application',
					path: '/en/home/application/',
				},
				{
					title: 'EVM',
					path: '/en/home/evm/',
				},
				{
					title: 'MetaMask',
					path: '/en/home/tool-metamask/',
				},
				{
					title: 'Academic Research',
					path: '/en/home/academic-research/',
				},
				{
					title: 'Terms',
					path: '/en/home/terms/',
				},
				{
					title: 'Quick Start',
					path: '/en/home/quick-start/',
				},
				{
					title: 'Advanced Docs',
					path: '/en/home/advanced-docs/',
				},
			],
			'/en/gatechain/': [
				{
					title: 'Concepts',
					//path: '/gatechain/', 
					children: [
						['/en/gatechain/concepts/account/', 'Account system'],
						['/en/gatechain/concepts/revocable-tx/', 'Revocable Tx'],
						['/en/gatechain/concepts/delay/', 'Delay Arrival']
					]
				},
				{
					title: 'Asset',
					path: '/en/gatechain/gatechain-asset/',
				},
				{
					title: 'MultiSig',
					path: '/en/gatechain/gatechain-multisig/',
				},
				{
					title: 'Security',
					path: '/en/gatechain/gatechain-security/',
				},
				{
					title: 'PoS',
					path: '/en/gatechain/gatechain-pos/',
				},
				{
					title: 'Academic Research',
					path: '/en/gatechain/gatechain-research/',
				},
				{
					title: 'GateScan',
					path: '/en/gatechain/explorer/',
				},
				{
					title: 'Facuet',
					path: '/en/gatechain/facuet/',
				},
			],
			'/en/developers/': [
				{
					title: 'Deploy',
					path: '/en/developers/gatechain-build/',
				},
				{
					title: 'PoS',
					path: '/en/developers/gatechain-pos/',
				},
				{
					title: 'CLI',
					path: '/en/developers/cli/',
					children: [
						['/en/developers/cli/', 'Overview'],
						['/en/developers/cli/account/', 'Standard Account'],
						['/en/developers/cli/con-account/', 'Consensus Account'],
						['/en/developers/cli/vault-account/', 'Vault Account'],
						['/en/developers/cli/block/', 'Block'],
						['/en/developers/cli/tx/', 'Transaction Tx'],
						['/en/developers/cli/revocable-tx/', 'Revocable Tx'],
						['/en/developers/cli/token/', 'Token'],
						['/en/developers/cli/foundation/', 'Foundation'],
						['/en/developers/cli/staking/', 'Staking'],
						['/en/developers/cli/distribution/', 'Distribution'],

					]
				},
				{
					title: 'RPC',
					path: '/en/developers/api/',
					children: [
						['/en/developers/api/', 'Overview'],
						['/en/developers/api/account/', 'Standard Account'],
						['/en/developers/api/con-account/', 'Consensus Account'],
						['/en/developers/api/vault-account/', 'Vault Account'],
						['/en/developers/api/block/', 'Block'],
						['/en/developers/api/tx/', 'Transaction Tx'],
						['/en/developers/api/revocable-tx/', 'Revocable Tx'],
						['/en/developers/api/token/', 'Token'],
						['/en/developers/api/foundation/', 'Foundation'],
						['/en/developers/api/staking/', 'Staking'],
						['/en/developers/api/distribution/', 'Distribution'],

					]
				},
				{
					title: 'EVM_RPC',
					path: '/en/developers/json-rpc/',
				},
				{
					title: 'Web3JS',
					path: 'https://web3js.readthedocs.io/en/v1.2.11/',
					target: '_blank'
				},
			],
			'/en/integration/': [
				{
					title: 'RPC node',
					path: '/en/integration/rpc-node-list/',
				},
				{
					title: 'Exchange',
					path: '/en/integration/gatechain-platform/',
				},
				{
					title: 'Hipo PoS',
					path: '/en/integration/hipo-pos/',
				},
				{
					title: 'GateChain Endpoints',
					path: '/en/integration/endpoints/',
				},
				{
					title: 'Deploy smart contracts in GateChain',
					path: '/en/integration/smart-contract/',
				},
				{
					title: 'GateOracle',
					path: '/en/integration/gateoracle/',
				},
				{
					title: 'GateSwap',
					path: '/en/integration/gateswap/',
				},
				{
					title: 'GateBridge',
					path: '/en/integration/gatebridge-principles/',
					children: [
						['/en/integration/gatebridge-principles/', 'Core principles'],
						['/en/integration/gatebridge-use/', 'How to use']
					]
				},
				{
					title: 'Issue Token',
					path: '/en/integration/issuetoken/',
				},
				{
					title: 'NFT',
					path: '/en/integration/nft/',
					children: [
						['/en/integration/nft/', 'Issue NFT'],
						['/en/integration/metamask-mobile/', 'Check your NFT on the MetaMask mobile'],
						['/en/integration/gatescan/', 'View NFT in GateScan'],
					]
				},
				{
					title: 'Tools',
					path: '/en/integration/tool/',
					children: [
						['/en/integration/tool/', 'Introduction'],
						['/en/integration/tool-metamask/', 'MetaMask'],
						['/en/integration/tool-remix/', 'Remix'],
						['/en/integration/tool-truffle/', 'Truffle'],
					]
				},
				{
					title: 'Wallet',
					path: '/en/integration/gatechain-wallet/',
				},
			],
			'/en/faq/': [
				{
					title: 'More Help',
					path: '/en/faq/',
				},
			],
		}
	},
}

module.exports = enRouter