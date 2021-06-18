
### <span id="Send-a-Revocable-Transaction">Send a Revocable Transaction [command line](../cli/revocable-tx.md#Send-a-Revocable-Transaction)</span>

######The interface generates transaction body for “Send  A Revocable Transaction”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST  /v1/revocable-tx/send/{account}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| account | the recipient account, which can be a Standard Account or a Vault Account.  |


??? note "Request  BODY example:"

	```
	{
	  "base_req": {
		"from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account 
		"memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
		"chain_id": "testnet", //chain ID
		"gas": "200000", //gas consumed by this transaction
		"fees": [
		  {
			"denom": "NANOGT", //unit
			"amount": "5000" //fee
		  }
		],
		"simulate": false, // If calculate simulated gas?
	    "valid_height":[ //height at which the transaction takes effect
	        "600",
	        "900"
	   	 ]
	  },
	  "amount": [
		{
		  "denom": "NANOGT", //unit
		  "amount": "5000" //transfer token amount 
		}
	  ]
	}
	```


??? note "Return example:"

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgRevocableSend", //transaction type
	                "value":{
	                    "from_address":"vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //sender account
	                    "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //recipient account 
	                    "amount":[
	                        {
	                            "denom":"NANOGT", //unit
	                            "amount":"5000" //transfer token amount 
	                        }
	                    ]
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
	            "gas":"200000" //gas consumed by this transaction
	        },
	        "signatures":null, //signature
	        "memo":"", 
	        "valid_height":[ //height at which the transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```


### <span id="Revoke-a-Revocable-Transaction">Revoke a Revocable Transaction [command line](../cli/revocable-tx.md#Revoke-a-Revocable-Transaction)</span>

######The interface generates transaction body for “Revoke A Revocable Transaction”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/revocable-tx/revoke/{tx-hash}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| tx-hash | Hash of the revocable transaction |


??? note "Request  BODY example:"

	```
	{
	  "base_req": {
	    "from": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //sender account
	    "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	    "chain_id": "testnet", //chain ID
	    "gas": "200000", //gas consumed by this transaction
	    "fees": [
	      {
	        "denom": "NANOGT", //unit
	        "amount": "1" //fee
	      }
	    ],
	    "simulate": false, //If calculate simulated gas?
	    "valid_height":[ //height at which the transaction takes effect
	        "600",
	        "900"
	   	]
	  },
	  "index": "0" //serial number of the message
	}
	```


??? note "Return example:"

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgRevoke", //transaction type
	                "value":{
	                    "vault_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //base account address of the Vault Account
	                    "security_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Retrieval Account address
	                    "revoke_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Account address  transaction is revoked to
	                    "height":"6947", //height at which the revoke transaction takes effect
	                    "tx_hash":"BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8", //transaction hash of the revocable transaction
	                    "msg_index":"0", //serial number of the message
	                    "amount":[
	                        {
	                            "denom":"NANOGT", //unit
	                            "amount":"5" //revoked token amount 
	                        }
	                    ]
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"1" //fee of the revoke transaction
	                }
	            ],
	            "gas":"200000" //gas consumded by this transaction
	        },
	        "signatures":null, //signature
	        "memo":"", 
	        "valid_height":[ //height at which the transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```


### Query Revocable Transaction Status

```
GET /v1/revocable-tx/status/{hash}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| hash | transaction Hash of the Revocable Transaction|


??? note "Return example:"

	```
	{
	    "status": 1, //1：revocable，0：irrevocable
	    "revoke_hash": "" //transaction Hash of the Revoke transaction
	}
	```


