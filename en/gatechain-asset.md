# GateChain Asset Management

User’s assets will be stored at GateChainin in the form of “Token”. Any asset should comply with  Token Management standards of  GateChain.

Assets owner can issue, additionally issue, burn, and freeze/unfreeze  their assets, all of which will incur fees. Fees will be paid in  GateChain Token.

> The testnet may differ with the upcoming mainnet in fee schedule. 。
>
> Before using the asset management introduced in this document, you have to generate or add a key for operation in your Command Line Interface（CLI).


## Issuance 

With Cli or using API, you can issue your own digital asset  at GateChain.

The issuer may fill  information according to requirement first. After being verified, the issuer can publish his own digital asset in the form of Token at GateChain. Related commands as follows.


## Token Management 
### 1. Issue token
```bash
gatecli token issue [token name] [token symbol] [total supply] --gas [amount] --from [ sender  account ] --chain-id [chain ID]
```

Example：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 300000 --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* Token symbol must be in lower case, 2-15 characters long. 
* After ISSUE  is created successfully, you can  query`issue-tx-id`or account balance to verify the result.
*In token creation,  there are another two flags:
  * `--token-mintable`  whether the token can be additionally issued or not
  * `--token-freezable` whether  the token can be frozen or not

### 2. Query the token issuance information 
```bash
gatecli token show-issue [issue-tx-id] --chain-id [chain ID]
```

Example：

```bash
gatecli token show-issue E1C18208EC8BFDC83444AD96E7834EDBAAE50A6745E0DACE822BDB1D86AC2FDA --chain-id testnet
```

Description：

* `issue-tx-id` is returned transaction Hash Hash for issuing the token.

### 3. Query the token information 
```bash
gatecli token show [onchain token symbol] --chain-id [chain ID]
```

Example：

```bash
gatecli token show aaa-789 --chain-id testnet
```

Description：

* “onchain token symbol” in this command differs from the “token symbol”parameter when issuing a token.
* For example, when issuing a token, the “token symbol” passed is aaa. To avoid duplicated token names on GateChain, the “onchain token symbol”  recorded at blockchain will be aaa-[a random string] after successfully issuing.

### 4. Query all tokens
```bash
gatecli token list --chain-id [Chain ID]
```


### 5. Issue additional token
```bash
gatecli token mint [token amount ] --from [sender account] --chain-id [chain ID]
```
Example：

```bash
gatecli token mint 100000000000aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
Description：

* Additional issued tokens must use  parameter  --token-mintable when issuing. 
* The unit of  token amount is the  onchain  token symbol （aaa-94f）
* The  sum of additional issued token supply and the previously issued token supply should not exceed the default cap （10 billion）

### 6. Burn token
```bash
gatecli token burn [token amount] --from [sender account] --chain-id [chain ID] 
```
Example：

```bash
gatecli token burn 100000000000aaa-94f  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```
Description：

* The unit of token amount  is onchain  token symbol （aaa-94f）

### 7. Freeze token
```bash
gatecli token freeze [onchain  token symbol] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token freeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to freeze,  parameter --token-freezable  must be used when issuing.

### 8. Unfreeze token
```bash
gatecli token unfreeze [onchain  token symbol] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token unfreeze aaa-94f --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to unfreeze,parameter --token-freezable must be used when issuing.
* The token’s previous status  must be in  frozen status.

## Trading pair
### 1. Submit a trading pair proposal
```bash
gatecli trading-pair submit-proposal
--title [proposal name]
--description [proposal description]
--type [ proposal type]
--deposit [staked token amount]
--init-price [initialize price]
--base-symbol [base token symbol]
--quote-symbol [quote token symbol]
--voting-period [voting period, in second]
--expire-time [estimated time(block height)]
--from [sender account]
--chain-id [Chain ID]
```
Example：

```bash
gatecli trading-pair submit-proposal --title "list trading Proposal" --description "Add trading pair proposal" --type TradingList --deposit "10gt" --init-price 100000 --base-symbol aaa-4db --quote-symbol gt --voting-period 60 --expire-time 50000000  --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

### 2. Publish trading pair
```bash
gatecli trading-pair publish [Trading pair proposal serial number] 
--base-symbol=[base token symbol] 
--quote-symbol=[quote token symbol]
--from [sender account id]
--chain-id [chain ID]
```
Example：

```bash
gatecli trading-pair publish 9 --quote-symbol gt --base-symbol aaa-4db --from gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* The staking and voting procedures for trading pair proposal  is similar to a normal proposaL.
* Trading pair publishing operation is allowed only when it passes  in voting. 
* After successfully publishing the trading pair, you can use the base token symbol and quote token symbol to check the corresponding trading pair information.

### 3. Query a trading pair
```bash
gatecli trading-pair show [base token symbol] [ quote token symbol] --chain-id [chain ID] 
```
Example：

```bash
gatecli trading-pair show gt aaa-4db --chain-id testnet
```
