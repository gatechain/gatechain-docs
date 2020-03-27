### Account type
- Single Signature account
	- Prefix：`gc1`
	- Example：`gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88`
- Multiple signatures account
	- Prefix：`gc2`
	- Example：`gc21kfwurleaskangv45ssmpzs2sprhxjsfdztca9d`
- Single signature Vault Account
	- Prefix：`vault1`
	- Example：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- Multi- signature Vault Account
	- Prefix：`vault2`
	- Example：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e `

### Generate a single signature account

```bash
gatecli account create
```

### Generate a multiple signatures account

```bash
gatecli account create [account] --multisig [account list] --multisig-threshold [minimum effective amount]
```
Example：

```bash
gatecli account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --multisig gc110nxr6.....,gc113454xdr..... --multisig-threshold 2
```
Description：

* Account list refers to accounts already created.

### Query account list

```bash
gatecli account list
```

### Query account info

```bash
gatecli account show [account] --chain-id [chain ID]
```

Example：

```
gatecli account show gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### Change password 
```bash
gatecli account update [account]
```
Example：

```
gatecli account update 1583472684
```

### Delete account
```
gatecli account delete [account]
```
Example：

```
gatecli account delete 1583472684
```

### Query account balance

```bash
gatecli account balance [account] --chain-id [Chain ID]
```

Example：

```bash
gatecli account balance gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
### Query account public key

```bash
gatecli account show-key [addr]
```

Example：

```bash
gatecli account show-key 1583472684
```

### Publish multisig account

```bash
gatecli account publish-multisig [to_address]  [pubkey] --chain-id [chain ID]
```

Example：

```bash
gatecli account publish-multisig gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gc11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr --chain-id testnet
```

