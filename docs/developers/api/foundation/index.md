
### <span id="查询基金会成员列表">查询基金会成员列表 [命令行](../../cli/foundation/index.md#查询基金会成员列表-api)</span>

```
GET  /v1/foundation/members
```
::: details 返回示例:   
    {
        "height": "0", //区块高度
        "result": [
            {
                "address": "gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //基金会成员账户
                "funds_pool": [ 
                    {
                        "amount": "10000000000000000",//总代币数
                        "denom": "NANOGT" //单位
                    }
                ],
                "proportion": "1", //基金会成员占比
                "released": [
                    {
                        "amount": "4666666666.660000000000000000", //已释放代币数
                        "denom": "NANOGT" //单位
                    }
                ],
                "withdraw": [] //已提取代币数
            },
            ...
        ]
    }
:::


### 查询基金会成员信息 

```
GET  /v1/foundation/member/{address}
```

参数:

| 参数名 | 说明 |
| :----| :---- |
| address | 基金会成员地址 |

::: details 返回示例: 
    {
        "height": "0", //区块高度
        "result": {
            "type": "Member",
            "value": {
                "address": "gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq", //基金会成员账户
                "funds_pool": [
                    {
                        "amount": "10000000000000000",//总代币数
                        "denom": "NANOGT" //单位
                    }
                ],
                "proportion": "1", //基金会成员占比
                "released": [
                    {
                        "amount": "11333333333.330000000000000000", //已释放代币数
                        "denom": "NANOGT" //单位
                    }
                ],
                "withdraw": [] //已提取代币数
            }
        }
    }
:::

