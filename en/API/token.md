
### Issue Tokens  [command line](../cli/token.md#Issue Tokens-api)

######The interface generates transaction body  for “Issue Tokens”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST  /v1/token/issue/{symbol}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| symbol | token symbol,  (upper case letter, 2-15 characters long)|

* Note：Token issuance incurs a fee of  200000000000NANOGT, please make sure you have adequate NANOGT token at account.

Request BODY example:

%accordion%json%accordion%

```
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
```
%/accordion%

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

###Additionally Issue [command line](../cli/token.md#Additionally Issue-api)

######The interface generates transaction body  for “Additionally Issue”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting


```
POST /v1/token/mint/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|

Request BODY example:

%accordion%json%accordion%

```
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
```
%/accordion%

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

### Freeze Token [command line](../cli/token.md#Freeze Token-api)
######The interface generates transaction body  for “Freeze Token”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.
```
POST /v1/token/freeze/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|

Request BODY example

%accordion%json%accordion%

```
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
```
%/accordion%

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

### Unfreeze Tokens [command line](../cli/token.md#Unfreeze Tokens-api)
######The interface generates transaction body  for “Unfreeze Tokens”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/token/unfreeze/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol(token symbol-[random string]) |

Request BODY example:

%accordion%json%accordion%

```
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
```
%/accordion%

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

### Burn Token [command line](../cli/token.md#Burn Token-api)
######The interface generates transaction body  for “Burn Token”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/token/burn/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|

Request BODY example:

%accordion%json%accordion%

```
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
```
%/accordion%

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

### Query Token Information [command line](../cli/token.md#Query Token Information-api)
```
GET  /v1/token/show/{symbol}
```
Parameters

| Parameter | Description |
| :----| :---- |
| symbol | onchain token symbol (token symbol-[random string])|

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%

### Query All TOkens [command line](../cli/token.md#Query All TOkens-api)
```
GET  /v1/token/list
```

Return example：

%accordion%json%accordion%

```
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
```
%/accordion%


