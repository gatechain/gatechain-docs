
### 发行代币 [API](../API/token.md#发行代币-命令行)
```bash
gatecli token issue [代币名称] [代币符号] [发行总量] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```

请求示例：

```bash
gatecli token issue TestToken AAA 100000000000000000000000  --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%


说明：

* 发行代币费用为200000000000NANOGT，请保证账户中有足够的NANOGT代币
* 代币符号必须全大写，长度2-15个字符
* 代币创建时候另有两个flag:
  * '--mintable'  此代币是否可以增发
  * '--freezable' 此代币是否可以冻结

### 增发代币 [API](../API/token.md#增发代币-命令行)
```bash
gatecli token mint [代币数量] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli token mint 100000000000AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 增发的代币，在发行时必须使用了参数 --mintable
* 代币数量的单位是链上代币符号（AAA-94f）
* 增发的量加上之前发行的量，不能超过默认最大值（100亿）

### 冻结代币 [API](../API/token.md#冻结代币-命令行)
```bash
gatecli token freeze [链上代币符号] --from [发送者账户] --fees [交易手续费] --chain-id [链ID] 
```

请求示例：

```bash
gatecli token freeze AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 冻结的代币，在发行时必须使用了参数 --freezable

### 解冻代币 [API](../API/token.md#解冻代币-命令行)
```bash
gatecli token unfreeze [链上代币符号] --from [发送者账户] --fees [交易手续费] --chain-id [链ID] 
```

请求示例：

```bash
gatecli token unfreeze AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 解冻的代币，在发行时必须使用了参数 --freezable
* 代币之前的状态必须是冻结状态


### 销毁代币 [API](../API/token.md#销毁代币-命令行)
```bash
gatecli token burn [代币数量] --from [发送者账户] --fees [交易手续费] --chain-id [链ID] 
```
请求示例：

```bash
gatecli token burn 100000000000AAA-94f  --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```
%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 代币数量的单位是链上代币符号（AAA-94f）


### 查询代币信息 [API](../API/token.md#查询代币信息-命令行)
```bash
gatecli token show [链上代币符号] --chain-id [链ID]
```

请求示例：

```bash
gatecli token show AAA-789 --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Token:
  Symbol:              YY-FE8 //链上代币符号
  SourceAddress:       gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //发行代币账户
  TokenName:           test //代币名称
  TotalSupply:         10000000000100 //代币总数量
  Mintable:            true //是否可增发
  Freezable:           true //是否可冻结
  Freezed:             false //是否冻结
```
%/accordion%


说明：

* 此命令中的”链上代币符号“，不同于发行代币时的参数“代币符号”。
* 例如用户发行代币，传入的“代币符号”为AAA。为了避免链上存在重名的代币，发行成功后，区块链中记载的“链上代币符号”为AAA-[随机字符串]。

### 查询所有代币 [API](../API/token.md#查询所有代币-命令行)
```bash
gatecli token list --chain-id [链ID]
```

%accordion%返回示例：%accordion%

```bash
Symbol:
	YY-FE8 //链上代币符号
	...
```
%/accordion%
