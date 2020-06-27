
### Publish A Trading Pair [API](../API/trading-pair.md#Publish A Trading Pair-command line)

```bash
gatecli trading-pair submit [base token symbol] [quote token symbol] [initial price] --from [sender account] --chain-id [Chain ID]
```
Example:

```bash
gatecli trading-pair submit YY-9B3 NANOGT 100 --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%Return example:：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using gatecli tx show {hash}to query details of this transaction 
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully
```
%/accordion%


### Query A Trading Pair [API](../API/trading-pair.md#Query A Trading Pair-command line)

```bash
gatecli trading-pair show [base token symbol] [quote token symbol] --chain-id [Chain ID] 
```
Example:

```bash
gatecli trading-pair show YY-9B3 NANOGT --chain-id testnet
```

%accordion%Return example:：%accordion%

```bash
Trading List Proposal:
  InitPrice:   		10 //trading pair initial price
  BaseSymbol:       NANOGT //base token symbol
  QuoteSymbol:      YY-FE8 //quote token symbol
  Proposer:	gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //Account that issues the trading pair
```
%/accordion%

