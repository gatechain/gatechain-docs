# GateChain Command Line Interface（CLI）

> 本文档涉及的版本为测试版，后继开发工作在持续进行。目前只针对专业生态机构开放。
> 本文档所有交易指令(非查询命令)都需要支付一定量的交易费。
> 可使用--gas-prices或者--fees 为交易添加交易费
> 
> 命令中所用到的资产数额（Asset amount）均为乘以1E8转换后的正整数值(Integer of the Value)
> 资产数额（Asset amount）支持科学计数法，比如10E18GT就表示10.0GT

## 1. 账户
### 账户类型
- 单签账户
	- 前缀：`gt1`
	- 示例：`gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc`
- 多签账户
	- 前缀：`gt2`
	- 示例：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`
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
gatecli account create gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
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
gatecli account show gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

### 1.5 修改账户密码
```bash
gatecli account update [账户]
```
示例：

```
gatecli account update gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc
```

### 1.6 删除账户
```
gatecli account delete [账户]
```
示例：

```
gatecli account delete gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc
```

###1.7 查询账户余额
```bash
gatecli account balance [账户] --chain-id [链ID]
```

示例：

```bash
gatecli account balance gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```
###1.8 公布多签账户
```bash
gatecli account publish-multisig [to_address]  [pubkey] --chain-id [链ID]
```

示例：

```bash
gatecli account publish-multisig gt11za9h6j2j98p953hu60mm2a609uj5ujrnget43k gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gt11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr --chain-id testnet
```

###1.8 查询账户公钥
```bash
gatecli account show-key [addr]
```

示例：

```bash
gatecli account show-key gt11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr
```

## 2. 保险账户
###2.1 创建保险账户

```bash
gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量] 
--from [发送者账户] 
--chain-id [链ID]
```

示例：

```bash
gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
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
gatecli vault-account update-clearing-height 100000 --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
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
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
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
gatecli vault-account show vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

## 3 区块
###3.1 查询单个区块信息
```bash
gatecli block show [区块高度] --chain-id [链ID]
```

示例：

```bash
gatecli block show 10001 --chain-id testnet
```

###3.2 查询单个区块高度所有验证节点列表
```bash
gatecli block validator-list [区块高度] --chain-id [链ID]
```
示例：

```bash
gatecli block validator-list 2000 --chain-id testnet
```


##4 交易
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
gatecli tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

说明：

* 接受者可以是普通账户或保险账户

###4.4 单签
```bash
gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
```

示例：

```bash
gatecl tx sign tx.json --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet --output-document=s4_sign.json
```

###4.5 多签
```bash
gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
```

示例：

```bash
gatecli tx multisign tx.json gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
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

## 5 可撤回交易
###5.1 发送可撤回交易
```bash
gatecli revocable-tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli revocable-tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
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
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

