
### <span id="Send-Transaction">Send Transaction [command line](../../cli/tx/index.md#send-transaction-api)</span>

###### Use the interface to finish broadcasting if a transaction body is already locally singed.
```
POST /v1/tx
```

::: details Request BODY example:
	After locally singing a transaction,  you just need to copy the signatures file as request body. No need to copy below content.
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgCreateVault", //transaction type（This transaction is to create a Vault Account. ）
	                "value":{
	                    "from_address":"gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //sender account
	                    "to_address":"gt11e02xkclka6h64c80az66ampjzzwe739tlnrkxya3ecxrj6e67plh626zad7tqz3w3m8xqt", //recipient account
	                    "security_address":"gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //Retrieval Account 
	                    "delay_height":"100", //delay height before a transaction takes effect
	                    "clearing_height":"50000", //clearing height
	                    "amount":[
	                        {
	                            "denom":"NANOGT", //unit
	                            "amount":"500" //transfer token amount
	                        }
	                    ],
	                    "pubkey":""
	                }
	            }
	        ],
	        "fee":{
	            "amount":[
	                {
	                    "denom":"NANOGT", //unit
	                    "amount":"11" //fee
	                }
	            ],
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "nonces":[
	            null
	        ],
	        "signatures":[
	            {
	                "pub_key":{
	                    "type":"gatechain/PubKeyEd25519",
	                    "value":"pIGmDHUICq/NrI6TYJj8/yGbJfa/EjrJ50ImqSVbPyw="
	                },
	                "signature":"CYUFLRQf2JCw1kR0AFIdUhMrc+qu5owzwh1outwoAn6AKf2joFScL2qxWFzHHLO/3uig87E7rFUQmajz47d/Dw==" //signature
	            }
	        ],
	        "memo":"",
	        "valid_height":[ //block height at which the transaction takes effect
	            "2300",
	            "2500"
	        ]
	    }
	}
:::

::: details Return example:
	{
	    "height":"0", //block height
	    "txhash":"IRREVOCABLEPAY-79459C3708F7E38EA35977C12E5ECB659D7F23B772BEB5A58F52DFAA4C72D985", //transaction hash
	    "data":"zgG5zc/tCkDcKqCFChTtdOB+KzokLvRctbEBeDtte5QIlxIUntatO0LfnWuAFDcHJkcXQrv6qA8aDgoGTkFOT0dDEgQ1MDAwEhQKDgoGTkFOT0dDEgQ1MDAwEMCaDBoAImkKJRYk3mQgGz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4SQPpCFMKSXR0kQejB351r0ZDR05LgxFe9GsEsgyj/MKe2ia3Pv+aem3OhQnndisiEsZbCEKP2svCTwnWBG5KlJAAyAwHoBw==",
	    "raw_log":"boradcast tx success", 
	    "tx":{
	        "type":"StdTx",
	        "value":{
	            "msg":[
	                {
	                    "type":"MsgSend", //transaction type
	                    "value":{
	                        "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
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
	                "gas":"200000" //gas consumed by the transaction
	            },
	            "nonces":[
	                null
	            ],
	            "signatures":[
	                {
	                    "pub_key":{
	                        "type":"gatechain/PubKeyEd25519",
	                        "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
	                    },
	                    "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA==" //signature
	                }
	            ],
	            "memo":"",
	            "valid_height":[ //block height at which a transaction takes effect
	                "1",
	                "1000"
	            ]
	        }
	    }
	}
:::


### Normal Transaction

###### The interface generates transaction body  for “Normal Transaction”.After locally signing it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST  /v1/tx/send/{account}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| account | Recipient Account |


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
	        "valid_height":[ //block height at which the transaction takes  effect
	            "600",
	            "900"
	    	]
	    },
	    "amount": [{
	        "denom": "NANOGT", //unit
	        "amount": "5000" //transfer token amount
	    }]
	}
:::


::: details Return example:
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgSend", //transaction type
	                "value":{
	                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
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
	            "gas":"200000" //gas consumed by the transaction
	        },
	        "signatures":null, //signature
	        "memo":"",
	        "valid_height":[ //block height at which the transaction takes  effect
	            "600",
	            "900"
	    	]
	    }
	}
:::


### <span id="Query-a-Single-Transaction">Query a Single Transaction [command line](../../cli/tx/index.md#query-a-single-transaction-api)</span>

