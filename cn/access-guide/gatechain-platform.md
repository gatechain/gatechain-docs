
## 搭建GateChain节点

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

## 创建账户

#### 账户定义：

**普通账户：**类似于比特币地址的资金存储账户，普通账户账户中的资金可以快速支付，一旦被区块链确认后即不能撤回，私钥丢失后也不能恢复，适合用于存储少量资金做日常支付。

**保险账户：**GateChain首创的新账户模型，具有被盗资金可撤回以及私钥丢失可以恢复的重要安全特性，资金每次转出需要等待一定时间，适合存储和保护不需要立即使用的大额资金。

**EVM账户：**EVM账户在用法、格式、安全性上，与ETH保持一致；EVM账户可以向GateChain原生的保险账户进行转账，进而使用交易可撤回、定期清算等功能，轻松享受到最高级别的安全保护。


#### CLI命令

1. 创建普通账户
	
	```
	命令：gatecli account create [name]
	
	示例：gatecli account create testaccount
	
	```
2. 创建保险账户
	
	```
	命令：gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
	
	示例：gatecli vault-account create gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 38 300 30NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --fees 100000NANOGT --chain-id testnet
	
	```
	说明：

	* 必须使用新生成的账户作为基础账户，用来发送创建保险账户交易，
	* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
	* 清算高度需要大于（当前高度+延迟生效高度）

3. 创建EVM账户

	```
	命令：gatecli account eth-create [name]
	
	示例：gatecli account eth-create testevmaccount
	
	```

4. 导出EVM账户

	```
	命令：gatecli account unsafe-export-eth-key [name]
	
	示例：gatecli account unsafe-export-eth-key testevmaccount
	
	```

	* 说明：暂不支持导入EVM账户；


## 账户查询

```
命令：gatecli account show [账户地址]

示例：gatecli account show gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457

```

## 转账交易

```
命令：gatecli tx send [接收人账户] [转账金额] --from [发送人账户] --fees [交易手续费] --chain-id [链ID]

示例：gatecli tx send 0x37866a250B4B182DB235A88Cdc94004eF08c12C4 10NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --fees 100000NANOGT --chain-id testnet

```

说明：

* 此交易命令支持普通账户与EVM账户互转；
* 保险账户不可向EVM账户发起可撤回交易；




