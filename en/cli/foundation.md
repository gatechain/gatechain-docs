
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


