### Revocable Transaction

```
POST  /revocable-tx/send/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | recipient account, can be a Standard Account or a vault account |

request BODY example ：

%accordion%json%accordion%

```
{
  "base_req": {
	"from": "gc11578zewhe03eycdtvnqcuxt8z3qzg226qj68k6r",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "NANOGT",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "NANOGT",
	  "amount": "5000"
	}
  ]
}
```

%/accordion%

return:

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgRevocableSend",
                "value":{
                    "from_address":"gc11578zewhe03eycdtvnqcuxt8z3qzg226qj68k6r",
                    "to_address":"gc112t5v8z8z4qwzmzvhrr8f4u3yhrjmvm9uw58lnw",
                    "amount":[
                        {
                            "denom":"NANOGT",
                            "amount":"5000"
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT",
                    "amount":"5000"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
    }
}
```

%/accordion%

### Revoke a Revocable Transaction

```
POST /revocable-tx/revoke/{tx-hash}
```
parameter:

| parameter name | description |
| ----| ---- |
| tx-hash | Revocable Transaction Hash |

request BODY example ：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "vault115ljwsxqhxvu54ndg95kyxn7f82uj2yk380ucm4",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGT",
        "amount": "1"
      }
    ],
    "simulate": false
  },
  "index": "0"
}
```

%/accordion%

return：

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgRevoke",
                "value":{
                    "vault_address":"gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek",
                    "security_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "revoke_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "height":"6947",
                    "tx_hash":"BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8",
                    "msg_index":"0",
                    "amount":[
                        {
                            "denom":"NANOGT",
                            "amount":"5"
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT",
                    "amount":"1"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
    }
}
```

%/accordion%