##6 代币
###6.1 发行代币
```bash
gatecli token issue [代币名称] [代币符号] [发行总量] --gas [数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 300000 --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 代币符号必须全大写，长度2-15个字符
* ISSUE创建成功后，可以通过查询`issue-tx-id`或查询账户余额来验证结果。
* 代币创建时候另有两个flag:
  * `--token-mintable`  此代币是否可以增发
  * `--token-freezable` 此代币是否可以冻结

###6.2 查询代币发行情况
```bash
gatecli token show-issue [issue-tx-id] --chain-id [链ID]
```

示例：

```bash
gatecli token show-issue E1C18208EC8BFDC83444AD96E7834EDBAAE50A6745E0DACE822BDB1D86AC2FDA --chain-id testnet
```

说明：

* `issue-tx-id`为发行代币（6.1）返回的交易Hash。

###6.3 查询代币信息
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

###6.4 查询所有代币
```bash
gatecli token list --chain-id [链ID]
```


###6.5 增发代币
```bash
gatecli token mint [代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli token mint 100000000000aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
说明：

* 增发的代币，在发行时必须使用了参数 --token-mintable
* 代币数量的单位是链上代币符号（aaa-94f）
* 增发的量加上之前发行的量，不能超过默认最大值（100亿）

###6.6 销毁代币
```bash
gatecli token burn [代币数量] --from [发送者账户] --chain-id [链ID] 
```
示例：

```bash
gatecli token burn 100000000000aaa-94f  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
说明：

* 代币数量的单位是链上代币符号（aaa-94f）

###6.7 冻结代币
```bash
gatecli token freeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token freeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 冻结的代币，在发行时必须使用了参数 --token-freezable

###6.8 解冻代币
```bash
gatecli token unfreeze [链上代币符号] --from [发送者账户] --chain-id [链ID] 
```

示例：

```bash
gatecli token unfreeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 解冻的代币，在发行时必须使用了参数 --token-freezable
* 代币之前的状态必须是冻结状态

##7 提案
###7.1 提交提案
```bash
gatecli proposal submit 
--title="[提案名称]" 
--description="[提案描述]" 
--type="[提案类型]" 
--deposit="[质押代币数量]" 
--from [发送者账户] 
--chain-id [链ID]
```
示例：

```bash
gatecli gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10aaa-94f" --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###7.2 为提案质押
```bash
gatecli proposal deposit [提案编号] [代币数量] --from [发送者] --chain-id [链ID]
```

示例：

```bash
gatecli proposal deposit 8 10000000gt --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 当质押代币数量达到要求后，提案进入投票阶段

###7.3 为提案投票
```bash
gatecli proposal vote [提案编号] [投票意见] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli proposal vote 8 yes --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 投票意见分为： 
	* yes：同意
	* no：不同意
	* abstain：弃权
	* nowithveto：不反对

###7.4 查询提案信息
```bash
gatecli proposal show [提案编号] --chain-id [链ID]
```
示例：

```bash
gatecli proposal show 8 --chain-id testnet
```
说明：

* 提交提案之后，可以得到提案编号。


###7.5 查询所有提案	
```bash
gatecli proposal list --chain-id [链ID]
```
示例：

```bash
gatecli proposal list --chain-id testnet
```

###7.6 查询提案的投票票数	
```bash
gatecli proposal tallying [提案编号] --chain-id [链ID]
```
示例：

```bash
gatecli proposal tallying 1 --chain-id testnet
```

###7.7 查询提案的投票详情	
```bash
gatecli proposal voting-show [提案编号] [投票人地址] --chain-id [链ID]
```
示例：

```bash
gatecli proposal voting-show 1 gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###7.8 查询提案的所有投票详情	
```bash
gatecli proposal voting-list [提案编号] --chain-id [链ID]
```
示例：

```bash
gatecli proposal voting-list 1 --chain-id testnet
```

###7.9 查询管理参数：投票、票数、质押	
```bash
gatecli proposal voting-params --chain-id [链ID]
```
```bash
gatecli proposal tallying-params --chain-id [链ID]
```
```bash
gatecli proposal deposit-params --chain-id [链ID]
```

###7.10 查询所有管理参数	
```bash
gatecli proposal params --chain-id [链ID]
```
示例：

```bash
gatecli proposal params --chain-id testnet
```

###7.11 查询提案的提议者账户		
```bash
gatecli proposal proposer [提案编号] --chain-id [链ID]
```
示例：

```bash
gatecli proposal proposer 1 --chain-id testnet
```

###7.12 查询账户在单个提案的质押情况
```bash
gatecli proposal deposit-show [提案编号] [账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli proposal deposit-show 1 gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###7.13 查询提案的所有质押情况	
```bash
gatecli proposal deposit-list [提案编号] --chain-id [链ID]
```
示例：

```bash
gatecli proposal deposit-list 1 --chain-id testnet
```

##8 交易对
###8.1 提交交易对提案
```bash
gatecli trading-pair submit-proposal
--title [提案名称]
--description [提案描述]
--type [提案类型]
--deposit [质押代币数量]
--init-price [初始化价格]
--base-symbol [基准代币符号]
--quote-symbol [报价代币符号]
--voting-period [选举周期秒数]
--expire-time [预期时间（块高度）]
--from [发送者账户]
--chain-id [链ID]
```
示例：

```bash
gatecli trading-pair submit-proposal --title "list trading Proposal" --description "Add trading pair proposal" --type TradingList --deposit "10gt" --init-price 100000 --base-symbol aaa-4db --quote-symbol gt --voting-period 60 --expire-time 50000000  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###8.2 发布交易对
```bash
gatecli trading-pair publish [交易对提案编号] 
--base-symbol=[基准代币符号] 
--quote-symbol=[报价代币符号]
--from [发送者账户]
--chain-id [链ID]
```
示例：

```bash
gatecli trading-pair publish 9 --quote-symbol gt --base-symbol aaa-4db --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

说明：

* 交易对提案的质押和投票过程，与普通提案的操作方法相同（见7.3、7.4）。
* 在投票通过之后，才可以对交易对执行发布动作。
* 交易对发布成功后，可以通过基准代币符号和报价代币符号，来查看对应的交易对信息（见8.3）。

###8.3 查询交易对
```bash
gatecli trading-pair show [基准代币符号] [报价代币符号] --chain-id [链ID] 
```
示例：

```bash
gatecli trading-pair show gt aaa-4db --chain-id testnet
```

##9 基金会
###9.1 初始化
```bash
gated foundation configure [配置文件路径]
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
		"address": "gt11657rsnh95jyvy6qerghe0trkkwp9ut3zskxg26",
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

###9.2 提交修改基金会的提案（命令行模式）
```bash
gatecli foundation submit-proposal 
--title "[提案标题]" 
--description "[提案描述]" 
--type "[提案类型]" 
--deposit "[质押代币数量]" 
--extra "[基金会修改方案的json字符串]" 
--from [发送者账户]
--chain-id [链ID]
```
示例:

```bash
gatecli foundation submit-proposal --title "Test Foundation Proposal" --description "foundation new scheme" --type "Text" --deposit "10000000gt" --extra "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"}]}" --from gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu --chain-id testnet
```
说明：

* 基金会的账户设置需提交提案，待提案通过后，基金会账户需等待确认提案（见9.4），才可以改变链上状态(基金会账户)。

###9.3 提交修改基金会的提案（文件模式）
```bash
gatecli foundation submit-proposal 
--proposal "[提案配置文件路径]" 
--from [发送者账户] 
--chain-id [链ID]
```
示例:

```bash
gatecli foundation submit-proposal --proposal "proposal.json" --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

