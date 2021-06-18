
### <span id="Send-Transaction">Send Transaction [API](../api/tx.md#Send-Transaction)</span>

```bash
gatecli tx send [recipient account] [transfer token amount] --from [sender account] --fees [tx fees]  --chain-id [chain ID]
```

Example:

```bash
gatecli tx send gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 10NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --fees 100000NANOGT --chain-id testnet
```

??? note "Return example:"

	```bash
	  TxHash: IRREVOCABLEPAY-0FD8A17798EC2CC637252687CA7DACA39BE0C555496EC3242F90C7C0BBBFE5F10A34A51D866BEC91A9866275BED9B522 //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
	```


Description:

* The recipient can be a Standard Account or a Vault Account
* If you want to add a remarks for this transaction,You can use --memo [remarks content],The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.



###  <span id="Query-a-Single-Transaction">Query a Single Transaction [API](../api/tx.md#Query-a-Single-Transaction)</span>
```bash
gatecli tx show [transaction  Hash] --chain-id [chain ID]
```

Example:

```bash
gatecli tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

??? note "Return example:"

	```bash
	Response:
	  Height: 761 //block height of transaction
	  TxHash: IRREVOCABLEPAY-9D8A3C2103C7B9BA5C99A1F52E28034F42A28404F1BF9E92C533B6A0B17E81F0FBDA199F4E2661FB420D2E216257AAB8 //transaction hash
	  Data: A702B9CDCFED0A6ADC2AA0850A286C316F27CB3371EB8A8E6C201C91EEA649777892A98788F743ABAAB89445B56833EAEBF88D24E8541228556556A9725BF1E60C14C8EB355A040D2254598A3D8638133426D4456D34CD988543D3C91BDDAEE21A100A064E414E4F4754120631303030303012120A0C0A064E414E4F47541202313110C09A0C1A30B7BEC61FBCE269F041C962481652F2A6763659FB783D40B23FF202C1800AE34E7D6498F28DBBE0E9DE8992F93CC9424122690A25E1E1A0FA20D46BB9C39EB4DB5489519A22873304927ED1DFE44A5648EE613503758F446908124047FF53D27F08FA3B7C478F560B95570759AA9EBC8CBBD5690A51A00A07CBBB9353A8328973BA9B44D426AECD0DEB8E5382704D785EBFD9838CAF0791A5FC12063204ED05BF07
	  Raw Log: [{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gt1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthz7a7xld"},{"key":"amount","value":"100000NANOGT"}]}]}]
	  Logs: [{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272"},{"key":"amount","value":"100000NANOGT"}]}]}]
	  GasWanted: 200000 //Gas consumed by this transaction
	  GasUsed: 75207 
	  Timestamp: 2020-06-19T07:36:11+08:00 //UTC transaction time
	  Events:
			- message
				- sender: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //sender account
				- module: bank //transaction module
				- action: send //transaction action
			- transfer
				- recipient:  vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272 //recipient account
				- amount: 100000NANOGT //transfer token amount 
	```


### Query Transaction List based on Criteria 
```bash
gatecli tx search 
--tags [<tag1>:<value1>&<tag2>:<value2>] 
--page [page number] 
--limit [entries per page] 
--chain-id [chain ID]
```

Example:

```bash
gatecli tx search --tags 'tx.height:771&message.sender:gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7' --page 1 --limit 30 --chain-id testnet
```

??? note "Return example:"

	```bash
	[
	    {
	        "count": "1", //the number of queries
	        "limit": "100", //entries per page
	        "page_number": "1", //page number
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
	                        "type": "delegate" //transaction tyep
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
	                "height": "4185", //block height of tranasction
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
	                                    "amount": "11", //transaction commission
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
	                                "signature": "+DabtgXQ3TInf5Nw75/H0AKNUOYs14kllMbB4GiVUdm4pHZfJEUoxDZ5bzMApf3seBfeWihseOtIXE6rnSWbDA==" //Signature
	                            }
	                        ],
	                        "valid_height": [ 
	                            "4173",
	                            "4383" //height the transaction takes effect
	                        ]
	                    }
	                },
	                "txhash": "BASIC-57884EB3E55CD2BDA7E912D6B2851CB539A4C4ED40DFC164B0AF57E9A49D512883E353D38677EC051055A17A948415A7" //transaction hash
	            }
	        ]
	    }
	]
	```



### Single Signature
```bash
gatecli tx sign [transaction file] --from [signer account] --multisig [multisigure account] --chain-id [chain ID] --output-document=[signature file]
```

Example:

```bash
gatecl tx sign tx.json --from gt115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet --output-document=s4_sign.json
```

### Multiple signatures
```bash
gatecli tx multisign [transaction file] [multisigure account] [signature file1] [signature file2] ... --chain-id [chain ID] > [transaction signature file]
```

Example:

```bash
gatecli tx multisign tx.json gt115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
```

### Broadcast
```bash
gatecli tx broadcast [transaction signature file] --chain-id [chain ID]
```

Example:

```bash
gatecli tx broadcast tx_with_sign.json --chain-id testnet
```

??? note "Return example:"

	```bash
	  TxHash: IRREVOCABLEPAY-0FD8A17798EC2CC637252687CA7DACA39BE0C555496EC3242F90C7C0BBBFE5F10A34A51D866BEC91A9866275BED9B522 //transaction hash, using gatecli tx show {hash}to query details of this transaction
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
	```



### Encoding	
```bash
gatecli tx encode [file path]
```

Example:

```bash
gatecli tx encode tx_sign.json
```

??? note "Return example:"
	
	```bash
	vAG5zc/tCmrcKqCFCihsMW8nyzNx64qObCAcke6mSXd4kqmHiPdDq6q4lEW1aDPq6/iNJOhUEihVZVapclvx5gwUyOs1WgQNIlRZij2GOBM0JtRFbTTNmIVD08kb3a7iGhAKBk5BTk9HVBIGMTAwMDAwEhIKDAoGTkFOT0dUEgIxMRDAmgwaMHZI3vYAiiIVpsyR/xtwvbu9zTfr0vxZUmT7lhu3unO0lOsHGyPZ3GqlJ9La3c5L7DIEoAboBw==
	```

