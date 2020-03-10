# GateChain Command Line Interface（CLI）

> 本文档涉及的版本为测试版，后继开发工作在持续进行。目前只针对专业生态机构开放。
> 本文档所有交易指令(非查询命令)都需要支付一定量的交易费。
> 可使用--gas-prices或者--fees 为交易添加交易费
> 
> 命令中所用到的资产数额（Asset amount）均为乘以1E8转换后的正整数值(Integer of the Value)
> 资产数额（Asset amount）支持科学计数法，比如10E9GC就表示1.0GC

## 1. account
### 账户类型
- 单签账户
	- 前缀：`gc1`
	- 示例：`gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88`
- 多签账户
	- 前缀：`gc2`
	- 示例：`gc21kfwurleaskangv45ssmpzs2sprhxjsfdztca9d`
- 保险单签账户
	- 前缀：`vault1`
	- 示例：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- 保险多签账户
	- 前缀：`vault2`
	- 示例：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e `

###1.1 生成单签账户
```bash
gatecli account create
```

###1.2 生成多签账户

```bash
gatecli account create [账户] --multisig [账户列表] --multisig-threshold [最小有效数量]
```		    
示例：

```bash
gatecli account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --multisig gc110nxr6.....,gc113454xdr..... --multisig-threshold 2
```
说明：

* 账户列表是指已创建的的账户.


###1.3 查询账户列表
```bash
gatecli account list
```

###1.4 查询账户信息
```bash
gatecli account show [账户] --chain-id [链ID]
```

示例：

```
gatecli account show gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 1.5 修改账户密码
```bash
gatecli account update [name]
```
示例：

```
gatecli account update 1583472684
```

### 1.6 删除账户
```
gatecli account delete [name]
```
示例：

```
gatecli account delete 1583472684
```

###1.7 查询账户余额
```bash
gatecli account balance [账户] --chain-id [链ID]
```

示例：

```bash
gatecli account balance gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###1.8 查询账户公钥
```bash
gatecli account show-key [name]
```

示例：

```bash
gatecli account show-key 1583472684
```

###1.9 公布多签账户
```bash
gatecli account publish-multisig [账户] [公钥] --chain-id [链ID]
```

示例：

```bash
gatecli account publish-multisig gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gc11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr --chain-id testnet
```


## 2. vault-account
###2.1 创建保险账户

```bash
gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量] 
--from [发送者账户] 
--chain-id [链ID]
```

示例：

```bash
gatecli vault-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx 38 300 30gc --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 必须使用新生成的账户作为基础账户，用来发送创建保险账户交易，
* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
* 清算高度需要大于（当前高度+延迟生效高度）


###2.2 修改清算高度 

