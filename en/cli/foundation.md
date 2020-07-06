
### Initialize
```bash
gated add-foundation [config file path]
```
Example:

```bash
gated add-foundation foundation.json
```

Foundation initial config file details：

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
Description：

* Foundation initialization must be executed when genesis block is initializing.
* max_members:indicates maximum members the foundation  allows
* members:foundation member,address(member account),proportion(proportion held by the member)


### Query  Foundation Member List [API](../API/foundation.md#Query  Foundation Member List-command line)

```bash
gatecli foundation members --chain-id [chain ID]
```
Example：

```bash
gatecli foundation members --chain-id testnet
```

%accordion%Return Example：%accordion%

```bash
Member:
  Address:             gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq //address of foundation member
  Proportion:          1 //proportion held by the foundation member
  FundsPool:           6666666666666666NANOGT //total tokens
  Released:            373777777777.773295955555555556NANOGT //released tokens
  Withdraw: //revoked tokens

Member:
  ...
```
%/accordion%

### Foundation members withdraw of tokens 

```bash
gatecli foundation withdraw [amount] --from [foundation members] --chain-id [chain ID]
```
Example：

```bash
gatecli foundation withdraw 10NANOGT --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return Example：%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success
```

