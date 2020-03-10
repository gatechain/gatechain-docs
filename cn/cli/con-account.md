
### 创建共识账户
```bash
gatecli con-account create [账户地址] --chain-id [链ID]
```
示例:

```bash
gatecli con-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：
* 创建共识账户时，请保证账户中有足够的 `gc` 代币。

### 上线共识账户
```bash
gatecli con-account online 
--from [发送者账户] 
--pubkey [发送者账户公钥] 
--moniker [名称] 
--commission-max-change-rate [每天最大手续费率变化]
--commission-max-rate [最大手续费率]
--commission-rate [手续费率]
--chain-id [链ID] 
```
示例:

```bash
gatecli con-account online --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 
--pubkey gc1pub1addwnpepqty4t2h3depgqnp2jfm4kqrmuwauawyrate0cpcduzpqucgujhtugtpazyw --moniker newcon-account --commission-max-change-rate "0.01" --commission-max-rate "0.01" --commission-rate "0.01" --chain-id testnet
```

### 下线共识账户
```bash
gatecli con-account offline --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account offline --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询共识账户信息
```bash
gatecli con-account show [共识账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account show gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### 查询未上线的共识账户信息
```bash
gatecli con-account show-key [未上线共识账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account show gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

### 查询本地共识账户列表（待定）
```bash
gatecli con-account list-local --chain-id [链ID]
```
示例：

```bash
gatecli con-account list-local --chain-id testnet
```

