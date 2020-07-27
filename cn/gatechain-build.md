# 概述

GateChain全节点是GateChain运行的核心支撑。GateChain全节点"full node"具备GateChain的所有功能，包括构建本地GateChain测试网、加入GateChain公共测试网或加入GateChain主网，同时支持下载链上区块数据，验证及执行业务逻辑，观察共识信息等。

## 支持平台
GateChain全节点目前支持包括Unix环境（mac OS、ubuntu、centos）。

## 配置需求
硬件必须满足某些要求才能运行完整节点。

- 系统需求，装有Mac OS 10.14.6及以上版本、CentOS Linux release 7.7.1908及以上版本或者Ubuntu 18.04.2及以上版本	
- 4核8Gb以上内存以及100Gb以上的磁盘空间
- 至少1MB/s的稳定互联网接入带宽
 
## GateChain全节点安装步骤
#### 方式一:运行脚本自动安装
  > 注意:请确保环境中已安装 "wget"
  
我们将在github维护安装程序脚本("install.sh")它负责链可执行文件的设置。这将使用以下默认值：

- 可执行文件位于"/usr/local/bin"(即:"gated" "gatecli")

	```
	# 一键安装 
	sh <(wget -qO- https://raw.githubusercontent.com/gatechain/node_binary/master/node/install.sh)
	```
	
#### 方式二:自定义配置安装
我们目前使用这个库来存储已编译的节点二进制文件的历史版本。

- 安装 Git LFS

  Git LFS 是一个 Git 用来管理大文件的扩展。请访问 https://git-lfs.github.com/ 进行安装。

- 克隆资源库
	
	```
	git lfs clone https://github.com/gatechain/node_binary.git
	```
- 根据修改日志选择对应版本二进制

	```
	cd node-binary/fullnode/{network}/{version}
	```
- 	复制二进制文件(即:"gated" "gatecli")到 "/usr/local/bin"
	
	```
	cp gated gatecli /usr/local/bin
	```

### 配置文件 

为GateChain创建节点文件根目录$GATEHOME(即~/.gated),该目录在启动节点时默认使用，也可在启动命令后加 -h $GATEHOME(可自定义的节点根目录)

	
	mkdir ~/.gated


### 设置配置加入主网或测试网
将"config.json"  和 "genesis.json" 从 "node-binary/fullnode/{network}/{version}/config/" 复制到 "$GATEHOME/"

### 启动节点

```bash
gated start
```

### 创建本地私有链

- 初始化创世区块文件
```
gated init --chain-id=testing private
```

- 创建validator地址
```
gatecli account create validator
```
- 初始化分配账户代币
```
gated add-genesis-account [validator-addr] 1000000000000000000000000000NANOGT
```
- 初始化共识账户
```
gated add-consensus-account [validator-addr]
```
- 创建去中心化交易所owner地址
``` 
gatecli account create
```
- 初始化去中心化交易所owner
```
gated add-genesis-dex-owner [owner-addr]
```

- 启动测试网
```
gated start
```

### 管理节点
使用 "gatecli" 配置指令

	cp ~/.gated/api.token ~/.gatecli/

[CLI命令使用说明](./cli/README.md)

[API接口使用说明](./API/README.md)

