## 概述

用户资产将以Token的形式储存在GateChain上，所有资产都必须符合GateChain的Token管理标准。

资产拥有者可以对自己的资产进行发布、增发、销毁、冻结/解冻等操作，所有操作都将产生一定的费用，费用将以GateToken的形式支付。


## 发行

通过CLI或者通过API可以实现在GateChain上发行自己的数字资产。

资产发布者在按照要求填写相关信息并获得验证后，即可在GateChain上以Token的形式发布自己的资产，相关操作指令如下：

* [CLI详细操作](../../developers/cli/token/index.md)
* [API详细操作](../../developers/api/token/index.md)

> 注：主网发布新Token的费用为200GT。

## ERC20 Token

此标准规定了以太坊代币合约需要实现的函数功能和事件记录，即一套api标准，为以太坊代币合约制定了一套标准的接口，使得种类繁多的代币能够被更多的DAPP，交易所所兼容。其中包括如代币名称，代币符号，小数点位，总供应量，余额，转账，从他人处转账，允许量值，事件等一些接口。


## ERC721 Token

相比继承了一些ERC 20标准的基本功能接口，他主要是增加了tokenid。ERC20是标准Token接口，ERC20的Token可以无限细分为10^18份，而ERC721的Token最小的单位为1，无法再分割。







