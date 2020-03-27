
### Create a Consensus Account
```bash
gatecli con-account create [account-addr] --chain-id [chain ID]
```
Example:

```bash
gatecli con-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
Description：
* When creating a consensus account, please insure the account has sufficient `NANOGC` tokens.

### Get consensus account online
```bash
gatecli con-account online 
--from [sender account] 
--pubkey [sender account public key] 
--moniker [name] 
--commission-max-change-rate [max commission rate change everyday]
--commission-max-rate [max commission rate]
--commission-rate [commission rate]
--chain-id [chain ID] 
```
Example:

```bash
gatecli con-account online --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 
--pubkey gc1pub1addwnpepqty4t2h3depgqnp2jfm4kqrmuwauawyrate0cpcduzpqucgujhtugtpazyw --moniker newcon-account --commission-max-change-rate "0.01" --commission-max-rate "0.01" --commission-rate "0.01" --chain-id testnet
```

### Get consensus account offline
```bash
gatecli con-account offline --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli con-account offline --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### Query consensus account info
```bash
gatecli con-account show [consensus account] --chain-id [chain ID]
```
Example：

```bash
gatecli con-account show gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

### Query offline consensus account info
```bash
gatecli con-account show-key [offline consensus account] --chain-id [chain ID]
```
Example：

```bash
gatecli con-account show-key gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

### Query consensus account list

```bash
gatecli con-account list --chain-id [chain ID]
```

Example：

```bash
gatecli con-account list --chain-id testnet
```

### Query local consensus account list

```bash
gatecli con-account list-key --chain-id [chain ID]
```
Example：

```bash
gatecli con-account list-key --chain-id testnet
```

