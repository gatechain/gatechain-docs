### 委托代币到共识账户 [命令行](../cli/staking.md#委托代币到共识账户-api)

######此接口用于生成“委托代币到共识账户”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/staking/delegator/{delegatorAddr}/delegate
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|


请求BODY示例:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //发送者账户
        "memo":"", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id":"testnet", //链ID
        "gas":"200000", //交易消耗的gas
        "fees":[
            {
                "denom":"NANOGT", //单位
                "amount":"500" //手续费
            }
        ],
        "simulate":false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    },
    "con-account_address":"gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //共识账户地址
    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //委托账户地址
    "amount":{
        "denom":"NANOGT", //单位
        "amount":"100000000" //委托代币数
    }
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
                "type":"MsgDelegate", //交易类型
                "value":{
                    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //委托账户地址
                    "con-account_address":"gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //共识账户地址
                    "amount":{
                        "denom":"NANOGT",  //单位
                        "amount":"100000000" //委托代币数
                    }
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //单位
                    "amount":"500" //手续费
                }
            ],
            "gas":"200000" //交易消耗的gas
        },
        "nonces":[
            null
        ],
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

###查询委托账户在单个共识账户的委托信息 [命令行](../cli/staking.md#查询委托账户在单个共识账户的委托信息-api)

```
GET  /v1/staking/delegator/{delegatorAddr}/{con-account}/delegations
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|
| con-account |共识账户|

返回示例：

%accordion%json%accordion%

```
{
    "height": "103", //区块高度
    "result": {
        "balance": "1000000000", //委托代币数量
        "con-account_address": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //共识账户地址
        "delegator_address": "gt11923wtfrfea85w9pklkkmpff7ctllhyjfyed54amdnmtteerk4jrl0tl58khd300jvgnsma", //委托账户地址
        "shares": "1000000000.000000000000000000" //委托数量
    }
}
```
%/accordion%

###查询委托账户在所有共识账户的委托信息 [命令行](../cli/staking.md#查询委托账户在所有共识账户的委托信息-api)

```
GET  /v1/staking/delegator/{delegatorAddr}/delegations
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|

返回示例：

%accordion%json%accordion%

```
{
    "height": "117", //区块高度
    "result": [
        {
            "balance": "200000", //委托代币数量
            "con-account_address": "gt11fd299ajlray3ltuj0jmzvwylzafscymk9nc98trr5peedf9q3s90wnczpa7qr6f5d6y3ny", //共识账户地址
            "delegator_address": "gt11923wtfrfea85w9pklkkmpff7ctllhyjfyed54amdnmtteerk4jrl0tl58khd300jvgnsma", //委托账户地址
            "shares": "200000.000000000000000000" //委托数量
        },
		...
    ]
}
```

%/accordion%


### 查询账户所有委托的共识账户详情

```
GET /v1/staking/delegator/{delegatorAddr}/con-accounts
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|

返回示例：

%accordion%json%accordion%

```
{
    "height":"77842",//区块高度
    "result":[
        {
            "commission":{
                "commission_rates":{
                    "max_change_rate":"0.010000000000000000",//手续费最大变化率
                    "max_rate":"0.010000000000000000",//最大手续费
                    "rate":"0.010000000000000000" //手续费
            },
                "update_time":"2020-05-27T08:13:47Z"//手续费更新时间
            },
            "delegator_shares":"100000000.000000000000000000",//共识账户的委托数量
            "description":{//共识账户属性集合
                "details":"",
                "identity":"",
                "moniker":"contwo",
                "website":""
            },
            "operator_address":
"gt11h3ugxuhhljffqyvj7sm08u3507ykdr5w67d9dkuv5tktv2vyc5xqrsxv7ujd8r6xvpwpt7",//共识账户地址
			  "power": "39000934", //共识账户power
            "power_rate":"1.029615402961540000",//共识账户忠诚系数
            "pubkey": "gt1pub1u8s6p73qzlye3d4mljgt3auxhz4shj43w2eu0evladd03rr2auyrhc87aynqpwdz6w", //共识账户公钥
            "status":"online", //共识账户在线状态
            "tokens":"100000000"//共识账户被委托的总token数量
        }
    ]
}
```
%/accordion%


### 查询委托账户的委托交易列表

```
GET  /v1/tx?message.sender={delegatorAddr}&limit=1&page=1&message.action={delegation/redelegation/undelegation}
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|
| action |动作类型：委托/转移委托/解除委托|


返回示例:

%accordion%json%accordion%

