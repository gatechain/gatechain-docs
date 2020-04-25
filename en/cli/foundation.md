### Initialize
```bash
gated foundation configure [config file path]
```
Example:

```bash
gated foundation configure foundation.json
```

Foundation initial config file details：

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
Description：

* Foundation initialization must be executed when genesis block is initializing. 
* max_members:indicates maximum members the foundation  allows
* reward:indicates income distribution ratio the foundation gets
* members:foundation member,address(member account),proportion(member stake)
* confirm_period:The period during which foundation  modification proposal that has passed  voting should be confirmed. Otherwise the proposal will be void.

### Query a foundation information

```bash
gatecli foundation members --chain-id [chain ID]
```

Example：

```bash
gatecli foundation members --chain-id testnet
```

