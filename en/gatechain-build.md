# Overview

GateChain full node is the pivot to keeping GateChain running. A GateChain "full node" has all functionalities of GateChain, including building a local testnet,  and joining  a public testnet  or mainnet. It also supports downloading onchain block data, validating and executing  business logic, observing consensus information, and more

## Supporting Platforms
GateChain full nodes currently can run in Unix environment (mac OS,ubuntu, and centos).

## Configuration Requirements
To run a full node, the hardware must meet certain requirements.

- system requirement: Mac OS 10.14.6 or later, CentOS Linux release 7.7.1908 or later, or Ubuntu 18.04.2 or later	
-  Quad-core, 8G RAM, 100Gb  HDD or more
-  Stable connection to Internet, bandwidth 1MB/s  or more
 
## GateChain Full Node Installation Instructions 
#### Method 1: Run A Script To Automatically Install
  > Note:  make sure "wget” has been installed in your environment
  
We maintain the install script  ("install.sh" ) at github.  "install.sh" is responsible for the configurations  of the executable file of chain. Value below is used by default:

- executable file is located at "/usr/local/bin"(that is:"gated" "gatecli")

	```
	# One-Click Install 
	sh <(wget -qO- https://raw.githubusercontent.com/gatechain/node_binary/master/node/install.sh)
	```
	
#### Method 2: Customize Configuration And Installation
We use the repository  to store historical versions of  the compiled node binary file for the time being. 

- Install Git LFS

  Git LFS is a command line extension and specification for managing large files with Git.

  Please go to https://git-lfs.github.com/ and install `git lfs`.

- Clone the repository
	
	```
	git lfs clone https://github.com/gatechain/node_binary.git
	```
- Choose the correct binary file version according to change log.

	```
	cd node-binary/node/{network}/{version}/{os_type}
	```
- Copy the binary file (that is:"gated" "gatecli") to "/usr/local/bin"
	
	```
	cp gated gatecli /usr/local/bin
	```

### Configure Files

Create root directory  $GATEHOME (or ~/.gated) for Gatechain node file.  The directory is used by default when bootstrap a node. You can also add -h $GATEHOME (customized node root directory) after the start command

	
	mkdir ~/.gated


### Configure  To Join Mainnet Or Testnet
From"node-binary/node/{network}/{version}/config/", copy "config.json"  and "genesis.json"  to "$GATEHOME/"

### Start Node

```bash
gated start
```

### Create A Privatechain Locally  

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

### Manage Node
Use the "gatecli" to configure command

	cp ~/.gated/api.token ~/.gatecli/

[CLI Operational Instruction](./cli/README.md)

[API Operational Instruction](./API/README.md)

