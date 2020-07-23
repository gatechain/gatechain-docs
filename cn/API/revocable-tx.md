
### 发送可撤回交易 [命令行](../cli/revocable-tx.md#发送可撤回交易-api)

######此接口用于生成“发送可撤回交易”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/revocable-tx/send/{account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| account | 接收账户，可以是普通账户或保险账户 |

请求BODY示例：

%accordion%json%accordion%

```
{
  "base_req": {
	"from": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //发送者账户
	"memo": "", //交易备注
	"chain_id": "testnet", //链ID
	"gas": "200000", //交易消耗的gas数量
	"fees": [
	  {
		"denom": "NANOGT", //单位
		"amount": "5000" //手续费
	  }
	],
	"simulate": false, 是否模拟计算gas
    "valid_height":[ //交易有效高度
        "600",
        "900"
   	 ]
  },
  "amount": [
	{
	  "denom": "NANOGT", //单位
	  "amount": "5000" //转移代币数量
	}
  ]
}
```
%/accordion%

返回示例:

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgRevocableSend", //交易类型
                "value":{
                    "from_address":"vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //发送者账户
                    "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //接收者账户
                    "amount":[
                        {
                            "denom":"NANOGT", //单位
                            "amount":"5000" //转移代币数量
                        }
                    ]
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

### 撤回可撤回交易 [命令行](../cli/revocable-tx.md#撤回可撤回交易-api)

######此接口用于生成“撤回可撤回交易”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/revocable-tx/revoke/{tx-hash}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| tx-hash | 可撤回交易Hash |

请求BODY示例：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //发送者账户
    "memo": "", //交易备注
    "chain_id": "testnet", //链ID
    "gas": "200000", //交易消耗的gas数量
    "fees": [
      {
        "denom": "NANOGT", //单位
        "amount": "1" //手续费
      }
    ],
    "simulate": false, //是否模拟计算gas
    "valid_height":[ //交易有效高度
        "600",
        "900"
   	]
  },
  "index": "0" //消息序号
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
                "type":"MsgRevoke", //交易类型
                "value":{
                    "vault_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //保险账户的基础账户地址
                    "security_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //找回账户地址
                    "revoke_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //撤回账户地址
                    "height":"6947", //撤回交易生效高度
                    "tx_hash":"BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8", //可撤回交易hash
                    "msg_index":"0", //消息序号
                    "amount":[
                        {
                            "denom":"NANOGT", //单位
                            "amount":"5" //撤回代币数量
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //单位
                    "amount":"1" //撤回交易手续费
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

### 查询可撤回交易状态

```
GET /v1/revocable-tx/status/{hash}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| hash | 可撤回交易Hash |

返回示例：

%accordion%json%accordion%

```
{
    "status": 1, //0：不可以撤回，1：可以撤回，2：已撤回
    "revoke_hash": "" //撤回交易hash
}
```

%/accordion%




