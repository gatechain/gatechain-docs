
### Deposit Token to Decentralized Exchange
```bash
gatecli dex deposit [recipient account] [token amount]--gas-prices [gas price]--from [user account] --chain-id [chain ID]
```
Example:

```bash
gatecli dex deposit gt11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100NANOGT --gas-prices 0.00001NANOGT --from gt11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
Description:

* Transfer a certain amount of token from user account to exchange account. 
* Making any transaction at DEX requires user having enough balance at exchange. It is the very first step to start trading.

### Withdraw Token From Exchange To User Account 
```bash
gatecli dex withdraw [account public key] [token amount to withdraw] [nonce random number] [signature] [timestamp] [Gas Prices]--from [initiator  account]--chain-id [chain ID]
```
Example:

```bash
gatecli dex withdraw gt1pub1addwnpepq23pmf725xuy549spdxj7pzv6vfc0l4440ccpam7t00raejms48vcguukmg 100NANOGT 28c8de782766405ddd26224e1f954e78354e8f1bcccf7d1dd5d14f4be4f22d20d12fe0ec39aab651fb29091c0c0eb474896b0bf3916b7fcc611d0a08a50ed4bd0 1563183005 10NANOGT --from gt11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
Description:

* user submits a withdrawal request. When it is approved, admin user executes this command to finish the user’s withdrawal action.

### Sign a Withdrawal Transaction
```bash
gatecli dex sign-withdraw --pubkey [account public key] --time [timestamp] --coin [token amount] --nonce [random number]
```
Example:

```bash
gatecli dex sign-withdraw --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --time 1566211704 --coin 10NANOGT --nonce 2 
```

Description:

* This signature information will be used in signature field in command 11.2

### Sign an Order
```bash
gatecli dex sign-order --order-nonce [order id] --order-side [order type:sell/buy] --order-pubkey [account public key] --order-amount [token amount] --order-price [order price] --time [timestamp]
```
Example:

```bash
gatecli dex sign-order --orderside buy --ordernonce 1 --orderpubkey  gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --orderamount 10NANOGT --orderprice 1aaa-343 --time 1560394691
```

Description:

* This signature information will be used in maker-sign and taker-sign fields in command 11.7

### Sign For Canceling Order
```bash
gatecli dex sign-cancelorder --orderid [order id] --market [market name] --pubkey [account public key]
```

Description:
 
* This signature information will be used in sign field of the cancel order.

### Query User's Balance At Exchange
```bash
gatecli dex query-account [account] --chain-id [chain ID]
```
Example:

```bash
gatecli dex query-account gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

Description:

* based on user account info, you can query its token balance at exchange

### Record Trade Information
```bash
gatecli dex trade --tradeid [trade ID，you can use this id to invoke query-trade command to query trade details.] --market [Exchange name] --maker-orderid [maker order id] --maker-nonce [maker specified random number] --maker-pubkey [makerpublic key] --maker-side [whether the maker order is a bid or a ask, you can choose buy/sell] --maker-amount [token amount  the maker order want to buy] --maker-price [price the maker order offers] --maker-sign [signature of maker order] --maker-time [timestamp the maker order is created] --taker-orderid [taker order id] --taker-nonce [taker specified random number] --taker-pubkey [taker account public key] --taker-side [whether the taker order is a bid or a ask,you can choose buy/sell] --taker-amount [token amount  the taker order want to sell] --taker-price [price the taker order offers] --taker-sign [signature of the taker order] --taker-time [time the taker order is created at] --price [filled price of the trade] --amount [filled token amount of the trade] --maker-add-amount [token amount that should be added to maker] --maker-sub-amount [token amount that should be deducted from maker] --maker-fee [fee should be deducted from maker] --taker-fee [fee should be deducted from taker] --taker-gas [gas should be deducted from taker] --from [admin account] --chain-id [chain ID]
```

Example:

```bash
gatecli dex trade --tradeid 10000 --market eos_stake --maker-orderid 1 --maker-nonce 1 --maker-pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --maker-side buy --maker-amount 1000coin174876e800 --maker-price 1NANOGT --maker-sign 9539a65e1981fea2ffe4888563d91ff4ed6c05eb0218bfc59ee1bc5a2fc6de7b40f21f09d93345a848e1e75ec05f50a39e272956e320039cd25cd110d1d8a1c1 --maker-time 1560394691 --taker-orderid 2 --taker-nonce 1 --taker-pubkey gt1pub1addwnpepqfchpz8uks3rav2gsqdnce234fyu2m574xd0esl0kf9u8u39qjdqqr08qtn --taker-side sell --taker-amount 1000coin174876e800 --taker-price 1NANOGT --taker-sign 4e83879e926c67985b9cf5fc02f5919b7e778d48a6087b3cd8e283525b13a0fa07b1174ad3e2666d36e7703f4c62e2339d4ab4760144493e3589dbdcaf52631a --taker-time 1560394691	 --price 1NANOGT --amount 10coin174876e800 --maker-add-amount 1000coin174876e800 --maker-sub-amount 1000NANOGT --maker-fee 1NANOGT	 --taker-fee 1NANOGT	--taker-gas 1NANOGT --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

Description:

* In this example, maker wants to buy 1000coin174876e800 at the price of 1NANOGT. That is, to buy 1000coin174876e800 with 1000NANOGT.
* Taker wants to sell 1000coin174876e800 at the price of 1NANOGT. That is, to buy 1000NANOGT with 1000coin174876e800.
* Exchange matches the trade. The  trade final filled  at price 1NANOGT, and  token amount 1000coin174876e800.
* Admin account signs  and saves the trade to blockchain. And add or deduct the corresponding amount from tokens  maker and taker stored at the exchange.
* Fee and gas transfer is made to fee user account. This deal is done.

### Query Trade Details
```bash
gatecli dex query-trade [Trade ID] --chain-id [chain ID]
```
Example:

```bash
gatecli dex query-trade 10000 --chain-id testnet
```

Description:

* Based on a trade id defined by an exchange to query details for this trade.

### Setup Admin Accounts
```bash
gatecli dex set-admin [admin type：admin/fee] [account] --from [sender account] --chain-id [chain ID]
```
Example:

```bash
gatecli dex set-admin admin gt11r37332mrckrcg2mwm6w38nzfyeg2jgudmfvyw8 --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

Description:

* only owner has the permission to setup admin and fee users.

### Query Admin Accounts 
```bash
gatecli dex query-admin [admin type：owner/admin/fee] --chain-id [chain ID]
```
Example:

```bash
gatecli dex query-admin admin --chain-id testnet
```
Description:

* query user of three account  types:owner/admin/fee


