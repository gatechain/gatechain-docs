# GateChain资产管理

用户资产将以Token的形式储存在GateChain上，所有资产都必须符合GateChain的Token管理标准。

资产拥有者可以对自己的资产进行、发布、增发、燃烧、冻结/解冻等操作，所有操作都将产生一定的费用，费用将以GateChain Token的形式支付。

> 测试网与未来正式网的费用标准有可能不同。
>
> 在使用本文档介绍的资产管理之前，必须在您的Command Line Interface（CLI）中生产或者添加一个可用于操作的key。


## 发行

通过Cli或者通过API可以实现在GateChain上发行自己的数字资产。

资产发布者在按照要求填写相关信息并获得验证后，即可在GateChain上以Token的形式发布自己的资产，相关操作指令如下

## 代币管理
### 1. 发行代币
```bash
gatecli token issue [代币名称] [代币符号] [发行总量] --gas [数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 300000 --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 代币符号必须全大写，长度2-15个字符
* ISSUE创建成功后，可以通过查询`issue-tx-id`或查询账户余额来验证结果。
* 代币创建时候另有两个flag:
  * `--token-mintable`  此代币是否可以增发
  * `--token-freezable` 此代币是否可以冻结

### 2. 查询代币发行情况
```bash
gatecli token show-issue [issue-tx-id] --chain-id [链ID]
```

示例：

```bash
gatecli token show-issue E1C18208EC8BFDC83444AD96E7834EDBAAE50A6745E0DACE822BDB1D86AC2FDA --chain-id testnet
```

说明：

* `issue-tx-id`为发行代币返回的交易Hash。

### 3. 查询代币信息
```bash
gatecli token show [链上代币符号] --chain-id [链ID]
```

示例：

```bash
gatecli token show aaa-789 --chain-id testnet
```

说明：

* 此命令中的”链上代币符号“，不同于发行代币时的参数“代币符号”。
* 例如用户发行代币，传入的“代币符号”为aaa。为了避免链上存在重名的代币，发行成功后，区块链中记载的“链上代币符号”为aaa-[随机字符串]。

### 4. 查询所有代币
```bash
gatecli token list --chain-id [链ID]
```


### 5. 增发代币
```bash
gatecli token mint [代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli token mint 100000000000aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
说明：

* 增发的代币，在发行时必须使用了参数 --token-mintable
* 代币数量的单位是链上代币符号（aaa-94f）
* 增发的量加上之前发行的量，不能超过默认最大值（100亿）

### 6. 销毁代币
```bash
gatecli token burn [代币数量] --from [发送者账户] --chain-id [链ID] 
```
示例：

```bash
gatecli token burn 100000000000aaa-94f  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
说明：

* 代币数量的单位是链上代币符号（aaa-94f）

### 7. 冻结代币
```bash
gatecli token freeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token freeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 冻结的代币，在发行时必须使用了参数 --token-freezable

### 8. 解冻代币
```bash
gatecli token unfreeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token unfreeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 解冻的代币，在发行时必须使用了参数 --token-freezable
* 代币之前的状态必须是冻结状态

## 交易对
### 1. 提交交易对提案
```bash
gatecli trading-pair submit-proposal
--title [提案名称]
--description [提案描述]
--type [提案类型]
--deposit [质押代币数量]
--init-price [初始化价格]
--base-symbol [基准代币符号]
--quote-symbol [报价代币符号]
--voting-period [选举周期秒数]
--expire-time [预期时间（块高度）]
--from [发送者账户]
--chain-id [链ID]
```
示例：

```bash
gatecli trading-pair submit-proposal --title "list trading Proposal" --description "Add trading pair proposal" --type TradingList --deposit "10gt" --init-price 100000 --base-symbol aaa-4db --quote-symbol gt --voting-period 60 --expire-time 50000000  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

### 2. 发布交易对
```bash
gatecli trading-pair publish [交易对提案编号] 
--base-symbol=[基准代币符号] 
--quote-symbol=[报价代币符号]
--from [发送者账户账户]
--chain-id [链ID]
```
示例：

```bash
gatecli trading-pair publish 9 --quote-symbol gt --base-symbol aaa-4db --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 交易对提案的质押和投票过程，与普通提案的操作方法相同。
* 在投票通过之后，才可以对交易对执行发布动作。
* 交易对发布成功后，可以通过基准代币符号和报价代币符号，来查看对应的交易对信息。

### 3. 查询交易对
```bash
gatecli trading-pair show [基准代币符号] [报价代币符号] --chain-id [链ID] 
```
示例：

```bash
gatecli trading-pair show gt aaa-4db --chain-id testnet
```
