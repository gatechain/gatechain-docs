
### <span id="查询账户信息">查询账户信息 [命令行](../cli/account.md#查询账户信息)</span>
  
```
GET /v1/account/{account}
```
参数:

| 参数名 | 说明 |
| :---- | :---- |
| account | 账户 |


??? note "返回示例："
    ```python
    {
        "height":"5129", //区块高度
        "result":{
            "type":"AccountResp",
            "value":{
                "account_field":{
                    "type":"VaultAccount",
                    "value":{
                        "base_account":{
                            "account_number":"7", //账户编号
                            "address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //账户地址
                            "public_key": {
                                "type": "gatechain/PubKeyEd25519",
                                "value": "99gGX+9YCUV26rE+V/54v2graA/b4xKeqaYGOr6wWTU="
                            },                        
                            "sequence":"4",
                            "tokens":[
                                {
                                    "amount":"89999999999999880", //账户余额
                                    "denom":"NANOGT" //单位
                                }
                            ]
                        },
                        "clearing_height":{ //账户清算高度，只有保险账户有值，普通账户没有
                            "last_clearing_effect_height":"0", //上一次设置清算高度时的交易高度
                            "last_clearing_height":"0", //上一次设置的清算高度
                            "next_clearing_effect_height":"0", //最新设置清算高度时的交易高度
                            "next_clearing_height":"0" //最新设置的清算高度
                        },
                        "delay_height":"0", //保险账户交易延迟生效高度
                        "received_revocable_tokens":null, //仍可撤回的代币
                        "security_address":"", //找回账户
                        "sent_revocable_tokens":null, //已发送可撤回的代币
                        "vault_address":[
                            "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6" //保险账户地址,此字段如果有值，就表示查询的本账户是该保险账户找回账户
                        ]
                    }
                },
                "account_type":0 //账户类型：0.单签普通账户、1.单签保险账户、2.多签普通账户、3.多签保险账户
            } 
        }
    }
    ```


### <span id="查询账户余额">查询账户余额 [命令行](../cli/account.md#查询账户余额)</span>
```
GET /v1/account/balance/{account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| account | 账户 |


??? note "返回示例:"
    ```
    {
        "height":"5483", //区块高度
        "result":[
            {
                "amount":"8999999989968", //账户余额
                "denom":"NANOGT" //单位
            },
        ]
    }
    ```


### <span id="公布多签账户">公布多签账户 [命令行](../cli/account.md#公布多签账户)</span>

######此接口用于生成“公布多签账户”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。
```
POST /v1/account/publish-multisig/{address}
```


??? note "请求BODY示例："
    ```
    {
    "base_req": {
        "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
        "memo": "",//交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id": "testnet", //链ID
        "gas": "200000",//交易消耗的gas数量
        "fees": [
        {
            "denom": "NANOGT", //单位
            "amount": "20" // 手续费
        }
        ],
        "simulate": false, //是否模拟计算gas
        "valid_height": [ //交易有效高度
            "600",
            "900"
        ] 
    },
    "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2" //多签账户公钥
    }
    ```



??? note "返回示例:"

    ```
    {
        "type":"StdTx",
        "value":{
            "msg":[
                {
                    "type":"MsgPublishMultiSigAccount", //交易类型
                    "value":{
                        "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //发送者账户
                        "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //多签账户
                            "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2" //多签账户公钥
                    }
                }
            ],
            "fee":{
                "amount":[
                    {
                        "denom":"NANOGT", //单位
                        "amount":"20" //手续费
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


