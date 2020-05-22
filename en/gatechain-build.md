# Overview

>This document is for testnet version and for professional and institutional user only at this moment.  Continuous development work is underway.

GateChain full node is the pivot to keeping GateChain running. GateChain full node has all functions of GateChain, including building a local testnet or joining  a public testnet. It also supports downloading onchain block data, verifying business logic and participating in onchain governance (yet to publish) among other functions.

## Supporting Environment
GateChain full nodes currently supports Unix environment (mac OS,ubuntu, and centos), windows environment, and docker installations.

## Configuration requirement
- system requirement:  Mac OS X or later. Windows 7 or later, or Unix system.
- memory 8Gb or above and disk space  100 Gb or above
- Stable access connection to Internet,with bandwidth 1MB/s  at least

## GateChain full node installation

Step by step installation of `gated` and `gatecli`.

#### Unix environment (mac OS,ubuntu,centos)
##### Install Go

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

##### Install GateChain full node with command line

Download the latest GateChain code and use `master` branch code for compiling and installing.

```bash

mkdir -p $GOPATH/src/github.com
cd $GOPATH/src/github.com
git clone https://github.com/gatechain/gatechain-rollback-go.git
mv gatechain-rollback-go gatechain
cd gatechain && git checkout master
make tools install
```

#### Windows environment
##### Install Go

Read [go document](https://golang.org/doc/install) to install `go`.**recommended installation method:msi**

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

##### Install GateChain full node

Download the latest GateChain code and use `master` branch code for compiling and installing.

Create a directory src/github.com under GOPATH path.

use command line to access to src/github.com  under GOPATH

```
Select powershell program: cd $env:GOPATH\src\github.com
Select cmd program: cd %GOPATH%\src\github.com
```
download code, select `master`branch

```
git clone https://github.com/gatechain/gatechain-rollback-go.git
cd gatechain && git checkout master
```
compile program

```
go install .\cmd\gate\cmd\gated
go install .\cmd\gate\cmd\gatecli
```

#### docker installation

1.docker mirror image importing

```
cd $GOPATH/src/github.com/gatechain/docker
docker load -i gatechaintest.tar
```
2.Run

```
docker run -it gate:latest /bin/bash
```

#### verify installation result
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


## Create a local testnet

####1.Initialize genesis block file
```bash
gated init --chain-id=testnet private (Optional parameter --home specify store directory)
```

####2.Create an account address 

```bash
gatecli account create
```

####3.Add a genesis account

```bash
gated add-genesis-account $(gatecli account show-key validator -a) 1000000000000000000000000000NANOGT
```

####4.Add a consensus account

```bash
gated add-consensus-account $(gatecli account show-key validator -a)
```

####5.Initialize  decentralized exchange owner

```bash
gated add-genesis-dex-owner $(gatecli account show-key validator -a)
```

####6.Start gatechain node

```bash
gated start
```

####7.gatecli configuration

```bash
cp ~/.gated/api.token ~/.gatecli/
```

## Join testnet

####1.Create .gated directory

```bash
mkdir ~/.gated (It is customizable)
```

####2.Copy config and genesis files

```bash
scp root@×××.×××.×××.×××:~/.gated/config.json ~/.gated/ (the directory created at the first step)
scp root@×××.×××.×××.×××:~/.gated/genesis.json ~/.gated/ (the directory created at the first step)
```
##### DevNet <a href="/devnet/config.json" target="_blank">config.json</a>  <a href="/devnet/genesis.json" target="_blank">genesis.json</a>

##### TestNet <a href="/testnet/config.json" target="_blank">config.json</a>  <a href="/testnet/genesis.json" target="_blank">genesis.json</a>

####3.Modify path

```bash
Change "RootDir" to the directory created at the first step, and "DNSBootstrapID" to "<network>.gatenode.cc" in the "config.json"

DevNet
change "network" to "devnet" in the "genesis.json"

TestNet
change "network" to "testnet" in the "genesis.json"
```

####4.Start node

```bash
gated start
```

