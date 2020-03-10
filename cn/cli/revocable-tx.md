
### 发送可撤回交易
```bash
gatecli revocable-tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx send gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek 10gc --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

说明：

* 只有保险账户才可以发送可撤回交易。
* 保险账户发送的所有交易都是可撤回交易。

### 查询单笔交易
```bash
gatecli revocable-tx show [交易Hash] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### 查询保险账户的可撤回交易列表
```bash
gatecli revocable-tx list [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

### 撤回可撤回交易

```bash
gatecli revocable-tx revoke [交易Hash] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

