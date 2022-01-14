
### <span id="Issue-Token">Issue Token [command line](../../cli/token/index.md#issue-token-api)</span>

###### The interface generates transaction body  for “Issue Tokens”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST  /v1/token/issue/{symbol}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| symbol | token symbol,  (upper case letter, 2-15 characters long)|

* Note：Token issuance incurs a fee of  200000000000NANOGT, please make sure you have adequate NANOGT token at account.


::: details Request BODY example:
	{
	  "base_req": {
	    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	    "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	    "chain_id": "testnet", //chain ID
	    "gas": "80445444", //gas consumed by the transaction
	    "fees": [
	      {
	        "denom": "NANOGT", //unit
	        "amount": "5000" //fee
	      }
	    ],
	    "simulate": false, //if calculate simulated gas
	    "valid_height":[ //block height at which  the transaction takes effect
	         "600",
	         "900"
	    ]
	  },
	  "token_name": "test token", //token name
	  "total_supply": "1000000000000000", //total supply
	  "mintable": true, //if allows additionally issuing
	  "freezable": true //if allows freezing
	}
:::

::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"IssueToken", //transaction type
	                "value":{
	                    "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	                    "token_name":"test token", //token name
	                    "symbol":"YJ", //token symbol
	                    "total_supply":"1000000000000000", //total supply
	                    "mintable":true, //if allows additionally issuing
	                    "freezable":true //if allows freezing
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"5000" //fee
	                }
	            ],
	            "gas":"80445444" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"",
	    	 "valid_height":[ //block height at which  the transaction takes effect
	            "600",
	            "900"
	        ]
	    }
	}
:::


### <span id="Issue-Additional-Token">Issue Additional Token [command line](../../cli/token/index.md#issue-additional-token-api)</span>

###### The interface generates transaction body  for “Additionally Issue”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting


```
POST /v1/token/mint/{symbol}
```

Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|


::: details Request BODY example:
	{
	  "base_req": {
		"from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
		"memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
		"chain_id": "testnet", //chain ID
		"gas": "200000", //gas consumed by the transaction
		"fees": [
		  {
			"denom": "NANOGT", //unit
			"amount": "5000" //fee
		  }
		],
		"simulate": false, //if calculate simulated gas
	   "valid_height":[ //block height at which  the transaction takes effect
	   		"600",
	   		"900"
	   ] 
	  },
	  "amount": "10000000" //amount to additionally issue
	}
:::


::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MintToken", //transaction type
	                "value":{
	                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	                    "amount":{
	                        "denom":"YJ-9D3", //unit of additionally issued token
	                        "amount":"10000000" //amount to additionally issue
	                    }
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"5000" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"",
	  		 "valid_height":[ //block height at which  the transaction takes effect
	   			 "600",
	   			 "900"
	 		 ] 
	    }
	}
:::

### <span id="Freeze-Token">Freeze Token [command line](../../cli/token/index.md#freeze-token-api)</span>

###### The interface generates transaction body  for “Freeze Token”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/token/freeze/{symbol}
```

Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|


::: details Request BODY example:
	{
	    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	    "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	    "chain_id": "testnet", //chain ID
	    "gas": "200000", //gas consumed by the transaction
	    "fees": [
	      {
	        "denom": "NANOGT", //unit
	        "amount": "5000" //fee
	      }
	    ],
	    "simulate": false, //if calculate simulated gas
	    "valid_height":[ //block height at which  the transaction takes effect
	        "600",
	        "900"
	    ]
	}
:::

::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"FreezeToken", //transaction type
	                "value":{
	                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	                    "symbol":"YY-A69" //unit of token to freeze
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                { 
	                    "denom":"NANOGT", //unit
	                    "amount":"5000" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"", 
	        "valid_height":[ //block height at which  the transaction takes effect
	           "600",
	           "900"
	        ]
	    }
	}
:::


### <span id="Unfreeze-Token">Unfreeze Token [command line](../../cli/token/index.md#unfreeze-token-api)</span>

###### The interface generates transaction body  for “Unfreeze Tokens”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/token/unfreeze/{symbol}
```

Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol(token symbol-[random string]) |

::: details Request BODY example:
	{
	    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	    "memo": "",  ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	    "chain_id": "testnet", chain ID
	    "gas": "200000", //gas consumed by the transaction
	    "fees": [
	      {
	        "denom": "NANOGT", //unit
	        "amount": "5000" //fee
	      }
	    ],
	    "simulate": false, //if calculate simulated gas
	    "valid_height":[ //block height at which  the transaction takes effect
	         "600",
	         "900"
	    ]
	}
:::

::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"UnfreezeToken", //transaction type
	                "value":{
	                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	                    "symbol":"YY-A69" //unit of token to unfreeze
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"5000" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"",
	        "valid_height":[ //block height at which  the transaction takes effect
	           "600",
	           "900"
	        ]
	    }
	}
:::


### <span id="Burn-Token">Burn Token [command line](../../cli/token/index.md#burn-token-api)</span>

###### The interface generates transaction body  for “Burn Token”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/token/burn/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|

::: details Request BODY example:
	{
	    "base_req": {
	        "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	        "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	        "chain_id": "testnet", //chain ID
	        "gas": "200000", //gas consumed by the transaction
	        "fees": [{
	            "denom": "NANOGT", //unit
	            "amount": "5000" //fee
	        }],
	        "simulate": false, //if calculate simulated gas
	        "valid_height":[ //block height at which  the transaction takes effect
	           "600",
	           "900"
	        ]
	    },
	    "amount": "10000" //token amount to burn
	}
:::

::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"BurnToken", //transaction type
	                "value":{
	                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
	                    "sub":{
	                        "denom":"YY-A69", //unit of token to burn
	                        "amount":"10000" //burned token amount 
	                    }
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"5000" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"",
	        "valid_height":[ //block height at which  the transaction takes effect
	           "600",
	           "900"
	        ]
	    }
	}
:::


### <span id="Query-Token-Information">Query Token Information [command line](../../cli/token/index.md#query-token-information-api)</span>

```
GET  /v1/token/show/{symbol}
```

Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|


::: details Return example:
	{
	    "height":"0", //block height
	    "result":{
	        "type":"Token", //token type
	        "value":{
	            "freezable":true, //if allows freezing
	            "freezed":false, //if freeze
	            "mintable":true, //if allows additionally issuing
	            "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Issuer account address
	            "symbol":"YJ-9D3", //onchain token symbol
	            "token_name":"test token", //token name
	            "total_supply":"1000000000000000" //total supply
	        }
	    }
	}
:::


### <span id="Query-All-Token">Query All Token [command line](../../cli/token/index.md#query-all-token-api)</span>
```
GET  /v1/token/list
```

::: details Return example:
	{
	    "height":"0",
	    "result":{
	        "tokens":[
	            {
	                "type":"Token", //token type
	                "value":{
	                    "freezable":true, //if allows freezing
	                    "freezed":false, //if freeze
	                    "mintable":true, //if allows additionally issuing
	                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Issuer account address
	                    "symbol":"YJ-9D3", //onchain token symbol
	                    "token_name":"test token", //token name
	                    "total_supply":"1000000000000000" //total supply
	                }
	            },
	            ...
	        ]
	    }
	}
:::



