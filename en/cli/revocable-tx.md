### Send  a Revocable Transaction

```bash
gatecli revocable-tx send [recipient account ] [transfer token amount] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx send gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek 10NANOGC --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

Description：

* Only Vault Account can send a Revocable Transaction. 
* Any transaction sent from a Vault Account is a Revocable Transaction.

### Query a single transaction

```bash
gatecli revocable-tx show [transaction Hash] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### Query Revocable Transaction list of Vault Account

```bash
gatecli revocable-tx list [Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

### Revoke a  Revocable Transaction

```bash
gatecli revocable-tx revoke [ transaction Hash] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

