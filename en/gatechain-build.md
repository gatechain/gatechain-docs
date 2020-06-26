# Overview

>This document is for testnet version and for professional and institutional user only at this moment.  Continuous development work is underway.

GateChain full node is the pivot to keeping GateChain running. GateChain`full node`has all functions of GateChain, including building a local testnet or joining  a public testnet. It also supports downloading onchain block data, verifying business logic and participating in onchain governance (yet to open) among other functions.

## Supporting Environment
GateChain full nodes currently supports Unix environment (mac OS,ubuntu, and centos), windows environment, and docker installations.

## Configuration Requirements
- system requirement:  Mac OS X or later. Windows 7 or later, or Unix system.
- memory 8Gb or above and disk space  100 Gb or above
- Stable access connection to Internet, with bandwidth 1MB/s  at least
 
## Installation Instructions 

Step by step installation instructions of  `gated` and `gatecli`.

> Note::Make sure `curl` already installed in the environment 

#### Unix  Environment (mac OS,ubuntu,centos)
##### Install Go

Read [go Document ](https://golang.org/doc/install) and install `go`.

Then configure `$GOPATH`, `$GOBIN`, and `$PATH` 
example:

```
mkdir -p $HOME/go/bin 
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
```

:::  Tip
GateChain requires **Go 1.11.5+** .
:::

##### Install GateChain Full Node with Command Line

Download the latest GateChain code and use `master`branch code for compiling and installing.

```
mkdir -p $GOPATH/src/github.com
cd $GOPATH/src/github.com
git clone https://github.com/gatechain/gatechain-rollback-go.git
mv gatechain-rollback-go gatechain
cd gatechain && git checkout master
make tools install
```

####  Windos Environment
##### Install Go

Read [go Document ](https://golang.org/doc/install) and install `go`.**recommended installation method msi**

In advanced system settings, correctly configure  environmental variables `$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

Example:

1.Create a folder

```
c:\workspace\go
c:\workspace\go\bin
c:\workspace\go\src
c:\workspace\go\pkg
```
2.Configure environmental variables`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

```
For new user variable GOPATH, value is c:\workspace\go
For new user variable GOBIN, value is c:\workspace\go\bin
For new user variable GO111MODULE,value is on
For new user variable GOPROXY,value is https://goproxy.io
Edit system variable PATH and add c:\workspace\go\bin
```

:::  Tip
GateChain requires **Go 1.11.5+** .
:::

##### Install GateChain Full Node

Download the latest GateChain code and use `master`branch code for compiling and installing.

Create a directory src/github.com  under GOPATH.

Use command line to access to src/github.com  under GOPATH.

```
Select powershell program: cd $env:GOPATH\src\github.com
Select cmd program: cd %GOPATH%\src\github.com
```
download code, select `master`branch

```
git clone https://github.com/gatechain/gatechain-rollback-go.git
cd gatechain && git checkout master
```
Compile Program

```
go install .\cmd\gate\cmd\gated
go install .\cmd\gate\cmd\gatecli
```

####  docker Installation

1.docker mirror image importing

```
cd $GOPATH/src/github.com/gatechain/docker
docker load -i gatechaintest.tar
```
2.Run

```
docker run -it gate:latest /bin/bash
```

#### Verify Installation Result
Verify if installation is successful.

```
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


## Create a Local Testnet

####1.Initialize Genesis Block File

```bash
gated init --chain-id=testnet private  (Optional parameter--home specifies store directory)
```

####2.Create an Account Address 

```bash
gatecli account create validator
```

####3.Add Genesis Account

```bash
gated add-genesis-account $(gatecli account show-key validator -a) 1000000000000000000000000000NANOGT
```

####4.Add Consensus Account

```bash
gated add-consensus-account $(gatecli account show-key validator -a)
```

####5.Initialize  Decentralized Exchange Owner

```bash
gated add-genesis-dex-owner $(gatecli account show-key validator -a)
```

####6.Start Node

```bash
gated start
```

####7.gatecli Command configuration

```bash
cp ~/.gated/api.token ~/.gatecli/
```

## Join Testnet


####1.Create.gated

```bash
mkdir ~/.gated (customizable)
```

####2.Copy config and genesis Files

```
scp root@×××.×××.×××.×××:~/.gated/config.json ~/.gated/ (directory created at the first step)
scp root@×××.×××.×××.×××:~/.gated/genesis.json ~/.gated/ (directory created at the first step)
```
##### DevNet <a href="/devnet/config.json" target="_blank">config.json</a>  <a href="/devnet/genesis.json" target="_blank">genesis.json</a>
##### TestNet <a href="/testnet/config.json" target="_blank">config.json</a>  <a href="/testnet/genesis.json" target="_blank">genesis.json</a>

####3.Modify Path

```bash
Change config.json "RootDir" to the directory created at the first step, and "DNSBootstrapID" to "<network>.gatenode.cc"

DevNet
Change genesis.json "network" to "devnet"

TestNet
Change genesis.json "network" to "testnet"
```

####4.Start Node

```bash
gated start
```
