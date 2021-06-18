### <span id="Delegate-Token-To-Consensus-Account">Delegate Token To Consensus Account [command line](../cli/staking.md#Delegate-Token-To-Consensus-Account)</span>

######The interface generates transaction body  for “Delegate  Token To Consensus Account”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.


```
POST /v1/staking/delegator/{delegatorAddr}/delegate
```
Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr |delegator’s account|


??? note "Request BODY example:"

	```
	{
	    "base_req":{
	        "from":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //sender account
	        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	        "chain_id":"testnet", //chain ID
	        "gas":"200000", //gas consumed by the transaction
	        "fees":[
	            {
	                "denom":"NANOGT", //unit
	                "amount":"500" //fee
	            }
	        ],
	        "simulate":false, //if calculate simulated gas
	        "valid_height":[ //the block height at which the transaction takes effect
	            "600",
	            "900"
	    	]
	    },
	    "con-account_address":"gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //consensus account address
	    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //delegator’s account address
	    "amount":{
	        "denom":"NANOGT", //unit
	        "amount":"100000000" //delegation token amount 
	    }
	}
	```



??? note "Return example:"

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgDelegate", //transaction type
	                "value":{
	                    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //delegator’s account address
	                    "con-account_address":"gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //consensus account address
	                    "amount":{
	                        "denom":"NANOGT",  //unit
	                        "amount":"100000000" //delegation token amount 
	                    }
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"500" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "nonces":[
	            null
	        ],
	        "signatures":null, //signature
	        "memo":"",
	        "valid_height":[ //the block height at which the transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```

### <span id="Query-Delegation-Information-of-A-Delegator-Account-In-A-Consensus-Account">Query Delegation Information of A Delegator Account In A Consensus Account [command line](../cli/staking.md#Query-Delegation-Information-of-A-Delegator-Account-In-A-Consensus-Account)</span>

```
GET  /v1/staking/delegator/{delegatorAddr}/{con-account}/delegations
```
Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|
| con-account |consensus account|

??? note "Return example:"

	```
	{
	    "height": "103", //block height
	    "result": {
	        "balance": "1000000000", //delegation token amount 
	        "con-account_address": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //consensus account address
	        "delegator_address": "gt11923wtfrfea85w9pklkkmpff7ctllhyjfyed54amdnmtteerk4jrl0tl58khd300jvgnsma", //delegator’s account address
	        "shares": "1000000000.000000000000000000" //delegation amount
	    }
	}
	```


### <span id="Query-Delegation-Information-of-A-Delegator-Account-In-All-Consensus-Accounts">Query Delegation Information of A Delegator Account In All Consensus Accounts [command line](../cli/staking.md#Query-Delegation-Information-of-A-Delegator-Account-In-All-Consensus-Accounts)</span>

```
GET  /v1/staking/delegator/{delegatorAddr}/delegations
```
Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|


??? note "Return example:"
	
	```
	{
	    "height": "117", //block height
	    "result": [
	        {
	            "balance": "200000", //delegation token amount 
	            "con-account_address": "gt11fd299ajlray3ltuj0jmzvwylzafscymk9nc98trr5peedf9q3s90wnczpa7qr6f5d6y3ny", //consensus account address
	            "delegator_address": "gt11923wtfrfea85w9pklkkmpff7ctllhyjfyed54amdnmtteerk4jrl0tl58khd300jvgnsma", //delegator’s account address
	            "shares": "200000.000000000000000000" //delegation amount
	        },
			...
	    ]
	}
	```


### Query Consensus Accounts Information For All Delegations of An Account

```
GET /v1/staking/delegator/{delegatorAddr}/con-accounts
```

Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|


??? note "Return example:"

	```
	{
	    "height":"77842",//block height
	    "result":[
	        {
	            "commission":{
	                "commission_rates":{
	                    "max_change_rate":"0.010000000000000000",//fee maximum change  range
	                    "max_rate":"0.010000000000000000",//maximum fee
	                    "rate":"0.010000000000000000" //fee
	            },
	                "update_time":"2020-05-27T08:13:47Z"// fee updated at
	            },
	            "delegator_shares":"100000000.000000000000000000",//delegation amount of a consensus account 
	            "description":{//consensus account attributes collection
	                "details":"",
	                "identity":"",
	                "moniker":"contwo",
	                "website":""
	            },
	            "operator_address":
	"gt11h3ugxuhhljffqyvj7sm08u3507ykdr5w67d9dkuv5tktv2vyc5xqrsxv7ujd8r6xvpwpt7",//consensus account address
				  "power": "39000934", //consensus account power
	            "power_rate":"1.029615402961540000",//consensus account loyalty coefficient
	            "pubkey": "gt1pub1u8s6p73qzlye3d4mljgt3auxhz4shj43w2eu0evladd03rr2auyrhc87aynqpwdz6w", //consensus account public key
	            "status":"online", //consensus account online status
	            "tokens":"100000000"//total token amount delegated to the consensus account
	        }
	    ]
	}
	```



### <span id="Query-A-List-of-Delegation-Transactions-of-A-Delegator-Account">Query A List of Delegation Transactions of A Delegator Account</span>

```
GET  /v1/tx?message.sender={delegatorAddr}&limit=1&page=1&message.action={delegation/redelegation/undelegation}
```
Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|
| action |action type:delegate/shift delegation/undelegate|


??? note "Return example:"

	```
	[
	    {
	        "count": "1", //Query entries
	        "limit": "100", //entries per page
	        "page_number": "1", // page number
	        "page_total": "1", //total pages
	        "total_count": "1", //total entries
	        "txs": [
	            {
	                "data": "A802B9CDCFED0A6BB9AE6FBE0A280273979685CF46967B3CEF04E3FDE9FC89B748D1AEF505630C95F81C50AD416399F657E2571C828F1228817243C326F338B53826CC93443332C45EFB00C1E81311FAD6B5A1AECF0E7CA43762221BB9FC03FD1A110A064E414E4F475412073130303030303012120A0C0A064E414E4F47541202313110C09A0C1A30E3F427451551B57618A238092EF6B7CFF333D55AC23A7F07D58AE9845E2E49A65B019F71D4F393B29DAFB4E8E605E40922690A25E1E1A0FA20C939025C7A4DF13E0525E30C425B4A89A4DDBC38B1373B00C5F4D6CCEC77F27B1240F8369BB605D0DD32277F9370EF9FC7D0028D50E62CD7892594C6C1E0689551D9B8A4765F244528C436796F3300A5FDEC7817DE5A286C78EB485C4EAB9D259B0C3204CD209F22",
	                "events": [
	                    {
	                        "attributes": [
	                            {
	                                "key": "con-account",
	                                "value": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //consensus account address
	                            },
	                            {
	                                "key": "amount",
	                                "value": "1000000" //delegation token amount 
	                            }
	                        ],
	                        "type": "delegate" //transaction type
	                    },
	                    {
	                        "attributes": [
	                            {
	                                "key": "module",
	                                "value": "staking"
	                            },
	                            {
	                                "key": "sender",
	                                "value": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //sender
	                            },
	                            {
	                                "key": "action",
	                                "value": "delegation"
	                            }
	                        ],
	                        "type": "message"
	                    }
	                ],
	                "gas_used": "107880",
	                "gas_wanted": "200000",
	                "height": "4185", //block height of the transaction
	                "logs": [
	                    {
	                        "events": [
	                            {
	                                "attributes": [
	                                    {
	                                        "key": "con-account",
	                                        "value": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //consensus account address
	                                    },
	                                    {
	                                        "key": "amount",
	                                        "value": "1000000"
	                                    }
	                                ],
	                                "type": "delegation"
	                            },
	                            {
	                                "attributes": [
	                                    {
	                                        "key": "module",
	                                        "value": "staking"
	                                    },
	                                    {
	                                        "key": "sender",
	                                        "value": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //sender
	                                    },
	                                    {
	                                        "key": "action",
	                                        "value": "delegation"
	                                    }
	                                ],
	                                "type": "message"
	                            }
	                        ],
	                        "log": "",
	                        "msg_index": 0,
	                        "success": true
	                    }
	                ],
	                "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":[{\"type\":\"delegate\",\"attributes\":[{\"key\":\"con-account\",\"value\":\"gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd\"},{\"key\":\"amount\",\"value\":\"1000000\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"module\",\"value\":\"staking\"},{\"key\":\"sender\",\"value\":\"gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x\"},{\"key\":\"action\",\"value\":\"delegate\"}]}]}]",
	                "timestamp": "2020-06-06T03:28:28+08:00",
	                "tx": {
	                    "type": "StdTx",
	                    "value": {
	                        "fee": {
	                            "amount": [
	                                {
	                                    "amount": "11", //transaction fee
	                                    "denom": "NANOGT"
	                                }
	                            ],
	                            "gas": "200000"
	                        },
	                        "memo": "",
	                        "msg": [
	                            {
	                                "type": "MsgDelegate",
	                                "value": {
	                                    "amount": {
	                                        "amount": "1000000", //delegation token amount
	                                        "denom": "NANOGT"
	                                    },
	                                    "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //delegator address
	                                    "con-account_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //consensus account address
	                                }
	                            }
	                        ],
	                        "nonces": [
	                            "4/QnRRVRtXYYojgJLva3z/Mz1VrCOn8H1YrphF4uSaZbAZ9x1POTsp2vtOjmBeQJ"
	                        ],
	                        "signatures": [
	                            {
	                                "pub_key": {
	                                    "type": "gatechain/PubKeyEd25519",
	                                    "value": "yTkCXHpN8T4FJeMMQltKiaTdvDixNzsAxfTWzOx38ns="
	                                },
	                                "signature": "+DabtgXQ3TInf5Nw75/H0AKNUOYs14kllMbB4GiVUdm4pHZfJEUoxDZ5bzMApf3seBfeWihseOtIXE6rnSWbDA==" //signature
	                            }
	                        ],
	                        "valid_height": [ 
	                            "4173",
	                            "4383" //the block height at which the transaction takes effect
	                        ]
	                    }
	                },
	                "txhash": "BASIC-57884EB3E55CD2BDA7E912D6B2851CB539A4C4ED40DFC164B0AF57E9A49D512883E353D38677EC051055A17A948415A7" //transaction hash
	            }
	        ]
	    }
	]
	```


### <span id="Shift-Delegation">Shift Delegation [command line](../cli/staking.md#Shift-Delegation)</span>

######The interface generates transaction body  for “Shift Delegation”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST /v1/staking/delegator/{delegatorAddr}/redelegate
```

Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|


??? note "Request BODY example:"

	```
	{
	    "base_req":{
	        "from":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //sender account
	        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	        "chain_id":"testnet", //chain ID
	        "gas":"200000", //gas consumed by the transaction
	        "fees":[
	            {
	                "denom":"NANOGT", //unit
	                "amount":"500" //fee
	            }
	        ],
	        "simulate":false, //if calculate simulated gas
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    },
	    "con-account_src_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //source consensus account
	    "con-account_dst_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //target consensus account
	    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //delegator  account
	    "amount":
	        {
	            "denom":"NANOGT", //unit
	            "amount":"100000000" //  token amount to shift 
	        }
	    
	}
	```


??? note "Return example:"

	```
	{
	    "type": "StdTx",
	    "value": {
	        "msg": [
	            {
	                "type": "MsgBeginRedelegate", //transaction type
	                "value": {
	                    "delegator_address": "gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //delegator  account
	                    "con-account_src_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //source consensus account
	                    "con-account_dst_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //target consensus account
	                    "amount": {
	                        "denom": "NANOGT", //unit
	                        "amount": "100000000" // token amount to shift
	                    }
	                }
	            }
	        ],
	        "fee": {
	            "amount": [
	                {
	                    "denom": "NANOGT", //unit
	                    "amount": "500" //fee
	                }
	            ],
	            "gas": "200000"  //gas consumed by the transaction
	        },
	        "nonces": [
	            null
	        ],
	        "signatures": null, //signature
	        "memo": "",
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```




### <span id="Query-Delegation-Shifts">Query Delegation Shifts [command line](../cli/staking.md#Query-All-Delegation-Shifts-of-A-Specific-Delegator-Account)</span>

```
GET /v1/staking/redelegations?delegator={delegator}&con-account_from={con-account_from}&con-account_to={con-account_to}
```

Parameters:

| Parameter| Description|
| :----| :--- |
| delegator | delegator’s account|
| con-account_from |source consensus account|
| con-account_to |target consensus account|


??? note "Return example:"

	```
	{
	    "height": "4573", //block height
	    "result": [
	        {
	            "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator’s account address
	            "con-account_dst_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //target consensus account
	            "con-account_src_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //source consensus account
	            "entries": [
	                {
	                    "balance": "40000000", // shift delegation token amount 
	                    "completion_time": "2020-06-26T19:18:28Z", //time the shift delegation finishes at
	                    "creation_height": 0, //block height at which the shift delegation transaction is initiated
	                    "initial_balance": "40000000", //initial token amount of shift delegation
	                    "shares_dst": "40000000.000000000000000000" //delegation amount shifted to target consensus account
	                }
	            ]
	        }
	    ]
	}
	```


### <span id="Undelegate-From-A-Consensus-Account">Undelegate From A Consensus Account [command line](../cli/staking.md#Undelegate-From-A-Consensus-Account)</span>

######The interface generates transaction body  for “Undelegate From A Consensus Account ”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST  /v1/staking/delegator/{delegatorAddr}/undelegate
```

Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|


??? note "Request BODY example："
	
	```
	{
	    "base_req":{
	        "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //sender account
	        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	        "chain_id":"testnet", //chain ID
	        "gas":"200000", //gas consumed by the transaction
	        "fees":[
	            {
	                "denom":"NANOGT",
	                "amount":"500" //fee
	            }
	        ],
	        "simulate":false, //if calculate simulated gas
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    },
	    "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //consensus account
	    "delegator_address":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator  account
	    "amount":
	        {
	            "denom":"NANOGT", //unit
	            "amount":"10000000" // amount to undelegate
	        }
	    
	}
	```


??? note "Return example:"
	
	```
	{
	    "type": "StdTx",
	    "value": {
	        "msg": [
	            {
	                "type": "MsgUndelegate", //transaction type
	                "value": {
	                    "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator  account
	                    "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //consensus account
	                    "amount": {
	                        "denom": "NANOGT", //unit
	                        "amount": "10000000" //amount to undelegate
	                    }
	                }
	            }
	        ],
	        "fee": {
	            "amount": [
	                {
	                    "denom": "NANOGT", //unit
	                    "amount": "500" //fee
	                } 
	            ],
	            "gas": "200000" //gas consumed by the transaction
	        },
	        "nonces": [
	            null
	        ],
	        "signatures": null, //signature
	        "memo": "",
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```


### <span id="Release-of-delegation-through-security-account">Release of delegation through security account [command line](../cli/staking.md#Release-of-delegation-through-security-account)</span>

######The interface generates transaction body  for “Release of delegation through security account ”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST  /v1/staking/delegator/undelegate_by_retrieval_account
```

??? note "Request BODY example："

	```
	{
	    "base_req":{
	        "from":"gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //sender account
	        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
	        "chain_id":"testnet", //chain ID
	        "gas":"200000", //gas consumed by the transaction
	        "fees":[
	            {
	                "denom":"NANOGT",
	                "amount":"500" //fee
	            }
	        ],
	        "simulate":false, //if calculate simulated gas
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    },
	    "security_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //security address
	    "delegator_address":["vault11556shquf76lunqu7hz05qtd2yda0gm8y0k2k3ku928nmyhgkjhrh95utu3h5c7wr6wuw7q"]//vault account
	}
	```


??? note "Return example:"
	
	```
	{
	    "type": "StdTx",
	    "value": {
	        "msg": [
	            {
	                "type": "MsgUndelegateByRetrievalAccount", //transaction type
	                "value": {
	                    "security_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //security address
	                    "delegator_address": "vault11556shquf76lunqu7hz05qtd2yda0gm8y0k2k3ku928nmyhgkjhrh95utu3h5c7wr6wuw7q", //vault account
	                }
	            }
	        ],
	        "fee": {
	            "amount": [
	                {
	                    "denom": "NANOGT", //unit
	                    "amount": "500" //fee
	                } 
	            ],
	            "gas": "200000" //gas consumed by the transaction
	        },
	        "nonces": [
	            null
	        ],
	        "signatures": null, //signature
	        "memo": "",
	        "valid_height":[ //the block height at which transaction takes effect
	            "600",
	            "900"
	    	]
	    }
	}
	```



### <span id="Query-Undelegations-of-A-Delegator-Account-in-A-consensus-Account">Query Undelegations of A Delegator Account in A consensus Account [command line](../cli/staking.md#Query-Undelegations-of-A-Delegator-Account-in-A-consensus-Account)</span>

```
GET /v1/staking/delegator/{delegatorAddr}/{con-account}/undelegations
```

Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|
| con-account |consensus account|

??? note "Return example:"
	
	```
	{
	    "height": "4595", //block height
	    "result": {
	            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //consensus account address
	        "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator’s account address
	        "entries": [
	            {
	                "balance": "10000000", //undelegated amount 
	                "completion_time": "2020-06-26T13:41:48Z", //time at which the undelegation finishes. That is, the time when principal is received
	                "creation_height": "3977", //block height at which the undelegate  transaction is initiated
	                "initial_balance": "10000000" //token amount at the time the undelegate transaction is initiated. If the consensus account is a bad actor during the undelegating time, the delegator’s token will be deducted
	            }
	        ]
	    }
	}
	```


### <span id="Query-Undelegations-of-A-Delegator-Account-in-All-consensus-Account">Query Undelegations of A Delegator Account in All consensus Accounts [command line](../cli/staking.md#Query-Undelegations-of-A-Delegator-Account-in-All-consensus-Account)</span>

```
GET /v1/staking/delegator/{delegatorAddr}/undelegations
```
Parameters:

| Parameter| Description|
| :----| :--- |
| delegatorAddr | delegator’s account|

??? note "Return example:"
	
	```
	{
	    "height": "4595", //block height
	    "result": {
	            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //consensus account address
	        "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator’s account address
	        "entries": [
	            {
	                "balance": "10000000", //Undelegation amount
	                "completion_time": "2020-06-26T13:41:48Z", //time at which the undelegation finishes. That is, the time when principal is received
	                "creation_height": "3977", //block height at which the undelegate  transaction is initiated
	                "initial_balance": "10000000" //token amount at the time the undelegate transaction is initiated. If the consensus account is a bad actor during the undelegating time, the delegator’s token will be deducted
	            }
	        ]
	    },
	    ...
	}
	```



### <span id="Query-All-Delegations-Of-A-Specific-Consensus-Account">Query All Delegations Of A Specific Consensus Account [command line](../cli/staking.md#Query-All-Delegations-Of-A-Specific-Consensus-Account)</span>

```
GET /v1/staking/con-account/{con-account}/delegations
```

Parameters:

| Parameter| Description|
| :----| :--- |
| con-account |consensus account|


??? note "Return example:"

	```
	{
	    "height": "5273", //block height
	    "result": [
	        {
	            "balance": "1000000", //delegation token amount
	            "con-account_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //consensus account
	            "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //delegator  account
	            "shares": "1000000.000000000000000000" //delegation amount
	        },
	        ...
	    ]
	}
	```
	

### <span id="Query-All-Undelegations-Of-A-Specific-Consensus-Account">Query All Undelegations Of A Specific Consensus Account [command line](../cli/staking.md#Query-All-Undelegations-Of-A-Specific-Consensus-Account)</span>

```
GET /v1/staking/con-account/{con-account}/undelegations
```

Parameters:

| Parameter| Description|
| :----| :--- |
| con-account |consensus account|


??? note "Return example:"

	```
	{
	    "height": "5287", //block height
	    "result": [
	        {
	            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //consensus account address
	            "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator  account
	            "entries": [
	                {
	                    "balance": "10000000", //Undelegation amount
	                    "completion_time": "2020-06-26T13:41:48Z", //time at which the undelegation finishes. That is, the time when principal is received
	                    "creation_height": "3977", //block height at which the undelegate  transaction is initiated
	                    "initial_balance": "10000000" //token amount when initiating the undelegate transaction. If the consensus account is a bad actor during the undelegating time, the delegator’s token will be deducted
	                }
	            ]
	        }
	    ]
	}
	```


### <span id="Query-Staking-Pool">Query Staking Pool [command line](../cli/staking.md#Query-Staking-Pool)</span>

```
GET /v1/staking/pool
```

??? note "Return example:"

	```
	{
	    "height": "43471",
	    "result": {
	        "bonded_tokens": "2000012230843453",
	        "not_bonded_tokens": "2768799795"
	    }
	}
	```


### <span id="Query-Staking-Parameters">Query Staking Parameters [command line](../cli/staking.md#Query-Staking-Parameters)</span>

```
GET /v1/staking/parameters
```

??? note "Return example:"

	```
	{
	    "height": "5290", //block height
	    "result": {
	        "bond_denom": "NANOGT", //token unit
	        "max_entries": 7, //supported maximum number of businesses(undelegate and re-delegate businesses)
	        "max_pow_rate": 2, //maximum loyalty coefficient
	        "max_con-accounts": 100, //maximum number of consensus accounts 
	        "pow_rate": 1, //minimum loyalty coefficient
	        "reward_uint_gt": 18, //reward unit
	        "undelegating_time": "1814400000000000" //time when the delegating finishes 
	    }
	}
	```




