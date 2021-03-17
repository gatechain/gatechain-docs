
### 创建共识账户
```bash
gatecli con-account create [账户地址] --chain-id [链ID]
```
请求示例:

```bash
gatecli con-account create gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
ParticipationKeyResponse Data:
 ConAccount:
  Code:	0
  Log:	success //日志信息
  ParticipationKey:	ParticipationData:
  Address: 		AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ //gatemint共识账户地址
  VoteID: 		hgnhy7jmd8jy19j2hhcageqdj1s4xt7kpnv4388zxt8jaqbyrew0 //VRF公钥
  SelectionID: 		293rc5xc7fsz81txx35686x0n4arbvx4cvy7n01e1emtghybhhg0 //一次性签名公钥
  FileName:	AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ.0.0.partkey //本地partkey文件名
```
%/accordion%

说明：
* 创建共识账户时，请保证账户中有足够的'NANOGT'代币。

### 上线共识账户
```bash
gatecli con-account online 
--from [发送者账户] 
--pubkey [发送者账户公钥] 
--moniker [名称] 
--fees [交易手续费]
--commission-max-change-rate [每天最大手续费率变化]
--commission-max-rate [最大手续费率]
--commission-rate [手续费率]
--chain-id [链ID] 
```
请求示例:

```bash
gatecli con-account online --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq 
--pubkey gt1pub1u8s6p73qp3ac00a628mk7g4utllp6cvrl54vqgdazg3q6d8e3lzxxycrgw3qk3q7wn --moniker newcon-account --fees 10000000NANOGT --commission-max-change-rate "0.01" --commission-max-rate "0.01" --commission-rate "0.01" --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

### 下线共识账户
```bash
gatecli con-account offline --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account offline --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%


### 编辑共识账户
```bash
gatecli con-account edit --moniker [共识账户名称] --commission-rate [手续费率] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account edit --moniker con1 --commission-rate 0.03 --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%

说明：
* commission-rate 必须符合以下要求：
	* 必须介于0到con-account的commission-max-rate值之间；
	* 每天只能变化一次，且变化范围不能超过con-account的commission-max-change-rate。


### 查询共识账户信息
```bash
gatecli con-account show [共识账户] --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account show gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Con-account
  Address:                    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //共识账户地址
  Pubkey:                     gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 //共识账户公钥
  Status:                     online //共识账户在线状态
  Power:                      70009656 //共识账户power
  Tokens:                     100000000 //共识账户被委托的总token量
  Delegator Shares:           100000000.000000000000000000 ////共识账户的委托数量
  Power Rate:                 1.000152230759201952 //共识账户忠诚系数
  Description:                {   }
  Commission:                 rate: 0.000000000000000000, maxRate: 0.000000000000000000, maxChangeRate: 0.000000000000000000, updateTime: 1970-01-01 00:00:00 +0000 UTC 
```
%/accordion%


### 查询本地共识账户信息
```bash
gatecli con-account show-key [未上线共识账户] --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account show-key gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
ParticipationKeyResponse Data:
 ConAccount:
  Code:	0
  Log:	success //日志信息
  ParticipationKey:	ParticipationData:
  Address: 		AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ //gatemint共识账户地址
  VoteID: 		hgnhy7jmd8jy19j2hhcageqdj1s4xt7kpnv4388zxt8jaqbyrew0 //VRF公钥
  SelectionID: 		293rc5xc7fsz81txx35686x0n4arbvx4cvy7n01e1emtghybhhg0 //一次性签名公钥
  FileName:	AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ.0.0.partkey //本地partkey文件名
```
%/accordion%


### 查询共识账户列表 [API](../API/con-account.md#查询共识账户列表-命令行)
```bash
gatecli con-account list --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account list --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Con-account
  Address:                    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //共识账户地址
  Pubkey:                     gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 //共识账户公钥
  Status:                     online //共识账户在线状态
  Power:                      70009656 //共识账户power
  Tokens:                     100000000 //共识账户被委托的总token量
  Delegator Shares:           100000000.000000000000000000 ////共识账户的委托数量
  Power Rate:                 1.000152230759201952 //共识账户忠诚系数
  Description:                {   }
  Commission:                 rate: 0.000000000000000000, maxRate: 0.000000000000000000, maxChangeRate: 0.000000000000000000, updateTime: 1970-01-01 00:00:00 +0000 UTC
Con-account
  ...
  
```
%/accordion%

### 查询本地共识账户列表
```bash
gatecli con-account list-key --chain-id [链ID]
```
请求示例：

```bash
gatecli con-account list-key --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
ParticipationData:
  Address: 		AAAAAAAAAAAAA3BRN4T4WM3R5OFI43BADSI65JSJO54JFKMHRD3UHK5KXCKELNLIGPVOX6ENETUFJ4IC4G6Q //gatemint共识账户地址
  VoteID: 		wzhzzwm5ed3dyfea1tg52cpm69ha569gt1jrwjej6xws3qqcz8j0 //VRF公钥
  SelectionID: 		ffn2g6cxw2ymvh216ytymr1w9rpkr7fh0gp11xazka529s6jhxp0 //一次性签名公钥
ParticipationData:
  ...
```
%/accordion%

