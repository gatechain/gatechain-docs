# 概述

>本文档涉及的版本为测试版，后继开发工作在持续进行。目前只针对专业生态机构开放。

GateChain全节点是GateChain运行的核心支撑。GateChain全节点`full node`具备GateChain的所有功能，包括构建本地GateChain测试网或加入GateChain公共测试网，同时支持下载链上区块数据，验证业务逻辑，参与链上治理（暂不开放）等功能。

## 支持环境
GateChain全节点目前支持包括Unix环境（mac OS、ubuntu、centos），windows环境以及docker安装。

## 配置需求
- 系统需求，装有较新版本的Mac OS X及以上版本，Windows 7以上版本或者Unix系统
- 8Gb以上内存以及100Gb以上的磁盘空间
- 至少1MB/s的稳定互联网接入带宽
 
## 安装步骤

介绍安装 `gated` and `gatecli`的具体步骤。

> 注意:请确保环境中已安装`curl`

#### Unix环境(mac OS,ubuntu,centos)
##### 安装 Go

请根据[go 官方文档](https://golang.org/doc/install)安装 `go`.

然后正确配置`$GOPATH`, `$GOBIN`, and `$PATH` 
例如:

```
mkdir -p $HOME/go/bin 
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
```

::: 提示
GateChain 需要 **Go 1.11.5+** .
:::

##### 命令行安装GateChain全节点

下载最新版本的GateChain代码, 使用`master`分支代码进行编译安装.

```
mkdir -p $GOPATH/src/github.com
cd $GOPATH/src/github.com
git clone https://github.com/gatechain/gatechain-rollback-go.git
mv gatechain-rollback-go gatechain
cd gatechain && git checkout master
make tools install
```

####  Windos环境
##### 安装 Go

请根据[go 官方文档](https://golang.org/doc/install)安装 `go`.**推荐以msi方式安装**

在高级系统设置中正确配置环境变量`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

例如:

1.创建相关文件夹

```
c:\workspace\go
c:\workspace\go\bin
c:\workspace\go\src
c:\workspace\go\pkg
```
2.配置环境变量`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

```
新建用户变量GOPATH值为c:\workspace\go
新建用户变量GOBIN值为c:\workspace\go\bin
新建用户变量GO111MODULE值为on
新建用户变量GOPROXY值为https://goproxy.io
编辑系统变量PATH最后添加c:\workspace\go\bin
```

::: 提示
GateChain 需要 **Go 1.11.5+** .
:::

##### 安装GateChain全节点

下载最新版本的gate代码, 使用`master`分支代码进行编译安装.

在GOPATH路径下创建目录src/github.com

命令行进入GOPATH下src/github.com

```
选择powershell程序: cd $env:GOPATH\src\github.com
选择cmd程序: cd %GOPATH%\src\github.com
```
下载代码,选择`master`分支

```
git clone https://github.com/gatechain/gatechain-rollback-go.git
cd gatechain && git checkout master
```
编译程序

```
go install .\cmd\gate\cmd\gated
go install .\cmd\gate\cmd\gatecli
```

####  docker安装

1.docker镜像导入

```
cd $GOPATH/src/github.com/gatechain/docker
docker load -i gatechaintest.tar
```
2.运行

```
docker run -it gate:latest /bin/bash
```

#### 验证安装结果
验证是否安装成功.

```
$ gated version --long
$ gatecli version --long

```
安装成功会显示类似如下信息:

```
gate: 0.33.0
git commit: 7b4104aced52aa5b59a96c28b5ebeea7877fc4f0
vendor hash: 5db0df3e24cf10545c84f462a24ddc61882aa58f
build tags: netgo ledger
go version go1.12 linux/amd64
```


## 创建本地测试网

####1.初始化创世区块文件

```bash
gated init --chain-id=testnet private  (选参 --home 指定存放目录)
```

####2.创建账户地址

```bash
gatecli account create validator
```

####3.添加Genesis账户

```bash
gated add-genesis-account $(gatecli account show-key validator -a) 1000000000000000000000000000GC
```

####4.添加共识账户

```bash
gated add-consensus-account $(gatecli account show-key validator -a)
```

####5.初始化去中心化交易所owner

```bash
gated add-genesis-dex-owner $(gatecli account show-key validator -a)
```

####6.启动节点

```bash
gated start
```

####7.gatecli 指令配置

```bash
cp ~/.gated/api.token ~/.gatecli/
```

## 加入测试网

####1.创建.gated

```bash
mkdir ~/.gated (可自定义目录)
```

####2.复制config、genesis文件

```
scp root@×××.×××.×××.×××:~/.gated/config.json ~/.gated/ (第一步创建的目录)
scp root@×××.×××.×××.×××:~/.gated/genesis.json ~/.gated/ (第一步创建的目录)
```
##### DevNet  [config.json](/devnet/config.json "DevNet config.json")  [genesis.json](/devnet/genesis.json "DevNet genesis.json") 
##### TestNet [config.json](/testnet/config.json "TestNet config.json")  [genesis.json](/testnet/config.json "TestNet genesis.json")

####3.更改路径

```bash
修改config.json "RootDir" 为 (第一步创建的目录), "DNSBootstrapID" 为 "<network>.gatenode.cc"

开发链
修改genesis.json "network" 为 "devnet"

测试链
修改genesis.json "network" 为 "testnet"
```

####4.启动节点

```bash
gated start
```
