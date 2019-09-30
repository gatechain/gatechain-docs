##GateChain API文档

>通过本文档提供的构造交易的接口
>其请求参数必须设置大于0gt的交易费
> 
> 命令中所用到的资产数额（Asset amount）均为乘以1E8转换后的正整数值(Integer of the Value)
> 资产数额（Asset amount）支持科学计数法，比如10E18GT就表示10.0GT


###1 查询最新块信息
```
GET /block/latest
```
返回:

```
{"block_meta": {......}}
```

---

###2 查询指定高度的块信息
```
GET /block/{height}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| height | 块高度（>=1）|

返回:

```
{"block_meta": {......}}
```

---

###3 查询交易信息
```
GET /tx/{hash}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| hash | 交易HASH |

返回:

```
{"height":"...", "tx": {......}...}
```

---

###4 按条件查询交易
```
GET /tx?sender={sender}&action={action}&recipient={recipient}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| sender | 发送者账户 |
| action | 动作类型 |
| recipient | 接收者账户 |

返回:

```
{"type":"...", "value": {......}...}
```

---

###5 查询账户信息
```
GET /account/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 账户 |

返回:

```
{"type":"...", "value": {......}...}
```

---

###6 查询指定账户的余额
```
GET /account/balance/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 账户 |

返回:

```
[{"denom":"...","amount":"..."}]
```

---

###7 发送交易
```
POST /tx
```

请求BODY示例:

```
{
	"tx": {
		"msg": [{
			"type": "gate/MsgSend",
			"value": {
				"from_address": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
				"to_address": "gt110euwduf3unz9332rsgaxzfyy408yqajvjcsacn",
				"amount": [{
					"denom": "gt",
					"amount": "200000000"
				}]
			}
		}],
		"fee": {
			"amount": null,
			"gas": "200000"
		},
		"signatures": [{
			"pub_key": {
				"type": "tendermint/PubKeySecp256k1",
				"value": "A+33aULKbgRV7bmmb7mEIr6eMu3tkT3GmDKsSm+Tv2tK"
			},
			"signature": "hghJdloTqC6Tcrow9MeAetVlP1ONT0NiRIg8hmsrIGlptmUo3xj8N7VTgKBeDzFTrjwbwuRFnKY6LB+Ox3+QwA=="
		}],
		"memo": ""
	},
	"return": "block"
}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| return | block：在交易提交后返回；sync：CheckTx后返回；async：立即返回。 |

返回:

```
{"txhash": "..."...}
```

---

###8 查询节点状态信息
```
GET /status
```

返回:

```
{"channels":"4020212223303800","id":"...."....}
```

---

###9 普通交易
```
POST  /tx/send/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 接收账户 |

请求BODY示例：

```
{
	"base_req": {
		"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
		"memo": "",
		"chain_id": "testnet",
		"account_number": "0",
		"sequence": "4",
		"gas": "200000",
		"gas_adjustment": "1.2",
		"fees": [{
			"denom": "gt",
			"amount": "5000"
		}],
		"simulate": false
  	},
  	"amount": [{
		"denom": "gt",
	  	"amount": "5000"
	}]
}
```

返回:

```
{"msg": "..."...}
```

---

###10 创建保险账户
```
POST  /vault-account/create/{base-account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| base-account | 基础账户 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "gt",
	  "amount": "5000"
	}
  ],
  "insurance_req":{
	"security": "gt110euwduf3unz9332rsgaxzfyy408yqajvjcsacn",
	"pubkey": "",
	"delay_height": "3600",
	"clear_time": "50000000"
  }
}
```

返回:

```
{"msg": "..."...}
```

---

###11 可撤回交易
```
POST  /revocable-tx/send/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 接收账户，可以是普通账户或保险账户 |