```
[
    {
        "count": "1", //查询条数
        "limit": "100", //页条目
        "page_number": "1", //页码
        "page_total": "1", //共几页
        "total_count": "1", //总数
        "txs": [
            {
                "data": "A802B9CDCFED0A6BB9AE6FBE0A280273979685CF46967B3CEF04E3FDE9FC89B748D1AEF505630C95F81C50AD416399F657E2571C828F1228817243C326F338B53826CC93443332C45EFB00C1E81311FAD6B5A1AECF0E7CA43762221BB9FC03FD1A110A064E414E4F475412073130303030303012120A0C0A064E414E4F47541202313110C09A0C1A30E3F427451551B57618A238092EF6B7CFF333D55AC23A7F07D58AE9845E2E49A65B019F71D4F393B29DAFB4E8E605E40922690A25E1E1A0FA20C939025C7A4DF13E0525E30C425B4A89A4DDBC38B1373B00C5F4D6CCEC77F27B1240F8369BB605D0DD32277F9370EF9FC7D0028D50E62CD7892594C6C1E0689551D9B8A4765F244528C436796F3300A5FDEC7817DE5A286C78EB485C4EAB9D259B0C3204CD209F22",
                "events": [
                    {
                        "attributes": [
                            {
                                "key": "con-account",
                                "value": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //共识账户地址
                            },
                            {
                                "key": "amount",
                                "value": "1000000" //委托代币数量
                            }
                        ],
                        "type": "delegate" //交易类型
                    },
                    {
                        "attributes": [
                            {
                                "key": "module",
                                "value": "staking"
                            },
                            {
                                "key": "sender",
                                "value": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //发送人
                            },
                            {
                                "key": "action",
                                "value": "delegation"
                            }
                        ],
                        "type": "message"
                    }
                ],
                "gas_used": "107880",
                "gas_wanted": "200000",
                "height": "4185", //交易区块高度
                "logs": [
                    {
                        "events": [
                            {
                                "attributes": [
                                    {
                                        "key": "con-account",
                                        "value": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //共识账户地址
                                    },
                                    {
                                        "key": "amount",
                                        "value": "1000000"
                                    }
                                ],
                                "type": "delegation"
                            },
                            {
                                "attributes": [
                                    {
                                        "key": "module",
                                        "value": "staking"
                                    },
                                    {
                                        "key": "sender",
                                        "value": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //发送人
                                    },
                                    {
                                        "key": "action",
                                        "value": "delegation"
                                    }
                                ],
                                "type": "message"
                            }
                        ],
                        "log": "",
                        "msg_index": 0,
                        "success": true
                    }
                ],
                "raw_log": "[{\"msg_index\":0,\"success\":true,\"log\":\"\",\"events\":[{\"type\":\"delegate\",\"attributes\":[{\"key\":\"con-account\",\"value\":\"gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd\"},{\"key\":\"amount\",\"value\":\"1000000\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"module\",\"value\":\"staking\"},{\"key\":\"sender\",\"value\":\"gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x\"},{\"key\":\"action\",\"value\":\"delegate\"}]}]}]",
                "timestamp": "2020-06-06T03:28:28+08:00",
                "tx": {
                    "type": "StdTx",
                    "value": {
                        "fee": {
                            "amount": [
                                {
                                    "amount": "11", //交易手续费
                                    "denom": "NANOGT"
                                }
                            ],
                            "gas": "200000"
                        },
                        "memo": "",
                        "msg": [
                            {
                                "type": "MsgDelegate",
                                "value": {
                                    "amount": {
                                        "amount": "1000000", //委托代币数量
                                        "denom": "NANOGT"
                                    },
                                    "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //委托地址
                                    "con-account_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //共识账户地址
                                }
                            }
                        ],
                        "nonces": [
                            "4/QnRRVRtXYYojgJLva3z/Mz1VrCOn8H1YrphF4uSaZbAZ9x1POTsp2vtOjmBeQJ"
                        ],
                        "signatures": [
                            {
                                "pub_key": {
                                    "type": "gatechain/PubKeyEd25519",
                                    "value": "yTkCXHpN8T4FJeMMQltKiaTdvDixNzsAxfTWzOx38ns="
                                },
                                "signature": "+DabtgXQ3TInf5Nw75/H0AKNUOYs14kllMbB4GiVUdm4pHZfJEUoxDZ5bzMApf3seBfeWihseOtIXE6rnSWbDA==" //签名
                            }
                        ],
                        "valid_height": [ 
                            "4173",
                            "4383" //交易有效高度
                        ]
                    }
                },
                "txhash": "BASIC-57884EB3E55CD2BDA7E912D6B2851CB539A4C4ED40DFC164B0AF57E9A49D512883E353D38677EC051055A17A948415A7" //交易hash
            }
        ]
    }
]
```

%/accordion%

###转移委托 [命令行](../cli/staking.md#转移委托-api)

