
### 发行交易对 [命令行](../cli/trading-pair.md#发行交易对-api)

######此接口用于生成“发行交易对”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST  /v1/token/trading-pair
```

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
        "memo":"", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id":"testnet", //链ID
        "gas":"80445444", //交易消耗的gas数量
        "fees":[
            {
                "denom":"NANOGT", //单位
                "amount":"5000" //手续费
            }
        ],
        "simulate":false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    },
    "initPrice":"1000000000000000", //初始价格
    "base_symbol":"NANOGT", //基准代币符号
    "quote_symbol":"YY-A69" //报价代币符号
}
```
%/accordion%

返回示例：

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgTradingList", //交易类型
                "value":{
                    "init_price":"1000000000000000", //初始价格
                    "base_symbol":"NANOGT", //基准代币符号
                    "quote_symbol":"YY-A69", //报价代币符号
                    "proposer":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj" //发送者账户
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //单位
                    "amount":"5000" //手续费
                }
            ],
            "gas":"80445444" //交易消耗的gas
        },
        "signatures":null, //签名
        "memo":"",
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    }
}
```
%/accordion%

### 查询交易对 [命令行](../cli/trading-pair.md#查询交易对-api)

```
GET /v1/trading-pair/{base-symbol}/{quote-symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| base-symbol | 基准代币符号 |
| quote-symbol | 报价代币符号 |

返回示例：

%accordion%json%accordion%

```
{
    "height":"0", //区块高度
    "result":{
        "type":"BaseTradingList",
        "value":{
            "base_symbol":"NANOGT", //基准代币符号
            "init_price":"1000", //初始价格
            "proposer":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发行交易对账户
            "quote_symbol":"YY-A69" //报价代币符号
        }
    }
}
```
%/accordion%
