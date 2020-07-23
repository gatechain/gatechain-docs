
### Delegate token to Consensus Account [API](../API/staking.md#Delegate token to Consensus Account-command line)
```bash
gatecli staking delegate [consensus account address] [delegation token amount ]  --from [delegator account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking delegate gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s 100000000NANOGT --from gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //Transaction hash，using gatecli tx show {hash}to query details of this transaction.
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully

```
%/accordion%


### Query Delegation Information of A Delegator Account In A Consensus Account [API](../API/staking.md#Query Delegation of A Delegator Account In A Consensus Account-command line)
```bash
gatecli staking delegation [delegator account address] [consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking delegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Delegation:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
  Shares:      1000.000000000000000000 //delegation quantity
  Balance:   1000 //delegation token amount 
```
%/accordion%


### Query Delegation Information of A Delegator Account In All Consensus Accounts [API](../API/staking.md#Query Delegation Information of A Delegator Account In All Consensus Accounts-command line)

```bash
gatecli staking delegations [delegator account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking delegations gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Delegation:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator  account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
  Shares:      1000.000000000000000000 //delegation quantity
  Balance:   1000 //delegation token amount 
Delegation: ...

```
%/accordion%

### Shift Delegation [API](../API/staking.md#Shift Delegation -command line)

```bash
gatecli staking redelegate [source consensus account address] [target consensus account address] [delegation token amount ] --from [delegator account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking redelegate gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla54 100000000NANOGT --from gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //Transaction hash，using gatecli tx show {hash}to query details of this transaction.
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully

```
%/accordion%


### Query All Delegation Shifts  of A Specific Delegator Account [API](../API/staking.md#Query Delegation Shifts -command line)

```bash
gatecli staking redelegations [delegator account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking redelegations gt11p8qmx5q8h7h3es3wl4x0y4efgme552hk7x5g6ppeelel2v2vvsthxk0ce65gw9mfls9ugp --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Redelegations between:
  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //source consensus account address
  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //target consensus account address
  Entries:
    Redelegation Entry #0:
      Creation height:           876 //height  at which the shift delegation transaction is initiated 
      Min time to undelegate (unix): 2020-07-10 02:47:51 +0000 UTC //time finishing undelegating  at source consensus account.
      Initial Balance:           10 //initial token amount of delegation shift  
      Shares:                    10.000000000000000000 //amount of the delegation shift
      Balance:                   10 //token amount of shift delegation 
Redelegations between:
 ...
 
```
%/accordion%

### Query Delegation Shifts Between Two Consensus Accounts For A Delegator Account
```bash
gatecli staking redelegation [delegator account address] [source consensus account address] [target consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking redelegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Redelegations between:
  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //source consensus account address
  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //target consensus account address
  Entries:
    Redelegation Entry #0:
      Creation height:           876 //height  at which the shift delegation transaction is initiated 
      Min time to undelegate (unix): 2020-07-10 02:47:51 +0000 UTC //time finishing undelegating  at source consensus account.
      Initial Balance:           10 //initial token amount of delegation shift 
      Shares:                    10.000000000000000000 //delegation shift quantity 
      Balance:                   10 //token amount of shift delegation 
```
%/accordion%


### Undelegate From A Consensus Account [API](../API/staking.md#Undelegate From A Consensus Account-command line)

```bash
gatecli staking undelegate [consensus account address] [amount to undelegate] --from [sender account] --chain-id [chain ID]
```
Example:

```bash
gatecli staking undelegate gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 100000000NANOGT --from gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //Transaction hash，using gatecli tx show {hash}to query details of this transaction.
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully

```
%/accordion%


###Query Undelegation Records  at A Consensus Account For A Delegator Account [API](../API/staking.md#Query Undelegation Records  at A Consensus Account For A Delegator Account-command line)

```bash
gatecli staking undelegation [delegator account address] [consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking undelegation gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Undelegations between:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
	Entries:
		Undelegation 0:
		Creation Height:           904 //block height  of the undelegate transaction
		Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //time finishing undelegating
		Expected balance:          10 //undelegated amount
```
%/accordion%


### Query Undelegation Records  At All Consensus Accounts For A Delegator Account [API](../API/staking.md#Query Undelegation Records  At All Consensus Accounts For A Delegator Account-command line)

```bash
gatecli staking undelegations [delegator account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking undelegations gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Undelegations between:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator  account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
	Entries:
		Undelegation 0:
		Creation Height:           904 //block height  of undelegate transaction
		Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //time finishing undelegating
		Expected balance:          10 //undelegated amount
Undelegations between:
	...
```
%/accordion%

### Query All Delegation Records  For A Specific Consensus Account [API](../API/staking.md#Query All Delegation Records  For A Specific Consensus Account-command line)

```bash 
gatecli staking delegations-to [consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking delegations-to gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Delegation:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
  Shares:      1000.000000000000000000 //delegation quantity
  Balance:   1000 //delegation token amount 
```
%/accordion%

### Query All Delegation Shifts For A Specific Consensus Account [API](../API/staking.md#Query Delegation Shifts -command line)

```bash
gatecli staking redelegations-from [consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking redelegations-from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Redelegations between:
  Delegator:                   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Source Con-account:          gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //source consensus account address
  Destination Con-account:     gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //target consensus account address
  Entries:
    Redelegation Entry #0:
      Creation height:           876 //block height of shift  delegation transaction
      Min time to Undelegations (unix): 2020-07-10 02:47:51 +0000 UTC //time finishing undelegating from source consensus account 
      Initial Balance:           10 //initial token amount of delegation shift 
      Shares:                    10.000000000000000000 //amount of the delegation shift
      Balance:                   10 //token amount of shift delegation 
```
%/accordion%


### Query All Undelegations  For A Specific Consensus Account [API](../API/staking.md#Query All Undelegations For A Specific Consensus Account-command line)

```bash
gatecli staking undelegations-from  [consensus account address] --chain-id [chain ID]
```
Example:

```bash
gatecli staking undelegations-from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%Return example: %accordion%

```bash
Undelegations between:
  Delegator:   gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //delegator account address
  Con-account: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //consensus account address
	Entries:
		Undelegation 0:
		Creation Height:           904 //block height of undelegate transaction
		Min time to undelegate (unix): 2020-07-10 03:34:31 +0000 UTC //time finishing undelegating
		Expected balance:          10 //delegated token amount
Undelegations between:
	...
```
%/accordion%

### Query Staking Pool [API](../API/staking.md#Query Staking Pool-command line)

```bash
gatecli staking pool --chain-id [chain ID]
```

%accordion%Return example: %accordion%

```bash
Pool:
  Not Bonded Tokens:  10000
  Bonded Tokens:      0
```
%/accordion%


### Query Staking Paramters [API](../API/staking.md#Query Staking Paramters-command line)

```bash
gatecli staking params --chain-id [chain ID]
```

%accordion%Return example: %accordion%

```bash
Params:
  Undelegating Time:    504h0m0s //time finishing undelegating
  Max Con-accounts:    100 //maximum number of consensus accounts
  Max Entries:       7 //allowed maximum number of businesses (undelegate business and re-delegate business)
  Bonded Coin Denom: NANOGT //token unit
  Pow Rate:          1 //minimum loyalty coefficient
  Max Pow Rate:      2 //maximum loyalty coefficient
```
%/accordion%



