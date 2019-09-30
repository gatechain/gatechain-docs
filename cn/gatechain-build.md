# GateChain全节点安装部署

>本文档涉及的版本为测试版，后继开发工作在持续进行。目前只针对专业生态机构开放。

GateChain全节点是GateChain运行的核心支撑。GateChain全节点`full node`具备GateChain的所有功能，包括构建本地GateChain测试网或加入GateChain公共测试网，同时支持下载链上区块数据，验证业务逻辑，参与链上治理（暂不开放）等功能。

## 1. 支持环境
GateChain全节点目前支持包括Unix环境（mac OS、ubuntu、centos），windows环境以及docker安装。

## 2. 配置需求
- 系统需求，装有较新版本的Mac OS X及以上版本，Windows 7以上版本或者Unix系统
- 8Gb以上内存以及100Gb以上的磁盘空间
- 至少1MB/s的稳定互联网接入带宽
 
## 3. GateChain全节点安装步骤

介绍安装 `gated` and `gatecli`的具体步骤。

> 注意:请确保环境中已安装`curl`

### 3.1 Unix环境(mac OS,ubuntu,centos)
#### 安装 Go

请根据[go 官方文档](https://golang.org/doc/install)安装 `go`.

然后正确配置`$GOPATH`, `$GOBIN`, and `$PATH` 
例如:

```bash
mkdir -p $HOME/go/bin

echo "export GOPATH=$HOME/go" >> ~/.bash_profile

echo "export GOBIN=$GOPATH/bin" >> ~/.bash_profile

echo "export PATH=$PATH:$GOBIN" >> ~/.bash_profile
```

::: 提示
GateChain 需要 **Go 1.11.5+** .
:::

#### 命令行安装GateChain全节点

下载最新版本的GateChain代码, 使用`master`分支代码进行编译安装.

```bash

mkdir -p $GOPATH/src/github.com

cd $GOPATH/src/github.com

git clone https://github.com/gatechain/gatechain-rollback-
go.git

mv gatechain-rollback-go gatechain

cd gatechain && git checkout master

make tools install
```

### 3.2 Windos环境
#### 安装 Go

请根据[go 官方文档](https://golang.org/doc/install)安装 `go`.**推荐以msi方式安装**

在高级系统设置中正确配置环境变量`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

例如:

1.创建相关文件夹

```bash
c:\workspace\go
c:\workspace\go\bin
c:\workspace\go\src
c:\workspace\go\pkg
```
2.配置环境变量`$GOPATH`, `$GOBIN`,`$PATH`,`GO111MODULE`,`GOPROXY `

```bash

新建用户变量GOPATH值为c:\workspace\go

新建用户变量GOBIN值为c:\workspace\go\bin

新建用户变量GO111MODULE值为on

新建用户变量GOPROXY值为https://goproxy.io

编辑系统变量PATH最后添加c:\workspace\go\bin
```

::: 提示
GateChain 需要 **Go 1.11.5+** .
:::

#### 安装GateChain全节点

下载最新版本的gate代码, 使用`master`分支代码进行编译安装.

在GOPATH路径下创建目录src/github.com

命令行进入GOPATH下src/github.com

```
选择powershell程序: cd $env:GOPATH\src\github.com
选择cmd程序: cd %GOPATH%\src\github.com
```
下载代码,选择`master`分支

```
git clone https://github.com/gatechain/gatechain-rollback-
go.git

cd gatechain && git checkout master
```
编译程序

```
go install .\cmd\gate\cmd\gated
go install .\cmd\gate\cmd\gatecli
```

### 3.3 docker安装

1.docker镜像导入

```
cd $GOPATH/src/github.com/gatechain/docker
docker load -i gatechaintest.tar
```
2.运行

```
docker run -it gate:latest /bin/bash
```

### 验证安装结果
验证是否安装成功.

```bash
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


## 4. 创建本地测试网

### 4.1 创建测试网

1. 初始化创世区块文件
```bash
gated init --chain-id=testing testing
```

2. 创建validator地址
```bash
gatecli account create
```
复制新创建validator地址

3. 初始化分配账户代币

```bash
gated add-genesis-account [validator-addr] 1000000000000gt
```

4. 创建去中心化交易所owner地址
```bash
gatecli account create
```
复制新创建去中心化交易所owner地址
5. 初始化去中心化交易所owner

```bash
gated add-genesis-dex-owner [owner-addr]
```

### 4.2 基金会初始化

1.创建基金会成员地址

```bash
gatecli account create
```
2.创建基金会配置文件foundation.json

```
   {
   	"max_members":"20",//基金会最大成员数
   	"reward": "0.02",//基金会分配比例
   	"confirm_period":"22800000000000",//基金会修改提案的过期时间
   	"members": [{//成员
   		"address": "[foundation-member-addr]",//成员地址
   		"proportion": "1"//成员权力
   	}]
   }
```
3. 将基金会配置写入创世区块文件中

```bash
gated add-foundations foundation.json
```

### 4.3 生成交易为测试网配置validator
```bash
gated gentx --from [validator-addr] --gas-prices 0.01gt
```

### 4.4 将validator配置交易写入创世区块文件中
```bash
gated collect-gentxs
```

### 4.5 启动测试网
```bash
gated start
```
## 5. 加入测试网

1. 初始化数据

```bash
gated init nodex
```

2. 获取genesis

```bash
mkdir -p $HOME/.gated/config
cp $GOPATH/src/github.com/gatechain/testnet/config/genesis.json $HOME/.gated/config/genesis.json
```
3. 设置Seed Nodes

在[种子节点列表](./gatechain-seeds.md)中选择种子节点,进行添加。

```bash
添加seed node 到$HOME/.gated/config/config.toml 中
seeds = "28dfd3550be2aa4bafce818a30cffe67b61543c4@122.112.249.25:26656,7d36cb89888e9b7cbe66669c0b8c1462cd810c4f@114.115.161.156:26656"
```


4. 启动节点

```bash
gated start
```