proposal.json文件内容:

```file
{
  "title": "Test Foundation Proposal",
  "description": "foundation new scheme",
  "type": "Foundation",
  "deposit": "10000000gt",
  "extra":"{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
}
```

extra配置详情(extra为基金会修改方案,其内容是json字符串):

```file
{
	"member_scheme": [{
		"deal_address": "gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk",
		"deal_proportion": "12",
		"deal_type": "insert"
	}, {
		"deal_address": "gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt",
		"deal_proportion": "1",
		"deal_type": "delete"
	}, {
		"deal_address": "gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu",
		"deal_proportion": "1",
		"deal_type": "update"
	}]
}
```
说明：

* Extra字段必须为转义后的json字符串
* Extra字段内容为基金会详细配置
	* deal_address为需操作的基金会账户
	* deal_proportion为该账户在基金会中的权益
	* deal_type为操作类型:insert(新增),update(更新,只能修改该账户的权益),delete(删除)

###9.3 确认修改基金会的提案
```bash
gatecli foundation confirm-proposal [提案编号] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli foundation confirm-proposal 13 --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
说明：

* 基金会修改提案投票通过后，需进行确认。确认后会根据提案内容修改基金会。
* 基金会有确认期限，超过期限未确认，提案作废。
* 任何人均可确认，但只有第一个确认交易会成功。
* 目前此命令只用于确认基金会修改提案，其他类型提案不确认。
* 确认期限为初始化配置,详见9.1中confirm_period

###9.4 查询基金会信息
```bash
gatecli foundation show --chain-id [链ID]
```
示例：

```bash
gatecli foundation show --chain-id testnet
```

##10 验证节点
###10.1 创建验证节点
```bash
gatecli validator create
  --amount [绑定gt数量]
  --pubkey [验证节点公钥]
  --moniker [验证节点名称]
  --commission-rate [手续费率]
  --commission-max-rate [最大手续费率]
  --commission-max-change-rate [每天最大手续费率变化]
  --min-self-delegation [最低委托数量]
  --gas [gas数量]
  --gas-prices [gas价格]
  --from [发送者账户]
  --chain-id [链ID]
