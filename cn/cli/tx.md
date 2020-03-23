
### 发送交易
```bash
gatecli tx send [接收者账户] [转移代币数量] --from [发送者账户] --chain-id [链ID]
```

示例：

```bash
gatecli tx send gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 10NANOGC --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

说明：

* 接受者可以是普通账户或保险账户

### 查询单笔交易
```bash
gatecli tx show [交易Hash] --chain-id [链ID]
```

示例：

```bash
gatecli tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### 按条件查询交易列表
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

### 单签
```bash
gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
```

示例：

```bash
gatecl tx sign tx.json --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet --output-document=s4_sign.json
```

### 多签
```bash
gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
```

示例：

```bash
gatecli tx multisign tx.json gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
```

### 广播
```bash
gatecli tx broadcast [交易签名文件] --chain-id [链ID]
```

示例：

```bash
gatecli tx broadcast tx_with_sign.json --chain-id testnet
```

### 编码	
```bash
gatecli tx encode [文件路径]
```

示例：

```bash
gatecli tx encode tx_sign.json
```

