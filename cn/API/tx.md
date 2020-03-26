
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
                    "from_address":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v",
                    "to_address":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k",
                    "amount":[
                        {
                            "denom":"NANOGC",
                            "amount":"5000"
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
                    "amount":"5000"
                }
            ],
            "gas":"200000"
        },
        "nonces":[
            null
        ],
        "signatures":[
            {
                "pub_key":{
                    "type":"tendermint/PubKeyEd25519",
                    "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                },
                "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA=="
            }
        ],
        "memo":"",
        "valid_height":[
            "1",
            "1000"
        ]
    }
}
```
%/accordion%

返回:

%accordion%json%accordion%

```
{
    "height":"0",
    "txhash":"IRREVOCABLEPAY-79459C3708F7E38EA35977C12E5ECB659D7F23B772BEB5A58F52DFAA4C72D985",
    "data":"zgG5zc/tCkDcKqCFChTtdOB+KzokLvRctbEBeDtte5QIlxIUntatO0LfnWuAFDcHJkcXQrv6qA8aDgoGTkFOT0dDEgQ1MDAwEhQKDgoGTkFOT0dDEgQ1MDAwEMCaDBoAImkKJRYk3mQgGz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4SQPpCFMKSXR0kQejB351r0ZDR05LgxFe9GsEsgyj/MKe2ia3Pv+aem3OhQnndisiEsZbCEKP2svCTwnWBG5KlJAAyAwHoBw==",
    "raw_log":"boradcast tx success",
    "tx":{
        "type":"StdTx",
        "value":{
            "msg":[
                {
                    "type":"MsgSend",
                    "value":{
                        "from_address":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v",
                        "to_address":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k",
                        "amount":[
                            {
                                "denom":"NANOGC",
                                "amount":"5000"
                            }
                        ]
                    }
                }
            ],
            "fee":{
                "amount":[
                    {
                        "denom":"NANOGC",
                        "amount":"5000"
                    }
                ],
                "gas":"200000"
            },
            "nonces":[
                null
            ],
            "signatures":[
                {
                    "pub_key":{
                        "type":"tendermint/PubKeyEd25519",
                        "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                    },
                    "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA=="
                }
            ],
            "memo":"",
            "valid_height":[
                "1",
                "1000"
            ]
        }
    }
}
```
%/accordion%

### 普通交易
```
POST  /tx/send/{account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
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
            "denom": "NANOGC",
            "amount": "5000"
        }],
        "simulate": false
    },
    "amount": [{
        "denom": "NANOGC",
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
                            "denom":"NANOGC",
                            "amount":"5000"
                        }
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
                    "amount":"5000"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
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
| :----| :---- |
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
                    "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                    "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                },
                {
                    "key":"amount",
                    "value":"5000NANOGC"
                }
            ],
            "type":"transfer"
        }
    ],
    "gas_used":"72309",
    "gas_wanted":"200000",
    "height":"596",
    "logs":[
        {
            "events":[
                {
                    "attributes":[
                        {
                            "key":"sender",
                            "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                            "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                        },
                        {
                            "key":"amount",
                            "value":"5000NANOGC"
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
    "raw_log":"[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"},{"key":"amount","value":"5000NANOGC"}]}]}]",
    "timestamp":"2020-03-25T19:07:53+08:00",
    "tx":{
        "type":"StdTx",
        "value":{
            "fee":{
                "amount":[
                    {
                        "amount":"5000",
                        "denom":"NANOGC"
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
                                "amount":"5000",
                                "denom":"NANOGC"
                            }
                        ],
                        "from_address":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v",
                        "to_address":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                    }
                }
            ],
            "nonces":[
                null
            ],
            "signatures":[
                {
                    "pub_key":{
                        "type":"tendermint/PubKeyEd25519",
                        "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                    },
                    "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA=="
                }
            ],
            "valid_height":[
                "1",
                "1000"
            ]
        }
    },
    "txhash":"IRREVOCABLEPAY-79459C3708F7E38EA35977C12E5ECB659D7F23B772BEB5A58F52DFAA4C72D985"
}
```
%/accordion%

### 按条件查询交易
```
GET /tx?message.sender={sender}&message.action={action}&message.recipient={recipient}&order={asc/desc}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| sender | 发送者账户 |
| action | 动作类型 |
| recipient | 接收者账户 |


