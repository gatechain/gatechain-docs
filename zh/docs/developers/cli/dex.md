
### 存代币到交易所
```bash
gatecli dex deposit [接收账户] [代币数量]--gas-prices [gas价格]--from [用户的账户] --chain-id [链ID]
```
示例：

```bash
gatecli dex deposit gt11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg 100NANOGT --gas-prices 0.00001NANOGT --from gt11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 将一定数量的代币，从用户的账户转账到交易所账户中。
* 去中心化交易所的任何交易，都需要用户在交易所有足够的余额，所以这是开始交易的第一步。

### 从交易所提取代币到用户账户
```bash
gatecli dex withdraw [账户公钥] [提取的代币数量] [nonce随机数] [签名] [时间戳] [Gas Prices]--from [发起者账户]--chain-id [链ID]
```
示例：

```bash
gatecli dex withdraw gt1pub1addwnpepq23pmf725xuy549spdxj7pzv6vfc0l4440ccpam7t00raejms48vcguukmg 100NANOGT 28c8de782766405ddd26224e1f954e78354e8f1bcccf7d1dd5d14f4be4f22d20d12fe0ec39aab651fb29091c0c0eb474896b0bf3916b7fcc611d0a08a50ed4bd0 1563183005 10NANOGT --from gt11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```
说明：

* 用户提交取代币申请，审批通过后，admin用户执行此命令，完成用户取款动作。

### 为取币交易签名
```bash
gatecli dex sign-withdraw --pubkey [账户公钥] --time [时间戳] --coin [代币数量] --nonce [随机数]
```
示例：

```bash
gatecli dex sign-withdraw --pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --time 1566211704 --coin 10NANOGT --nonce 2 
```

说明:

* 此签名信息用于11.2命令中的签名字段

### 为交易订单签名
```bash
gatecli dex sign-order --order-nonce [订单编号] --order-side [订单类型:sell/buy] --order-pubkey [账户公钥] --order-amount [代币数量] --order-price [订单出价] --time [时间戳]
```
示例：

```bash
gatecli dex sign-order --orderside buy --ordernonce 1 --orderpubkey  gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --orderamount 10NANOGT --orderprice 1aaa-343 --time 1560394691
```

说明：

* 此签名信息用于11.7命令中的maker-sign和taker-sign字段

### 为取消订单签名
```bash
gatecli dex sign-cancelorder --orderid [订单编号] --market [市场名称] --pubkey [账户公钥]
```

说明：
 
* 此签名信息用于取消订单的sign字段

### 查询用户在交易所余额
```bash
gatecli dex query-account [账户] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-account gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk --chain-id testnet
```

说明：

* 根据用户的账户信息，查询在交易所的token余额

### 记录交易信息
```bash
gatecli dex trade --tradeid [交易ID，可凭此ID调用query-trade命令查询交易详情] --market [交易所名称] --maker-orderid [maker订单号] --maker-nonce [maker指定的随机数] --maker-pubkey [maker公钥] --maker-side [maker订单是买还是卖，可选buy/sell] --maker-amount [maker订单想购买代币的数量] --maker-price [maker订单出价] --maker-sign [maker订单的签名] --maker-time [maker订单的创建时间戳] --taker-orderid [taker订单号] --taker-nonce [taker指定的随机数] --taker-pubkey [taker账户的公钥] --taker-side [taker订单是买还是卖，可选buy/sell] --taker-amount [taker订单想出售token的数量] --taker-price [taker订单出价] --taker-sign [taker订单信息的签名] --taker-time [taker订单的创建时间] --price [交易成交价格] --amount [交易成交的代币数量] --maker-add-amount [maker需要增加的代币] --maker-sub-amount [maker需要减少的代币] --maker-fee [maker需要扣除的手续费] --taker-fee [taker需要扣除的手续费] --taker-gas [taker需要扣除的Gas] --from [管理员的账户] --chain-id [链ID]
```

示例：

```bash
gatecli dex trade --tradeid 10000 --market eos_stake --maker-orderid 1 --maker-nonce 1 --maker-pubkey gt1pub1addwnpepqgs7q64h3l0avv7gakkrgyln26qjyucu0wzge4hx8ndl5c9qd02s5zwnu8l --maker-side buy --maker-amount 1000coin174876e800 --maker-price 1NANOGT --maker-sign 9539a65e1981fea2ffe4888563d91ff4ed6c05eb0218bfc59ee1bc5a2fc6de7b40f21f09d93345a848e1e75ec05f50a39e272956e320039cd25cd110d1d8a1c1 --maker-time 1560394691 --taker-orderid 2 --taker-nonce 1 --taker-pubkey gt1pub1addwnpepqfchpz8uks3rav2gsqdnce234fyu2m574xd0esl0kf9u8u39qjdqqr08qtn --taker-side sell --taker-amount 1000coin174876e800 --taker-price 1NANOGT --taker-sign 4e83879e926c67985b9cf5fc02f5919b7e778d48a6087b3cd8e283525b13a0fa07b1174ad3e2666d36e7703f4c62e2339d4ab4760144493e3589dbdcaf52631a --taker-time 1560394691	 --price 1NANOGT --amount 10coin174876e800 --maker-add-amount 1000coin174876e800 --maker-sub-amount 1000NANOGT --maker-fee 1NANOGT	 --taker-fee 1NANOGT	--taker-gas 1NANOGT --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

说明：

* 此例子中，maker下单想购买1000coin174876e800，出价1NANOGT，即以1000NANOGT购买1000coin174876e800
* taker下单想出售1000coin174876e800，出价1NANOGT，即以1000coin174876e800购买1000NANOGT
* 交易所撮合成此交易，最终成交价格为1NANOGT，token数量为1000coin174876e800
* 由admin账户签名，保存此交易信息到链上，并对maker和taker预先存储在交易所的对应token进行扣减和增加
* fee和gas转账到fee用户账户，此交易完成

### 查询交易信息
```bash
gatecli dex query-trade [交易ID] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-trade 10000 --chain-id testnet
```

说明：

* 根据交易所定义的交易ID，查询交易的详细信息

### 设置管理员账户
```bash
gatecli dex set-admin [管理员类型：admin/fee] [账户] --from [发送人账户] --chain-id [链ID]
```
示例：

```bash
gatecli dex set-admin admin gt11r37332mrckrcg2mwm6w38nzfyeg2jgudmfvyw8 --from gt11tyye64g5dnr6vauaaq6dysfpprseuvsufpfv72 --chain-id testnet
```

说明：

* 只有owner用户有权限设置admin和fee用户。

### 查询管理员账户
```bash
gatecli dex query-admin [管理员类型：owner/admin/fee] --chain-id [链ID]
```
示例：

```bash
gatecli dex query-admin admin --chain-id testnet
```
说明：

* 查询owner/admin/fee三种类型的用户的账户