```bash
gatecli vault-account update-clearing-height [新的清算高度] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account update-clearing-height 100000 --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

说明：

* 新的清算高度必须大于区块链当前高度 + 保险账户延迟生效高度
* 本交易的生效高度要小于旧的清算高度


###2.3 账户清算
```bash
gatecli vault-account clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gc11t83m7mngzjzef9dke2avjfe0ws3933kplgs4wx --chain-id testnet
```

说明：

* 发送者--from，必须是此保险账户的安全账户
* 所有的保险账户的清算高度都必须达到

###2.4 查询账户余额
```bash
gatecli vault-account show [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli vault-account show vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

## 3 block
###3.1 查询单个区块信息
```bash
gatecli block show [区块高度] --chain-id [链ID]
```

示例：

```bash
gatecli block show 10001 --chain-id testnet
```


##4 tx
###4.1 查询单笔交易
```bash
gatecli tx show [交易Hash] --chain-id [链ID]
```

示例：

```bash
gatecli tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

###4.2 按条件查询交易列表
```bash
gatecli tx search 
--tags [<tag1>:<value1>&<tag2>:<value2>] 
--page [页码] 
--limit [每页记录数] 
--chain-id [链ID]
```

示例：

```bash
gatecli tx search --tags 'tx.height:32893&tx.hash:C1EFB5FFA7E0D258838BF3F25BACF48CB1BBD0B1B4C0FD30A95760E536E25826' --page 1 --limit 30 --chain-id testnet
```

###4.3 发送交易
```bash
gatecli tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli tx send gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 10gc --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

说明：

* 接受者可以是普通账户或保险账户

###4.4 单签
```bash
gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
```

示例：

```bash
gatecl tx sign tx.json --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet --output-document=s4_sign.json
```

###4.5 多签
```bash
gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
```

示例：

```bash
gatecli tx multisign tx.json gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
```

###4.6 广播
```bash
gatecli tx broadcast [交易签名文件] --chain-id [链ID]
```

示例：

```bash
gatecli tx broadcast tx_with_sign.json --chain-id testnet
```

###4.7 编码	
```bash
gatecli tx encode [文件路径]
```

示例：

```bash
gatecli tx encode tx_sign.json
```

## 5 revocable-tx
###5.1 发送可撤回交易
```bash
gatecli revocable-tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx send gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek 10gc --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

说明：

* 只有保险账户才可以发送可撤回交易。
* 保险账户发送的所有交易都是可撤回交易。

###5.2 查询单笔交易
```bash
gatecli revocable-tx show [交易Hash] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

###5.3 查询保险账户的可撤回交易列表
```bash
gatecli revocable-tx list [保险账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

###5.4 撤回可撤回交易

```bash
gatecli revocable-tx revoke [交易Hash] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49 --chain-id testnet
```

##6 token
###6.1 发行代币
```bash
gatecli token issue [代币名称] [代币符号] [发行总量] --gas [数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 9000000 --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 代币符号必须全大写，长度2-15个字符
* ISSUE创建成功后，可以通过查询`issue-tx-id`或查询账户余额来验证结果。
* 代币创建时候另有两个flag:
  * `--mintable`  此代币是否可以增发
  * `--freezable` 此代币是否可以冻结


###6.2 查询代币信息
```bash
gatecli token show [链上代币符号] --chain-id [链ID]
```

示例：

```bash
gatecli token show aaa-789 --chain-id testnet
```

说明：

* 此命令中的”链上代币符号“，不同于发行代币时的参数“代币符号”。
* 例如用户发行代币，传入的“代币符号”为aaa。为了避免链上存在重名的代币，发行成功后，区块链中记载的“链上代币符号”为aaa-[随机字符串]。

###6.3 查询所有代币
```bash
gatecli token list --chain-id [链ID]
```


###6.4 增发代币
```bash
gatecli token mint [代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli token mint 100000000000aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 增发的代币，在发行时必须使用了参数 --mintable
* 代币数量的单位是链上代币符号（aaa-94f）
* 增发的量加上之前发行的量，不能超过默认最大值（100亿）

###6.5 销毁代币
```bash
gatecli token burn [代币数量] --from [发送者账户] --chain-id [链ID] 
```
示例：

```bash
gatecli token burn 100000000000aaa-94f  --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 代币数量的单位是链上代币符号（aaa-94f）

###6.6 冻结代币
```bash
gatecli token freeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token freeze aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 冻结的代币，在发行时必须使用了参数 --freezable

###6.7 解冻代币
```bash
gatecli token unfreeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token unfreeze aaa-94f --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

说明：

* 解冻的代币，在发行时必须使用了参数 --freezable
* 代币之前的状态必须是冻结状态

##7 trading-pair
###7.1 提交交易对提案
```bash
gatecli trading-pair submit [基准代币符号] [报价代币符号] [初始价格] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli trading-pair submit-proposal YY-9B3 GC 100 --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###7.2 查询交易对
```bash
gatecli trading-pair show [基准代币符号] [报价代币符号] --chain-id [链ID] 
```
示例：

```bash
gatecli trading-pair show YY-9B3 GC --chain-id testnet
```

##8 foundation
###8.1 初始化
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

###8.2 查询基金会信息
```bash
gatecli foundation members --chain-id [链ID]
```
示例：

```bash
gatecli foundation members --chain-id testnet
```

##9 consensus-account
###9.1 创建共识账户
```bash
gatecli con-account create [账户地址] --chain-id [链ID]
```
示例:

```bash
gatecli con-account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：
* 创建共识账户时，请保证账户中有足够的 `gc` 代币。

###9.2 上线共识账户
```bash
gatecli con-account online 
--from [发送者账户] 
--pubkey [发送者账户公钥] 
--moniker [名称] 
--commission-max-change-rate [每天最大手续费率变化]
--commission-max-rate [最大手续费率]
--commission-rate [手续费率]
--chain-id [链ID] 
```
示例:

```bash
gatecli con-account online --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 
--pubkey gc1pub1addwnpepqty4t2h3depgqnp2jfm4kqrmuwauawyrate0cpcduzpqucgujhtugtpazyw --moniker newcon-account --commission-max-change-rate "0.01" --commission-max-rate "0.01" --commission-rate "0.01" --chain-id testnet
```
说明：

* `commission-rate` 必须符合以下要求:
	* 必须介于0到共识账户的`commission-max-rate`值 之间
	* 每天只能变化一次,且变化范围不能超过 共识账户 的 `commission-max-change-rate` .

###9.3 下线共识账户
```bash
gatecli con-account offline --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account offline --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###9.4 查询共识账户信息
```bash
gatecli con-account show [共识账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account show gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###9.5 查询未上线共识账户信息
```bash
gatecli con-account show-key [未上线共识账户] --chain-id [链ID]
```
示例：

```bash
gatecli con-account show gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

###9.6 查询本地共识账户列表（待定）
```bash
gatecli con-account list-local --chain-id [链ID]
```
示例：

```bash
gatecli con-account list-local --chain-id testnet
```

## 10 staking
###10.1 委托代币到共识账户 
```bash
gatecli staking delegate [共识账户地址] [委托代币数量]  --from [发送者账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegate gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100000000GC --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.2 查询某账户在某共识账户的委托信息
```bash
gatecli staking delegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###10.3 查询某账户在所有共识账户的委托信息
```bash
gatecli staking delegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.4 转移委托
```bash
gatecli staking redelegate [原共识账户] [目标共识账户] [委托代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegate gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 100000000GC --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.5 查询某账户所有的转移委托记录
```bash
gatecli staking redelegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.6 查询某账户在两个共识账户之间的转移委托记录
```bash
gatecli staking redelegation [委托账户地址] [原共识账户] [目标共识账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 --chain-id testnet
```

###10.7 从某共识账户解绑	
```bash
gatecli staking unbond [共识账户] [解绑代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbond gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 100000000GC --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.8 查询某账户在某共识账户已解除的委托记录
```bash
gatecli staking unbonding-delegation [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegation gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11d0yarljl7zyksc3r9gp95saqnhjdlrtrefcwg8 --chain-id testnet
```

###10.9 查询某账户在所有共识账户已经解除的委托记录
```bash
gatecli staking unbonding-delegations [委托账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###10.10 查询某共识账户所有的委托	
```bash
gatecli staking delegations-to [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations-to gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###10.11 查询某共识账户所有转移委托的记录
```bash
gatecli staking redelegations-from [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations-from gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###10.12 查询某共识账户所有已解除的委托
```bash
gatecli staking unbonding-delegations-from [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations-from gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```
###10.13 查询权益质押池的信息		
```bash
gatecli staking pool --chain-id [链ID]
```

###10.14 查询权益质押的参数
```bash
gatecli staking params --chain-id [链ID]
```


##11 distribution
###11.1 委托人设置提取收益的账户	
```bash
gatecli distribution set-withdraw-account [提取收益账户] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution set-withdraw-account gc11kfwurleaskangv45ssmpzs2sprhxjsfdlqgqjs --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###11.2 某账户从某共识账户提取部分收益
```bash
gatecli distribution withdraw-rewards [共识账户地址] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###11.3 某账户从某共识账户提取全部收益
```bash
gatecli distribution withdraw-all-rewards --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-all-rewards --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

###11.4 查询账户的委托收益
```bash
gatecli distribution rewards [委托账户地址] [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution rewards gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```
说明：可选择在某验证节点获得的收益列表


###11.5 查询某共识账户仍未支付的委托收益
```bash
gatecli distribution validator-outstanding-rewards [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution validator-outstanding-rewards gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###11.6 查询某共识账户的手续费收入
```bash
gatecli distribution commission [共识账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution commission gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg --chain-id testnet
```

###11.7 查询某共识账户的惩罚
```bash
gatecli distribution slashes [共识账户地址] [开始块高] [结束块高] --chain-id [链ID]
```
示例：

```bash
gatecli distribution slashes gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100 1000 --chain-id testnet
```	

###11.8 查询分配和基金会参数		
```bash
gatecli distribution params --chain-id [链ID]
```

## 12 去中心化交易所
###12.1 存代币到交易所
```bash
gatecli dex deposit [接收账户] [代币数量]
--gas-prices [gas价格]
--from [用户的账户]
--chain-id [链ID]
```
示例：

```bash
gatecli dex deposit gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100gc --gas-prices 0.00001gc --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 将一定数量的代币，从用户的账户转账到交易所账户中。
* 去中心化交易所的任何交易，都需要用户在交易所有足够的余额，所以这是开始交易的第一步。

###12.2 从交易所提取代币到用户账户
```bash
gatecli dex withdraw [账户公钥] [提取的代币数量] [nonce随机数] [签名] [时间戳] [Gas Prices]
--from [发起者账户]
--chain-id [链ID]
```
示例：

```bash
gatecli dex withdraw gc1pub1addwnpepq23pmf725xuy549spdxj7pzv6vfc0l4440ccpam7t00raejms48vcguukmg 100gc 2 8c8de782766405ddd26224e1f954e78354e8f1bcccf7d1dd5d14f4be4f22d20d12fe0ec39aab651fb29091c0c0eb474896b0bf3916b7fcc611d0a08a50ed4bd0 1563183005 10gc --from gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 用户提交取代币申请，审批通过后，admin用户执行此命令，完成用户取款动作。

###12.3 为取币交易签名
```bash
gatecli dex sign-withdraw
--pubkey [账户公钥]
--time [时间戳]
--coin [代币数量]
--nonce [随机数]
```
示例：

```bash
gatecli dex sign-withdraw --pubkey gc1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --time 1566211704 --coin 10gc --nonce 2 
```

说明:

* 此签名信息用于11.2命令中的签名字段

### 12.4 为交易订单签名
```bash
gatecli dex sign-order
--order-nonce [订单编号]
--order-side [订单类型:sell/buy]
--order-pubkey [账户公钥]
--order-amount [代币数量]
--order-price [订单出价]
--time [时间戳]
```
示例：

```bash
gatecli dex sign-order --orderside buy --ordernonce 1 --orderpubkey  gc1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --orderamount 10gc --orderprice 1aaa-343 --time 1560394691
```

说明：

* 此签名信息用于11.7命令中的maker-sign和taker-sign字段

### 12.5 为取消订单签名
```bash
gatecli dex sign-cancelorder
--orderid [订单编号]
--market [市场名称]
--pubkey [账户公钥]
```

说明：
 
* 此签名信息用于取消订单的sign字段

### 12.6 查询用户在交易所余额
```bash
gatecli dex query-account [账户] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-account gc11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

说明：

* 根据用户的账户信息，查询在交易所的token余额

### 12.7 记录交易信息
```bash
gatecli dex trade
--tradeid [交易ID，可凭此ID调用query-trade命令查询交易详情]
--market [交易所名称]
--maker-orderid [maker订单号]
--maker-nonce [maker指定的随机数]
--maker-pubkey [maker公钥]
--maker-side [maker订单是买还是卖，可选buy/sell]
--maker-amount [maker订单想购买代币的数量]
--maker-price [maker订单出价]
--maker-sign [maker订单的签名]
--maker-time [maker订单的创建时间戳]
--taker-orderid [taker订单号]
--taker-nonce [taker指定的随机数]
--taker-pubkey [taker账户的公钥]
--taker-side [taker订单是买还是卖，可选buy/sell]
--taker-amount [taker订单想出售token的数量]
--taker-price [taker订单出价]
--taker-sign [taker订单信息的签名]
--taker-time [taker订单的创建时间]
--price [交易成交价格]
--amount [交易成交的代币数量]
--maker-add-amount [maker需要增加的代币]
--maker-sub-amount [maker需要减少的代币]
--maker-fee [maker需要扣除的手续费]
--taker-fee [taker需要扣除的手续费]
--taker-gas [taker需要扣除的Gas]
--from [管理员的账户]
--chain-id [链ID]
```

示例：

```bash
gatecli dex trade --tradeid 10000 --market eos_stake --maker-orderid 1 --maker-nonce 1 --maker-pubkey gc1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --maker-side buy --maker-amount 1000coin174876e800 --maker-price 1gc --maker-sign 9539a65e1981fea2ffe4888563d91ff4ed6c05eb0218bfc59ee1bc5a2fc6de7b40f21f09d93345a848e1e75ec05f50a39e272956e320039cd25cd110d1d8a1c1 --maker-time 1560394691 --taker-orderid 2 --taker-nonce 1 --taker-pubkey gc1pub1addwnpepqfchpz8uks3rav2gsqdnce234fyu2m574xd0esl0kf9u8u39qjdqqr08qtn --taker-side sell --taker-amount 1000coin174876e800 --taker-price 1gc --taker-sign 4e83879e926c67985b9cf5fc02f5919b7e778d48a6087b3cd8e283525b13a0fa07b1174ad3e2666d36e7703f4c62e2339d4ab4760144493e3589dbdcaf52631a --taker-time 1560394691	 --price 1gc --amount 10coin174876e800 --maker-add-amount 1000coin174876e800 --maker-sub-amount 1000gc --maker-fee 1gc	 --taker-fee 1gc	--taker-gas 1gc --from gc11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

说明：

* 此例子中，maker下单想购买1000coin174876e800，出价1gc，即以1000gc购买1000coin174876e800
* taker下单想出售1000coin174876e800，出价1gc，即以1000coin174876e800购买1000gc
* 交易所撮合成此交易，最终成交价格为1gc，token数量为1000coin174876e800
* 由admin账户签名，保存此交易信息到链上，并对maker和taker预先存储在交易所的对应token进行扣减和增加
* fee和gas转账到fee用户账户，此交易完成

### 12.8 查询交易信息
```bash
gatecli dex query-trade [交易ID] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-trade 10000 --chain-id testnet
```

说明：

* 根据交易所定义的交易ID，查询交易的详细信息

### 12.9 设置管理员账户
```bash
gatecli dex set-admin [管理员类型：admin/fee] [账户] --from [发送人账户] --chain-id [链ID]
```
示例：

```bash
gatecli dex set-admin admin gc11r37332mrckrcg2mwm6w38nzfyeg2jgudmfvyw8 --from gc11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

说明：

* 只有owner用户有权限设置admin和fee用户。

### 12.10 查询管理员账户
```bash
gatecli dex query-admin [管理员类型：owner/admin/fee] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-admin admin --chain-id testnet
```
说明：

* 查询owner/admin/fee三种类型的用户的账户


## 13 启动本地RPC服务
```bash
gatecli rest-server
```

说明：

* RPC服务启动后，由于存储加锁，所以无法执行命令行指令。

## 14 状态
```bash
gatecli status
```

说明：

* 查询本地节点服务状态信息

##15 版本号
```bash
gatecli version
```

说明：

* 查询命令行版本信息

## 16 帮助
```bash
gatecli [命令1] [命令2] [命令3]... --help
```

说明：

* 如果想得到更多关于命令行操作说明，请使用help

##其他
###报错处理
```bash
Must specify these options: --chain-id  when --trust-node is false
```

如果信任该节点请输入 `--trust-node=true`，否则需要输入`--chain-id`，解决上述错误。




