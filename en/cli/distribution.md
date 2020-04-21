#### Setup an account to withdraw rewards

```bash
gatecli distribution set-withdraw-account [withdraw-addr] --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution set-withdraw-account gc11kfwurleaskangv45ssmpzs2sprhxjsfdlqgqjs --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

#### Withdraw rewards from a single consensus account

```bash
gatecli distribution withdraw-rewards [con-account-addr] --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution withdraw-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

#### Withdraw all rewards from all consensus accounts

```bash
gatecli distribution withdraw-all-rewards --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution withdraw-all-rewards --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

#### Query the delegation rewards of the delegation account

```bash
gatecli distribution rewards [delegator-addr] [con-account-addr] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution rewards gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```
Description：Delegation rewards at optional  a single verification node

#### Query unpaid delegation rewards of the consensus account

```bash
gatecli distribution validator-outstanding-rewards [con-account-addr] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution validator-outstanding-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

#### Query the consensus account's commission

```bash
gatecli distribution commission [con-account-addr] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution commission gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

#### Query penalty list of a consensus account

```bash
gatecli distribution slashes [con-account-addr] [start-height] [end-height] --chain-id [chain ID]
```
Example：

```bash
gatecli distribution slashes gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100 1000 --chain-id testnet
```

#### Query allocation and foundation params
```bash
gatecli distribution params --chain-id [chain ID]
```