请求BODY示例：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "gt",
	  "amount": "5000"
	}
  ]
}
```

返回:

```
{"msg": "..."...}
```

---

###12 查询保险账户的所有可撤回交易
```
GET  /vault-account/list-revocable-txs/{vault-account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| vault-account | 保险账户 |

返回：

```
{"type":"...", "value": {......}...}
```

---

###13 撤回可撤回交易
```
POST /revocable-tx/revoke/{tx-hash}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| tx-hash | 可撤回交易Hash |

请求BODY示例：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "index": "0"
}
```

返回：

```
{"msg": "..."...}
```

---

###14 更改清算高度
```
POST /vault-account/update-clearing-height
```

请求BODY示例：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "clear_time": "10000000"
}
```

返回：

```
{"msg": "..."...}
```

---


###15 清算交易
```
POST /vault-account/clear
```

请求BODY示例：

```
{
  	"base_req": {
	"from": "vault11lka0de7gqg5eg8un0nax2cpp2clyj24gpge33y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "insurances": ["vault11lka0de7gqg5eg8un0nax2cpp2clyj24gpge33y"]
}
```

返回：

```
{"msg": "..."...}
```

---


###16 多签普通/保险账户转账交易 

* 多签普通账户的交易构建方法和普通账户的交易构建一致。见接口9
* 多签保险账户的交易构建方法和保险账户的交易构建一致。见接口11、13、14、15
* 构建交易完成后，需要线下进行多签（具体见多签命令行相关操作）
* 然后广播发送带有签名的交易。见接口7


---


###17 发行代币
```
POST  /token/issue/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "token_name": "test token",
  "total_supply": "1000000000000000000",
  "mintable": false
}
```

返回：

```
{"msg": "..."...}
```

---


###18 查询代币发行状态
```
GET  /token/show-issue/{issue-tx-id}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| issue-tx-id | 代币发行交易Hash |

返回：

```
{"value":"...","type":"..."...}
```

---

    
###19 查询代币
```
GET  /token/show/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

返回：

```
{"value":"...","type":"..."...}
```

---


###20 增发代币 
```
POST /token/mint/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": "1000000000000000"
}
```

返回：

```
{"value":"...","type":"..."...}
```

---


###21 冻结代币
```
POST /token/freeze/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
}
```

返回：

```
{"msg": "..."...}
```

---

###22 解冻代币
```
POST /token/unfreeze/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
}
```

返回：

```
{"msg": "..."...}
```

---

###23 销毁代币 
```
POST /token/burn/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
	"base_req": {
		"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
		"memo": "",
		"chain_id": "testnet",
		"account_number": "0",
		"sequence": "4",
		"gas": "200000",
		"gas_adjustment": "1.2",
		"fees": [{
			"denom": "gt",
			"amount": "5000"
		}],
		"simulate": false
	},
	"amount": "1000000000000000"
}
```

返回：

```
{"msg": "..."...}
```

---

###24 查询所有代币 
```
GET  /token/list
```

返回：

```
{"issues": ["..."]}
```

---

###25 交易对发布
```
POST /trading-pair/publish
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "proposal_id": "1",
  "base_symbol": "gt",
  "quote_symbol": "aaa-bf5"
}
```

返回：

```
{"msg": "..."...}
```

---

 
###26 查询交易对 
```
GET /trading-pair/{base-symbol}/{quote-symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| base-symbol | 基准代币符号 |
| quote-symbol | 报价代币符号 |

返回：

```
{"result": true}
```

---


###27 提交提案
```
POST /proposal/submit
```

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "title": "string",
  "description": "string",
  "proposal_type": "text",
  "proposer": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "initial_deposit": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ]
}
```

返回：

```
{"msg": "..."...}
```

---


###28 查询提案
```
GET /proposal/{proposal-id}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

返回：

```
{"proposal_content":"...","proposal_id":"..."...}
```

---

###29 提交交易对提案
```
POST  /trading-pair/proposal/submit
```

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "title": "string",
  "description": "string",
  "proposal_type": "TradingList",
  "proposer": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "initial_deposit": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ],
  "base_symbol":"aaa-df4",
  "quote_symbol":"gt",
  "init_price":"10000000000",
  "expire_time":"5046546",
  "voting_period":"4555"
}
```

返回：

```
{"msg": "..."...}
```

---
	
###30 为提案质押
```
POST  /proposal/deposit/{proposal-id}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "depositor": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "amount": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ]
}
```

返回：

```
{"msg": "..."...}
```

---


###31 为提案投票
```
POST  /proposal/vote/{proposal-id}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

