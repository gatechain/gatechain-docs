
### 提交交易对提案
```bash
gatecli trading-pair submit [基准代币符号] [报价代币符号] [初始价格] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli trading-pair submit-proposal YY-9B3 GC 100 --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询交易对
```bash
gatecli trading-pair show [基准代币符号] [报价代币符号] --chain-id [链ID] 
```
示例：

```bash
gatecli trading-pair show YY-9B3 GC --chain-id testnet
```


