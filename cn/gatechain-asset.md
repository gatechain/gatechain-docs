# 资产 asset

用户资产将以Token的形式储存在GateChain上，所有资产都必须符合GateChain的Token管理标准。

资产拥有者可以对自己的资产进行、发布、增发、销毁、冻结/解冻等操作，所有操作都将产生一定的费用，费用将以GateChain Token的形式支付。

> 测试网与未来正式网的费用标准有可能不同。
>
> 在使用本文档介绍的资产管理之前，必须在您的Command Line Interface（CLI）中生产或者添加一个可用于操作的key。


## 发行

通过cli或者通过api可以实现在GateChain上发行自己的数字资产。

资产发布者在按照要求填写相关信息并获得验证后，即可在GateChain上以Token的形式发布自己的资产，相关操作指令如下：

###代币管理
#####[cli详细操作](./cli/token.md)
#####[api详细操作](./API/token.md)

### 交易对
#####[cli详细操作](./cli/trading-pair.md)
#####[api详细操作](./API/trading-pair.md)