
### 提交交易对提案
```
POST  /token/trading-pair
```

请求BODY示例：

%accordion% %accordion%

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
                "denom":"GC",
                "amount":"5000"
            }
        ],
        "simulate":false
    },
    "token_name":"test token",
    "initPrice":"1000000000000000",
    "base_symbol":"GC",
    "quote_symbol":"YY-A69"
}
```
%/accordion%

返回：

%accordion% %accordion%

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
                    "denom":"GC",
                    "amount":"5000"
                }
            ],
            "gas":"80445444"
        },
        "signatures":null,
        "memo":""
    }
}
```
%/accordion%

### 查询交易对 
```
GET /trading-pair/{base-symbol}/{quote-symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| base-symbol | 基准代币符号 |
| quote-symbol | 报价代币符号 |

返回：

%accordion% %accordion%

```
{
    "height":"0",
    "result":{
        "type":"BaseTradingList",
        "value":{
            "base_symbol":"GC",
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