```
示例:

```bash
gatecli validator create --amount 1000000gt --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --moniker "newValidator" --commission-rate "0.10" --commission-max-rate "0.20" --commission-max-change-rate "0.01" --min-self-delegation "1" --gas "auto" --gas-prices "0.025gt" --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
说明：

* 指定佣金参数时，`commission-max-change-rate` 被用于衡量`commission-rate`的变化。如: 佣金率 从1%到2%是100%的变化, 但是只有变化率是1%。
* 该命令用于启动一个新节点，连接已存在的`testnet` 或 `mainnet`时，需要将该节点作为validator时使用。
* 创建验证节点时，请保证账户中有足够的 `gt` 代币。

###10.2 编辑验证节点
```bash
gatecli validator edit
  --moniker [验证节点名称]
  --website [网站地址]
  --commission-rate [手续费率]
  --gas [gas数量]
  --gas-prices [gas价格]
  --from [发送者账户]
  --chain-id [链ID]
```
示例:

```bash
gatecli validator edit --moniker "newValidator" --website "www.abc.com" --details "To infinity and beyond!" --commission-rate 0.10 --gas auto	--gas-prices 0.025gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
说明：

* `commission-rate` 必须符合以下要求:
	* 必须介于0到validator的`commission-max-rate`值 之间
	* 每天只能变化一次,且变化范围不能超过 validator 的 `commission-max-change-rate` .

###10.3 查询验证节点信息
```bash
gatecli validator show [验证节点账户] --chain-id [链ID]
```
示例：

```bash
gatecli validator show gt1valoper19weu7ur3rrq7kydldu53hrm755s9gg0fzxc7k7 --chain-id testnet
```

###10.4 查询验证节点列表
```bash
gatecli validator list --chain-id [链ID]
```

## 11 权益质押和分发
###11.1 委托代币到验证节点 
```bash
gatecli staking delegate [验证节点账户] [委托代币数量]  --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegate gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze 100000000GT --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.2 转移委托
```bash
gatecli staking redelegate [原验证节点账户] [目标验证节点账户] [委托代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegate gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze gt1valoper1hur6z8626cz2ksmmgv36e3w68kcw7ttss8qr7h 100000000GT --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.3 从验证节点解绑	
```bash
gatecli staking unbond [验证节点账户] [解绑代币数量] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbond gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze 100000000GT --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.4 验证节点解禁	
```bash
gatecli slashing unjail --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli slashing unjail --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.5 查询验证节点上的委托人
```bash
gatecli staking delegation [委托者地址] [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegation gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.6 查询所有验证节点上的委托人
```bash
gatecli staking delegations [委托者地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.7 查询验证节点所有的委托	
```bash
gatecli staking delegations-to [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking delegations-to gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.8 查询验证节点所有已解除的委托
```bash
gatecli staking unbonding-delegations-from [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations-from gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.9 查询验证节点所有转移委托的记录
```bash
gatecli staking redelegations-from [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations-from gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.10 查询委托人在单个验证节点已经解除的委托记录
```bash
gatecli staking unbonding-delegation [委托者地址] [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegation gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.11 查询委托人在所有验证节点已经解除的委托记录
```bash
gatecli staking unbonding-delegations [委托者地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking unbonding-delegations gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.12 查询委托人在两个验证节点的转移委托记录
```bash
gatecli staking redelegation [委托者地址] [原验证节点账户] [目标验证节点账户] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegation gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze gt1valoper1hur6z8626cz2ksmmgv36e3w68kcw7ttss8qr7h --chain-id testnet
```

###11.13 查询委托人所有的转移委托记录
```bash
gatecli staking redelegations [委托者地址] --chain-id [链ID]
```
示例：

```bash
gatecli staking redelegations gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.14 查询验证节点的签名信息	
```bash
gatecli slashing signing-info [验证节点公钥] --chain-id [链ID]
```
示例：

```bash
gatecli slashing signing-info gt1valconspub1zcjduepq5thyvy8fnw5a2vfa6k6r5qjf7u8dqm702k89la4fxjkppxkfhrdqsgeaw8 --chain-id testnet
```

###11.15 查询惩罚参数	
```bash
gatecli slashing params --chain-id [链ID]
```

###11.16 查询权益质押的参数
```bash
gatecli staking params --chain-id [链ID]
```

###11.17 查询权益质押池的信息		
```bash
gatecli staking pool --chain-id [链ID]
```

###11.18 委托人设置提取收益的账户	
```bash
gatecli distribution set-withdraw-account [提取收益账户] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution set-withdraw-account gt11e9jz38gvtayyh97hhlxk26kh7zttn6hz27j65s --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.19 委托人从验证节点提取收益	
```bash
gatecli distribution withdraw-rewards [验证节点地址] --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-rewards gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.20 委托人从验证节点提取全部收益
```bash
gatecli distribution withdraw-all-rewards --from [发送者账户] --chain-id [链ID]
```
示例：

```bash
gatecli distribution withdraw-all-rewards --from gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh --chain-id testnet
```

###11.21 查询验证节点的手续费收入	
```bash
gatecli distribution commission [验证节点账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution commission gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.22 查询验证节点仍未支付的委托收益
```bash
gatecli distribution validator-outstanding-rewards [验证节点账户地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution validator-outstanding-rewards gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```

###11.23 查询委托者的委托收益
```bash
gatecli distribution rewards [委托者地址] [验证节点地址] --chain-id [链ID]
```
示例：

```bash
gatecli distribution rewards gt11pu9rttkyh9a5fn8hzen9pxun8pgmmwnjuvqjvh gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze --chain-id testnet
```
说明：可选择在某验证节点获得的收益列表

###11.24 查询验证节点的惩罚
```bash
gatecli distribution slashes [验证节点账户地址] [开始块高] [结束块高] --chain-id [链ID]
```
示例：

```bash
gatecli distribution slashes gt1valoper14zc8tkc4sued70xvkapp8qcnzljpxjxw6jmhze 100 1000 --chain-id testnet
```

###11.25 查询分配和基金会参数		
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
gatecli dex deposit gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk 100gt --gas-prices 0.00001gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
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
gatecli dex withdraw gt1pub1addwnpepq23pmf725xuy549spdxj7pzv6vfc0l4440ccpam7t00raejms48vcguukmg 100gt 2 8c8de782766405ddd26224e1f954e78354e8f1bcccf7d1dd5d14f4be4f22d20d12fe0ec39aab651fb29091c0c0eb474896b0bf3916b7fcc611d0a08a50ed4bd0 1563183005 10gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
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
gatecli dex sign-withdraw --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --time 1566211704 --coin 10gt --nonce 2 
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
gatecli dex sign-order --orderside buy --ordernonce 1 --orderpubkey  gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --orderamount 10gt --orderprice 1aaa-343 --time 1560394691
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
gatecli dex query-account gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
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
gatecli dex trade --tradeid 10000 --market eos_stake --maker-orderid 1 --maker-nonce 1 --maker-pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --maker-side buy --maker-amount 1000coin174876e800 --maker-price 1gt --maker-sign 9539a65e1981fea2ffe4888563d91ff4ed6c05eb0218bfc59ee1bc5a2fc6de7b40f21f09d93345a848e1e75ec05f50a39e272956e320039cd25cd110d1d8a1c1 --maker-time 1560394691 --taker-orderid 2 --taker-nonce 1 --taker-pubkey gt1pub1addwnpepqfchpz8uks3rav2gsqdnce234fyu2m574xd0esl0kf9u8u39qjdqqr08qtn --taker-side sell --taker-amount 1000coin174876e800 --taker-price 1gt --taker-sign 4e83879e926c67985b9cf5fc02f5919b7e778d48a6087b3cd8e283525b13a0fa07b1174ad3e2666d36e7703f4c62e2339d4ab4760144493e3589dbdcaf52631a --taker-time 1560394691	 --price 1gt--amount 10coin174876e800 --maker-add-amount 1000coin174876e800 --maker-sub-amount 1000gt --maker-fee 1gt	 --taker-fee 1gt	--taker-gas 1gt --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

说明：

* 此例子中，maker下单想购买1000coin174876e800，出价1gt，即以1000gt购买1000coin174876e800
* taker下单想出售1000coin174876e800，出价1gt，即以1000coin174876e800购买1000gt
* 交易所撮合成此交易，最终成交价格为1gt，token数量为1000coin174876e800
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
gatecli dex set-admin admin gt11r37332mrckrcg2mwm6w38nzfyeg2jgudmfvyw8 --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
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