请求BODY示例：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "voter": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "option": "yes"
}
```

返回：

```
{"msg": "..."...}
```

---

###32 查询提案质押情况
```
GET  /proposal/deposit/show/{proposal-id}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

返回：

```
[{"amount":"...","proposal_id":"..."...}...]
```

---

###33 查询提案投票情况
```
GET  /proposal/vote/show/{proposal-id}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

返回：

```
[{"voter":"...","proposal_id":"..."...}...]
```

---

###34 提交修改基金会提案
```
POST  /foundation/proposal/submit
```
**注意:rest接口仅提供修改基金会成员提案交易的创建功能。提案交易的提交需要进行离线签名然后使用接口7 广播发送带有签名的交易**

请求BODY示例：

```
{
     	"base_req": {
     		"from": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
     		"memo": "",
     		"chain_id": "testnet",
     		"account_number": "0",
     		"sequence": "1",
     		"gas": "200000",
     		"gas_adjustment": "1.2",
     		"fees": [{
     			"denom": "gt",
     			"amount": "50"
     		}],
     		"simulate": false
     	},
     	"title": "Test Foundation Proposal",
     	"description": "foundation newe scheme",
     	"proposal_type": "foundation",
     	"proposer": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
     	"initial_deposit": [{
     		"denom": "gt",
     		"amount": "50"
     	}],
     	"extra": "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
     }

