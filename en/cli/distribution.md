
### Setup Account to Fetch Income [API](../API/distribution.md#Setup Account to Fetch Income-command line)
```bash
gatecli distribution set-withdraw-addr [account to fetch income] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution set-withdraw-addr gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using gatecli tx show {hash}to query details of this transaction
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success transaction is sent successfully
```
%/accordion%

Description：

* The vault account can only withdraw the income and principal to this account and cannot be set up separately.


### Delegator Account Fetch Partial Income From A Consensus Account [API](../API/distribution.md#Delegator Account Fetch Partial Income From A Consensus Account-command line)
```bash
gatecli distribution withdraw-rewards [consensus account address] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution withdraw-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using gatecli tx show {hash}to query details of this transaction
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success transaction is sent successfully
```
%/accordion%


### Delegator Account Fetch All Income From A Consensus Account [API](../API/distribution.md# Delegator Account Fetch All Income From A Consensus Account-command line)
```bash
gatecli distribution withdraw-all-rewards --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution withdraw-all-rewards --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using gatecli tx show {hash}to query details of this transaction
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success transaction is sent successfully
```
%/accordion%


### Query Delegation Income of A Delegator Account  In A Consensus Account [API](../API/distribution.md#Query Delegation Income of A Delegator Account  In A Consensus Account -command line)
```bash
gatecli distribution rewards[delegator account address] [consensus account address] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Delegator Total Rewards:
  Rewards:
	Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 // consensus account address
	Reward: 21.644616251838158370NANOGT //commission and mining earnings
```
%/accordion%


### Query Delegation Income of A Delegator Account  In All Consensus Accounts [API](../API/distribution.md#Query Delegation Income of A Delegator Account  In All Consensus Accounts-command line)
```bash
gatecli distribution rewards[delegator account address] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Delegator Total Rewards:
  Rewards:
	Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 // consensus account address
	Reward: 21.644616251838158370NANOGT //commission and mining earnings
	Con-account:...
Total: 11997269037.266215577925788000NANOGT //total delegation income of a delegator account

```
%/accordion%



### Query  Delegation Income Pending Paying By A  Consensus Account [API](../API/distribution.md#Query  Delegation Income Pending Paying By A  Consensus Account-command line)

```bash
gatecli distribution outstanding-rewards [consensus account address] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution outstanding-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
660467079334.408199257068561630NANOGT //delegation income yet to be paid
```
%/accordion%

### Query Consensus Account Income [API](../API/distribution.md#Query Consensus Account Income-command line)

```bash
gatecli distribution commission [consensus account address] --chain-id [chain ID]
```
Example: 

```bash
gatecli distribution commission gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
660467079334.408199257068561630NANOGT //commission and mining earnings
```
%/accordion%

### Query Distribution And Foundation Parameters [API](../API/distribution.md#Query Distribution And Foundation Parameters-command line)

```bash
gatecli distribution params --chain-id [chain ID]
```

%accordion%Return example: %accordion%

```bash
Distribution Params:
  Community Tax:          "0.020000000000000000" //Community Tax rate
  Withdraw Addr Enabled:  true
  First CommitteeReward:  "0.400000000000000000" //The first Committee mining reward rate
  Second CommitteeReward:  "0.350000000000000000" //The second Committee mining reward rate
  Third CommitteeReward:  "0.250000000000000000" //The third Committee mining reward rate
```
%/accordion%

