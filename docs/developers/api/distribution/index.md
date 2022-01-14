### <span id="设置提取委托收益的账户">设置提取委托收益的账户 [命令行](../../cli/distribution/index.md#设置提取委托收益的账户-api)</span>

###### 此接口用于生成“设置提取委托收益的账户”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/distribution/delegator/{delegatorAddr}/withdraw_address
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|


::: details 请求BODY示例:
    {
        "base_req":{
            "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //发送者账户
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
        "withdraw_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //新提取收益账户
    }
:::

::: details 返回示例:
    {
        "type": "StdTx",
        "value": {
            "msg": [
                {
                    "type": "MsgModifyWithdrawAddress", //交易类型
                    "value": {
                        "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //委托账户
                        "withdraw_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //新提取收益账户
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
:::

说明：

* 保险账户只能将收益和本金提取到本账户，不能单独设置。


### <span id="委托账户从单个共识账户提取部分收益">委托账户从单个共识账户提取部分收益 [命令行](../../cli/distribution/index.md#委托账户从单个共识账户提取部分收益-api)</span>

###### 此接口用于生成“委托账户从单个共识账户提取部分收益”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/distribution/delegator/{delegatorAddr}/{con-account}/rewards
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|
| con-account |共识账户|


::: details 请求BODY示例:
    {
        "base_req":{
            "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //发送者账户
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
        }
    }
:::

::: details 返回示例:
    {
        "type": "StdTx",
        "value": {
            "msg": [
                {
                    "type": "MsgWithdrawDelegationReward", //交易类型
                    "value": {
                        "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //委托账户
                        "con-account_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //共识账户
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
:::


### <span id="委托账户从共识账户提取全部收益">委托账户从共识账户提取全部收益 [命令行](../../cli/distribution/index.md#委托账户从共识账户提取全部收益-api)</span>

###### 此接口用于生成“委托账户从共识账户提取全部收益”的交易体，将此交易体进行本地签名后，调用“发送交易”接口完成交易广播。

```
POST /v1/distribution/delegator/{delegatorAddr}/rewards
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|


::: details 请求BODY示例:
    {
        "base_req":{
            "from":"gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //发送者账户
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
        }
    }
:::

::: details 返回示例:
    {
        "type": "StdTx",
        "value": {
            "msg": [
                {
                    "type": "MsgWithdrawDelegationReward", //交易类型
                    "value": {
                        "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //委托账户
                        "con-account_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93" //共识账户
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
:::


### <span id="查询委托账户在单个共识账户的委托收益">查询委托账户在单个共识账户的委托收益 [命令行](../../cli/distribution/index.md#查询委托账户在单个共识账户的委托收益-api)</span>
```
GET  /v1/distribution/delegator/{delegatorAddr}/{con-account}/rewards
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|
| con-account |共识账户|


::: details 返回示例:
    {
        "height": "0", //区块高度
        "result": [
            {
                "amount": "109475.336424214100340000", //委托收益
                "denom": "NANOGT" //单位
            }
        ]
    }
:::


### <span id="查询委托账户在所有共识账户的委托收益">查询委托账户在所有共识账户的委托收益 [命令行](../../cli/distribution/index.md#查询委托账户在所有共识账户的委托收益-api)</span>

```
GET  /v1/distribution/delegator/{delegatorAddr}/rewards
```
参数:

| 参数名 | 说明 |
| :----| :--- |
| delegatorAddr |委托账户|


::: details 返回示例:
    {
        "height": "0", //区块高度
        "result": {
            "rewards": [
                {
                    "con-account_address": "gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7", //共识账户地址
                    "reward": [
                        {
                            "amount": "105.030990305699919120", //委托收益
                            "denom": "NANOGT" //单位
                        }
                    ]
                },
                ...
            ],
            "total": [
                {
                    "amount": "105.035150523300345120", //委托总收益
                    "denom": "NANOGT" //单位
                }
            ]
        }
    }
:::


### <span id="查询共识账户仍未支付的委托收益">查询共识账户仍未支付的委托收益 [命令行](../../cli/distribution/index.md#查询共识账户仍未支付的委托收益-api)</span>

```
GET /v1/distribution/con-account/{con-account}/outstanding_rewards
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| con-account |共识账户|


::: details 返回示例:
    {
        "height": "5365", //区块高度
        "result": [
            {
                "amount": "12227087603299.775054901980000000", //未支付的委托收益
                "denom": "NANOGT" //单位
            }
        ]
    }
:::


### <span id="查询共识账户的收益">查询共识账户的收益 [命令行](../../cli/distribution/index.md#查询共识账户的收益-api)</span>

```
GET /v1/distribution/con-account/{con-account}/rewards
```

参数:

| 参数名 | 说明 |
| :----| :--- |
| con-account |共识账户|


::: details 返回示例:
    {
        "height": "0", //区块高度
        "result": [
            {
                "amount": "1341380880051.597973936430380729", //手续费及挖矿收入
                "denom": "NANOGT" //单位
            }
        ]
    }
:::


###  <span id="查询分配和基金会参数">查询分配和基金会参数 [命令行](../../cli/distribution/index.md#查询分配和基金会参数-api)</span>

```
GET /v1/distribution/parameters
```

::: details 返回示例:
    {
        "height": "0", //区块高度
        "result": {
            "community_tax": "0.020000000000000000", //社区税比例
            "first_committee_reward": "0.400000000000000000", //第一委员会挖矿奖励比例
            "second_committee_reward": "0.350000000000000000", //第二委员会挖矿奖励比例
            "third_committee_reward": "0.250000000000000000", //第三委员会挖矿奖励比例
            "withdraw_addr_enabled": true 
        }
    }
:::
