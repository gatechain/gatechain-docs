
### 初始化
```bash
gated add-foundation [配置文件路径]
```
示例:

```bash
gated foundation configure foundation.json
```

基金会初始配置文件详情：

```file
{
	"max_members":"20",
	"reward": "0.02",
	"confirm_period":"22800000000000",
	"members": [{
		"address": "gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
		"proportion": "1"
	}]
}
```
说明：

* 基金会初始化必须在创世区块初始化时执行
* max_members:代表此基金会支持最大成员数
* reward:代表此基金会获得的收益比例
* members:基金会成员,address(成员账户),proportion(成员权益)
* confirm_period:基金会修改方案通过后的确认期限,超过该期限则提案作废

### 查询基金会信息
```bash
gatecli foundation members --chain-id [链ID]
```
示例：

```bash
gatecli foundation members --chain-id testnet
```



