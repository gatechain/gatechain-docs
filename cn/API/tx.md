
### 发送交易
```
POST /tx
```

请求BODY示例:


%accordion%json%accordion%

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
%/accordion%

参数:

| 参数名 | 说明 |
| ----| ---- |
| return | block：在交易提交后返回；sync：CheckTx后返回；async：立即返回。 |

返回:


%accordion%json%accordion%

```
{
    "height":"899",
    "txhash":"BASIC-9D5D04AF30B14EB6A67B6155EC3868902CFB19520E5EABCF52C060634C7100D5",
    "data":"wAG5zc/tCjzcKqCFChRVE1rMK6hvPjgxDwCH785EgQbPeBIUYNyKJ+ONzEhXHkVJejpKqowGNsMaCgoCR1QSBDUwMDASEAoKCgJHVBIENTAwMBDAmgwaagom61rphyED7QMj7Ns1VJvVzIt2GoaRWVLycKbR6hSql6/9nntcghMSQH9KndARQDlj++rDBxPjxulNHC/jHnhVdca0//JN5a1BdOmBtrJKOiwdOOY5xxVOUpYVnm9bc8leY1q8v5YKGkU=",
    "raw_log":"boradcast tx success"
}
```
%/accordion%

### 普通交易
```
POST  /tx/send/{account}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| account | 接收账户 |

请求BODY示例：


%accordion%json%accordion%

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
%/accordion%

返回:


%accordion%json%accordion%

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
%/accordion%

### 查询交易信息
```
GET /tx/{hash}
```
参数:

| 参数名 | 说明 |
| ----| ---- |
| hash | 交易HASH |

返回:


%accordion%json%accordion%

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
%/accordion%

### 按条件查询交易
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


%accordion%json%accordion%

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
%/accordion%
