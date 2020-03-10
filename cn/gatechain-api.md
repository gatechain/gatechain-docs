##GateChain API文档

>通过本文档提供的构造交易的接口
>其请求参数必须设置大于0gc的交易费
> 
> 命令中所用到的资产数额（Asset amount）均为乘以10E18转换后的正整数值(Integer of the Value)
> 资产数额（Asset amount）支持科学计数法，比如10E9 NanoGC就表示1.0GC

## 1 account
###1.1 查询账户信息
```
GET /account/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 账户 |

返回:

```
{
    "height":"5129",
    "result":{
        "type":"AccountResp",
        "value":{
            "account_field":{
                "type":"VaultAccount",
                "value":{
                    "base_account":{
                        "account_number":"7",
                        "address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                        "public_key":{
                            "type":"tendermint/PubKeySecp256k1",
                            "value":"Augr+YcqdYO5fN0imCuuHaTrR+3eZTdMIkAbCIIWnB/+"
                        },
                        "sequence":"4",
                        "tokens":[
                            {
                                "amount":"89999999999999880",
                                "denom":"GC"
                            }
                        ]
                    },
                    "clearing_height":{
                        "last_clearing_effect_height":"0",
                        "last_clearing_height":"0",
                        "next_clearing_effect_height":"0",
                        "next_clearing_height":"0"
                    },
                    "delay_height":"0",
                    "received_revocable_tokens":null,
                    "security_address":"",
                    "sent_revocable_tokens":null,
                    "vault_address":[
                        "vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49"
                    ]
                }
            },
            "account_type":0
        }
    }
}
```
---

###1.2 查询账户余额
```
GET /account/balance/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 账户 |

返回:

```
{
    "height":"5483",
    "result":[
        {
            "amount":"8999999989968",
            "denom":"GC"
        },
    ]
}
```
---

###1.3 公布多签账户
```
POST /account/publish-multisig/{address}
```
请求BODY示例：

```
{
  "base_req": {
    "from": "gc11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "1",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
        "amount": "2"
      }
    ],
    "simulate": false
  },
  "pubkey":"gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
}
```

