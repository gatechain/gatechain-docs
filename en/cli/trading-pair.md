### Submit a trading pair
```bash
gatecli trading-pair submit [base token symbol] [quote token symbol] [initialize price] --from [sender account] --chain-id [Chain ID]
```
Example：

```bash
gatecli trading-pair submit YY-9B3 NANOGT 100 --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### Query a trading pair
```bash
gatecli trading-pair show [base token symbol] [ quote token symbol] --chain-id [chain ID] 
```
Example：

```bash
gatecli trading-pair show YY-9B3 NANOGT --chain-id testnet
```