# Overview

GateChain's full nodes are key to keeping the network running. A full node has all of GateChain's features, including building a local testnet, and joining a public testnet or mainnet. It also supports downloading onchain block data, validating and executing business logic, observing consensus information, and more!

## Supporting Platforms
GateChain full nodes currently can run in Unix environments (mac OS,ubuntu, and centos).

## Configuration Requirements
To run a full node, the hardware must meet certain requirements.

-  OS: Mac OS 10.14.6 or above, CentOS Linux release 7.7.1908 or above, Ubuntu 18.04.2 or above;	
-  Storage: Quad-core, 8G RAM, 100Gb  HDD or more
-  Network: Stable internet connection, bandwidth 1MB/s  or above.
 
## GateChain Full Node Installation Instructions 
#### Method 1: Run A Script To Automatically Install

> Note:  make sure "wget” has been installed in your environment.
  
The installation script ("install.sh" ) is located on Github. "install.sh" is responsible for the configuration of the chain's executable file. Value below is used by default:

- executable file is located at "/usr/local/bin"(that is:"gated" "gatecli")

	```
	# One-Click Install 
	sh <(wget -qO- https://raw.githubusercontent.com/gatechain/node-binary/master/node/install.sh)
	```
	
#### Method 2: Customize Configuration And Installation
We use the repository to store previous versions of the compiled node binary files for the time being. 

- Install Git LFS

  Git LFS is a command line extension and specification for managing large files with Git.

  Please go to https://git-lfs.github.com/ and install `git lfs`.

- Clone the repository
	
	```
	git lfs clone https://github.com/gatechain/node-binary.git
	```
- Choose the correct binary file version according to the change log.

	```
	cd node-binary/node/{network}/{version}/{os_type}
	```
- Copy the binary file (that is:"gated" "gatecli") to "/usr/local/bin"
	
	```
	cp gated gatecli /usr/local/bin
	```

### File Configuration

Create root directory $GATEHOME (or ~/.gated) for Gatechain's node file. The directory is used by default when bootstrapping a node. You can also add -h $GATEHOME (customized node root directory) after the start command

	
	mkdir ~/.gated


### Configuration To Join Mainnet Or Testnet
From "node-binary/node/{network}/{version}/config/", copy "config.json"  and "genesis.json"  to "$GATEHOME/"

### Starting your Node

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


### PoS Mining
By building a full node to participate in the consensus, 
you need to create a base account on your node.
```bash
gatecli account create
```

After the base account, create a consensus account:
```bash
gatecli con-account create [address] --chain-id mainnet
```


Send a con-account online transaction:
```bash
gatecli con-account online 
--from [address] 
--pubkey [pub key] 
--moniker [name] 
--commission-max-change-rate [max change rate]
--commission-max-rate [max rate]
--commission-rate [rate]
--chain-id mainnet
```

If this online transaction is success, this node will begin participate in the consensus,
please keep your machine running.

For more detail, follow [POS Mining](/gatechain-pos.md).

### Creating A Local Private Chain  

- Initialize the genesis block file
```
gated init --chain-id=testing private
```

- Create validator address
```
gatecli account create validator
```
- Initialize account token distribution 
```
gated add-genesis-account [validator-addr] 1000000000000000000000000000NANOGT
```
- Initialize consensus accounts
```
gated add-consensus-account [validator-addr]
```
- Create decentralized exchange owner address
``` 
gatecli account create
```
- Initialize  decentralized exchange owner
```
gated add-genesis-dex-owner [owner-addr]
```

- Start testnet
```
gated start
```

### Node Management
Use the "gatecli" to configure 

	cp ~/.gated/api.token ~/.gatecli/

[CLI Operational Instructions](./cli/README.md)

[API Operational Instructions](./API/README.md)

