### Issue token
```bash
gatecli token issue [token name] [token symbol] [total supply] --gas [amount] --from [ sender  account ] --chain-id [chain ID]
```

Example：

```bash
gatecli token issue TestToken aaa 100000000000000000000000 --gas 300000 --from gc116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* Token symbol must be in upper case, 2-15 characters long. 
* In token creation,  there are another two flags:
* `--mintable`  whether the token can be additionally issued or not
  * `--freezable` whether  the token can be frozen or not

### Issue additional token

```bash
gatecli token mint [token amount ] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli token mint 100000000000aaa-94f --from gc116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* Additional issued tokens must use  parameter  --mintable when issuing. 
* The unit of  token amount is the  onchain  token symbol （aaa-94f）
* The  sum of additional issued token supply and the previously issued token supply should not exceed the default cap （10 billion）

### Burn token

```bash
gatecli token burn [token amount] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token burn 100000000000aaa-94f  --from gc116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* The unit of token amount  is onchain  token symbol （aaa-94f）

### Freeze token

```bash
gatecli token freeze [onchain token symbol] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token freeze aaa-94f --from gc116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to freeze,  parameter --freezable  must be used when issuing.

### Unfreeze token

```bash
gatecli token unfreeze [onchain token symbol] --from [sender account] --chain-id [chain ID] 
```

Example：

```bash
gatecli token unfreeze aaa-94f --from gc116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet
```

Description：

* For token to unfreeze,parameter --freezable must be used when issuing.
* The token’s previous status  must be in  frozen status.

### Query the token information 
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

### Query all tokens
```bash
gatecli token list --chain-id [Chain ID]
```

