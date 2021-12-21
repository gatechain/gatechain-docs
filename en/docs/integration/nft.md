
### Connect MetaMask to GateChain

"MetaMask" is created to build a more safe and accessible "Ethereum" network. It connects users to blockchain and manage accounts, supported on Chrome, Brave and Safari.

1. In this tutorial, we will use MetaMask wallet to manage your account assets in GateChain network;
2. If you have not downloaded the MetaMask wallet, please refer to this tutorial to install the wallet: [Install MetaMask](./tool-metamask.md)
3. Before issuing the contract, please ensure that the wallet has been switched to the GateChain network,If you have not added GateChain network, please add it according to the following configuration:

	> Network name: GateChain
	> 
	> RPC URL: https://evm.gatenode.cc
	>
	> Chain ID: 86
	> 
	> Symbol: GT
	> 
	> Block explorer: https://gatescan.org/ 


### Get GT tokens

1. Transfer to metamask wallet account through gatechain mainnet gt account.
	- Initiate transfer transaction: [CLI](../developers/cli/tx.md#Send-Transaction)、[RPC](../developers/api/tx.md#Send-Transaction)
2. Through <a href="https://www.gate.io/cn" target="_blank">gate.io</a> withdraw to metamask wallet account
Please select "GateChain/GRC20" instead of "ETH/ERC20".


### Writing contracts using Remix or Truffle

This tutorial details the instructions for writing Remix,Please refer to this document for truffle writing instructions: [Truffle](./tool-truffle.md)

Remix is an open sourced Solidity IDE that's used to write, compile and debug contracts. Solidity is the programming language designed for developing smart contracts on Ethereum.


#### Create Contract


1.Open remix website（<a href="http://remix.ethereum.org" target="_blank"> Click to enter </a>），click “New File” to create a XXX.sol file.

<img src="../../images/remix1.png"  height=50% width=50%>

2.Click the file you created, and start to write your own smart contract code.

3.The following is a development example of ERC-721 we provide:

First install the environment

```
npm install @openzeppelin/contracts
```

Example(For reference only):

```
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyCollectible is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") {
    }
}
```
4.The following is a development example of ERC-1155 we provide:

First install the environment

```
npm install @openzeppelin/contracts
```

Example(For reference only):

```
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyCollectible is ERC1155 {
    constructor() ERC1155("https://token-cdn-domain/{id}.json") {
    }
}

```

5.Once the development is completed, start compiling smart contract.

<img src="../../images/remix2.png"  height=30% width=30%>

#### Deploy and Interact with Smart Contract

1. Once compilation is completed, start deploying the smart contract.

	<img src="../../images/remix3.png"  height=30% width=30%>

2. Click“Deploy” to start to deploy the smart contract. Jump to MetaMask to connect to your account

	>（Make sure MetaMask network is on GateChain）

	<img src="../../images/remix4.png"  height=30% width=30%>
	
3. Open the deployed contract and you can choose a functionality to interact with MetaMask!

	<img src="../../images/remix5.png"  height=30% width=30%>
	
4. Query details about contract interaction on the gatechain block explorer.

	>Block explorer:<a href="https://gatescan.org/txs?lang=en_US" target="_blank">Click to enter</a>
	>
	>Example of mint transactions for ERC-721: <a href="https://gatescan.org/tx/0xcb26d417b550e11d86a0042873383bf5eae69209c4f8a5823071d0edd0501626?lang=en_US" target="_blank">Click to enter</a>
	
	
### Other

1. If you want to view your NFT on the metamask mobile terminal,Please jump to [Check your NFT on the MetaMask mobile](./metamask-mobile.md)

2. If you are new to smart contract development, please refer to this document to learn how to develop and compile contracts.
	- https://docs.openzeppelin.com/learn/developing-smart-contracts

3. Current NFT contracts are generally developed based on two official Ethereum specifications: ERC721 and ERC1155. For the difference between these two protocols, please refer to the official Ethereum documentation:
	- https://eips.ethereum.org/EIPS/eip-721  
	- https://eips.ethereum.org/EIPS/eip-1155
