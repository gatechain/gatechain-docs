###  Send a transaction

```bash
gatecli tx send [recipient account] [transfer token amount ] --from [sender account] --chain-id [chain ID]
```

Example：

```bash
gatecli tx send gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 10NANOGC --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet
```

Description：

* The recipient can be a Standard Account or a Vault Account

### Query a single transaction

```bash
gatecli tx show [transaction  Hash] --chain-id [chain ID]
```

Example：

```bash
gatecli tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### Query the transaction list based on criteria 

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



### Single Signature

```bash
gatecli tx sign [Transaction file ] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature file]
```

Example：

```bash
gatecl tx sign tx.json --from gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek --chain-id testnet --output-document=s4_sign.json
```

### Multiple signatures

```bash
gatecli tx multisign [transaction file] [multisig account ] [signature file1] [signature file 2] ... --chain-id [chain ID] > [transaction signature file]
```

Example：

```bash
gatecli tx multisign tx.json gc115ljwsxqhxvu54ndg95kyxn7f82uj2yk3epx4ek s4_sign.json s3_sign.json --chain-id testnet > tx_with_sign.json
```

### Broadcast

```bash
gatecli tx broadcast [transaction signature file] --chain-id [chain ID]
```

Example：

```bash
gatecli tx broadcast tx_with_sign.json --chain-id testnet
```

### Encoding

```bash
gatecli tx encode [file path]
```

Example：

```bash
gatecli tx encode tx_sign.json
```
