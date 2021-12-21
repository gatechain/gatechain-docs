

### About Remix 
Remix is an open sourced Solidity IDE that's used to write, compile and debug contracts. 
Solidity is the programming language designed for developing smart contracts on Ethereum. 


### Prerequisite

1. Your MetaMask wallet needs to be configured with the GateChain network in advance,If not already configured, please refer to this document: [Connect GateChain network](./tool-metamask.md)
2. After the gatechain network is configured, your wallet account needs to hold GT balance to pay transaction handling fees. The following is how to obtain GT Tokens:
	- Transfer to metamask wallet account through gatechain mainnet gt account.
		- Initiate transfer transaction: [CLI](../developers/cli/tx.md#Send-Transaction)、[RPC](../developers/api/tx.md#Send-Transaction)
	- Through <a href="https://www.gate.io/cn" target="_blank">gate.io</a> withdraw to metamask wallet account
Please select "GateChain/GRC20" instead of "ETH/ERC20".


### Create Contract

1.Open remix website（<a href="http://remix.ethereum.org" target="_blank">Click to enter</a>）, click “New File” to create a XXX.sol file.

<img src="../../images/remix1.png"  height=50% width=50%>

2.Click the file you created, and start to write your own smart contract code. 

3.Once the development is completed, start compiling smart contract.
 
<img src="../../images/remix2.png"  height=30% width=30%>

### Deploy and Interact with Smart Contract

1.Once compilation is completed, start deploying the smart contract.

<img src="../../images/remix3.png"  height=30% width=30%>
	
2.Click“Deploy” to start to deploy the smart contract. Jump to MetaMask to connect to your account

>（Make sure MetaMask network is on GateChain）
	
<img src="../../images/remix4.png"  height=30% width=30%>
	
3.Open the deployed contract and you can choose a functionality to interact with MetaMask!

<img src="../../images/remix5.png"  height=30% width=30%>
	
4.Query details about contract interaction on the gatechain block explorer.

> Block explorer：<a href="https://gatescan.org/txs" target="_blank">Click to enter</a>
> 
>Example of mint transactions for ERC-721: <a href="https://gatescan.org/tx/0xcb26d417b550e11d86a0042873383bf5eae69209c4f8a5823071d0edd0501626?lang=en_US" target="_blank">Click to enter</a>