######此接口用于生成“转移委托”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/staking/delegator/{delegatorAddr}/redelegate
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|

请求BODY示例:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //发送者账户
        "memo":"", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id":"testnet", //链ID
        "gas":"200000", //交易消耗的gas数量
        "fees":[
            {
                "denom":"NANOGT", //单位
                "amount":"500" //手续费
            }
        ],
        "simulate":false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    },
    "con-account_src_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //原共识账户
    "con-account_dst_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //目标共识账户
    "delegator_address":"gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //委托账户
    "amount":
        {
            "denom":"NANOGT", //单位
            "amount":"100000000" //转移委托代币数
        }
    
}
```

%/accordion%

返回示例：

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgBeginRedelegate", //交易类型
                "value": {
                    "delegator_address": "gt110hwwuh7chle04dk38ut7l0uz8estmnsl78kmdqppnhrvvyrps92lzqh5q52ny4ztv5gaq9", //委托账户
                    "con-account_src_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //原共识账户
                    "con-account_dst_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //目标共识账户
                    "amount": {
                        "denom": "NANOGT", //单位
                        "amount": "100000000" //转移委托代币数
                    }
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //单位
                    "amount": "500" //手续费
                }
            ],
            "gas": "200000"  //交易消耗的gas
        },
        "nonces": [
            null
        ],
        "signatures": null, //签名
        "memo": "",
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    }
}
```

%/accordion%


### 查询转移委托记录 [命令行](../cli/staking.md#查询指定委托账户所有的转移委托记录-api)

```
GET /v1/staking/redelegations?delegator={delegator}&con-account_from={con-account_from}&con-account_to={con-account_to}
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| delegator |委托账户|
| con-account_from |原共识账户|
| con-account_to |目标共识账户|


返回示例：

%accordion%json%accordion%

```
{
    "height": "4573", //区块高度
    "result": [
        {
            "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户地址
            "con-account_dst_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //目标共识账户
            "con-account_src_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //原共识账户
            "entries": [
                {
                    "balance": "40000000", //转移委托代币数量
                    "completion_time": "2020-06-26T19:18:28Z", //转移委托完成时间
                    "creation_height": 0, //发起转移委托交易的高度
                    "initial_balance": "40000000", //最初转移委托代币数量
                    "shares_dst": "40000000.000000000000000000" //转移目标共识账户委托数
                }
            ]
        }
    ]
}
```
%/accordion%


### 从共识账户解绑 [命令行](../cli/staking.md#从共识账户解绑-api)

######此接口用于生成“从共识账户解绑”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/staking/delegator/{delegatorAddr}/undelegate
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|


请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //发送者账户
        "memo":"", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id":"testnet", //链ID
        "gas":"200000", //交易消耗的gas数量
        "fees":[
            {
                "denom":"NANOGT",
                "amount":"500" //手续费
            }
        ],
        "simulate":false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    },
    "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //共识账户
    "delegator_address":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户
    "amount":
        {
            "denom":"NANOGT", //单位
            "amount":"10000000" //解绑代币数量
        }
    
}
```
%/accordion%

返回示例：

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgUndelegate", //交易类型
                "value": {
                    "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户
                    "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //共识账户
                    "amount": {
                        "denom": "NANOGT", //单位
                        "amount": "10000000" //解绑代币数量
                    }
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //单位
                    "amount": "500" //手续费
                } 
            ],
            "gas": "200000" //交易消耗的gas
        },
        "nonces": [
            null
        ],
        "signatures": null, //签名
        "memo": "",
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    }
}
```

%/accordion%


### 代理解除委托 [命令行](../cli/staking.md#代理解除委托-api)

######此接口用于生成“代理解除委托”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST  /v1/staking/delegator/undelegate_by_retrieval_account
```


请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //发送者账户
        "memo":"", //交易留言，留言长度限制为中文最多85个字符/英文最多256个字符
        "chain_id":"testnet", //链ID
        "gas":"200000", //交易消耗的gas数量
        "fees":[
            {
                "denom":"NANOGT",
                "amount":"500" //手续费
            }
        ],
        "simulate":false, //是否模拟计算gas
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    },
    "security_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //保险账户的找回账户
    "delegator_address":["vault11556shquf76lunqu7hz05qtd2yda0gm8y0k2k3ku928nmyhgkjhrh95utu3h5c7wr6wuw7q"] //保险账户
}
```
%/accordion%

返回示例：

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgUndelegateByRetrievalAccount", //交易类型
                "value": {
                    "security_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //保险账户的找回账户
                    "delegator_address": "vault11556shquf76lunqu7hz05qtd2yda0gm8y0k2k3ku928nmyhgkjhrh95utu3h5c7wr6wuw7q", //保险账户
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //单位
                    "amount": "500" //手续费
                } 
            ],
            "gas": "200000" //交易消耗的gas
        },
        "nonces": [
            null
        ],
        "signatures": null, //签名
        "memo": "",
        "valid_height":[ //交易有效高度
            "600",
            "900"
    	]
    }
}
```

