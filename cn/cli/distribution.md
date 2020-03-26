
### 设置提取委托收益的账户	
```bash
gatecli distribution set-withdraw-addr [提取收益账户] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution set-withdraw-account gc11kfwurleaskangv45ssmpzs2sprhxjsfdlqgqjs --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 委托账户从单个共识账户提取部分收益
```bash
gatecli distribution withdraw-rewards [共识账户地址] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 委托账户从共识账户提取全部收益
```bash
gatecli distribution withdraw-all-rewards --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-all-rewards --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询委托账户的委托收益
```bash
gatecli distribution rewards [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution rewards gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```


### 查询指定共识账户仍未支付的委托收益
```bash
gatecli distribution validator-outstanding-rewards [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution validator-outstanding-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询指定共识账户的手续费收入
```bash
gatecli distribution commission [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution commission gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询指定共识账户的惩罚
```bash
gatecli distribution slashes [共识账户地址] [开始块高] [结束块高] --chain-id [链ID]
```
示例：

```bash
gatecli distribution slashes gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100 1000 --chain-id testnet
```	

### 查询分配和基金会参数		
```bash
gatecli distribution params --chain-id [链ID]
```


