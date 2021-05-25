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

### 下载安装

#### 方式一:运行脚本自动安装

  > 注意:请确保环境中已安装 "wget"
  
我们将在github维护安装程序脚本("install.sh")它负责链可执行文件的设置。这将使用以下默认值：

- 可执行文件位于"/usr/local/bin"(即:"gated" "gatecli")

	```
	# 一键安装（需要代理）
	sh <(wget -qO- https://raw.githubusercontent.com/gatechain/node-binary/master/node/install.sh)
	
	# 国内用户一键安装（无需代理）
	sh <(wget -qO- https://gatechainbucket.oss-cn-beijing.aliyuncs.com/auto-install.sh) 
	
	* 说明：如果您第二次及以上操作一键安装，需要您先手动删除本地的gated/gatecli文件	
	```
	
	
#### 方式二:自定义配置安装1
我们目前使用这个库来存储已编译的节点二进制文件的历史版本。

- 安装 Git LFS

  Git LFS 是一个 Git 用来管理大文件的扩展。请访问 https://git-lfs.github.com/ 进行安装。

- 克隆资源库
	
	```
	git lfs clone https://github.com/gatechain/node-binary.git
	```
- 根据修改日志选择对应版本二进制

	```
	cd node-binary/node/{network}/{version}/{os_type}
	```
- 	复制二进制文件(即:"gated" "gatecli")到 "/usr/local/bin"
	
	```
	cp gated gatecli /usr/local/bin
	
	```
- 为GateChain创建节点文件根目录$GATEHOME(即~/.gated),该目录在启动节点时默认使用，也可在启动命令后加 -h $GATEHOME(可自定义的节点根目录)

```
	mkdir ~/.gated
```

- 将"config.json"  和 "genesis.json" 从 "node-binary/node/{network}/{version}/config/" 复制到 "$GATEHOME/"


#### 方式三：自定义配置安装2
用户可根据需要安装的系统来选择下载链接。

> 注意:请确保环境中已安装 "wget"

- mac

```
下载gated
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/binary/mac/gated

下载gatecli
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/binary/mac/gatecli


```

- linux

```
下载gated
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/binary/linux/gated

下载gatecli
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/binary/linux/gatecli

```

- 下载配置文件

```
下载config.json
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/config/config.json

下载genesis.json
wget https://gatechainbucket.oss-cn-beijing.aliyuncs.com/config/genesis.json


```

- 下载好的二进制文件(即:"gated" "gatecli")到 "/usr/local/bin"
```
cp gated gatecli /usr/local/bin
```
- 为GateChain创建节点文件根目录$GATEHOME(即~/.gated),该目录在启动节点时默认使用，也可在启动命令后加 -h $GATEHOME(可自定义的节点根目录)

```
mkdir ~/.gated
```

- 将下载好的配置文件（即:"config.json" "genesis.json"）复制到"$GATEHOME/"


### 启动节点

```bash
gated start
```

### 开启gc模式

- 开启gc模式需修改启动方式增加参数

```
即gated start 修改为 gated start  --pruning nothing
```

- 启动evm rpc方式

```
gatecli evm rest-server --gm-websocket-port http://127.0.0.1:8085 --chain-id mainnet --laddr tcp://0.0.0.0:6060 --rpc-api web3,eth,personal,net,debug

```

### 参与主网POS挖矿
如果要将此节点升级为共识节点，参与POS挖矿分得奖励，首先需要在本节点创建一个普通账户
```bash
gatecli account create
```

基于此普通账户，创建共识账户：
```bash
gatecli con-account create [账户地址] --chain-id mainnet
```

发起"共识账户上线"交易：
```bash
gatecli con-account online 
--from [发送者账户] 
--pubkey [发送者账户公钥] 
--moniker [名称] 
--commission-max-change-rate [每天最大手续费率变化]
--commission-max-rate [最大手续费率]
--commission-rate [手续费率]
--chain-id mainnet
```

共识账户上线成功后，此节点就会开始参与GateChain的共识过程，请保证自己的机器正常运转，网络正常连接。

具体参与共识的流程和奖励情况，请参照[POS挖矿](/gatechain-pos.md)。

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

