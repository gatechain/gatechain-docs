
### <span id="Setup-Account-to-Fetch-Income">Setup Account to Fetch Income [API](../../api/distribution/index.md#setup-account-to-fetch-income-command-line)</span>

```bash
gatecli distribution set-withdraw-addr [account to fetch income] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
::: details Example:
	gatecli distribution set-withdraw-addr gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success transaction is sent successfully
:::


Description：

* The vault account can only withdraw the income and principal to this account and cannot be set up separately.


### <span id="Delegator-Account-Fetch-Partial-Income-From-A-Consensus-Account">Delegator Account Fetch Partial Income From A Consensus Account [API](../../api/distribution/index.md#delegator-account-fetch-partial-income-from-a-consensus-account-command-line)</span>
```bash
gatecli distribution withdraw-rewards [consensus account address] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
::: details Example: 
	gatecli distribution withdraw-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success transaction is sent successfully
:::



### <span id="Delegator-Account-Fetch-All-Income-From-A-Consensus-Account">Delegator Account Fetch All Income From A Consensus Account [API](../../api/distribution/index.md#delegator-account-fetch-all-income-from-a-consensus-account-command-line)</span>

```bash
gatecli distribution withdraw-all-rewards --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
::: details Example: 
	gatecli distribution withdraw-all-rewards --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success transaction is sent successfully
:::


### <span id="Query-Delegation-Income-of-A-Delegator-Account-At-A-Consensus-Account">Query Delegation Income of A Delegator Account At A Consensus Account [API](../../api/distribution/index.md#query-delegation-income-of-a-delegator-account-at-a-consensus-account-command-line)</span>
```bash
gatecli distribution rewards[delegator account address] [consensus account address] --chain-id [chain ID]
```
::: details Example:
	gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details Return example:
	Delegator Total Rewards:
	  Rewards:
		Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 // consensus account address
		Reward: 21.644616251838158370NANOGT //commission and mining earnings
:::



### <span id="Query-Delegation-Income-of-A-Delegator-Account-At-All-Consensus-Account">Query Delegation Income of A Delegator Account At All Consensus Account [API](../../api/distribution/index.md#query-delegation-income-of-a-delegator-account-at-all-consensus-account-command-line)</span>

```bash
gatecli distribution rewards[delegator account address] --chain-id [chain ID]
```
::: details Example: 
	gatecli distribution rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details Return example:
	Delegator Total Rewards:
	  Rewards:
		Con-account: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 // consensus account address
		Reward: 21.644616251838158370NANOGT //commission and mining earnings
		Con-account:...
	Total: 11997269037.266215577925788000NANOGT //total delegation income of a delegator account
:::


### <span id="Query-Delegation-Income-Pending-Paying-By-A-Consensus-Account">Query Delegation Income Pending Paying By A Consensus Account [API](../../api/distribution/index.md#query-delegation-income-pending-paying-by-a-consensus-account-command-line)</span>

```bash
gatecli distribution outstanding-rewards [consensus account address] --chain-id [chain ID]
```
::: details Example:
	gatecli distribution outstanding-rewards gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details Return example:
	660467079334.408199257068561630NANOGT //delegation income yet to be paid
:::


### <span id="Query-Consensus-Account-Income">Query Consensus Account Income [API](../../api/distribution/index.md#query-consensus-account-income-command-line)</span>

```bash
gatecli distribution commission [consensus account address] --chain-id [chain ID]
```
::: details Example: 
	gatecli distribution commission gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details Return example:
	660467079334.408199257068561630NANOGT //commission and mining earnings
::: 


### <span id="Query-Distribution-And-Foundation-Parameters">Query Distribution And Foundation Parameters [API](../../api/distribution/index.md#query-distribution-and-foundation-parameters-command-line)</span>

```bash
gatecli distribution params --chain-id [chain ID]
```

::: details Return example:
	Distribution Params:
	  Community Tax:          "0.020000000000000000" //Community Tax rate
	  Withdraw Addr Enabled:  true
	  First CommitteeReward:  "0.400000000000000000" //The first Committee mining reward rate
	  Second CommitteeReward:  "0.350000000000000000" //The second Committee mining reward rate
	  Third CommitteeReward:  "0.250000000000000000" //The third Committee mining reward rate
:::


