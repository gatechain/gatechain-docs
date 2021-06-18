
### <span id="查询共识账户列表">查询共识账户列表 [命令行](../cli/con-account.md#查询共识账户列表)</span>

```
GET /v1/staking/con-accounts
```

??? note "返回示例:"

    ```
    {
        "height": "5203", //区块高度
        "result": [
            {
                "commission": {
                    "commission_rates": {
                        "max_change_rate": "0.000000000000000000", //手续费最大变化率
                        "max_rate": "0.000000000000000000", //最大手续费
                        "rate": "0.000000000000000000" //手续费
                    },
                    "update_time": "1970-01-01T00:00:00Z" //手续费更新时间
                },
                "delegator_shares": "11000000.000000000000000000", //共识账户的委托数量
                "description": { //共识账户属性集合
                    "details": "",
                    "identity": "",
                    "moniker": "",
                    "website": ""
                },
                "operator_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //共识账户地址
                "power": "39000934", //共识账户power
                "power_rate": "1.000922559773909156", //共识账户忠诚系数
                "pubkey": "gt1pub1u8s6p73qzlye3d4mljgt3auxhz4shj43w2eu0evladd03rr2auyrhc87aynqpwdz6w", //共识账户公钥
                "status": "online", //共识账户在线状态          
                "tokens": "11000000" //共识账户被委托的总token量
            },
            ...
        ]
    }
    ```
