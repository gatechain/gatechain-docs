# GateChain Safe Transaction Guarantee

GateChain uses its unique Vault Account technology and clearing system to provide an utmost safety for users assets at GateChain. 

GateChain can provide safety  guarantee respectively to tackle  safety problems in the two typical scenarios:
- Private key theft ：provides revocable transaction, that supports transaction alarm and can give users enough time to revoke the transaction.
- Private key missing：Provide clear transaction, that can use a Vault Account to clear and transfer asset out from an account to which private key is missing.

## Definition

### I Normal Account

- A normal account is a traditional blockchain account, suitable for normal transfer. Changes to account sate takes effect immediately. It does not support “revoke”request. 

### II Vault Account

- Vault account is an account created for allowing revocable transaction. It supports delayed transaction. When creating Vault Account, you need to bind a newly created normal account.

### III Account types
- Single  signature account
	- Prefix：`gt1`
	- Example：`gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc`
- Multi-signature account
	- Prefix：`gt2`
	- Example：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`
- Single  signature Vault Account
	- Prefix：`vault1`
	- Example：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- Multisig Vault Account
	- Prefix：`vault2`
	- Example：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

## Vault Account
### 1. Create a  Vault Account

```bash
gatecli vault-account create [base account] [Retrieval Account] [delay height] [clearing height] [transfer token amount ]--from [sender account ]--chain-id [chain ID]
```

Example：

```bash
gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* Must use a newly created account to send a create Vault Account transaction directly.
* If a normal transaction is sent to this account first, this account becomes a normal account and can not send create Vault Account transaction any more.
* Clearing height must be greater than （current height+delay height）.


### 2. Change clearing height 

```bash
gatecli vault-account update-clearing-height [new clearing height] --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account update-clearing-height 100000 --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* New clearing height must be greater than the current height+delay height of Vault Account. 
* The height at which the transaction takes effect must be less than old clearing height.


### 3. Clear account 
```bash
gatecli vault-account clear [Vault Account 1]([Vault Account 2] [Vault Account 3]...) --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* Sender--from，must be a safe account of this  Vault Account.
* All the  Vault Account clear heights must be met.

### 4. Query account balance
```bash
gatecli vault-account show [Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli vault-account show vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```
## Safe Transaction
### 1. Send a revocable transaction
```bash
gatecli revocable-tx send [recipient account ] [transfer token amount ] --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx send gt11w8c3vj8045la70y6g862jd7tt09u02jhzvp2y2 10gt --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

Description：

* Only Vault Account can send a revocable transaction. 
* Any transaction sent from a Vault Account is a revocable transaction. 

### 2. Query a single transaction 
```bash
gatecli revocable-tx show [transaction Hash] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
```

### 3. Query revocable  transaction list of a  Vault Account 
```bash
gatecli revocable-tx list [Vault Account] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx list vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```

### 4. Revoke a  revocable  transaction


```bash
gatecli revocable-tx revoke [transaction Hash] --from [sender account ] --chain-id [chain ID]
```

Example：

```bash
gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e --chain-id testnet
```
