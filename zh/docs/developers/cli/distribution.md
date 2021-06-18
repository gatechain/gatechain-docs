
### <span id="设置提取委托收益的账户">设置提取委托收益的账户 [API](../api/distribution.md#设置提取委托收益的账户)</span>

```bash
gatecli distribution set-withdraw-addr [提取收益账户] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution set-withdraw-addr gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```


说明：

* 保险账户只能将收益和本金提取到本账户，不能单独设置。


### <span id="委托账户从单个共识账户提取部分收益">委托账户从单个共识账户提取部分收益 [API](../api/distribution.md#委托账户从单个共识账户提取部分收益)</span>
```bash
gatecli distribution withdraw-rewards [共识账户地址] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution withdraw-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```



### <span id="委托账户从共识账户提取全部收益">委托账户从共识账户提取全部收益 [API](../api/distribution.md#委托账户从共识账户提取全部收益)</span>
```bash
gatecli distribution withdraw-all-rewards --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution withdraw-all-rewards --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```



### <span id="查询委托账户在单个共识账户的委托收益">查询委托账户在单个共识账户的委托收益 [API](../api/distribution.md#查询委托账户在单个共识账户的委托收益)</span>
```bash
gatecli distribution rewards [委托账户地址] [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "返回示例:"
	
	```bash
	Delegator Total Rewards:
	  Rewards:
		Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //共识账户地址
		Reward: 21.644616251838158370NANOGT //手续费及挖矿收益
	```



### <span id="查询委托账户在所有共识账户的委托收益">查询委托账户在所有共识账户的委托收益 [API](../api/distribution.md#查询委托账户在所有共识账户的委托收益)</span>
```bash
gatecli distribution rewards [委托账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "返回示例:"

	```bash
	Delegator Total Rewards:
	  Rewards:
		Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //共识账户地址
		Reward: 21.644616251838158370NANOGT //手续费及挖矿收益
		Con-account:...
	Total: 11997269037.266215577925788000NANOGT //委托账户的总收益
	
	```




### <span id="查询共识账户仍未支付的委托收益">查询共识账户仍未支付的委托收益 [API](../api/distribution.md#查询共识账户仍未支付的委托收益)</span>

```bash
gatecli distribution outstanding-rewards [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution outstanding-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "返回示例:"

	```bash
	660467079334.408199257068561630NANOGT //未支付的委托收益
	```


### <span id="查询共识账户的收益">查询共识账户的收益 [API](../api/distribution.md#查询共识账户的收益)</span>

```bash
gatecli distribution commission [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli distribution commission gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "返回示例:"

	```bash
	660467079334.408199257068561630NANOGT //挖矿及手续费收益
	```


### <span id="查询分配和基金会参数">查询分配和基金会参数 [API](../api/distribution.md#查询分配和基金会参数)</span>

```bash
gatecli distribution params --chain-id [链ID]
```

??? note "返回示例:"

	```bash
	Distribution Params:
	  Community Tax:          "0.020000000000000000" //社区税比例
	  Withdraw Addr Enabled:  true
	  First CommitteeReward:  "0.400000000000000000" //第一委员会挖矿奖励比例
	  Second CommitteeReward:  "0.350000000000000000" //第二委员会挖矿奖励比例
	  Third CommitteeReward:  "0.250000000000000000" //第三委员会挖矿奖励比例
	```


