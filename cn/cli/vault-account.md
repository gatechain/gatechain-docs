
### 创建保险账户

```bash
gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx 38 300 30NANOGC --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 必须使用新生成的账户作为基础账户，用来发送创建保险账户交易，
* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
* 清算高度需要大于（当前高度+延迟生效高度）


### 修改清算高度 

```bash
gatecli vault-account update-clearing-height [新的清算高度] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account update-clearing-height 100000 --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

说明：

* 新的清算高度必须大于区块链当前高度 + 保险账户延迟生效高度
* 本交易的生效高度要小于旧的清算高度


### 账户清算
```bash
gatecli vault-account clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx --chain-id testnet
```

说明：

* 发送者--from，必须是此保险账户的安全账户
* 所有的保险账户的清算高度都必须达到

### 查询账户余额
```bash
gatecli vault-account show [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account show vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```