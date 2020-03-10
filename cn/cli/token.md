
### 发行代币
```bash
gatecli token issue [代币名称] [代币符号] [发行总量] --gas [数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 9000000 --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 代币符号必须全大写，长度2-15个字符
* 代币创建时候另有两个flag:
  * `--mintable`  此代币是否可以增发
  * `--freezable` 此代币是否可以冻结

### 增发代币
```bash
gatecli token mint [代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli token mint 100000000000aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 增发的代币，在发行时必须使用了参数 --mintable
* 代币数量的单位是链上代币符号（aaa-94f）
* 增发的量加上之前发行的量，不能超过默认最大值（100亿）

### 销毁代币
```bash
gatecli token burn [代币数量] --from [发送者账户] --chain-id [链ID] 
```
示例：

```bash
gatecli token burn 100000000000aaa-94f  --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 代币数量的单位是链上代币符号（aaa-94f）

### 冻结代币
```bash
gatecli token freeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token freeze aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 冻结的代币，在发行时必须使用了参数 --freezable

### 解冻代币
```bash
gatecli token unfreeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token unfreeze aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 解冻的代币，在发行时必须使用了参数 --freezable
* 代币之前的状态必须是冻结状态

### 查询代币信息
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

### 查询所有代币
```bash
gatecli token list --chain-id [链ID]
```

