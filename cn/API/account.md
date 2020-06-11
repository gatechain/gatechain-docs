
### 查询账户信息-[命令行](../cli/account.md#查询账户信息)
  
```
GET /account/{account}
```
参数:

| 参数名 | 说明 |
| :---- | :---- |
| account | 账户 |

返回示例:

%accordion%json%accordion%
```
{
    "height":"5129", //区块高度
    "result":{
        "type":"AccountResp",
        "value":{
            "account_field":{
                "type":"VaultAccount",
                "value":{
                    "base_account":{
                        "account_number":"7",
                        "address":"gt11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88", //账户地址
                        "public_key":{
                            "type":"tendermint/PubKeySecp256k1",
                            "value":"Augr+YcqdYO5fN0imCuuHaTrR+3eZTdMIkAbCIIWnB/+"
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
                    "received_revocable_tokens":null, //收到可撤回的代币
                    "security_address":"", //找回账户
                    "sent_revocable_tokens":null, //已发送可撤销的代币
                    "vault_address":[
                        "vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49" //保险账户地址,此字段如果有值，就表示查询的本账户是该保险账户找回账户
                    ]
                }
            },
            "account_type":0
        }
    }
}
```
%/accordion%


### 查询账户余额
```
GET /account/balance/{account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| account | 账户 |

返回示例:

%accordion%json%accordion%

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
%/accordion%


### 公布多签账户
```
POST /account/publish-multisig/{address}
```
请求BODY示例：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr", //发送者账户
    "memo": "",
    "chain_id": "testnet", //链ID
    "account_number": "0",
    "sequence": "1",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGT", //单位
        "amount": "20" // 手续费
      }
    ],
    "simulate": false
  },
  "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2" //多签账户公钥
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
                "type":"MsgPublishMultiSigAccount",
                "value":{
                    "from_address":"gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr", //发送者账户
                    "to_address":"gt11zpxee6l20jnprfqgttas2tnw7xvwqpv3z0lyz8", //多签账户
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
            "gas":"200000"
        },
        "signatures":null, //签名
        "memo":"",
        "valid_height":null //交易有效高度
    }
}
```
%/accordion%


