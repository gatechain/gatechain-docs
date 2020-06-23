
### 初始化
```bash
gated add-foundation [配置文件路径]
```
请求示例:

```bash
gated add-foundation foundation.json
```

基金会初始配置文件详情：

```file
{
    "members":[
        {
            "address":"gt21twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlsw2cxe3", 
            "proportion":"1"
        },
        {
            "address":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7",
            "proportion":"2"
        }
    ],
    "params":{
        "total_reward":[
            {
                "denom":"NANOGT",
                "amount":"20000000000000000"
            }
        ],
        "max_release_height":"15000000",
        "max_members":"20"
    }
}
```
说明：

* 基金会初始化必须在创世区块初始化时执行
* max_members:代表此基金会支持最大成员数
* members:基金会成员,address(成员账户),proportion(成员占比)


### 查询基金会成员列表 [API](../API/foundation.md#查询基金会成员列表-命令行)

```bash
gatecli foundation members --chain-id [链ID]
```
请求示例：

```bash
gatecli foundation members --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
Member:
  Address:             gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq //基金会成员地址
  Proportion:          1 //基金会成员占比
  FundsPool:           6666666666666666NANOGT //总代币数
  Released:            373777777777.773295955555555556NANOGT //已释放代币数
  Withdraw: //已撤回代币数
Member:
  ...
```
%/accordion%