```

返回示例：

```    
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "gate/MsgSubmitProposal",
			"value": {
				"title": "Test Foundation Proposal",
				"description": "foundation newe scheme",
				"proposal_type": "Foundation",
				"proposer": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
				"initial_deposit": [{
					"denom": "gt",
					"amount": "50"
				}],
				"extra": "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
			}
		}],
		"fee": {
			"amount": [{
				"denom": "gt",
				"amount": "50"
			}],
			"gas": "200000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

---

###34 确认基金会修改提案
```
POST  /foundation/proposal/confirm/{proposal-id}
```

参数:

| 参数名 | 说明 |
| ----| ---- |
| proposal-id | 提案编号 |

**注意:rest接口仅提供基金会修改提案确认交易的创建功能。交易的提交需要进行离线签名然后使用接口1.6 广播发送带有签名的交易**
        
请求BODY示例

```        
{
  	"base_req": {
  		"from": "gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0",
  		"memo": "",
  		"chain_id": "testnet",
  		"account_number": "0",
  		"sequence": "1",
  		"gas": "200000",
  		"gas_adjustment": "1.2",
  		"fees": [{
  			"denom": "gt",
  			"amount": "50"
  		}],
  		"simulate": false
  	},
  	"confirmer":"gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0"
  }
```

返回示例:

```    
{
    "type":"auth/StdTx",
    "value":{
        "msg":[
            {
                "type":"gate/MsgConfirmFoundationProposal",
                "value":{
                    "proposal_id":"1",
                    "from_address":"gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"gt",
                    "amount":"50"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```

---

###35 查看基金会成员
```
GET  /foundation/distribution
```

返回示例：

```     
{
     "reward":"0.020000000000000000",
     "max_members":"20",
     "members":[
         {
             "address":"gt11e53svtfsjknalpucu3r9gn2c9vfy59ll5nqmte",
             "proportion":"2",
             "funds_pool":[
                 {
                     "denom":"gt",
                     "amount":"0.800000000000000001"
                 }
             ]
         },
         {
             "address":"gt11657rsnh95jyvy6qerghe0trkkwp9ut3zskxg26",
             "proportion":"1",
             "funds_pool":[
                 {
                     "denom":"gt",
                     "amount":"0.399999999999999999"
                 }
             ]
         }
     ]
}
```

---


###36 去中心化交易所存储交易信息
```
POST  /dex/trade
```

请求BODY示例：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "trade" : {
        "tradeid" : "100000",
        "market" : "validatortoken_gt",
        "maker-orderid" : "3",
        "maker-nonce" : "1",
        "maker-pubkey" : "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "maker-side" : "buy",
        "maker-amount" : "1000validatortoken",
        "maker-price" : "1gt",
        "maker-sign" : "deae06a585193aaa29305f215040c9004c9b818e211963e0387bfda5909f97643d26fddd93f60263d142aacb6c0498d22c1e0b647a87f342fd215277f0033952",
        "maker-time" : "1566894567",
        "taker-orderid" : "4",
        "taker-nonce" : "1",
        "taker-pubkey" : "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
        "taker-side" : "sell",
        "taker-amount" : "1000validatortoken",
        "taker-price" : "1gt",
        "taker-sign" : "c384d31098f317863e682756e9cdbaa5ae88c43a002f2624a0f530c9d98d862932470c0eff946331de326c11905c04d27ddb72883e64961bae8ab7b872f0d58d",
        "taker-time" : "1566894567",
        "price" : "1gt",
        "amount" : "10validatortoken",
        "maker-add-amount" : "10validatortoken",
        "maker-sub-amount" : "10gt",
        "maker-fee" : "1validatortoken",
        "taker-fee" : "1gt",
        "taker-gas" : "1gt"
    }
}
```
    
返回示例：

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgTrade",
        "value": {
          "Trade": {
            "amount": {
              "amount": "10",
              "denom": "validatortoken"
            },
            "maker-add-amount": {
              "amount": "10",
              "denom": "validatortoken"
            },
            "maker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "maker-fee": {
              "amount": "1",
              "denom": "validatortoken"
            },
            "maker-nonce": "1",
            "maker-orderid": "3",
            "maker-price": {
              "amount": "1",
              "denom": "gt"
            },
            "maker-pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "maker-side": "buy",
            "maker-sign": "3q4GpYUZOqopMF8hUEDJAEybgY4hGWPgOHv9pZCfl2Q9Jv3dk/YCY9FCqstsBJjSLB4LZHqH80L9IVJ38AM5Ug==",
            "maker-sub-Amount": {
              "amount": "10",
              "denom": "gt"
            },
            "maker-time": "2019-08-27T08:29:27Z",
            "market": "validatortoken_gt",
            "price": {
              "amount": "1",
              "denom": "gt"
            },
            "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "taker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "taker-fee": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-gas": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-nonce": "1",
            "taker-orderid": "4",
            "taker-price": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
            "taker-side": "sell",
            "taker-sign": "w4TTEJjzF4Y+aCdW6c26pa6IxDoALyYkoPUwydmNhikyRwwO/5RjMd4ybBGQXATSfdtyiD5klhuuire4cvDVjQ==",
            "taker-time": "2019-08-27T08:29:27Z",
            "time": "2019-09-03T09:56:15.735800663Z",
            "tradeid": "100000"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---


###37 账户充代币到去中心化交易所
```
POST  /dex/deposit
```

请求BODY示例：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "fees":[
                                {"amount":"2000","denom":"gt"}
                            ],
        "chain_id" : "testing"
    },
    "deposit" : {
        "to" : "gt11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp",
        "amount" : "10gt"
    }
}
```    

