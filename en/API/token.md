### Issue token

```
POST  /token/issue/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "80445444",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGC",
        "amount": "5000"
      }
    ],
    "simulate": false
  },
  "token_name": "test token",
  "total_supply": "1000000000000000",
  "mintable": true,
  "freezable": true
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
                "type":"IssueToken",
                "value":{
                    					"source_address":"gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
                    "token_name":"test token",
                    "symbol":"YJ",
                    "total_supply":"1000000000000000",
                    "mintable":true,
                    "freezable":true
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
                    "amount":"5000"
                }
            ],
            "gas":"80445444"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
    }
}
```

%/accordion%

### Issue additional token

```
POST /token/mint/{symbol}
```

parameter:

| parameter name | description  |
| -------------- | ------------ |
| symbol         | token symbol |

request BODY example ：

%accordion%json%accordion%

```
{
  "base_req": {
	"from": "gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "NANOGC",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": "10000000"
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
                "type":"MintToken",
                "value":{
                  "source_address":"gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
                    "amount":{
                        "denom":"YJ-9D3",
                        "amount":"10000000"
                    }
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
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

### Freeze token

```
POST /token/freeze/{symbol}
```

parameter:

| parameter name | description  |
| -------------- | ------------ |
| symbol         | token symbol |

request BODY example ：

%accordion%json%accordion%

```
{
    "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGC",
        "amount": "5000"
      }
    ],
    "simulate": false
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
                "type":"FreezeToken",
                "value":{
                  "source_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "symbol":"YY-A69"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
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

### Unfreeze token

```
POST /token/unfreeze/{symbol}
```

parameter:

| parameter name | description  |
| -------------- | ------------ |
| symbol         | token symbol |

request BODY example ：

%accordion%json%accordion%

```
{
    "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGC",
        "amount": "5000"
      }
    ],
    "simulate": false
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
                "type":"UnfreezeToken",
                "value":{
                  "source_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "symbol":"YY-A69"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
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

### Burn token 

```
POST /token/burn/{symbol}
```

parameter:

| parameter name | description  |
| -------------- | ------------ |
| symbol         | token symbol |

request BODY example ：

%accordion%json%accordion%

```
{
    "base_req": {
        "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
        "memo": "",
        "chain_id": "testnet",
        "account_number": "0",
        "sequence": "4",
        "gas": "200000",
        "gas_adjustment": "1.2",
        "fees": [{
            "denom": "NANOGC",
            "amount": "5000"
        }],
        "simulate": false
    },
    "amount": "10000"
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
                "type":"BurnToken",
                "value":{
                    "from_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "sub":{
                        "denom":"YY-A69",
                        "amount":"10000"
                    }
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
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

### Query token

```
GET  /token/show/{symbol}
```

parameter:

| parameter name | description  |
| -------------- | ------------ |
| symbol         | token symbol |

return：

%accordion%json%accordion%

```
{
    "height":"0",
    "result":{
        "type":"Token",
        "value":{
            "freezable":true,
            "freezed":false,
            "mintable":true,
            "source_address":"gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
            "symbol":"YJ-9D3",
            "token_name":"test token",
            "total_supply":"1000000000000000"
        }
    }
}
```

%/accordion%

### Query all tokens

```
GET  /token/list
```

return：

%accordion%json%accordion%

```
{
    "height":"0",
    "result":{
        "tokens":[
            {
                "type":"Token",
                "value":{
                    "freezable":true,
                    "freezed":false,
                    "mintable":true,
                  "source_address":"gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
                    "symbol":"YJ-9D3",
                    "token_name":"test token",
                    "total_supply":"1000000000000000"
                }
            },
            {
                "type":"Token",
                "value":{
                    "freezable":false,
                    "freezed":false,
                    "mintable":false,
                  "source_address":"gc112t5v8z8z4qwzmzvhrr8f4u3yhrjmvm9uw58lnw",
                    "symbol":"YY-66F",
                    "token_name":"test",
                    "total_supply":"900000000000000"
                }
            }
        ]
    }
}
```

%/accordion%
