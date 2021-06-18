
### <span id="创建保险账户">创建保险账户 [命令行](../cli/vault-account.md#创建保险账户)</span>
######此接口用于生成“创建保险账户”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/vault-account/create/{base-account}
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| base-account | 基础账户 |


??? note "请求BODY示例："

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
	    "valid_height":[ //交易生效高度
	         "600",
	         "900"
	    ]
	  },
	  "amount": [
	    {
	      "denom": "NANOGT", //单位
	      "amount": "500000000" //转移代币数量
	    }
	  ],
	  "vault_req":{
	    "security": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //找回账户
	    "pubkey": "", //创建保险多签账户时填写普通多签账户公钥，创建保险单签账户为空
	    "delay_height": "100", //保险账户交易延迟生效高度
	    "clear_height": "50000" //账户清算高度
	  }
	}
	```


??? note "返回示例:"

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgCreateVault", //交易类型
	                "value":{
	                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
	                    "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //接收者账户即保险账户的基础账户
	                    "security_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //找回账户
	                    "delay_height":"100", //保险账户交易延迟生效高度
	                    "clearing_height":"50000", //账户清算高度
	                    "amount":[
	                        {
	                            "denom":"NANOGT", //单位
	                            "amount":"500000000" //转移代币数量
	                        }
	                    ],
	                    "pubkey":"" //创建保险多签账户时填写普通多签账户公钥，创建保险单签账户为空
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
	        "valid_height": [ //交易有效高度
	            "600",
	            "900"
	        ] 
	    }
	}
	```


### <span id="修改清算高度">修改清算高度 [命令行](../cli/vault-account.md#修改清算高度)</span>

######此接口用于生成“修改清算高度”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST /v1/vault-account/update-clearing-height
```


??? note "请求BODY示例："

	```
	{
	  "base_req": {
	    "from": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //发送者账户
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
	    "valid_height": [ //交易有效高度
	         "600",
	         "900"
	   ] 
	  },
	  "clearing_height": "6200" //新清算高度
	}
	```

??? note "返回示例："

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgUpdateClearingHeight", //交易类型
	                "value":{
	                    "vault_address":"vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //发送者账户
	                    "clearing_height":"6200" //新清算高度
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
	            "gas":"200000" //交易消耗gas
	        },
	        "signatures":null, //签名
	        "memo":"",
	    	 "valid_height": [ //交易有效高度
	           "600",
	           "900"
	   		] 
	    }
	}
	```


### <span id="账户清算交易">账户清算交易 [命令行](../cli/vault-account.md#账户清算交易)</span>

######此接口用于生成“账户清算交易”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST /v1/vault-account/clear
```


??? note "请求BODY示例："

	```
	{
	    "base_req": {
	    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户，此为保险账户的找回账户
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
	    "valid_height": [ //交易有效高度
	         "600",
	         "900"
	   ] 
	  },
	  "vaults": ["vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6"] //保险账户地址
	}
	```


??? note "返回示例："

	```
	{
	    "type":"StdTx",
	    "value":{
	        "msg":[
	            {
	                "type":"MsgClearVaultAccount", //交易类型
	                "value":{
	                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户，此为保险账户的找回账户
	                    "vault_address":[
	                        "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6" //保险账户
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
	        "valid_height": [ //交易有效高度
	            "600",
	            "900"
	        ] 
	    }
	}
	```


### <span id="查询保险账户信息">查询保险账户信息 [命令行](../cli/vault-account.md#查询保险账户信息)</span>
```
GET  /v1/vault-account/{address}
```
参数：

| 参数名 | 说明 |
| :----| :---- |
| address | 保险账户 |


??? note "返回示例:"

	```
	{
	    "height": "4618", //区块高度
	    "result": {
	        "type": "AccountResp",
	        "value": {
	            "account_field": {
	                "type": "VaultAccount",
	                "value": {
	                    "base_account": {
	                        "account_number": "12",
	                        "address": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //保险账户
	                        "public_key": {
	                            "type": "gatechain/PubKeyEd25519",
	                            "value": "IK8RZV4tqj/m/s9eEY9agWXF42yA5U3s31Q0D6Zp1rI="
	                        },
	                        "sequence": "0",
	                        "tokens": [
	                            {
	                                "amount": "9889", //账户余额
	                                "denom": "NANOGT" //单位
	                            }
	                        ]
	                    },
	                    "clearing_height": {
	                        "last_clearing_effect_height": "0", //上一次设置清算高度时的交易高度
	                        "last_clearing_height": "0", //上一次设置的清算高度
	                        "next_clearing_effect_height": "3693", //最新设置清算高度时的交易高度
	                        "next_clearing_height": "100000" //最新设置的清算高度
	                    },
	                    "delay_height": "100", //交易延迟生效高度
	                    "received_revocable_tokens": null, //仍可撤回的代币
	                    "security_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //找回账户
	                    "sent_revocable_tokens": [], //已发送可撤回的代币
	                    "vault_address": null //保险账户
	                }
	            },
	            "account_type": 1 //账户类型：0.单签普通账户、1.单签保险账户、2.多签普通账户、3.多签保险账户
	        }
	    }
	}
	```


### <span id="查询保险账户的所有可撤回交易">查询保险账户的所有可撤回交易 [命令行](../cli/revocable-tx.md#查询保险账户的可撤回交易列表)</span>
```
GET  /v1/vault-account/list-revocable-txs/{vault-account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| vault-account | 保险账户 |



??? note "返回示例："

	```
	{
	    "height":"6947", //区块高度
	    "result":[
	        {
	            "height":"6947", //交易生效区块高度
	            "msg_index":"0",
	            "tokens":[
	                {
	                    "amount":"5", //转移代币数量
	                    "denom":"NANOGT" //单位
	                }
	            ],
	            "tx_hash":"REVOCABLEPAY-BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8" //交易hash
	        }
	    ]
	}
	```