返回示例：

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "gt"
        }
      ],
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgDeposit",
        "value": {
          "Deposit": {
            "amount": [
              {
                "amount": "10",
                "denom": "gt"
              }
            ],
            "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "to": "gt11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###38 从去中心化交易所提取代币
```
POST  /dex/withdraw
```

**只有管理员有权限执行此操作**

请求BODY示例：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "withdraw" : {
        "pubkey" : "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "coin" : "10gt",
        "nonce" : "2",
        "time" : "1563183005",
        "sign" : "45274cf1e0aa5d0582ecb9961f66384270146b2a16b43d8965d90c5270f2cf8f7af86b000d33f77c63a8862d113251c64cdb5f2921c3bbf1d3215709327942c7",
        "gas" : "1gt"
    }
}
```

返回示例：

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgWithdraw",
        "value": {
          "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
          "gas": {
            "amount": "1",
            "denom": "gt"
          },
          "withdraw": {
            "coin": {
              "amount": "10",
              "denom": "gt"
            },
            "nonce": "2",
            "pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "sign": "RSdM8eCqXQWC7LmWH2Y4QnAUayoWtD2JZdkMUnDyz496+GsADTP3fGOohi0RMlHGTNtfKSHDu/HTIVcJMnlCxw==",
            "time": "2019-07-15T09:30:05Z"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###39 去中心化交易所设置管理员账户
```
POST  /dex/set-admin
```

**只有现管理员有权限设置新管理员**

请求BODY示例：

```
{
    "base_req": {
        "from": "gt11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
        "fees":[
                {"amount":"2000","denom":"gt"}
            ],
        "chain_id" : "testing"
    },
    "setadmin" : {
        "acc" : "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "type": "admin"
    }
}
```
    
返回示例：

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "gt"
        }
      ],
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgAdmin",
        "value": {
          "SetAdminInfo": {
            "acc": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "from": "gt11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
            "typ": "admin"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###40 去中心化交易所查询交易信息
```
GET		/dex/query-trade/{trade-id}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| trade-id | 交易ID |
    
返回示例：

```
{
   "type": "dex/Trade",
   "value": {
     "tradeid": "100001",
     "market": "validatortoken-1e9_gt",
     "maker-orderid": "5",
     "maker-nonce": "2",
     "maker-pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
     "maker-side": "buy",
     "maker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "maker-price": {
       "denom": "gt",
       "amount": "1"
     },
     "maker-sign": "dAjjeMv6hh1p6LM3UfY+N4iUJ/kdxtkNBM8vhpkox7R4e1UKN2ONrxsJSec+rwQdDC5+rBKaEludxMuRGNzG1g==",
     "maker-time": "2019-08-27T08:29:27Z",
     "taker-orderid": "6",
     "taker-nonce": "2",
     "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
     "taker-side": "sell",
     "taker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "taker-price": {
       "denom": "gt",
       "amount": "1"
     },
     "taker-sign": "ZGWMCR7PjGs3p808dxhrKtflFvIDMbvfkVketvUgjptVWsZpg+H6xzZWT4FYOYwWLkQ/2ZKQqgwrt4Mg8wgUgw==",
     "taker-time": "2019-08-27T08:29:27Z",
     "price": {
       "denom": "gt",
       "amount": "1"
     },
     "amount": {
       "denom": "validatortoken-1e9",
       "amount": "10"
     },
     "maker-add-amount": {
       "denom": "validatortoken-1e9",
       "amount": "10"
     },
     "maker-sub-Amount": {
       "denom": "gt",
       "amount": "10"
     },
     "maker-fee": {
       "denom": "validatortoken-1e9",
       "amount": "1"
     },
     "taker-fee": {
       "denom": "gt",
       "amount": "1"
     },
     "taker-gas": {
       "denom": "gt",
       "amount": "1"
     },
     "time": "2019-09-03T03:49:17.782624089Z",
     "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja"
   }
 }
```

---


###41 去中心化交易所查询账户信息
```
GET /dex/query-account/{dex-account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| dex-account | DEX账户 |

返回示例：

```
[{
	"denom": "gt",
	"amount": "1090"
},
{
	"denom": "validatortoken-1e9",
	"amount": "1009"
}]
```

---

###42 去中心化交易所查询管理员信息
```
GET /dex/query-admin/{admin-type}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| admin-type| owner/admin/fee |

返回示例：

```
{
	"type": "dex/SetAccInfo",
	"value": {
		"typ": "fee",
 		"acc": "gt11uqyqvmzwvqprv50x73lkzkxlgm9mw3fr7u003y",
 		"from": ""
	}
}
```

###43 公布多签账户
```
GET /account/publish-multisig/{address}
```
请求BODY示例：

```
{
  "base_req": {
    "from": "gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "1",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "gt",
        "amount": "2"
      }
    ],
    "simulate": false
  },
  "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
}
```

返回示例：

```
{
    "type": "auth/StdTx",
    "value": {
        "fee": {
            "amount": [
                {
                    "amount": "2",
                    "denom": "gt"
                }
            ],
            "gas": "200000"
        },
        "memo": "",
        "msg": [
            {
                "type": "gate/MsgPublishMultiSigAccount",
                "value": {
                    "from_address": "gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
                    "pubkey": "gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2",
                    "to_address": "gt11za9h6j2j98p953hu60mm2a609uj5ujrnget43k"
                }
            }
        ],
        "signatures": null
    }
}
```
