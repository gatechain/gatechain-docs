# GateChain Command Line Interface（CLI）

> This document  is for testnet version and for professional and institutional users only at this moment.  Continuous development work is underway.
> All transaction related commands  (non-query command) will incur a certain amount of fees.
> you can use--gas-prices or--fees  to add fees for transaction
> 
>Any asset amount in command  is converted to  Integer of the Value by multiplying 1E8.
> Asset amount supports scientific notation, e.g.10E18GT stands for 10.0GT

## 1.Account
### Account type
- Single Signature account
	- Prefix：`gt1`
	- Example：`gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc`
- Multiple signatures account
	- Prefix：`gt2`
	- Example：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`
- Single signature Vault Account
	- Prefix：`vault1`
	- Example：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- Multi- signature Vault Account
	- Prefix：`vault2`
	- Example：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e `

###1.1 Generate a single signature account
```bash
gatecli account create
```

###1.2 Generate a multiple signatures account

```bash
gatecli account create [account] --multisig [account list] --multisig-threshold [minimum effective amount]
```		    
Example：

```bash
gatecli account create gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
```
Description：

* Account list refers to accounts already created.


###1.3 Query account list
```bash
gatecli account list
```

###1.4 Query account info
```bash
gatecli account show [account] --chain-id [chain ID]
```

Example：

```
gatecli account show gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

### 1.5 Change password 
```bash
gatecli account update [account]
```
Example：

```
gatecli account update gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc
```

### 1.6 Delete account
```
gatecli account delete [account]
```
Example：

```
gatecli account delete gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc
```

###1.7 Query account balance
```bash
gatecli account balance [account] --chain-id [Chain ID]
```

Example：

```bash
gatecli account balance gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```
###1.8 Publish multisig account
```bash
gatecli account publish-multisig [to_address]  [pubkey] --chain-id [chain ID]
```

Example：

```bash
gatecli account publish-multisig gt11za9h6j2j98p953hu60mm2a609uj5ujrnget43k gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gt11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr --chain-id testnet
```

###1.8 Query account public key
```bash
gatecli account show-key [addr]
```

Example：

```bash
gatecli account show-key gt11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr
```

## 2. Vault Account
###2.1 Create a Vault Account

```bash
gatecli vault-account create [base account] [Retrieval Account] [delay height] [Clearing Height] [transfer token  amount] 
--from [sender account] 
--chain-id [chain ID]
```

Example：

```bash
gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* Must use a newly generated account as base account and  Retrieval Account,to send a Create Vault Account transaction. 
* If a normal transaction is sent to this account first, this account becomes a normal account and it can not be used to send Vault Account creation transaction.
* Clearing height must be greater than (current height+ delay height)


###2.2 Change clearing height

```bash
gatecli vault-account update-clearing-height [new clearing height] --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account update-clearing-height 100000 --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* New clearing height must be greater than the current height+delay height of the Vault Account
* The height at which this transaction take effect should be less than the old clearing height.


###2.3 Account clearing
```bash
gatecli vault-account clear [Vault Account1]([Vault Account2] [Vault Account3]...) --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* Sender--from，must be a safe account bound to this Vault Account
* All the Vault Account clearing heights should be met

###2.4 Query  account balance
```bash
gatecli vault-account show [ Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account show vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

## 3 Block
###3.1 Query a single block
```bash
gatecli block show [block height] --chain-id [chain ID]
```

Example：

```bash
gatecli block show 10001 --chain-id testnet
```

##4  Transaction
###4.1 Query a single transaction
```bash
gatecli tx show [transaction  Hash] --chain-id [chain ID]
```

Example：

```bash
gatecli tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

###4.2 Query the transaction list based on criteria 
```bash
gatecli tx search 
--tags [<tag1>:<value1>&<tag2>:<value2>] 
--page [page number] 
--limit [entries per page] 
--chain-id [chain ID]
```

Example：

```bash
gatecli tx search --tags 'tx.height:32893&tx.hash:C1EFB5FFA7E0D258838BF3F25BACF48CB1BBD0B1B4C0FD30A95760E536E25826' --page 1 --limit 30 --chain-id testnet
```

