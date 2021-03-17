
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
            "proportion":"1",
            "funds_pool":[],
            "withdraw":[],
            "released":null
         },
        {
            "address":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7",
            "proportion":"2",
            "funds_pool":[],
            "withdraw":[],
            "released":null
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
  Withdraw: //已提取代币数
Member:
  ...
```
%/accordion%


### 基金会成员提取代币


```bash
gatecli foundation withdraw [提取代币数] --from [基金会成员地址] --fees [交易手续费] --chain-id [链ID]
```
请求示例：

```bash
gatecli foundation withdraw 10NANOGT --from gt11xf8qc9fz3ysjjal5jkq2gcnpky4swutdwjlzc9uz4qud2w2x0duxs9cgs00ayf2v4kx0s4 --fees 10000000NANOGT --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //交易hash，使用gatecli tx show {hash}查询此交易详细信息
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //交易发送成功
```
%/accordion%