返回示例：

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgPublishMultiSigAccount",
                "value":{
                    "from_address":"gc11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
                    "to_address":"gc11zpxee6l20jnprfqgctas2tnw7xvwqpv3z0lyz8",
						"pubkey":"gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"GC",
                    "amount":"2"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```

## 2 vault-account
###2.1 创建保险账户

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
    "from": "gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
        "amount": "5000"
      }
    ],
    "simulate": false
  },
  "amount": [
    {
      "denom": "GC",
      "amount": "500000000"
    }
  ],
  "vault_req":{
    "security": "gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
    "pubkey": "",
    "delay_height": "100",
    "clear_height": "50000"
  }
}
```

返回:

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgCreateVault",
                "value":{
                    "from_address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                    "to_address":"gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek",
                    "security_address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                    "delay_height":"100",
                    "clearing_height":"50000",
                    "amount":[
                        {
                            "denom":"GC",
                            "amount":"500000000"
                        }
                    ],
                    "pubkey":""
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
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```
---

###2.2 更改清算高度
```
POST /vault-account/update-clearing-height
```

请求BODY示例：

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
        "denom": "GC",
        "amount": "5000"
      }
    ],
    "simulate": false
  },
  "clearing_height": "6200"
}
```

返回：

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgUpdateClearingHeight",
                "value":{
                    "vault_address":"gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek",
                    "clearing_height":"6200"
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
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```
---

###2.3 清算交易
```
POST /vault-account/clear
```

请求BODY示例：

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
    "fees": [
      {
        "denom": "GC",
        "amount": "5000"
      }
    ],
    "simulate": false
  },
  "vaults": ["vault115ljwsxqhxvu54ndg95kyxn7f82uj2yk380ucm4"]
}
```

返回：

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgClearVaultAccount",
                "value":{
                    "from_address":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
                    "vault_address":[
                        "gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek"
                    ]
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
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```
---
###2.4 查询保险账户的所有可撤回交易
```
GET  /vault-account/list-revocable-txs/{vault-account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| vault-account | 保险账户 |

返回：

```
{
    "height":"6947",
    "result":[
        {
            "height":"6947",
            "msg_index":"0",
            "tokens":[
                {
                    "amount":"5",
                    "denom":"GC"
                }
            ],
            "tx_hash":"REVOCABLEPAY-BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8"
        }
    ]
}
```
---

## 3 block
###3.1 查询最新块信息
```
GET /block/latest
```
返回:

```
{
    "hash":"MHCH5NHC2IMVJA6DSLKJFSK4AYNDCMFC5SC32VOVDIPVEIBVRGHA",
    "previousBlockHash":"2IZH63THDKR4W3SBQSDI2C44CZ5GI6CYHGJJPZ3D4A3ZXUS3OLTQ",
    "seed":"XEEEQ5LXSASPY4YSMT7ZBZ4RDSLOPDPQXNNUOYA75VTZXJYCZ5RA",
    "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "round":"6913",
    "period":"0",
    "txnRoot":"WRS2VL2OQ5LPWBYLNBCZV3MEQ4DACSRDES6IUKHGOWYQERJRWC5A",
    "reward":"0",
    "rate":"0",
    "frac":"0",
    "txns":{

    },
    "txnps":{
        "proxyTransactions":null
    },
    "timestamp":"1583535648",
    "UpgradeState":{
        "currentProtocol":"v1",
        "nextProtocol":"",
        "nextProtocolApprovals":"0",
        "nextProtocolVoteBefore":"0",
        "nextProtocolSwitchOn":"0"
    },
    "UpgradeVote":{
        "upgradePropose":"",
        "upgradeApprove":false
    }
}
```

---

###3.2 查询指定高度的块信息
```
GET /block/{height}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| height | 块高度（>=1）|

返回:

```
{
    "hash":"HO7BW75ECIXFBTBIFMYAIDDWGSRAEOGDC3GJUOEULBPD5L2M3C5Q",
    "previousBlockHash":"5ZKJQICRC2QS3H2UO5YFQPLFKQ6DUNTDBBF3573P6IQTADHD57MA",
    "seed":"5GIMQOE4GYGKSLGIDUNNY3YMBXIZVRTK2GQLNHFRCNZE5AJQBIIQ",
    "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "round":"6847",
    "period":"0",
    "txnRoot":"MLZADT4OGH4A7HEM6T275WKQQWLIONQ2OLPY2DAZQMIZIWTDQJ5Q",
    "reward":"0",
    "rate":"0",
    "frac":"0",
    "txns":{

    },
    "txnps":{
        "proxyTransactions":[
            "ugG5zc/tCjlHsWHOChSn5OgYFzM5Ss2oLSxDT8k6uSUS0RIUCN182YZJQCg9iZzFMx+mjZdFgOgaBwoCR0MSATUSDQoHCgJHQxIBMRDAmgwaagom61rphyECf5JSNgVnJU01dhlUy/vAyGh0gTpTldbMYJDevIrLtoASQFDNGmgLIEh9h9NF6VQ5Y63fNgMQe/49Im1OlaJpoOXKJUpAzPuPSkNPe4B1Z3OXQFJODd+TabdsDW26cyv41iQ="
        ]
    },
    "timestamp":"1583533998",
    "UpgradeState":{
        "currentProtocol":"v1",
        "nextProtocol":"",
        "nextProtocolApprovals":"0",
        "nextProtocolVoteBefore":"0",
        "nextProtocolSwitchOn":"0"
    },
    "UpgradeVote":{
        "upgradePropose":"",
        "upgradeApprove":false
    }
}
```

---


## 4 tx
###4.1 发送交易
```
POST /tx
```

请求BODY示例:

```
{
    "tx": {
        "msg":[
            {
                "type":"MsgSend",
                "value":{
                    "from_address":"gc1125f44npt4phnuwp3puqg0m7wgjqsdnmc7xywry",
                    "to_address":"gc11vrwg5flr3hxys4c7g4yh5wj242xqvdkrmm7q3n",
                    "amount":[
                        {
                            "denom":"GC",
                            "amount":"5000"
                        }
                    ]
                }
            }
        ],
		"fee": {
			"amount": [{
				"denom": "GC",
				"amount": "5000"
			}],
			"gas": "200000"
		},
		"signatures": [{
			"pub_key": {
				"type": "tendermint/PubKeySecp256k1",
				"value": "A+0DI+zbNVSb1cyLdhqGkVlS8nCm0eoUqpev/Z57XIIT"
			},
			"signature": "f0qd0BFAOWP76sMHE+PG6U0cL+MeeFV1xrT/8k3lrUF06YG2sko6LB045jnHFU5SlhWeb1tzyV5jWry/lgoaRQ=="
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
{
    "height":"899",
    "txhash":"BASIC-9D5D04AF30B14EB6A67B6155EC3868902CFB19520E5EABCF52C060634C7100D5",
    "data":"wAG5zc/tCjzcKqCFChRVE1rMK6hvPjgxDwCH785EgQbPeBIUYNyKJ+ONzEhXHkVJejpKqowGNsMaCgoCR1QSBDUwMDASEAoKCgJHVBIENTAwMBDAmgwaagom61rphyED7QMj7Ns1VJvVzIt2GoaRWVLycKbR6hSql6/9nntcghMSQH9KndARQDlj++rDBxPjxulNHC/jHnhVdca0//JN5a1BdOmBtrJKOiwdOOY5xxVOUpYVnm9bc8leY1q8v5YKGkU=",
    "raw_log":"boradcast tx success"
}
```
---

###4.2 普通交易
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
        "from": "gc11kfwurleaskangv45ssmpzs2sprhxjsfdlqgqjs",
        "memo": "",
        "chain_id": "testnet",
        "account_number": "0",
        "sequence": "4",
        "gas": "200000",
        "gas_adjustment": "1.2",
        "fees": [{
            "denom": "GC",
            "amount": "5000"
        }],
        "simulate": false
    },
    "amount": [{
        "denom": "GC",
        "amount": "5000"
    }]
}
```

返回:

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgSend",
                "value":{
                    "from_address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                    "to_address":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx",
                    "amount":[
                        {
                            "denom":"GC",
                            "amount":"5000"
                        }
                    ]
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
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```
---

###4.3 查询交易信息
```
GET /tx/{hash}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| hash | 交易HASH |

返回:

```
{
    "events":[
        {
            "attributes":[
                {
                    "key":"sender",
                    "value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"
                },
                {
                    "key":"module",
                    "value":"bank"
                },
                {
                    "key":"action",
                    "value":"send"
                }
            ],
            "type":"message"
        },
        {
            "attributes":[
                {
                    "key":"recipient",
                    "value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                },
                {
                    "key":"amount",
                    "value":"5GC"
                }
            ],
            "type":"transfer"
        }
    ],
    "gas_used":"58063",
    "gas_wanted":"200000",
    "height":"6659",
    "logs":[
        {
            "events":[
                {
                    "attributes":[
                        {
                            "key":"sender",
                            "value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"
                        },
                        {
                            "key":"module",
                            "value":"bank"
                        },
                        {
                            "key":"action",
                            "value":"send"
                        }
                    ],
                    "type":"message"
                },
                {
                    "attributes":[
                        {
                            "key":"recipient",
                            "value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                        },
                        {
                            "key":"amount",
                            "value":"5GC"
                        }
                    ],
                    "type":"transfer"
                }
            ],
            "log":"",
            "msg_index":0,
            "success":true
        }
    ],
    "raw_log":"[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"},{"key":"amount","value":"5GC"}]}]}]",
    "timestamp":"2020-03-07T05:14:58+08:00",
    "tx":{
        "type":"StdTx",
        "value":{
            "fee":{
                "amount":[
                    {
                        "amount":"1",
                        "denom":"GC"
                    }
                ],
                "gas":"200000"
            },
            "memo":"",
            "msg":[
                {
                    "type":"MsgSend",
                    "value":{
                        "amount":[
                            {
                                "amount":"5",
                                "denom":"GC"
                            }
                        ],
                        "from_address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                        "to_address":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                    }
                }
            ],
            "signatures":[
                {
                    "pub_key":{
                        "type":"tendermint/PubKeySecp256k1",
                        "value":"Augr+YcqdYO5fN0imCuuHaTrR+3eZTdMIkAbCIIWnB/+"
                    },
                    "signature":"2Xt5AUOmnbp22a5rwky9p/0oZHoKZ4tH9aVqE8L7R41+/mAbCsgFmFkIhwLwQV5chl/M4e9xvTzyBaWv9OGkuA=="
                }
            ]
        }
    },
    "txhash":"IRREVOCABLEPAY-9CA1921DD0F9AE6CA6E334396740CA6E218EB40365EF91E83775CB2D6B3D112E"
}
```

---

###4.4 按条件查询交易
```
GET /tx?message.sender={sender}&message.action={action}&message.recipient={recipient}&order={asc/desc}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| sender | 发送者账户 |
| action | 动作类型 |
| recipient | 接收者账户 |

返回:

```
{
    "count":"1",
    "limit":"30",
    "page_number":"1",
    "page_total":"1",
    "total_count":"1",
    "txs":[
        {
            "events":[
                {
                    "attributes":[
                        {
                            "key":"sender",
                            "value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"
                        },
                        {
                            "key":"module",
                            "value":"bank"
                        },
                        {
                            "key":"action",
                            "value":"send"
                        }
                    ],
                    "type":"message"
                },
                {
                    "attributes":[
                        {
                            "key":"recipient",
                            "value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                        },
                        {
                            "key":"amount",
                            "value":"5GC"
                        }
                    ],
                    "type":"transfer"
                }
            ],
            "gas_used":"58063",
            "gas_wanted":"200000",
            "height":"6659",
            "logs":[
                {
                    "events":[
                        {
                            "attributes":[
                                {
                                    "key":"sender",
                                    "value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"
                                },
                                {
                                    "key":"module",
                                    "value":"bank"
                                },
                                {
                                    "key":"action",
                                    "value":"send"
                                }
                            ],
                            "type":"message"
                        },
                        {
                            "attributes":[
                                {
                                    "key":"recipient",
                                    "value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                                },
                                {
                                    "key":"amount",
                                    "value":"5GC"
                                }
                            ],
                            "type":"transfer"
                        }
                    ],
                    "log":"",
                    "msg_index":0,
                    "success":true
                }
            ],
            "raw_log":"[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"},{"key":"amount","value":"5GC"}]}]}]",
            "timestamp":"2020-03-07T05:14:58+08:00",
            "tx":{
                "type":"StdTx",
                "value":{
                    "fee":{
                        "amount":[
                            {
                                "amount":"1",
                                "denom":"GC"
                            }
                        ],
                        "gas":"200000"
                    },
                    "memo":"",
                    "msg":[
                        {
                            "type":"MsgSend",
                            "value":{
                                "amount":[
                                    {
                                        "amount":"5",
                                        "denom":"GC"
                                    }
                                ],
                                "from_address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                                "to_address":"gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx"
                            }
                        }
                    ],
                    "signatures":[
                        {
                            "pub_key":{
                                "type":"tendermint/PubKeySecp256k1",
                                "value":"Augr+YcqdYO5fN0imCuuHaTrR+3eZTdMIkAbCIIWnB/+"
                            },
                            "signature":"2Xt5AUOmnbp22a5rwky9p/0oZHoKZ4tH9aVqE8L7R41+/mAbCsgFmFkIhwLwQV5chl/M4e9xvTzyBaWv9OGkuA=="
                        }
                    ]
                }
            },
            "txhash":"IRREVOCABLEPAY-9CA1921DD0F9AE6CA6E334396740CA6E218EB40365EF91E83775CB2D6B3D112E"
        }
    ]
}
```

---

## 5 revocable-tx
###5.1 可撤回交易
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
	"from": "gc11578zewhe03eycdtvnqcuxt8z3qzg226qj68k6r",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "GC",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "GC",
	  "amount": "5000"
	}
  ]
}
```

返回:

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
                            "denom":"GC",
                            "amount":"5000"
                        }
                    ]
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
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```

---

###5.2 撤回可撤回交易
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
    "from": "vault115ljwsxqhxvu54ndg95kyxn7f82uj2yk380ucm4",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
        "amount": "1"
      }
    ],
    "simulate": false
  },
  "index": "0"
}
```

返回：

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
                            "denom":"GC",
                            "amount":"5"
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"GC",
                    "amount":"1"
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

## 6 token
###6.1 发行代币
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
    "from": "gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "80445444",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
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

返回：

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
---

###6.2 增发代币 
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
	"from": "gc11hjn7n3g62r97w0syhy8gmy2wlvfd0n64uzevlp",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "GC",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": "10000000"
}
```

返回：

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
                    "denom":"GC",
                    "amount":"5000"
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

###6.3 冻结代币
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
    "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
        "amount": "5000"
      }
    ],
    "simulate": false
}
```

返回：

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
                    "denom":"GC",
                    "amount":"5000"
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

###6.4 解冻代币
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
    "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "4",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "GC",
        "amount": "5000"
      }
    ],
    "simulate": false
}
```

返回：

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
                    "denom":"GC",
                    "amount":"5000"
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

###6.5 销毁代币 
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
        "from": "gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
        "memo": "",
        "chain_id": "testnet",
        "account_number": "0",
        "sequence": "4",
        "gas": "200000",
        "gas_adjustment": "1.2",
        "fees": [{
            "denom": "GC",
            "amount": "5000"
        }],
        "simulate": false
    },
    "amount": "10000"
}
```

