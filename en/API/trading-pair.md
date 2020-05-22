### Submit a trading pair

```
POST  /token/trading-pair
```
request BODY example ：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
        "memo":"",
        "chain_id":"testnet",
        "account_number":"0",
        "sequence":"4",
        "gas":"80445444",
        "gas_adjustment":"1.2",
        "fees":[
            {
                "denom":"NANOGT",
                "amount":"5000"
            }
        ],
        "simulate":false
    },
    "token_name":"test token",
    "initPrice":"1000000000000000",
    "base_symbol":"NANOGT",
    "quote_symbol":"YY-A69"
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
                "type":"MsgTradingList",
                "value":{
                    "init_price":"1000000000000000",
                    "base_symbol":"GC",
                    "quote_symbol":"YY-A69",
                    "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg"
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
            "gas":"80445444"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
    }
}
```

%/accordion%

### Query a trading pair 

```
GET /trading-pair/{base-symbol}/{quote-symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| base-symbol | base token symbol |
| quote-symbol | quote token symbol |

return：

%accordion%json%accordion%

```
{
    "height":"0",
    "result":{
        "type":"BaseTradingList",
        "value":{
            "base_symbol":"NANOGT",
            "init_price":"1000",
            "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
            "quote_symbol":"YY-A69",
            "valid_height":"5198",
            "valid_time":"2020-03-03T06:32:44Z"
        }
    }
}
```

%/accordion%