
"GateChain-Evm" is the native module based on "Gatemint" consensus, which supports "Ethereum" smart contracts and provides rpc services to connect to "MetaMask". Users can deploy and call contracts on "GateChain" by simply switching to "GateChain" network. 

### MetaMask Introduction

"MetaMask" is created to build a more safe and accessible "Ethereum" network. It connects users to blockchain and manage accounts, supported on Chrome, Brave and Safari.

### Install

Example: Install in Chrome browser

1. In Chrome browser, <a href="https://chrome.google.com/webstore/search/MetaMask" target="_blank">Download</a>
	
	* note：make sure it is provided by metamask.io

	<a data-fancybox title="" href="@assets/img/en/metamask1.png"><img src="@assets/img/en/metamask1.png"  height=50% width=50%></a>

2. CLick “Add to Chrome”. It is installed now and you can create your account. 

	<a data-fancybox title="" href="@assets/img/en/metamask2.png"><img src="@assets/img/en/metamask2.png"  height=50% width=50%></a>


### Create Account

1.You can choose to import a wallet or create a wallet. Click “Create a wallet”

<a data-fancybox title="" href="@assets/img/en/metamask3.png"><img src="@assets/img/en/metamask3.png"  height=50% width=50%></a>

2.Enter password and backup account mnemonic

<a data-fancybox title="" href="@assets/img/en/metamask4.png"><img src="@assets/img/en/metamask4.png"  height=50% width=50%></a>
<a data-fancybox title="" href="@assets/img/en/metamask5.png"><img src="@assets/img/en/metamask5.png"  height=50% width=50%></a>

3.When the mnemonic is verified, the account is successfully created. You can connect to gatechain now!

<a data-fancybox title="" href="@assets/img/en/metamask6.png"><img src="@assets/img/en/metamask6.png"  height=50% width=50%></a>


### Connect MetaMask to GateChain

1. Click MetaMask-Setup-Network-Add Network, and configure GateChain network service

<a data-fancybox title="" href="@assets/img/en/metamask7.png"><img src="@assets/img/en/metamask7.png"  height=50% width=50%></a>

> Network name: GateChain （customized）
> 
> RPC URL1: https://evm.gatenode.cc 
>
> RPC URL2: https://evm-hk.gatenode.cc
>
> Chain ID: 86
> 
> Symbol: GT
> 
> Block explorer: https://gatescan.org

### Transfer balance from your “gt” account to your MetaMask account.

1. Transfer from your wallet: copy an MetaMask account address, and paste to the recipient wallet field in your wallet. Transfer- To [[Step by step instruction]](../gatechain-wallet/index.md#evm)

2. Transfer using CLI or RPC：similar to a transfer from a wallet, just provide the recipient address to send transaction to. 
> [[CLI User Guide]](../../developers/cli/tx/index.md#Send-Transaction)
> 
> [[API User Guide]](../../developers/api/tx/index.md#Send-Transaction)

### Transfer GT to another MetaMask account

1.Chose the account to send asset to, then got to Homepage and click"Send"button

<a data-fancybox title="" href="@assets/img/en/metamask10.png"><img src="@assets/img/en/metamask10.png"  height=50% width=50%></a>

2.Enter the amount and To address, click "NEXT".

<a data-fancybox title="" href="@assets/img/en/metamask11.png"><img src="@assets/img/en/metamask11.png"  height=50% width=50%></a>

3.Double check transaction and click "Confirm". The transaction will be waiting for being included in blockchain.

<a data-fancybox title="" href="@assets/img/en/metamask12.png"><img src="@assets/img/en/metamask12.png"  height=50% width=50%></a>

4.When the transaction is successful, view transaction details from a gatechain block explorer.
	
* BLock explorer：<a href="https://gatescan.org/txs" target="_blank">Click to enter</a>

>Read below for how to deploy contract and interact with contract.
