
###Publish A Trading Pair [command line](../cli/trading-pair.md#Publish A Trading Pair-api)

######The interface generates transaction body  for “Publish A Trading Pair”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.
```
POST  /v1/token/trading-pair
```

Request BODY example：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
        "memo":"", //transaction remarks
        "chain_id":"testnet", //chain ID
        "gas":"80445444", //gas consumed by the transaction
        "fees":[
            {
                "denom":"NANOGT", //unit
                "amount":"5000" //fee
            }
        ],
        "simulate":false, //if calculate simulated gas
        "valid_height":[ //the block height at which transaction takes effect
            "600",
            "900"
    	]
    },
    "initPrice":"1000000000000000", //initial price
    "base_symbol":"NANOGT", //base token symbol
    "quote_symbol":"YY-A69" //quote token symbol
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
                "type":"MsgTradingList", //transaction type
                "value":{
                    "init_price":"1000000000000000", //initial price
                    "base_symbol":"NANOGT", //base token symbol
                    "quote_symbol":"YY-A69", //quote token symbol
                    "proposer":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj" //sender account
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
        "valid_height":[ //the block height at which transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%

### Query A Trading Pair [command line](../cli/trading-pair.md#Query A Trading Pair -api)

```
GET /v1/trading-pair/{base-symbol}/{quote-symbol}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| base-symbol | base token symbol |
| quote-symbol | quote token symbol |

Return example：

%accordion%json%accordion%

```
{
    "height":"0", //block height
    "result":{
        "type":"BaseTradingList",
        "value":{
            "base_symbol":"NANOGT", //base token symbol
            "init_price":"1000", //initial price
            "proposer":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //account that issued the trading pair
            "quote_symbol":"YY-A69" //quote token symbol
        }
    }
}
```
%/accordion%
