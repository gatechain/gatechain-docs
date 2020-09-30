
### 发行代币 [命令行](../cli/token.md#发行代币-api)

######此接口用于生成“发行代币”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/token/issue/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 代币符号（大写字母，长度2-15个字符) |

* 注：发行代币费用为200000000000NANOGT，请保证账户中有足够的NANOGT代币

请求BODY示例：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
    "memo": "", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
    "chain_id": "testnet", //链ID
    "gas": "80445444", //交易消耗的gas数量
    "fees": [
      {
        "denom": "NANOGT", //单位
        "amount": "5000" //手续费
      }
    ],
    "simulate": false, //是否模拟计算gas
    "valid_height":[ //交易有效高度
         "600",
         "900"
    ]
  },
  "token_name": "test token", //代币名称
  "total_supply": "1000000000000000", //发行总量
  "mintable": true, //是否可增发
  "freezable": true //是否可冻结
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
                "type":"IssueToken", //交易类型
                "value":{
                    "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                    "token_name":"test token", //代币名称
                    "symbol":"YJ", //代币符号
                    "total_supply":"1000000000000000", //发行总量
                    "mintable":true, //是否可增发
                    "freezable":true //是否可冻结
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

### 增发代币 [命令行](../cli/token.md#增发代币-api)

######此接口用于生成“增发代币”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/token/mint/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 链上代币符号 (代币符号-[随机字符串])|

请求BODY示例：

%accordion%json%accordion%

```
{
  "base_req": {
	"from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
	"memo": "", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
	"chain_id": "testnet", //链ID
	"gas": "200000", //交易消耗的gas数量
	"fees": [
	  {
		"denom": "NANOGT", //单位
		"amount": "5000" //手续费
	  }
	],
	"simulate": false, //是否模拟计算gas
   "valid_height":[ //交易有效高度
   		"600",
   		"900"
   ] 
  },
  "amount": "10000000" //增发代币数量
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
                "type":"MintToken", //交易类型
                "value":{
                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                    "amount":{
                        "denom":"YJ-9D3", //增发代币单位
                        "amount":"10000000" //增发代币数量
                    }
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
            "gas":"200000" //交易消耗的gas
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

### 冻结代币 [命令行](../cli/token.md#冻结代币-api)
######此接口用于生成“冻结代币”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST /v1/token/freeze/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 链上代币符号 (代币符号-[随机字符串])|

请求BODY示例：

%accordion%json%accordion%

```
{
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
    "memo": "", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
    "chain_id": "testnet", //链ID
    "gas": "200000", //交易消耗的gas数量
    "fees": [
      {
        "denom": "NANOGT", //单位
        "amount": "5000" //手续费
      }
    ],
    "simulate": false, //是否模拟计算gas
    "valid_height":[ //交易有效高度
        "600",
        "900"
    ]
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
                "type":"FreezeToken", //交易类型
                "value":{
                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                    "symbol":"YY-A69" //冻结代币单位
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
            "gas":"200000" //交易消耗的gas
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

### 解冻代币 [命令行](../cli/token.md#解冻代币-api)
######此接口用于生成“解冻代币”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/token/unfreeze/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 链上代币符号(代币符号-[随机字符串]) |

请求BODY示例：

%accordion%json%accordion%

```
{
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
    "memo": "",  //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
    "chain_id": "testnet", 链ID
    "gas": "200000", //交易消耗的gas数量
    "fees": [
      {
        "denom": "NANOGT", //单位
        "amount": "5000" //手续费
      }
    ],
    "simulate": false, //是否模拟计算gas
    "valid_height":[ //交易有效高度
         "600",
         "900"
    ]
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
                "type":"UnfreezeToken", //交易类型
                "value":{
                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                    "symbol":"YY-A69" //解冻代币单位
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
            "gas":"200000" //交易消耗的gas
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

### 销毁代币 [命令行](../cli/token.md#销毁代币-api)
######此接口用于生成“销毁代币”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST /v1/token/burn/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 链上代币符号 (代币符号-[随机字符串])|

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req": {
        "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
        "memo": "", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id": "testnet", //链ID
        "gas": "200000", //交易消耗的gas数量
        "fees": [{
            "denom": "NANOGT", //单位
            "amount": "5000" //手续费
        }],
        "simulate": false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
           "600",
           "900"
        ]
    },
    "amount": "10000" //销毁代币数量
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
                "type":"BurnToken", //交易类型
                "value":{
                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                    "sub":{
                        "denom":"YY-A69", //销毁代币单位
                        "amount":"10000" //销毁代币数量
                    }
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
            "gas":"200000" //交易消耗的gas
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

### 查询代币信息 [命令行](../cli/token.md#查询代币信息-api)
```
GET  /v1/token/show/{symbol}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| symbol | 链上代币符号 (代币符号-[随机字符串])|

返回示例：

%accordion%json%accordion%

```
{
    "height":"0", //区块高度
    "result":{
        "type":"Token", //代币类型
        "value":{
            "freezable":true, //是否可冻结
            "freezed":false, //是否冻结
            "mintable":true, //是否可增发
            "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发行账户地址
            "symbol":"YJ-9D3", //链上代币符号
            "token_name":"test token", //代币名称
            "total_supply":"1000000000000000" //发行总量
        }
    }
}
```
%/accordion%

### 查询所有代币 [命令行](../cli/token.md#查询所有代币-api)
```
GET  /v1/token/list
```

返回示例：

%accordion%json%accordion%

```
{
    "height":"0",
    "result":{
        "tokens":[
            {
                "type":"Token", //代币类型
                "value":{
                    "freezable":true, //是否可冻结
                    "freezed":false, //是否冻结
                    "mintable":true, //是否可增发
                  "source_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发行账户地址
                    "symbol":"YJ-9D3", //链上代币符号
                    "token_name":"test token", //代币名称
                    "total_supply":"1000000000000000" //发行总量
                }
            },
            ...
        ]
    }
}
```
%/accordion%