```
GET /v1/tx/{hash}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| hash | transaction hash |

::: details Return example:
	{
	"data":"AB02B9CDCFED0A6FDC2AA0850A28E151E865950BE2B1B0772852895F3D6DBF475F21B7A8C261E8A9817B8E3E56C97F5319BF6C59095C1228E019A5E99305917528D431DDC13C9776648B6244877F9F19B033DCE3B88B92D3A09586D05AC0E1281A150A064E414E4F4754120B313030303030303030303012120A0C0A064E414E4F47541202313110C09A0C1A3032B98683061DE03543FAB82EA8904E492FFDF1AC56F1BC855316B29E004EB3A02FCF7069CCEA0B1606C549498C28336022690A25E1E1A0FA201BAAF55B7BFB628A0FEFAE3A2BE6114F30A5A373CFF7744DE321FADB2CC202541240D72A4B77AA24B5702EF59BB98E0574F6A24541CEF08B498A8EA8F9532807339F9DBCA1B7176AB78D8C000B62EF18D5B5EFBC2E7EE05E05B800D2EC31AA7C190A320301CC01",
	            "events": [
	                {
	                    "attributes": [ //attributes of the sender
	                        {
	                            "key": "sender",
	                            "value": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp" //sender account
	                        },
	                        {
	                            "key": "module",
	                            "value": "bank"
	                        },
	                        {
	                            "key": "action",
	                            "value": "send"
	                        }
	                    ],
	                    "type": "message"
	                },
	                {
	                    "attributes": [ //attributes of the recipient
	                        {
	                            "key": "recipient",
	                            "value": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar" // recipient account
	                        },
	                        {
	                            "key": "amount", //unit
	                            "value": "10000000000NANOGT" //transfer token amount
	                        }
	                    ],
	                    "type": "transfer"
	                }
	            ],
	            "gas_used": "60579",
	            "gas_wanted": "200000",
	            "height": "5", //block height of the transaction
	            "logs": [
	                {
	                    "events": [
	                        {
	                            "attributes": [
	                                {
	                                    "key": "sender",
	                                    "value": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp"
	                                },
	                                {
	                                    "key": "module",
	                                    "value": "bank"
	                                },
	                                {
	                                    "key": "action",
	                                    "value": "send"
	                                }
	                            ],
	                            "type": "message"
	                        },
	                        {
	                            "attributes": [
	                                {
	                                    "key": "recipient",
	                                    "value": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar"
	                                },
	                                {
	                                    "key": "amount",
	                                    "value": "10000000000NANOGT"
	                                }
	                            ],
	                            "type": "transfer"
	                        }
	                    ],
	                    "log": "",
	                    "msg_index": 0,
	                    "success": true
	                }
	            ],
	            "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"sender\",\"value\":\"gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp\"},{\"key\":\"module\",\"value\":\"bank\"},{\"key\":\"action\",\"value\":\"send\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar\"},{\"key\":\"amount\",\"value\":\"10000000000NANOGT\"}]}]}]",
	            "timestamp": "2020-06-15T20:53:28+08:00",
	            "tx": {
	                "type": "StdTx",
	                "value": {
	                    "fee": {
	                        "amount": [
	                            {
	                                "amount": "11",
	                                "denom": "NANOGT"
	                            }
	                        ],
	                        "gas": "200000"
	                    },
	                    "memo": "",
	                    "msg": [
	                        {
	                            "type": "MsgSend",
	                            "value": {
	                                "amount": [
	                                    {
	                                        "amount": "10000000000",
	                                        "denom": "NANOGT"
	                                    }
	                                ],
	                                "from_address": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp",
	                                "to_address": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar"
	                            }
	                        }
	                    ],
	                    "nonces": [
	                        "MrmGgwYd4DVD+rguqJBOSS/98axW8byFUxayngBOs6Avz3BpzOoLFgbFSUmMKDNg"
	                    ],
	                    "signatures": [ 
	                        {
	                            "pub_key": {
	                                "type": "gatechain/PubKeyEd25519",
	                                "value": "G6r1W3v7YooP7646K+YRTzClo3PP93RN4yH62yzCAlQ="
	                            },
	                            "signature": "1ypLd6oktXAu9Zu5jgV09qJFQc7wi0mKjqj5UygHM5+dvKG3F2q3jYwAC2LvGNW177wufuBeBbgA0uwxqnwZCg==" //signature
	                        }
	                    ],
	                    "valid_height": [ //block height at which a transaction takes effect
	                        "1",
	                        "204"
	                    ]
	                }
	            },
	            "txhash": "IRREVOCABLEPAY-DA2D28BEE24FF2CCF7FB45064BE316D6AB6962CD1C79A53DB427C83EC94A746C0C0A07FC6B74EFBC2C3B1F086F123E34" //transaction hash
	}
:::
