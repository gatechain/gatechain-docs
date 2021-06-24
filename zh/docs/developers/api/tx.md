
### <span id="发送交易">发送交易 [命令行](../cli/tx.md#发送交易)</span>
######已经在本地完成交易签名，用此接口完成交易广播
```
POST /v1/tx
```


??? note "请求BODY示例:"

    ```
    完成本地交易签名后，复制签名文件作为请求body就可以，不需要复制以下内容。
    {
        "type":"StdTx",
        "value":{
            "msg":[
                {
                    "type":"MsgCreateVault", //交易类型（本交易为创建保险账户）
                    "value":{
                        "from_address":"gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //发送者账户
                        "to_address":"gt11e02xkclka6h64c80az66ampjzzwe739tlnrkxya3ecxrj6e67plh626zad7tqz3w3m8xqt", //接收者账户
                        "security_address":"gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //找回账户
                        "delay_height":"100", //交易延迟生效高度
                        "clearing_height":"50000", //清算高度
                        "amount":[
                            {
                                "denom":"NANOGT", //单位
                                "amount":"500" //转移代币数量
                            }
                        ],
                        "pubkey":""
                    }
                }
            ],
            "fee":{
                "amount":[
                    {
                        "denom":"NANOGT", //单位
                        "amount":"11" //手续费
                    }
                ],
                "gas":"200000" //交易消耗的gas
            },
            "nonces":[
                null
            ],
            "signatures":[
                {
                    "pub_key":{
                        "type":"gatechain/PubKeyEd25519",
                        "value":"pIGmDHUICq/NrI6TYJj8/yGbJfa/EjrJ50ImqSVbPyw="
                    },
                    "signature":"CYUFLRQf2JCw1kR0AFIdUhMrc+qu5owzwh1outwoAn6AKf2joFScL2qxWFzHHLO/3uig87E7rFUQmajz47d/Dw==" //签名
                }
            ],
            "memo":"",
            "valid_height":[ //交易有效高度
                "2300",
                "2500"
            ]
        }
    }
    ```


??? note "返回示例:"

    ```
    {
        "height":"0", //区块高度
        "txhash":"IRREVOCABLEPAY-79459C3708F7E38EA35977C12E5ECB659D7F23B772BEB5A58F52DFAA4C72D985", //交易hash
        "data":"zgG5zc/tCkDcKqCFChTtdOB+KzokLvRctbEBeDtte5QIlxIUntatO0LfnWuAFDcHJkcXQrv6qA8aDgoGTkFOT0dDEgQ1MDAwEhQKDgoGTkFOT0dDEgQ1MDAwEMCaDBoAImkKJRYk3mQgGz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4SQPpCFMKSXR0kQejB351r0ZDR05LgxFe9GsEsgyj/MKe2ia3Pv+aem3OhQnndisiEsZbCEKP2svCTwnWBG5KlJAAyAwHoBw==",
        "raw_log":"boradcast tx success", 
        "tx":{
            "type":"StdTx",
            "value":{
                "msg":[
                    {
                        "type":"MsgSend", //交易类型
                        "value":{
                            "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
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
                "nonces":[
                    null
                ],
                "signatures":[
                    {
                        "pub_key":{
                            "type":"gatechain/PubKeyEd25519",
                            "value":"Gz3RMlEjEVSJCXrBPhyG5fov5EwzE/zamPMLcE4rol4="
                        },
                        "signature":"+kIUwpJdHSRB6MHfnWvRkNHTkuDEV70awSyDKP8wp7aJrc+/5p6bc6FCed2KyISxlsIQo/ay8JPCdYEbkqUkAA==" //签名
                    }
                ],
                "memo":"",
                "valid_height":[ //交易有效高度
                    "1",
                    "1000"
                ]
            }
        }
    }
    ```

### <span id="普通交易">普通交易</span>

######此接口用于生成“普通交易”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/tx/send/{account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| account | 接收账户 |



