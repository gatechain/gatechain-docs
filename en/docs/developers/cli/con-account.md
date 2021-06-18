
### <span id="Create-a-Consensus-Account">Create a Consensus Account</span>
```bash
gatecli con-account create [account address] --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account create gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "Return example:"

	```bash
	ParticipationKeyResponse Data:
	 ConAccount:
	  Code:	0
	  Log:	success //logs
	  ParticipationKey:	ParticipationData:
	  Address: 		AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ //gatemint consensus account address
	  VoteID: 		hgnhy7jmd8jy19j2hhcageqdj1s4xt7kpnv4388zxt8jaqbyrew0 //VRF public key
	  SelectionID: 		293rc5xc7fsz81txx35686x0n4arbvx4cvy7n01e1emtghybhhg0 //the one-time signing public key
	  FileName:	AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ.0.0.partkey //local partkeyFile Name
	```


Description: 

* When creating a consensus account, please ensure the account has adequate 'NANOGT' tokens.

### <span id="Get-Consensus-Account-Online">Get Consensus Account Online</span>

```bash
gatecli con-account online 
--from [sender account] 
--pubkey [sender account public key]
--moniker [name]
--fees [tx fees]
--commission-max-change-rate [max commission rate change daily]
--commission-max-rate [max commission rate ]
--commission-rate [commission rate]
--chain-id [chain ID] 
```
Example:  

```bash
gatecli con-account online --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq 
--pubkey gt1pub1u8s6p73qp3ac00a628mk7g4utllp6cvrl54vqgdazg3q6d8e3lzxxycrgw3qk3q7wn --moniker newcon-account --fees 100000NANOGT --commission-max-change-rate "0.01" --commission-max-rate "0.01" --commission-rate "0.01" --chain-id testnet
```

??? note "Return example:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction  hash，using gatecli tx show {hash} to query detailed information of this transaction 
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction  is successfully sent
	```


### Get Consensus Account Offline
```bash
gatecli con-account offline --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account offline --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 100000NANOGT --chain-id testnet
```

??? note "Return example:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash，using gatecli tx show {hash} to query detailed transaction information
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction  is successfully sent
	```



### Edit Consensus Account

```bash
gatecli con-account edit --moniker [con-account name] --commission-rate [commission rate] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```

Example：

```bash
gatecli con-account edit --moniker con1 --commission-rate 0.03 --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 100000NANOGT --chain-id testnet
```

??? note "Return example:"

	```bash
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash，using gatecli tx show {hash} to query
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction  is successfully sent
	```


Description：

* commission-rate The following requirements must be met:
	* Must be between 0 and commission-max-rate set by the con-account;
	* It can only be changed once a day,And the range of change shall not exceed the commission-max-change-rate set by the con-account.


### Query Consensus Account Information
```bash
gatecli con-account show [consensus account] --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account show gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "Return example:"

	```bash
	Con-account
	  Address:                    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //consensus account address
	  Pubkey:                     gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 // consensus account public key 
	  Status:                     online //The online  status of the consensus account
	  Power:                      70009656 //consensus account power
	  Tokens:                     100000000 //total tokens delegated to the consensus account 
	  Delegator Shares:           100000000.000000000000000000 ////delegation quantity of a  consensus account 
	  Power Rate:                 1.000152230759201952 //Loyalty coefficient  of the  consensus account
	  Description:                {   }
	  Commission:                 rate: 0.000000000000000000, maxRate: 0.000000000000000000, maxChangeRate: 0.000000000000000000, updateTime: 1970-01-01 00:00:00 +0000 UTC 
	```



### Query Local Consensus Account Information
```bash
gatecli con-account show-key [consensus account pending online] --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account show-key gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

??? note "Return example:"

	```bash
	ParticipationKeyResponse Data:
	 ConAccount:
	  Code:	0
	  Log:	success //logs
	  ParticipationKey:	ParticipationData:
	  Address: 		AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ //gatemint consensus account address
	  VoteID: 		hgnhy7jmd8jy19j2hhcageqdj1s4xt7kpnv4388zxt8jaqbyrew0 //VRF public key
	  SelectionID: 		293rc5xc7fsz81txx35686x0n4arbvx4cvy7n01e1emtghybhhg0 //the one-time signing public key
	  FileName:	AAAAAAAAAAAABXJ3QGZLVBIMEGOHDOOTCELOEO437DZQTRW5VBB3QVMSZ23VKLZVGSFOMUGDNLZQZVIEBFXQ.0.0.partkey // local partkeyFile Name
	```



### <span id="Query-Consensus-Account-List">Query Consensus Account List [API](../api/con-account.md#Query-Consensus-Account-List)</span>

```bash
gatecli con-account list --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account list --chain-id testnet
```

??? note "Return example:"

	```bash
	Con-account
	  Address:                    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //consensus account address
	  Pubkey:                     gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 // consensus account public key 
	  Status:                     online //the online status of the consensus account 
	  Power:                      70009656 // consensus account power
	  Tokens:                     100000000 //total tokens delegated to  the consensus account 
	  Delegator Shares:           100000000.000000000000000000 ////delegation quantity of the  consensus account 
	  Power Rate:                 1.000152230759201952 //loyalty coefficient  of the  consensus account
	  Description:                {   }
	  Commission:                 rate: 0.000000000000000000, maxRate: 0.000000000000000000, maxChangeRate: 0.000000000000000000, updateTime: 1970-01-01 00:00:00 +0000 UTC
	Con-account
	  ...
	  
	```


### Query Local Consensus Account List
```bash
gatecli con-account list-key --chain-id [chain ID]
```
Example: 

```bash
gatecli con-account list-key --chain-id testnet
```

??? note "Return example:"

	```bash
	ParticipationData:
	  Address: 		AAAAAAAAAAAAA3BRN4T4WM3R5OFI43BADSI65JSJO54JFKMHRD3UHK5KXCKELNLIGPVOX6ENETUFJ4IC4G6Q //gatemint consensus account address
	  VoteID: 		wzhzzwm5ed3dyfea1tg52cpm69ha569gt1jrwjej6xws3qqcz8j0 //VRF public key
	  SelectionID: 		ffn2g6cxw2ymvh216ytymr1w9rpkr7fh0gp11xazka529s6jhxp0 //the one-time signing public key
	ParticipationData:
	  ...
	```


