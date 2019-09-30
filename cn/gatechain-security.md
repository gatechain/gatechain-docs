# GateChain交易保障

GateChain通过独创的保险账户技术以及清算保障体系来最大程度保障用户在GateChain上的资产安全。 

GateChain针对内最典型的两类安全问题的分别提供对应保障措施：

- 账户密钥被盗 ： 提供可撤回交易，支持交易提醒并给用户充分的时间进行撤回操作。
- 密钥遗失：	提供清算交易，在遗失资产账户密钥的情况下，使用保险账户对密钥遗失账户中的资产进行清算转移。

## 定义

### I 普通账户

- 普通账户是传统区块链中的账户，适用于正常转账交易，其中交易对账户状态的更改立刻生效，不支持撤回。

### II 保险账户

- 保险账户是用户为可撤销业务建立的账户，保险账户支持延时交易，创建保险账户时需要绑定一个新创建的普通账户。

### III 账户类型
- 单签账户
	- 前缀：`gt1`
	- 示例：`gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc`
- 多签账户
	- 前缀：`gt2`
	- 示例：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`
- 保险单签账户
	- 前缀：`vault1`
	- 示例：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- 保险多签账户
	- 前缀：`vault2`
	- 示例：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

## 保险账户
### 1. 创建保险账户

```bash
gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量]--from [发送者账户]--chain-id [链ID]
```

示例：

```bash
gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

说明：

* 必须使用新生成的账户，直接用来发送创建保险账户交易，
* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
* 清算高度需要大于（当前高度+延迟生效高度）


### 2. 修改清算高度 

```bash
gatecli vault-account update-clearing-height [新的清算高度] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account update-clearing-height 100000 --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

说明：

* 新的清算高度必须大于区块链当前高度 + 保险账户延迟生效高度
* 本交易的生效高度要小于旧的清算高度


### 3. 账户清算
```bash
gatecli vault-account clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

说明：

* 发送者--from，必须是此保险账户的安全账户
* 所有的保险账户的清算高度都必须达到

### 4. 查询账户余额
```bash
gatecli vault-account show [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account show vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```
## 安全交易
### 1. 发送可撤回交易
```bash
gatecli revocable-tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

说明：

* 只有保险账户才可以发送可撤回交易。
* 保险账户发送的所有交易都是可撤回交易。

### 2. 查询单笔交易
```bash
gatecli revocable-tx show [交易Hash] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### 3. 查询保险账户的可撤回交易列表
```bash
gatecli revocable-tx list [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

### 4. 撤回可撤回交易

```bash
gatecli revocable-tx revoke [交易Hash] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```
