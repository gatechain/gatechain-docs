
### <span id="委托代币到共识账户">委托代币到共识账户 [API](../api/staking.md#委托代币到共识账户)</span>

```bash
gatecli staking delegate [共识账户地址] [委托代币数量]  --from [委托账户地址] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking delegate gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s 100000000NANOGT --from gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```



### <span id="查询委托账户在单个共识账户的委托信息">查询委托账户在单个共识账户的委托信息 [API](../api/staking.md#查询委托账户在单个共识账户的委托信息)</span>
```bash
gatecli staking delegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking delegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

??? note "返回示例:"

	```bash
	Delegation:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
	  Shares:      1000.000000000000000000 //委托数量
	  Balance:   1000 //委托代币数量
	```



### <span id="查询委托账户在所有共识账户的委托信息">查询委托账户在所有共识账户的委托信息 [API](../api/staking.md#查询委托账户在所有共识账户的委托信息)</span>

```bash
gatecli staking delegations [委托账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking delegations gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

??? note "返回示例:"

	```bash
	Delegation:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
	  Shares:      1000.000000000000000000 //委托数量
	  Balance:   1000 //委托代币数量
	Delegation: ...
	
	```


### <span id="转移委托">转移委托 [API](../api/staking.md#转移委托)</span>

```bash
gatecli staking redelegate [原共识账户地址] [目标共识账户地址] [委托代币数量] --from [委托账户地址] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking redelegate gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla54 100000000NANOGT --from gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```


### <span id="查询指定委托账户所有的转移委托记录">查询指定委托账户所有的转移委托记录 [API](../api/staking.md#查询转移委托记录)</span>

```bash
gatecli staking redelegations [委托账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking redelegations gt11p8qmx5q8h7h3es3wl4x0y4efgme552hk7x5g6ppeelel2v2vvsthxk0ce65gw9mfls9ugp --chain-id testnet
```

??? note "返回示例:"

	```bash
	Redelegations between:
	  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //原共识账户地址
	  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //目标共识账户地址
	  Entries:
	    Redelegation Entry #0:
	      Creation height:           876 //发起转移委托交易的高度
	      Min time to undelegate (unix): 2020-07-10 02:47:51 +0000 UTC //从原共识账户解除绑定完成时间  
	      Initial Balance:           10 //最初转移委托代币数量
	      Shares:                    10.000000000000000000 //转移委托数量
	      Balance:                   10 //转移委托代币数量
	Redelegations between:
	 ...
	 
	```


### 查询委托账户在两个共识账户之间的转移委托记录
```bash
gatecli staking redelegation [委托账户地址] [原共识账户地址] [目标共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking redelegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

??? note "返回示例:"

	```bash
	Redelegations between:
	  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //原共识账户地址
	  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //目标共识账户地址
	  Entries:
	    Redelegation Entry #0:
	      Creation height:           876 //发起转移委托交易的高度
	      Min time to undelegate (unix): 2020-07-10 02:47:51 +0000 UTC //从原共识账户解除绑定完成时间  
	      Initial Balance:           10 //最初转移委托代币数量
	      Shares:                    10.000000000000000000 //转移委托数量
	      Balance:                   10 //转移委托代币数量
	```


### <span id="从共识账户解绑">从共识账户解绑 [API](../api/staking.md#从共识账户解绑)</span>

```bash
gatecli staking undelegate [共识账户地址] [解绑代币数量] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking undelegate gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 100000000NANOGT --from gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```



### <span id="代理解除委托">代理解除委托 [API](../api/staking.md#代理解除委托)</span>

```bash
gatecli staking undelegate-by-retrieval-account [保险账户1 保险账户2...] --from [保险账户的找回账户]  --fees [交易手续费] --chain-id [链ID]
```

请求示例：

```bash
gatecli staking undelegate-by-retrieval-account vault11d9t6... vault11w8c3v... --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 10000000NANOGT --chain-id testnet
```

??? note "返回示例:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
	```
	



### <span id="查询委托账户在单个共识账户已解除的委托记录">查询委托账户在单个共识账户已解除的委托记录 [API](../api/staking.md#查询委托账户在单个共识账户已解除的委托记录)</span>

```bash
gatecli staking undelegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking undelegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

??? note "返回示例:"

	```bash
	Undelegations between:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
		Entries:
			Undelegation 0:
			Creation Height:           904 //解绑交易区块高度
			Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //解绑完成时间
			Expected balance:          10 //解绑代币数量
	```



### <span id="查询委托账户在所有共识账户已经解除的委托记录">查询委托账户在所有共识账户已经解除的委托记录 [API](../api/staking.md#查询委托账户在所有共识账户已经解除的委托记录)</span>

```bash
gatecli staking undelegations [委托账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking undelegations gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

??? note "返回示例:"

	```bash
	Undelegations between:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
		Entries:
			Undelegation 0:
			Creation Height:           904 //解绑交易区块高度
			Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //解绑完成时间
			Expected balance:          10 //解绑代币数量
	Undelegations between:
		...
	```


### <span id="查询指定共识账户所有的委托">查询指定共识账户所有的委托 [API](../api/staking.md#查询指定共识账户所有的委托)</span>


```bash 
gatecli staking delegations-to [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking delegations-to gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

??? note "返回示例:"

	```bash
	Delegation:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
	  Shares:      1000.000000000000000000 //委托数量
	  Balance:   1000 //委托代币数量
	```


### <span id="查询指定共识账户所有转移委托的记录">查询指定共识账户所有转移委托的记录 [API](../api/staking.md#查询转移委托记录)</span>


```bash
gatecli staking redelegations-from [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking redelegations-from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

??? note "返回示例:"

	```bash
	Redelegations between:
	  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //原共识账户地址
	  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //目标共识账户地址
	  Entries:
	    Redelegation Entry #0:
	      Creation height:           876 //转移委托交易区块高度
	      Min time to Undelegations (unix): 2020-07-10 02:47:51 +0000 UTC //从原共识账户解除绑定完成时间  
	      Initial Balance:           10 //最初转移委托代币数量
	      Shares:                    10.000000000000000000 //转移委托数量
	      Balance:                   10 //转移委托代币数量
	```



### <span id="查询指定共识账户所有已解除的委托">查询指定共识账户所有已解除的委托 [API](../api/staking.md#查询指定共识账户所有已解除的委托)</span>

```bash
gatecli staking undelegations-from  [共识账户地址] --chain-id [链ID]
```
请求示例：

```bash
gatecli staking undelegations-from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

??? note "返回示例:"
	
	```bash
	Undelegations between:
	  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //委托账户地址
	  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //共识账户地址
		Entries:
			Undelegation 0:
			Creation Height:           904 //解绑交易区块高度
			Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //解绑完成时间
			Expected balance:          10 //解绑代币数量
	Undelegations between:
		...
	```


### <span id="查询权益质押池的信息">查询权益质押池的信息 [API](../api/staking.md#查询权益质押池的信息)</span>

```bash
gatecli staking pool --chain-id [链ID]
```

??? note "返回示例:"

	```bash
	Pool:
	  Not Bonded Tokens:  100000000 //未解绑代币数
	  Bonded Tokens:      1000000 //已解绑代币数
	```



### <span id="查询权益质押的参数">查询权益质押的参数 [API](../api/staking.md#查询权益质押的参数)</span>

```bash
gatecli staking params --chain-id [链ID]
```

??? note "返回示例:"

	```bash
	Params:
	  Undelegating Time:    504h0m0s //解除委托完成时间
	  Max Con-accounts:    100 //最大共识账户数
	  Max Entries:       7 //支持最大事务数字(解除委托事务和重新委托事务)
	  Bonded Coin Denom: NANOGT //代币单位
	  Pow Rate:          1 //最小忠诚系数
	  Max Pow Rate:      2 //最大忠诚系数
	```




