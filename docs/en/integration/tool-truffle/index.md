
### Build a dev environment
Before you start, make sure the environment meet the following requirements：

* Node.js v8.9.4 or higher
* Windows，Linux，or Mac OS X

### Create a project
1. Create a project and enter the following command in the terminal：
```
mkdir testproject
```
2. Initialize the project, and enter the following command in the terminal：
```
cd testproject
truffle init
```
Once completed, you will get a project structure like below: 
```
contracts/：Truffle default contract files directory
migrations /：deployment scripts files directory
test /：contract or application test files directory
truffle-config.js：Truffle config files.
```
3. contracts write your own contract under this directory.

### Compile and deploy a project

1. To compile a Truffle project, please go to the root directory of the project and enter the following command in the terminal:
```
truffle compile
```
2. To configure GateChain network, please go to “truffle-config.js” file.
```
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
	
	module.exports = {
	  networks: {
	    GateChain: {
	      provider: () => new HDWalletProvider(mnemonic, `https://evm.gatenode.cc`),
	      network_id: 86,
	      gas: 6000000,
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
> Please note：the mnemonic phrase for MetaMask account is required. Please fetch the mnemonic phrase from the deployed account, method：MetaMask-Setup-Security and Privacy，create a new .secret file from the root directory and enter the mnemonic phrase to start
3. Deploy the project, and enter the following command in the terminal：
```
truffle migrate --network GateChain
```
4. Contract will be deployed in GateChain network, as below：

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

> Please note, the above are examples only for helping you have a better understanding about the structure.