返回:

%accordion%json%accordion%

```
{
    "count":"2",
    "limit":"30",
    "page_number":"1",
    "page_total":"1",
    "total_count":"2",
    "txs":[
        {
            "events":[
                {
                    "attributes":[
                        {
                            "key":"sender",
                            "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                            "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                        },
                        {
                            "key":"amount",
                            "value":"5000NANOGC"
                        }
                    ],
                    "type":"transfer"
                }
            ],
            "gas_used":"72309",
            "gas_wanted":"200000",
            "height":"596",
            "logs":[
                {
                    "events":[
                        {
                            "attributes":[
                                {
                                    "key":"sender",
                                    "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                                    "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                                },
                                {
                                    "key":"amount",
                                    "value":"5000NANOGC"
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
            "raw_log":"[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"},{"key":"amount","value":"5000NANOGC"}]}]}]",
            "timestamp":"2020-03-25T19:07:53+08:00",
            "tx":{
                "type":"StdTx",
                "value":{
                    "fee":{
                        "amount":[
                            {
                                "amount":"5000",
                                "denom":"NANOGC"
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
                                        "amount":"5000",
                                        "denom":"NANOGC"
                                    }
                                ],
                                "from_address":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v",
                                "to_address":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                            }
                        }
                    ],
                    "nonces":[
                        null
                    ],
                    "signatures":[
                        {
                            "pub_key":{
                                "type":"tendermint/PubKeyEd25519",
                                "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                            },
                            "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA=="
                        }
                    ],
                    "valid_height":[
                        "1",
                        "1000"
                    ]
                }
            },
            "txhash":"IRREVOCABLEPAY-79459C3708F7E38EA35977C12E5ECB659D7F23B772BEB5A58F52DFAA4C72D985"
        },
        {
            "events":[
                {
                    "attributes":[
                        {
                            "key":"sender",
                            "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                            "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                        },
                        {
                            "key":"amount",
                            "value":"200000000000000000000000000NANOGC"
                        }
                    ],
                    "type":"transfer"
                }
            ],
            "gas_used":"57233",
            "gas_wanted":"200000",
            "height":"94",
            "logs":[
                {
                    "events":[
                        {
                            "attributes":[
                                {
                                    "key":"sender",
                                    "value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"
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
                                    "value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                                },
                                {
                                    "key":"amount",
                                    "value":"200000000000000000000000000NANOGC"
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
            "raw_log":"[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v"},{"key":"module","value":"bank"},{"key":"action","value":"send"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"},{"key":"amount","value":"200000000000000000000000000NANOGC"}]}]}]",
            "timestamp":"2020-03-25T14:28:24+08:00",
            "tx":{
                "type":"StdTx",
                "value":{
                    "fee":{
                        "amount":[
                            {
                                "amount":"1",
                                "denom":"NANOGC"
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
                                        "amount":"200000000000000000000000000",
                                        "denom":"NANOGC"
                                    }
                                ],
                                "from_address":"gc11a46wql3t8gjzaazukkcsz7pmd4aegzyhcfmu9v",
                                "to_address":"gc11nmt26w6zm7wkhqq5xurjv3chg2al42q0ps958k"
                            }
                        }
                    ],
                    "nonces":[
                        "kD5yts2zF6C0v04IuzJDkuHcrXi2rJijj6MGW3oc+EU="
                    ],
                    "signatures":[
                        {
                            "pub_key":{
                                "type":"tendermint/PubKeyEd25519",
                                "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                            },
                            "signature":"cCXx4/gCT6W2+6GZAHKSPcA4aHj79oiDSonLvcQH6v+/IUJmQAakdBRj5zKmNA0mX1EnSPHXjR951Dn3EpqBBA=="
                        }
                    ],
                    "valid_height":[
                        "1",
                        "293"
                    ]
                }
            },
            "txhash":"IRREVOCABLEPAY-3D8F4B8831722CA7C91FE1EE50E4EC707BC36D03C7D83DAC0CA9C7849ACED26D"
        }
    ]
}
```
%/accordion%
