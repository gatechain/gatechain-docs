### Create a Vault Account

```bash
gatecli vault-account create [base account] [Retrieval Account] [delay height] [Clearing Height] [transfer token  amount] 
--from [sender account] 
--chain-id [chain ID]
```

Example：

```bash
gatecli vault-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx 38 300 30NANOGC --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

Description：

* Must use a newly generated account as base account and  Retrieval Account,to send a Create Vault Account transaction. 
* If a normal transaction is sent to this account first, this account becomes a standard account and it can not be used to send Vault Account creation transaction.
* Clearing height must be greater than (current height+ delay height)

### Change clearing height

```bash
gatecli vault-account update-clearing-height [new clearing height] --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account update-clearing-height 100000 --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

Description：

* New clearing height must be greater than the current height+delay height of the Vault Account
* The height at which this transaction take effect should be less than the old clearing height.

### Account clearing

```bash
gatecli vault-account clear [Vault Account1]([Vault Account2] [Vault Account3]...) --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx --chain-id testnet
```

Description：

* Sender--from，must be a safe account bound to this Vault Account
* All the Vault Account clearing heights should be met

### Query  account balance

```bash
gatecli vault-account show [ Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account show vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```
