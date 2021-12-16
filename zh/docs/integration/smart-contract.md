
## Remix简介
Remix是一个开源的用于Solidity智能合约开发的Web端IDE，提供基本的编译、部署至本地或测试网络、执行合约等功能。Solidity是Ethereum官方设计和支持的程序语言，专门用于编写智能合约。

本教程详细介绍Remix的编写说明，Truffle的编写说明请参考此文档：[Truffle教程](./tool-truffle.md)

## 前提条件

1. 您的MetaMask钱包需要提前配置好GateChain网络，如果还没有配置请参考此文档：[配置GateChain网络](./tool-metamask.md)
2. 配置好GateChain网络后，您的钱包账户需要持有GT余额，用来支付交易手续费，以下是如何获取GT代币的方式：
	- 通过GateChain主网gt账户向MetaMask钱包账户转账。
		- 发起转账交易：[CLI操作](../developers/cli/tx.md#发送交易)、[RPC操作](../developers/api/tx.md#发送交易)
	- 通过<a href="https://www.gate.io/cn" target="_blank">gate.io</a>提现到MetaMask钱包账户，注意请选择“GateChain智能链”，不要选择“以太坊ERC20”。

## 创建合约

1.打开remix网址（<a href="http://remix.ethereum.org" target="_blank">点击进入</a>），点击“New File”创建XXX.sol文件。

<img src="../../images/remix1.png"  height=50% width=50%>

2.点击创建好的文件，编写自己的智能合约代码，本教程以编写一个ERC-721的合约为例子，以下是开发示例：

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

3.开发完成后，编译合约。

<img src="../../images/remix2.png"  height=30% width=30%>

## 合约部署和交互

1.编译成功后，开始部署合约。

<img src="../../images/remix3.png"  height=30% width=30%>

2.点击“Deploy”开始部署合约，跳转到MetaMask与您的账户连接。

>（请确保MetaMask网络已切换到GateChain）

<img src="../../images/remix4.png"  height=30% width=30%>
	
3.打开部署好的合约，就可以选择某项功能与MetaMask进行交互啦!

<img src="../../images/remix5.png"  height=30% width=30%>
	
4.查询合约交互的交易详细信息，可以去gatechain浏览器查看。

>区块浏览器地址：<a href="https://gatescan.org/txs" target="_blank">点击进入</a>
>
>ERC-721的Mint交易记录示例：<a href="https://gatescan.org/tx/0xcb26d417b550e11d86a0042873383bf5eae69209c4f8a5823071d0edd0501626" target="_blank">点击进入</a>





