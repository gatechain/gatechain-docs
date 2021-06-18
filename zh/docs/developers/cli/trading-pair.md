
### 发行交易对 [API](../api/trading-pair.md#发行交易对)

```bash
gatecli trading-pair submit [基准代币符号] [报价代币符号] [初始价格] --from [发送者账户] --chain-id [链ID]
```
请求示例：

```bash
gatecli trading-pair submit YY-9B3 NANOGT 100 --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%


### 查询交易对 [API](../api/trading-pair.md#查询交易对)

```bash
gatecli trading-pair show [基准代币符号] [报价代币符号] --chain-id [链ID] 
```
请求示例：

```bash
gatecli trading-pair show YY-9B3 NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Trading List Proposal:
  InitPrice:   		10 //交易对初始价格
  BaseSymbol:       NANOGT //基准代币符号
  QuoteSymbol:      YY-FE8 //报价代币符号
  Proposer:	gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //发行交易对账户
```
%/accordion%