###4.3  Send a transaction
```bash
gatecli tx send [recipient account] [transfer token amount ] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* The recipient can be a normal account or a Vault Account

###4.4 Single Signature
```bash
gatecli tx sign [Transaction file ] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature file]
```

Example：

```bash
gatecl tx sign tx.json --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet --output-document=s4_sign.json
```

###4.5 Multiple signatures
```bash
gatecli tx multisign [transaction file] [multisig account ] [signature file1] [signature file 2] ... --chain-id [chain ID] > [transaction signature file]
```

Example：

```bash
gatecli tx multisign tx.json gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
```

###4.6 Broadcast
```bash
gatecli tx broadcast [transaction signature file] --chain-id [chain ID]
```

Example：

```bash
gatecli tx broadcast tx_with_sign.json --chain-id testnet
```

###4.7 Coding	
```bash
gatecli tx encode [file path]
```

Example：

```bash
gatecli tx encode tx_sign.json
```

## 5 Revocable Transaction
###5.1 Send  a Revocable Transaction
```bash
gatecli revocable-tx send [recipient account ] [transfer token amount] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

Description：

* Only Vault Account can send a Revocable Transaction. 
* Any transaction sent from a Vault Account is a Revocable Transaction.

###5.2 Query a single transaction
```bash
gatecli revocable-tx show [transaction Hash] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

###5.3 Query Revocable Transaction list of Vault Account
```bash
gatecli revocable-tx list [Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

###5.4 Revoke a  Revocable Transaction

```bash
gatecli revocable-tx revoke [ transaction Hash] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

##6 Token
###6.1 Issue token
```bash
gatecli token issue [token name] [token symbol] [total supply] --gas [amount] --from [sender  account ] --chain-id [chain ID]
```

Example：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 300000 --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* Token symbol must be in lower case, 2-15 characters long. 
* After ISSUE  is created successfully, you can  query`issue-tx-id`or account balance to verify the result.
* In token creation,  there are another two flags::
  * `--token-mintable`  whether the token can be additionally issued or not
  * `--token-freezable` whether  the token can be frozen or not

###6.2 Query the token issuance information
```bash
gatecli token show-issue [issue-tx-id] --chain-id [chain ID]
```

Example：

```bash
gatecli token show-issue E1C18208EC8BFDC83444AD96E7834EDBAAE50A6745E0DACE822BDB1D86AC2FDA --chain-id testnet
```

Description：

* `issue-tx-id`returned transaction hash for issuing token  （6.1）.

###6.3 Query token information
```bash
gatecli token show [onchain token symbol] --chain-id [chain ID]
```

Example：

```bash
gatecli token show aaa-789 --chain-id testnet
```

Description：

* "onchain token symbol” in this command differs from the “token symbol”parameter when issuing a token.
* For example, when issuing a token, the “token symbol” passed is aaa. To avoid duplicated token names on GateChain, the “onchain token symbol”  recorded at blockchain will be aaa-[a random string] after successfully issuing.

###6.4 Query all tokens
```bash
gatecli token list --chain-id [chain ID]
```


###6.5 Issue additional token
```bash
gatecli token mint [token amount] --from [sender account ] --chain-id [chain ID]
```
Example：

```bash
gatecli token mint 100000000000aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
Description：

* For additionally issued token, parameter –token-mintable  must be used when issuing.
* 代The unit of token amount is onchain token symbol（aaa-94f）.
* The sum of additional token supply and previous supply should not exceed the default cap (10 billion).

###6.6 Burn token 
```bash
gatecli token burn [token amount ] --from [sender account ] --chain-id [chain ID] 
```
Example：

```bash
gatecli token burn 100000000000aaa-94f  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
Description：

* The unit of  token amount is the  onchain  token symbol（aaa-94f）

###6.7 Freeze token
```bash
gatecli token freeze [onchain  token symbol ] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token freeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to freeze,  parameter --token-freezable must be used when issuing.

###6.8 Unfreeze token
```bash
gatecli token unfreeze [onchain  token symbol] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token unfreeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to unfreeze, parameter --token-freezable must be used when issuing. 
* The token’s previous status  must be  frozen status.

##7 Proposal
###7.1 Submit a proposal 
```bash
gatecli proposal submit 
--title="[proposal name]" 
--description="[proposal description]" 
--type="[proposal type]" 
--deposit="[staked token amount]" 
--from [sender account] 
--chain-id [chain ID]
```
Example：

```bash
gatecli gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10aaa-94f" --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###7.2 Query a proposal info
```bash
gatecli proposal show [proposal serial number] --chain-id [chain ID]
```
Example：

```bash
gatecli proposal show 8 --chain-id testnet
```
Description：

* A proposal serial number will receive after submitting a proposal.

###7.3 Staking for proposal
```bash
gatecli proposal deposit [proposal serial number] [token amount] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli proposal deposit 8 10000000gt --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* when the staked tokens meet the requirement, the proposal will go to voting phase.

###7.4 Vote for proposal
```bash
gatecli proposal vote [proposal serial number] [side taking in vote] --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli proposal vote 8 yes --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* you can vote： 
	* yes：agree
	* no：disagree
	* abstain：abstain
	* nowithveto：no objection

##8 Trading pair
###8.1 submit a trading pair proposal
```bash
gatecli trading-pair submit-proposal
--title [proposal name]
--description [proposal description]
--type [proposal type]
--deposit [staked token amount]
--init-price [initialize price]
--base-symbol [base token symbol]
--quote-symbol [quote token symbol]
--voting-period [voting period, in second]
--expire-time [estimated time (block height)]
--from [sender account]
--chain-id [chain ID]
```
Example：

```bash
gatecli trading-pair submit-proposal --title "list trading Proposal" --description "Add trading pair proposal" --type TradingList --deposit "10gt" --init-price 100000 --base-symbol aaa-4db --quote-symbol gt --voting-period 60 --expire-time 50000000  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

###8.2 Publish a trading pair
```bash
gatecli trading-pair publish [trading pair proposal serial number] 
--base-symbol=[base token symbol] 
--quote-symbol=[quote token symbol]
--from [sender account]
--chain-id [chain ID]
```
Example：

```bash
gatecli trading-pair publish 9 --quote-symbol gt --base-symbol aaa-4db --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* The staking and voting procedures for trading pair proposal  is similar to a normal proposal.（see 7.3 and 7.4）。
* Trading pair publishing operation is allowed only when it passes  in voting. 
* After successfully publishing the trading pair, you can use the base token symbol and quote token symbol to check the corresponding trading pair information.（see 8.3）。

###8.3 Query a trading pair
```bash
gatecli trading-pair show [base token symbol]  [quote token symbol]  --chain-id [chain ID] 
```
Example：

```bash
gatecli trading-pair show gt aaa-4db --chain-id testnet
```

##9 Foundation
###9.1 Initialize
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
		"address": "gt11657rsnh95jyvy6qerghe0trkkwp9ut3zskxg26",
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

###9.2 Submit a foundation modification proposal（command line mode）
```bash
gatecli foundation submit-proposal 
--title "[proposal title]" 
--description "[proposal description]" 
--type "[proposal type]" 
--deposit "[staked token amount]" 
--extra "[foundation   modification  proposal's json string]" 
--from [sender account]
--chain-id [chain ID]
```
Example:

```bash
gatecli foundation submit-proposal --title "Test Foundation Proposal" --description "foundation new scheme" --type "Text" --deposit "10000000gt" --extra "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"}]}" --from gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu --chain-id testnet
```
Description：

* Foundation account setup need to submit a proposal. Proposal need to  be confirmed (see 9.4) to change its onchain state (foundation account).

###9.3 Submit a foundation modification proposal（file mode）
```bash
gatecli foundation submit-proposal 
--proposal "[proposal config file path]" 
--from [sender account] 
--chain-id [chain ID]
```
Example:

```bash
gatecli foundation submit-proposal --proposal "proposal.json" --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

proposal.json file content:

```file
{
  "title": "Test Foundation Proposal",
  "description": "foundation new scheme",
  "type": "Foundation",
  "deposit": "10000000gt",
  "extra":"{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
}
```

extra config details (extra is foundation   modification  proposal,its content being json string):

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
Description：

* Extra field must be escaped  json  string
* Extra field content  is detailed config for foundation
	* deal_address is foundation account to operate
	* deal_proportion is this account ‘s stake in foundation
	* deal_type is operation type:insert(newly added),update(update,can only change the stake for this account),delete(delete)

###9.3 Confirm a foundation modification proposal
```bash
gatecli foundation confirm-proposal [proposal serial number] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli foundation confirm-proposal 13 --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
Description：

* When foundation modification proposal is passed, confirmation is needed. Then the change to foundation  will be made accordingly. 
* There is a confirmation period. No confirmation during this period will void the proposal.
* Any one can confirm. But only the first confirmation transaction can succeed. 
* This command is currently for confirming  foundation modification proposal. Other proposal types does not confirm.
*Confirmation period is initializing config, details visit 9.1 confirm_period

###9.4 Query a  foundation info
```bash
gatecli foundation show --chain-id [chain ID]
```
Example：

```bash
gatecli foundation show --chain-id testnet
```

##10 validator node
###10.1 create a validator node
```bash
gatecli validator create
  --amount [bound gt amount]
  --pubkey [public key of validator node]
  --moniker [name of validator node]
  --commission-rate [fee rate]
  --commission-max-rate [maximum fee rate]
  --commission-max-change-rate [maximum fee rate change in a day]
  --min-self-delegation [minimum order amount]
  --gas [gas amount]
  --gas-prices [gas price]
  --from [sender account]
  --chain-id [chain ID]
```
Example:

```bash
gatecli validator create --amount 1000000gt --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --moniker "newValidator" --commission-rate "0.10" --commission-max-rate "0.20" --commission-max-change-rate "0.01" --min-self-delegation "1" --gas "auto" --gas-prices "0.025gt" --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
Description：

* when specify a commission parameter, `commission-max-change-rate` is used to measure`commission-rate`changes. e.g.when commission rate changes from 1% to 2%, though doubled, the change rate is 1%.
* This command is used to start a new node.It will be used  when connecting existin`testnet` or `mainnet`, where the node should be used as a validator.
* When creating a validator node, make sure you have enough `gt`  token at account. 

###10.2 Edit a  validator node
```bash
gatecli validator edit
  --moniker [validator node name]
  --website [website address]
  --commission-rate [fee rate]
  --gas [gas amount]
  --gas-prices [gas price]
  --from [sender account]
  --chain-id [chain ID]
```
Example:

```bash
gatecli validator edit --moniker "newValidator" --website "www.abc.com" --details "To infinity and beyond!" --commission-rate 0.10 --gas auto	--gas-prices 0.025gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
Description：

* `commission-rate` must meet  the following criteria:
	* must be a value between 0 and validator's`commission-max-rate`value
	* one change only per day. And the change range should not exceed validator's `commission-max-change-rate` .

###10.3 Query a validator node
```bash
gatecli validator show [validator node account] --chain-id [chain ID]
```
Example：

```bash
gatecli validator show gt1valoper19weu7ur3rrq7kydldu53hrm755s9gg0fzxc7k7 --chain-id testnet
```

###10.4 Query a validator node list
```bash
gatecli validator list --chain-id [chain ID]
```
## 11 Decentralized exchange
###11.1 Deposit token to Decentralized Exchange
```bash
gatecli dex deposit [token amount]
--gas-prices [gas price]
--from [user account]
--chain-id [chain ID]
```
Example：

```bash
gatecli dex deposit 100gt --gas-prices 0.00001gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
Description：

* Transfer a certain amount of token from user’s account to the exchange account.
* Making any transaction in   Decentralized Exchange requires user having enough account balance at exchange. It is the very first step to trade.

###11.2 Withdraw token  from exchange to user account
```bash
gatecli dex withdraw [account public key] [token amount to withdraw] [nonce random number] [signatures] [timestamp] [Gas Prices]
--from [initiator account]
--chain-id [chain ID]
```
Example：

```bash
gatecli dex withdraw gt1pub1addwnpepq23pmf725xuy549spdxj7pzv6vfc0l4440ccpam7t00raejms48vcguukmg 100gt 2 8c8de782766405ddd26224e1f954e78354e8f1bcccf7d1dd5d14f4be4f22d20d12fe0ec39aab651fb29091c0c0eb474896b0bf3916b7fcc611d0a08a50ed4bd0 1563183005 10gt --from gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```
Description：

*User submits a withdrawal request. If it is approved, admin user will execute this command to finish user withdrawal operation. 

###11.3 Sign a withdrawal transaction
```bash
gatecli dex sign-withdraw
--pubkey [account public key]
--time [timestamp]
--coin [token amount]
--nonce [random number]
```
Example：

```bash
gatecli dex sign-withdraw --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --time 1566211704 --coin 10gt --nonce 2 
```

Description
:

* This signing information is used in signature field at 11.2 command.

### 11.4 Sign a trading order
```bash
gatecli dex sign-order
--order-nonce [order serial number]
--order-side [order type:sell/buy]
--order-pubkey [account public key]
--order-amount [token amount ]
--order-price [order price]
--time [timestamp]
```
Example：

```bash
gatecli dex sign-order --orderside buy --ordernonce 1 --orderpubkey  gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --orderamount 10gt --orderprice 1aaa-343 --time 1560394691
```

Description：

* This signing information is used in maker-sign and taker-sign field at 11.7 command.

### 11.5 sign a cancel order
```bash
gatecli dex sign-cancelorder
--orderid [order serial number ]
--market [market name]
--pubkey [account public key ]
```

Description：
 
* This signing information is used in sign field to cancel order.

### 11.6 Query a user balance at exchange
```bash
gatecli dex query-account [account] --chain-id [chain ID]
```
Example：

```bash
gatecli dex query-account gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

Description：

* Based on user account info to query its token balance at exchange.

### 11.7 Record trading information
```bash
gatecli dex trade
--tradeid [trade  ID，you can use this ID to invoke query-trade command to query transaction details.]
--market [Exchange name]
--maker-orderid [maker orderid]
--maker-nonce [maker specified random number]
--maker-pubkey [maker account public key]
--maker-side [whether the maker order is a bid or ask:buy/sell]
--maker-amount [amount of token the maker order wants to buy ]
--maker-price [price the maker order offers]
--maker-sign [signature of the maker order]
--maker-time [timestamp when the maker order is created]
--taker-orderid [taker order id]
--taker-nonce [taker specified random number]
--taker-pubkey [taker account public key]
--taker-side [whether the take order is a bid or ask:buy/sell]
--taker-amount [amount of token the taker order wants to sell]
--taker-price [price taker order offers]
--taker-sign [signature of the taker order]
--taker-time [time when the taker order is created]
--price [filled price of the trade]
--amount [filled token amount of the trade]
--maker-add-amount [token amount that should be added to maker]
--maker-sub-amount [token amount that should be deducted from maker]
--maker-fee [fee should be deducted from maker]
--taker-fee [fee should be deducted from taker]
--taker-gas [gas should be deducted from taker]
--from [admin account]
--chain-id [chain ID]
```

Example：

```bash
gatecli dex trade --tradeid 10000 --market eos_stake --maker-orderid 1 --maker-nonce 1 --maker-pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --maker-side buy --maker-amount 1000coin174876e800 --maker-price 1gt --maker-sign 9539a65e1981fea2ffe4888563d91ff4ed6c05eb0218bfc59ee1bc5a2fc6de7b40f21f09d93345a848e1e75ec05f50a39e272956e320039cd25cd110d1d8a1c1 --maker-time 1560394691 --taker-orderid 2 --taker-nonce 1 --taker-pubkey gt1pub1addwnpepqfchpz8uks3rav2gsqdnce234fyu2m574xd0esl0kf9u8u39qjdqqr08qtn --taker-side sell --taker-amount 1000coin174876e800 --taker-price 1gt --taker-sign 4e83879e926c67985b9cf5fc02f5919b7e778d48a6087b3cd8e283525b13a0fa07b1174ad3e2666d36e7703f4c62e2339d4ab4760144493e3589dbdcaf52631a --taker-time 1560394691	 --price 1gt--amount 10coin174876e800 --maker-add-amount 1000coin174876e800 --maker-sub-amount 1000gt --maker-fee 1gt	 --taker-fee 1gt	--taker-gas 1gt --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

Description：

* In this example, maker wants to buy 1000coin174876e800 at the price of 1gt. That is, to buy 1000coin174876e800 with 1000gt.
* Taker wants to sell 1000coin174876e800 at the price of 1gt. That is , to buy 1000gt with 1000coin174876e800.
* Exchange matches the trade. The  trade final filled  at price 1gt, and  token amount 1000coin174876e800.
* Admin account sign  and save the trade to blockchain. And add or deduct the corresponding amount for tokens  maker and taker stored at the exchange.
* Fee and gas transfer is made to fee user account. This deal is done.

### 11.8 Query a trade details.
```bash
gatecli dex query-trade [trade ID] --chain-id [chain ID]
```
Example：

```bash
gatecli dex query-trade 10000 --chain-id testnet
```

Description：

* Based on a trade id defined by Exchange to query details for this trade.

### 11.9 Setup an admin account 
```bash
gatecli dex set-admin [admin type：admin/fee] [account] --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli dex set-admin admin gt11r37332mrckrcg2mwm6w38nzfyeg2jgudmfvyw8 --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

Description：

* only owner has the privilege to setup admin and fee users.

### 11.10 Query an admin account 
```bash
gatecli dex query-admin [admin type：owner/admin/fee] --chain-id [chain ID]
```
Example：

```bash
gatecli dex query-admin admin --chain-id testnet
```
Description：

*query account of three user types:owner/admin/fee.


## 12 Start a local RPC service
```bash
gatecli rest-server
```

Description：

* When RPC service starts, command line can not be executed due to  storage lock.

## 13 status
```bash
gatecli status
```

Description：

* Query  a local node service status 

##14 version number
```bash
gatecli version
```

Description：

*Query  a command line version information

## 15 Help
```bash
gatecli [command 1] [command 2] [command 3]... --help
```

Description：

* For more about how to operation with command line, visit help

##Others
###Errors
```bash
Must specify these options: --chain-id  when --trust-node is false
```

If trust this node, please enter  `--trust-node=true` . Otherwise enter `--chain-id`to solve the above error.




