
### 委托代币到共识账户 
```bash
gatecli staking delegate [共识账户地址] [委托代币数量]  --from [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegate gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100000000NANOGT --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询委托账户在单个共识账户的委托信息
```bash
gatecli staking delegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询委托账户在所有共识账户的委托信息
```bash
gatecli staking delegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 转移委托
```bash
gatecli staking redelegate [原共识账户地址] [目标共识账户地址] [委托代币数量] --from [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegate gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 100000000NANOGT --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询指定委托账户所有的转移委托记录
```bash
gatecli staking redelegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询委托账户在两个共识账户之间的转移委托记录
```bash
gatecli staking redelegation [委托账户地址] [原共识账户地址] [目标共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 --chain-id testnet
```

### 从指定共识账户解绑	
```bash
gatecli staking unbond [共识账户地址] [解绑代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbond gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 100000000NANOGT --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询委托账户在单个共识账户已解除的委托记录
```bash
gatecli staking unbonding-delegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 --chain-id testnet
```

### 查询委托账户在所有共识账户已经解除的委托记录
```bash
gatecli staking unbonding-delegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询指定共识账户所有的委托	
```bash
gatecli staking delegations-to [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations-to gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询指定共识账户所有转移委托的记录
```bash
gatecli staking redelegations-from [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations-from gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询指定共识账户所有已解除的委托
```bash
gatecli staking unbonding-delegations-from [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations-from gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```
### 查询权益质押池的信息		
```bash
gatecli staking pool --chain-id [链ID]
```

### 查询权益质押的参数
```bash
gatecli staking params --chain-id [链ID]
```

