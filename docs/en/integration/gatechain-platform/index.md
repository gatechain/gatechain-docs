
## Build GateChain Node

## Install Node

#### Method 1: Use a script to install

* Important: Make sure "wget" installed already

The installation script ("install.sh") is maintained at Github, which is responsible for configuring gatechain binary files：

* The binary files is located at "/usr/local/bin"(i.e:"gated" "gatecli") by default

```
# One-click Installation
sh <(wget -qO- https://raw.githubusercontent.com/gatechain/node-binary/master/node/install.sh)
```

* Note：When installed in this way, the node can be started directly.

#### Method 2: Install with Custom Configurations

We use the github repository to store all the historical binaries of the node.

* Install Git LFS

  Git LFS is an extension that manages large files in Git. <a href="https://git-lfs.github.com/" target="_blank">git-lfs</a> and install.

* Clone the project
	
	```
	git lfs clone https://github.com/gatechain/node-binary.git
	```
* Choose the latest version of the binary

	```
	cd node-binary/node/{network}/{version}/{os_type}
	```
* Copy the binary files (i.e: "gated" "gatecli") to "/usr/local/bin"
	
	```
	cp gated gatecli /usr/local/bin
	```


#### Configurations 

Create a root directory $GATEHOME (or ~/.gated) for GateChain node files. This directory is used by default when the node starts. You can also customize the node's root directory by adding  -h $GATEHOME after the node start command.

```
mkdir ~/.gated
```


#### Configure to join Mainnet or testnet

Copy "config.json" and "genesis.json" from "node-binary/node/{network}/{version}/config/" to "$GATEHOME/"


### Start Node

```bash
gated start
```

### Start gc 

- To start GC, you need to modify the startup mode and add parameters

```
gated start modify to  gated start  --pruning nothing
```

### Start evm rpc

```
gatecli evm rest-server --gm-websocket-port http://127.0.0.1:8085 --chain-id mainnet --laddr tcp://0.0.0.0:6060 --rpc-api web3,eth,personal,net,debug

```

* If you need support evm rpc，needs to modify config.json The following attributes:
	* "WsPort": "tcp://0.0.0.0:8085"
	* "IsWebSocketServerActive":true  
	* Save and restart gated
	

## Create Account

#### Definitions

**Normal Account**：Like a standard bitcoin wallet, suitable for daily use. Assets in this type of account can be sent instantly and transactions are irreversible once confirmed on-chain. Lost private key can not be restored.

**Vault Account**：A new type of account that features revocable transactions. Assets in this type of account are transferred after a preset delay. Suitable for storage and safekeeping funds not for immediate use.

**EVM Account**：Bear similarities in usage, format, and safety with EVM on Ethereum. EVM account can transfer tokens to a vault account on GateChain and therefore to have the revocable transaction and clearing features unique to a Vault Account.


#### CLI

1.Create a Normal Account
	
```
Command：gatecli account create [name]
	
Example：gatecli account create testaccount
	
```
2.Create a Vault Account

```
Command：gatecli vault-account create [Base Account] [retrieval  account] [Delay Height] [Clearing Height] [Transfer amount] --from [Sender Account] --fees [Transaction Fees ] --chain-id [Chain ID]
	
Example：gatecli vault-account create gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 38 300 30NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --fees 100000NANOGT --chain-id testnet

```

Note：

* Use a new account as a base account to send a create vault account transaction.
* If the account received a standard transaction first, then the account becomes a normal account and can't send creat vault account transaction any longer. 
* Clearing height must be higher than（Current height+delay blocks）

3.Create EVM Account

```
Command：gatecli account eth-create [name]
	
Example：gatecli account eth-create testevmaccount

```

4.Export EVM Account

```
Command：gatecli account unsafe-export-eth-key [name]
	
Example：gatecli account unsafe-export-eth-key testevmaccount

```

* Note：Importing an EVM account is not allowed yet


## Account Query

```
Command：gatecli account show [Account address]

Example：gatecli account show gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457

```

## Transfer

```
Command：gatecli tx send [Recipient Account] [Transaction Amount ] --from [Sender Account] --fees [Transaction Fees ] --chain-id [Chain ID]

Example：gatecli tx send 0x37866a250B4B182DB235A88Cdc94004eF08c12C4 10NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --fees 100000NANOGT --chain-id testnet

```

Note：

* You can use this command to transfer between standard account and EVM account
* A Vault Account can not initiate a revocable transaction to an EVM account



