

### 搭建开发环境
在开始之前，请保证环境达到以下要求：
* Node.js v8.9.4 或者更高
* Windows，Linux，或Mac OS X

### 创建项目
1. 首先创建一个项目，在终端输入以下内容：

	```
	mkdir testproject
	```
	
2. 初始化该项目，在终端输入以下内容：

	```
	cd testproject
	truffle init
	```
3. 完成此操作后，你会得到一个包含以下项目的项目结构：
	
	```
	contracts/：Truffle默认的合约文件存放目录。
	migrations/：可编写脚本的部署文件的目录。
	test/：用于测试应用和合约的测试文件目录。
	truffle-config.js：Truffle的配置文件。
	```

4. contracts在此目录下编写自己的智能合约。

## 编译及部署项目

1. 要编译Truffle项目，请转至为项目所在目录的根目录，然后在终端中输入以下内容：

	```
	truffle compile
	```
	
2. 配置GateChain网络，请转至“truffle-config.js”文件。

	```
	const HDWalletProvider = require('truffle-hdwallet-provider');
	const fs = require('fs');
	const mnemonic = fs.readFileSync(".secret").toString().trim();
	
	module.exports = {
	  networks: {
	    GateChain: {
	      provider: () => new HDWalletProvider(mnemonic, `https://evm.gatenode.cc`),
	      network_id: 86,
	      confirmations: 10,
	      timeoutBlocks: 200,
	      skipDryRun: true
	    },
	  },
	
	  mocha: {
	    timeout: 100000 // prevents tests from failing when pc is under heavy load
	  },
	
	  compilers: {
	    solc: {
	    }
	  }
	}
	```
	> 注意：需要配置MetaMask助记词，请从部署账户的助记词，获取方法：MetaMask-设置-安全与隐私，在根目录中创建一个新的.secret文件，然后输入助记词来开始使用。


3. 部署项目，请在终端中输入以下内容：

	```
	truffle migrate --network GateChain
	```
	
4. 合同将部署在GateChain网络中，如下所示：

	```
	Compiling your contracts...
		===========================
		> Everything is up to date, there is nothing to compile.
			
			
		Starting migrations...
		======================
		> Network name:    'GateChain'
		> Network id:      86
		> Block gas limit: 4294967295 (0xffffffff)
			
			
		1_initial_migration.js
		======================
			Replacing 'Migrations'
			----------------------
			> transaction hash:    0x2eaa10bd0a8cdd55022fd6a16372659a5fd52151b216a82d07f397c1c91642fe
			> Blocks: 0            Seconds: 4
			> contract address:    0x871e6B5eEaC4d69E33880cac1997F1374302eddC
			> block number:        98767
			> block timestamp:     1614756393
			> account:             0x06ae7981a16379fD627a879Ec017AaDFaa4BEf59
			> balance:             260.04901
			> gas used:            128511 (0x1f5ff)
			> gas price:           10000 gwei
			> value sent:          0 ETH
			> total cost:          1.28511 ETH
			   
		Summary
		=======
		> Total deployments:   1
		> Final cost:          1.28511 ETH
		
	```
	
> 注意：以上内容均为示例，只是为了提供结构思路。



