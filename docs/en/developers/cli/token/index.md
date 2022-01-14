
### <span id="Issue-Token">Issue Token [API](../../api/token/index.md#issue-token-command-line)</span>
```bash
gatecli token issue [token name] [token symbol] [total supply] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```

::: details Example:
	gatecli token issue TestToken AAA 100000000000000000000000  --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

Description: 

* Token issuance incurs a fee of  200000000000NANOGT, please make sure you have adequate NANOGT token at account.
* Token symbol must be all in upper case, 2-15 characters long. 
* In token creation,  there are another two flags:
  * '--mintable'  whether the token can be additionally issued or not
  * '--freezable' whether  the token can be frozen or not

### <span id="Issue-Additional-Token">Issue Additional Token [API](../../api/token/index.md#issue-additional-token-command-line)</span>
```bash
gatecli token mint [token amount] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```
::: details Example:
	gatecli token mint 100000000000AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

Description: 

* additional issued tokens must use  parameter --mintable when issuing.
* The unit of  token amount is the  onchain  token symbol（AAA-94f）
* The  sum of additional issued tokens and the previously issued tokens should not exceed the default cap （10 billion）

### <span id="Freeze-Token">Freeze Token [API](../../api/token/index.md#freeze-token-command-line)</span>
```bash
gatecli token freeze [onchain token symbol] --from [sender account] --fees [tx fees] --chain-id [chain ID] 
```

::: details Example:
	gatecli token freeze AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

Description: 

* For token to freeze,  parameter--freezable must be used when issuing.

### <span id="Unfreeze-Token">Unfreeze Token [API](../../api/token/index.md#unfreeze-token-command-line)</span>
```bash
gatecli token unfreeze [onchain token symbol] --from [sender account] --fees [tx fees] --chain-id [chain ID] 
```

::: details Example:
	gatecli token unfreeze AAA-94f --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

Description: 

* For token to unfreeze,parameter --freezable  must be used when issuing.
* The token’s previous status  must be in  frozen status.


### <span id="Burn-Token">Burn Token [API](../../api/token/index.md#burn-token-command-line)</span>
```bash
gatecli token burn [token amount] --from [sender account] --fees [tx fees] --chain-id [chain ID] 
```
::: details Example:
	gatecli token burn 100000000000AAA-94f  --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

Description: 

* The unit of token amount  is onchain  token symbol（AAA-94f）


### <span id="Query-Token-Information">Query Token Information [API](../../api/token/index.md#query-token-information-command-line)</span>
```bash
gatecli token show [onchain token symbol] --chain-id [chain ID]
```

::: details Example:
	gatecli token show AAA-789 --chain-id testnet
:::

::: details Return example:
	Token:
	  Symbol:              YY-FE8 //onchain token symbol
	  SourceAddress:       gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //token issuer account
	  TokenName:           test //token name
	  TotalSupply:         10000000000100 //total amount of a token
	  Mintable:            true //if additional issuance is allowed
	  Freezable:           true //if it can be frozen 
	  Freezed:             false //if freeze
:::

Description: 

* “onchain token symbol” in this command differs from the “token symbol”parameter when issuing a token.
* For example, when issuing a token, the “token symbol” passed is AAA. To avoid duplicated token names on GateChain, the “onchain token symbol”  recorded at blockchain will be AAA-[a random string] after successfully issuing.

### <span id="Query-All-Token">Query All Token [API](../../api/token/index.md#query-all-token-command-line)</span>
```bash
gatecli token list --chain-id [chain ID]
```

::: details Return example:
	Symbol:
		YY-FE8 //onchain token symbol
		...
:::