%/accordion%


###查询委托账户在单个共识账户已解除的委托记录 [命令行](../cli/staking.md#查询委托账户在单个共识账户已解除的委托记录-api)

```
GET /v1/staking/delegator/{delegatorAddr}/{con-account}/undelegations
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|
| con-account |共识账户|

返回示例：

%accordion%json%accordion%
```
{
    "height": "4595", //区块高度
    "result": {
            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //共识账户地址
        "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户地址
        "entries": [
            {
                "balance": "10000000", //解除委托数
                "completion_time": "2020-06-26T13:41:48Z", //解除委托完成时间，即本金到账时间
                "creation_height": "3977", //发起解除委托交易的高度
                "initial_balance": "10000000" //发起解除委托交易时的代币数量，如果解除委托期间，共识账户作恶，委托人的代币也会扣除
            }
        ]
    }
}
```
%/accordion%


###查询委托账户在所有共识账户已经解除的委托记录 [命令行](../cli/staking.md#查询委托账户在所有共识账户已经解除的委托记录-api)

```
GET /v1/staking/delegator/{delegatorAddr}/undelegations
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|

返回示例：

%accordion%json%accordion%
```
{
    "height": "4595", //区块高度
    "result": {
            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //共识账户地址
        "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户地址
        "entries": [
            {
                "balance": "10000000", //解除委托数
                "completion_time": "2020-06-26T13:41:48Z", //解除委托完成时间，即本金到账时间
                "creation_height": "3977", //发起解除委托交易的高度
                "initial_balance": "10000000" //发起解除委托交易时的代币数量，如果解除委托期间，共识账户作恶，委托人的代币也会扣除
            }
        ]
    },
    ...
}
```
%/accordion%


### 查询指定共识账户所有的委托 [命令行](../cli/staking.md#查询指定共识账户所有的委托-api)

```
GET /v1/staking/con-account/{con-account}/delegations
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| con-account |共识账户|

返回示例：

%accordion%json%accordion%

```
{
    "height": "5273", //区块高度
    "result": [
        {
            "balance": "1000000", //委托代币数量
            "con-account_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //共识账户
            "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //委托账户
            "shares": "1000000.000000000000000000" //委托数量
        },
        ...
    ]
}
```
%/accordion%

### 查询指定共识账户所有已解除的委托 [命令行](../cli/staking.md#查询指定共识账户所有已解除的委托-api)

```
GET /v1/staking/con-account/{con-account}/undelegations
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| con-account |共识账户|

返回示例：

%accordion%json%accordion%

```
{
    "height": "5287", //区块高度
    "result": [
        {
            "con-account_address": "gt11la699nscvukjp5kj07nsgq2styuq63zgy8n04srcldx3dal6fkfa22y8a9fz9thuezvnls", //共识账户地址
            "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户
            "entries": [
                {
                    "balance": "10000000", //解除委托数量
                    "completion_time": "2020-06-26T13:41:48Z", //解除委托完成时间，即本金到账时间
                    "creation_height": "3977", //发起解除委托交易的高度
                    "initial_balance": "10000000" //发起解除委托交易时的代币数量，如果解除委托期间，共识账户作恶，委托人的代币也会被扣除
                }
            ]
        }
    ]
}
```
%/accordion%

### 查询权益质押池的信息 [命令行](../cli/staking.md#查询权益质押池的信息-api)

```
GET /v1/staking/pool
```

返回示例：

%accordion%json%accordion%

```
{
    "height": "43433", //区块高度
    "result": {
        "bonded_tokens": "2000012230843453", //已解绑代币数
        "not_bonded_tokens": "2768799795" //未解绑代币数
    }
}
```
%/accordion%


### 查询权益质押的参数 [命令行](../cli/staking.md#查询权益质押的参数-api)

```
GET /v1/staking/parameters
```

返回示例：

%accordion%json%accordion%

```
{
    "height": "5290", //区块高度
    "result": {
        "bond_denom": "NANOGT", //代币单位
        "max_entries": 7, //支持最大事务数字(解除委托事务和重新委托事务)
        "max_pow_rate": 2, //最大忠诚系数
        "max_con-accounts": 100, //最大共识账户数
        "pow_rate": 1, //最小忠诚系数
        "reward_uint_gt": 18, //奖励单位
        "undelegating_time": "1814400000000000" //解除委托完成时间
    }
}
```
%/accordion%



