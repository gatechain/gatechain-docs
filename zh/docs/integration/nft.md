
### MetaMask配置GateChain网络

MetaMask是为了创建更安全和可用的以太坊网站而创建的。特别是它处理帐户管理并将用户连接到区块链。Chrome、Brave和Safari浏览器都支持它。

1. 本教程中，我们将使用MetaMask钱包来管理您在GateChain网络中的账户资产；
2. 如果您没有下载MetaMask钱包，请参考此教程安装钱包：[安装MetaMask](./tool-metamask.md)
3. 发行合约之前，请确保钱包已经切换到GateChain网络，如果您还没有添加GateChain网络，请按以下配置添加：

	> 网络名称: GateChain （可自定义）
	> 
	> RPC URL: https://evm.gatenode.cc
	>
	> 链 ID: 86
	> 
	> 符号: GT
	> 
	> 区块浏览器: https://gatescan.org/ 


### 获得GT代币

1. 通过GateChain主网gt账户向MetaMask钱包账户转账。
	- 发起转账交易：[CLI操作](../developers/cli/tx.md#发送交易)、[RPC操作](../developers/api/tx.md#发送交易)
2. 通过<a href="https://www.gate.io/cn" target="_blank">gate.io</a>提现到MetaMask钱包账户，注意请选择“GateChain智能链”，不要选择“以太坊ERC20”。


### 使用Remix或Truffle编写合约

本教程详细介绍Remix的编写说明，Truffle的编写说明请参考此文档：[Truffle教程](./tool-truffle.md)

Remix是一个开源的用于Solidity智能合约开发的Web端IDE，提供基本的编译、部署至本地或测试网络、执行合约等功能。Solidity是Ethereum官方设计和支持的程序语言，专门用于编写智能合约。

#### 编写合约

1.打开remix网址（<a href="http://remix.ethereum.org" target="_blank">点击进入</a>），点击“New File”创建XXX.sol文件。

<img src="../../images/remix1.png"  height=50% width=50%>

2.点击创建好的文件，编写自己的智能合约代码。

3.以下我们提供了ERC-721的开发示例：

首先安装环境

```
npm install @openzeppelin/contracts
```

示例代码（仅供参考）：

```
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyCollectible is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") {
    }
}
```
4.以下我们提供了ERC-1155的开发示例：

首先安装环境

```
npm install @openzeppelin/contracts
```

示例代码（仅供参考）：

```
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyCollectible is ERC1155 {
    constructor() ERC1155("https://token-cdn-domain/{id}.json") {
    }
}

```

5.开发完成后，编译合约。

<img src="../../images/remix2.png"  height=30% width=30%>

#### 合约部署和交互

1. 编译成功后，开始部署合约。

	<img src="../../images/remix3.png"  height=30% width=30%>

2. 点击“Deploy”开始部署合约，跳转到MetaMask与您的账户连接。

	>（请确保MetaMask网络已切换到GateChain）

	<img src="../../images/remix4.png"  height=30% width=30%>
	
3. 打开部署好的合约，就可以选择某项功能与MetaMask进行交互啦!

	<img src="../../images/remix5.png"  height=30% width=30%>
	
4. 查询合约交互的交易详细信息，可以去gatechain浏览器查看。

	>区块浏览器地址：<a href="https://gatescan.org/txs" target="_blank">点击进入</a>
	>
	>ERC-721的Mint交易记录示例：<a href="https://gatescan.org/tx/0xcb26d417b550e11d86a0042873383bf5eae69209c4f8a5823071d0edd0501626" target="_blank">点击进入</a>
	
	
### 其他

1. 如果您想在MetaMask手机端查看自己的NFT，请跳转至 [MetaMask手机端NFT操作教程](./metamask-mobile.md)

2. 如果您是智能合约开发的新手，请参考此文档来学习如何开发和编译合约
	- https://docs.openzeppelin.com/learn/developing-smart-contracts

3. 当前NFT合约一般基于以太坊官方的两种规范进行开发：ERC721和ERC1155。这两种协议的区别请参考以太坊官方文档：
	- https://eips.ethereum.org/EIPS/eip-721  
	- https://eips.ethereum.org/EIPS/eip-1155
