
### 创建保险账户 [API](../API/vault-account.md#创建保险账户-命令行)

```bash
gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

请求示例：

```bash
gatecli vault-account create gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 38 300 30NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 必须使用新生成的账户作为基础账户，用来发送创建保险账户交易，
* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
* 清算高度需要大于（当前高度+延迟生效高度）


### 修改清算高度 [API](../API/vault-account.md#修改清算高度-命令行)

```bash
gatecli vault-account update-clearing-height [新的清算高度] --from [发送者账户] --chain-id [链ID]
```

请求示例：

```bash
gatecli vault-account update-clearing-height 100000 --from vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: ACCOUNTSET-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 新的清算高度必须大于区块链当前高度 + 保险账户延迟生效高度


### 账户清算交易 [API](../API/vault-account.md#账户清算交易-命令行)
```bash
gatecli vault-account clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者账户] --chain-id [链ID]
```

请求示例：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: VAULTCLEAR-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：

* 发送者--from，必须是此保险账户的安全账户
* 所有的保险账户的清算高度都必须达到

### 查询保险账户信息 [API](../API/vault-account.md#查询保险账户信息-命令行)
```bash
gatecli vault-account show [保险账户] --chain-id [链ID]
```

请求示例：

```
gatecli vault-account show vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Account:
  Address:            vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272 //账户地址
  Pubkey: //账户公钥
  Tokens:        100000000NANOGT //账户余额
  AccountNumber: 9 //账户编号
  Sequence:      0
  AccountType:        1 //账户类型：0.单签普通账户、1.单签保险账户、2.多签普通账户、3.多签保险账户
  DelayHeight:        100 //保险账户交易延迟生效高度
  SecurityAddress:    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //保险账户的找回账户
  LastClearingHeight: 0 //上一次设置的清算高度
  LastClearingEffectHeight:   0 //上一次设置清算高度时的交易高度
  NextClearingHeight:      700 //最新设置的清算高度
  NextClearingEffectHeight:   257 //最新设置清算高度时的交易高度
  ReceivedRevocableTokens: //仍可撤回的代币
  SentRevocableTokens: //已发送可撤销的代币
```
%/accordion%


