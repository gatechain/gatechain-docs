# GateChain full node  installation and deployment 

>This document is for testnet version and for professional and institutional user only at this moment.  Continuous development work is underway.

GateChain full node is the pivot to keeping GateChain running. GateChain full node has all functions of GateChain, including building a local testnet or joining  a public testnet. It also supports downloading onchain block data, verifying business logic and participating in onchain governance (yet to publish) among other functions.

## 1. Supporting Environment
GateChain full nodes currently supports Unix environment (mac OS,ubuntu, and centos), windows environment, and docker installations.

## 2. Configuration  requirement
- system requirement:  Mac OS X or later. Windows 7 or later, or Unix system.
- memory 8Gb or above and disk space  100 Gb or above
- Stable access connection to Internet,with bandwidth 1MB/s  at least
 
## 3. GateChain full node installation

Step by step installation of `gated` and `gatecli`.

### 3.1 Unix environment (mac OS,ubuntu,centos)
#### Install Go

Read [go document](https://golang.org/doc/install) and install `go`.

Then config `$GOPATH`, `$GOBIN`, and `$PATH` 
example:

```bash
mkdir -p $HOME/go/bin

echo "export GOPATH=$HOME/go" >> ~/.bash_profile

echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile

echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
```

::: Tip
GateChain needs **Go 1.11.5+** .
:::

#### Install GateChain full node with command line

Download the latest GateChain code and use `master` branch code for compiling and installing.

```bash

mkdir -p $GOPATH/src/github.com

cd $GOPATH/src/github.com

git clone https://github.com/gatechain/gatechain-rollback-
go.git

mv gatechain-rollback-go gatechain

cd gatechain && git checkout master

make tools install
```

### 3.2 Windos environment
#### Install Go Go

Read [go docunment](https://golang.org/doc/install) to install `go`.**recommended installation method:msi**

In advanced system settings, correctly config  environmental variables `$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

Example:

1.Create a folder

```bash
c:\workspace\go
c:\workspace\go\bin
c:\workspace\go\src
c:\workspace\go\pkg
```
2.Config environmental variables`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

```bash

For new user variable GOPATH , value is c:\workspace\go

For new user variable GOBIN, value is c:\workspace\go\bin

For new user variable GO111MODULE, value is on

For new user variable GOPROXY, value is https://goproxy.io

Edit system variable PATH,  and add c:\workspace\go\bin
```

::: Tip
GateChain needs **Go 1.11.5+** .
:::

#### Install GateChain full node

Download the latest GateChain code and use `master` branch code for compiling and installing.

Greate a directory src/github.com under GOPATH path.

use command line to access to src/github.com  under GOPATH

```
Select powershell program: cd $env:GOPATH\src\github.com
Select cmd program: cd %GOPATH%\src\github.com
```
download code, select `master`branch

```
git clone https://github.com/gatechain/gatechain-rollback-
go.git

cd gatechain && git checkout master
```
compile program

```
go install .\cmd\gate\cmd\gated
go install .\cmd\gate\cmd\gatecli
```

### 3.3 docker installation

1.docker mirror image importing

```
cd $GOPATH/src/github.com/gatechain/docker
docker load -i gatechaintest.tar
```
2.Run

```
docker run -it gate:latest /bin/bash
```

### verify installation result
Verify if installation is successful.

```bash
$ gated version --long
$ gatecli version --long

```
If successfully installed, the following information will display:

```
gate: 0.33.0
git commit: 7b4104aced52aa5b59a96c28b5ebeea7877fc4f0
vendor hash: 5db0df3e24cf10545c84f462a24ddc61882aa58f
build tags: netgo ledger
go version go1.12 linux/amd64
```


## 4. Create a local testnet

### 4.1 Create a  testnet

1. Initialize genesis block file
```bash
gated init --chain-id=testing testing
```

2. Create a validator address 
```bash
gatecli account create
```
copy the new validator address

3. Initialize distribution of account token

```bash
gated add-genesis-account [validator-addr] 1000000000000gt
```

4. Create a decentralized exchange  owner address
```bash
gatecli account create
```
Copy the new decentralized exchange owner address
5. Initialize  decentralized exchange owner

```bash
gated add-genesis-dex-owner [owner-addr]
```

### 4.2 Initialize foundation

1.Create foundation member address

```bash
gatecli account create
```
2.Create foundation config file foundation.json

```
   {
   	"max_members":"20",//maximum foundation members
   	"reward": "0.02",//foundation distribution ratio
   	"confirm_period":"22800000000000",//foundation modification proposal expiration time 
   	"members": [{//member
   		"address": "[foundation-member-addr]",//member address
   		"proportion": "1"//member stake
   	}]
   }
```
3. Write the foundation config into genesis block file.

```bash
gated add-foundations foundation.json
```

### 4.3 Generate a transaction to config validator in testnet
```bash
gated gentx --from [validator-addr] --gas-prices 0.01gt
```

### 4.4 write validator config transaction into genesis block file
```bash
gated collect-gentxs
```

### 4.5 Start testnet
```bash
gated start
```
## 5. Join testnet

1. Initialize  data

```bash
gated init nodex
```

2. Get genesis

```bash
mkdir -p $HOME/.gated/config
cp $GOPATH/src/github.com/gatechain/testnet/config/genesis.json $HOME/.gated/config/genesis.json
```
3. Setup Seed Nodes

In [seed node list](./gatechain-seeds.md) choose a seed node to add.

```bash
Add seed node to $HOME/.gated/config/config.toml 
seeds = "28dfd3550be2aa4bafce818a30cffe67b61543c4@122.112.249.25:26656,7d36cb89888e9b7cbe66669c0b8c1462cd810c4f@114.115.161.156:26656"
```

4. Start node

```bash
gated start
```