??? note "请求BODY示例："

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
            "valid_height":[ //交易生效高度
                "600",
                "900"
            ]
        },
        "amount": [{
            "denom": "NANOGT", //单位
            "amount": "5000" //转移代币数量
        }]
    }
    ```


??? note "返回示例:"

    ```
    {
        "type":"StdTx",
        "value":{
            "msg":[
                {
                    "type":"MsgSend", //交易类型
                    "value":{
                        "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
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
            "valid_height":[ //交易生效高度
                "600",
                "900"
            ]
        }
    }
    ```

### <span id="查询单笔交易">查询单笔交易 [命令行](../cli/tx.md#查询单笔交易)</span>
```
GET /v1/tx/{hash}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| hash | 交易HASH |



??? note "返回示例:"

    ```
    {
    "data":"AB02B9CDCFED0A6FDC2AA0850A28E151E865950BE2B1B0772852895F3D6DBF475F21B7A8C261E8A9817B8E3E56C97F5319BF6C59095C1228E019A5E99305917528D431DDC13C9776648B6244877F9F19B033DCE3B88B92D3A09586D05AC0E1281A150A064E414E4F4754120B313030303030303030303012120A0C0A064E414E4F47541202313110C09A0C1A3032B98683061DE03543FAB82EA8904E492FFDF1AC56F1BC855316B29E004EB3A02FCF7069CCEA0B1606C549498C28336022690A25E1E1A0FA201BAAF55B7BFB628A0FEFAE3A2BE6114F30A5A373CFF7744DE321FADB2CC202541240D72A4B77AA24B5702EF59BB98E0574F6A24541CEF08B498A8EA8F9532807339F9DBCA1B7176AB78D8C000B62EF18D5B5EFBC2E7EE05E05B800D2EC31AA7C190A320301CC01",
                "events": [
                    {
                        "attributes": [ //发送人属性
                            {
                                "key": "sender",
                                "value": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp" //发送人账户
                            },
                            {
                                "key": "module",
                                "value": "bank"
                            },
                            {
                                "key": "action",
                                "value": "send"
                            }
                        ],
                        "type": "message"
                    },
                    {
                        "attributes": [ //接收人属性
                            {
                                "key": "recipient",
                                "value": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar" //接收人账户
                            },
                            {
                                "key": "amount", //单位
                                "value": "10000000000NANOGT" //转移代币数量
                            }
                        ],
                        "type": "transfer"
                    }
                ],
                "gas_used": "60579",
                "gas_wanted": "200000",
                "height": "5", //交易区块高度
                "irrevocable_confirm_number": [  //交易确认高度
                        "3"
                ], 
                "logs": [
                    {
                        "events": [
                            {
                                "attributes": [
                                    {
                                        "key": "sender",
                                        "value": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp"
                                    },
                                    {
                                        "key": "module",
                                        "value": "bank"
                                    },
                                    {
                                        "key": "action",
                                        "value": "send"
                                    }
                                ],
                                "type": "message"
                            },
                            {
                                "attributes": [
                                    {
                                        "key": "recipient",
                                        "value": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar"
                                    },
                                    {
                                        "key": "amount",
                                        "value": "10000000000NANOGT"
                                    }
                                ],
                                "type": "transfer"
                            }
                        ],
                        "log": "",
                        "msg_index": 0,
                        "success": true
                    }
                ],
                "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"sender\",\"value\":\"gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp\"},{\"key\":\"module\",\"value\":\"bank\"},{\"key\":\"action\",\"value\":\"send\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar\"},{\"key\":\"amount\",\"value\":\"10000000000NANOGT\"}]}]}]",
                "timestamp": "2020-06-15T20:53:28+08:00",
                "tx": {
                    "type": "StdTx",
                    "value": {
                        "fee": {
                            "amount": [
                                {
                                    "amount": "11",
                                    "denom": "NANOGT"
                                }
                            ],
                            "gas": "200000"
                        },
                        "memo": "",
                        "msg": [
                            {
                                "type": "MsgSend",
                                "value": {
                                    "amount": [
                                        {
                                            "amount": "10000000000",
                                            "denom": "NANOGT"
                                        }
                                    ],
                                    "from_address": "gt11u9g7sev4p03trvrh9pfgjheadkl5whepk75vyc0g4xqhhr372myh75cehak9jz2u3ap0fp",
                                    "to_address": "gt11uqv6t6vnqkgh22x5x8wuz0yhwejgkcjysale7xdsx0ww8wytjtf6p9vx6pdvpcfgme5xar"
                                }
                            }
                        ],
                        "nonces": [
                            "MrmGgwYd4DVD+rguqJBOSS/98axW8byFUxayngBOs6Avz3BpzOoLFgbFSUmMKDNg"
                        ],
                        "signatures": [ 
                            {
                                "pub_key": {
                                    "type": "gatechain/PubKeyEd25519",
                                    "value": "G6r1W3v7YooP7646K+YRTzClo3PP93RN4yH62yzCAlQ="
                                },
                                "signature": "1ypLd6oktXAu9Zu5jgV09qJFQc7wi0mKjqj5UygHM5+dvKG3F2q3jYwAC2LvGNW177wufuBeBbgA0uwxqnwZCg==" //签名
                            }
                        ],
                        "valid_height": [ //交易有效高度
                            "1",
                            "204"
                        ]
                    }
                },
                "txhash": "IRREVOCABLEPAY-DA2D28BEE24FF2CCF7FB45064BE316D6AB6962CD1C79A53DB427C83EC94A746C0C0A07FC6B74EFBC2C3B1F086F123E34" //交易hash
    }
    ```