返回：

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
                    "denom":"GC",
                    "amount":"5000"
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

###6.6 查询代币
```
GET  /token/show/{symbol}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| symbol | 代币符号 |

返回：

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
---

###6.7 查询所有代币 
```
GET  /token/list
```

返回：

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
---

## 7 trading-pair
###7.1 提交交易对提案
```
POST  /token/trading-pair
```

请求BODY示例：

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

返回：

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
---

###7.2 查询交易对 
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

---

## 8 foundation
###8.1 查看基金会成员
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

## 9 dex
###9.1 去中心化交易所存储交易信息
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


###9.2 账户充代币到去中心化交易所
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

###9.3 从去中心化交易所提取代币
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

###9.4 去中心化交易所设置管理员账户
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

###9.5 去中心化交易所查询交易信息
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


###9.6 去中心化交易所查询账户信息
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

###9.7 去中心化交易所查询管理员信息
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
---

## 10 查询节点状态信息
```
GET /status
```

返回:

```
{"channels":"4020212223303800","id":"...."....}
```

---

##11 多签普通/保险账户转账交易 

* 多签普通账户的交易构建方法和普通账户的交易构建一致。见模块tx
* 多签保险账户的交易构建方法和保险账户的交易构建一致。见模块vault-account
* 构建交易完成后，需要线下进行多签（具体见多签命令行相关操作）
* 然后广播发送带有签名的交易。见4.1




