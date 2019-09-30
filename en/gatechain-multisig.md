# Multiple signatures 

A multi-sig account is distinct from a single signature account. It has two types:

- Multi- signature  Normal Account
	- prefix：`gt2`
	- example：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`

- Multi- signature Vault Account
  - prefix：`vault2`
	- example：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

## 1. Create a multisig account 

### 1.1 Generate a multisig  normal account

```bash
gatecli account create [account] --multisig [account list] --multisig-threshold [minimum effective amount]
```		    
Example：

```bash
gatecli account create gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
```
Description：

* Account list refers to accounts already created.

### 1.2 Generate a multisig  Vault Account

Use the  multisig  normal account created at 1.1 to create a  multisig  Vault Account.

```bash
	gatecli vault-account create [base account ] [Retrieval Account] [delay height] [clearing height] [transfer token amount ]--from [sender account ]--chain-id [chain ID]
```
	
Example：
```bash
	gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

Description：

* Must use a newly generated account to send a transaction directly to create a Vault Account. 
* If a normal transaction is sent to this account first, this account becomes a normal account and it can not be used to send Vault Account creation transaction.
* Clearing height must be greater than (current height+ delay height)

## 2. Manage multisig account 

### 2.1 Multisig  Normal Account 

#### 2.1.1 Send a normal transaction 
When sending a normal transaction, multisig account uses the same procedures as a single signature account.  As multisig account need multiple signatures to send  a transaction, compound commands are used to finish transaction signing. Use `--generate-only` to generate  transaction information pending signing and  let signers to sign. At last, collect all the signatures  and broadcast.
	
 i. Generate transaction info  
	
	gatecli tx send [recipient account ] [transfer amount ] --from [multisig account ] --generate-only --chain-id [chain ID] > [transaction file]
	
ii.  Use private keys to sign the transaction
  

	gatecli tx sign [transaction file] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature  file]
	
iii. Collect signatures 

	gatecli tx multisign [transaction file] [multisig account ] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature  file]
	
vi.	Broadcast transaction  
 
	gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
	
#### 2.1.2 Publish a normal multisig  transaction
    gatecli tx publish_multi_sig [account  address] [account  public key] [transfer money] --from [sender account ] --chain-id [chain ID]
    
Example：

	gatecli tx publish_multi_sig gt11kzhwcp82pw636mq2quzhq7tad2gk85s55nx59z gt1pub1ytql0csgqgfzd666axrjzq... 1gt --chain-id testnet --from validator

### 2.2 Multisig Vault Account
Transactions sending from a multisig Vault Account (delay  transaction, revoke transaction, change clearing height transaction, and clear transaction) are the same with a single signature  Vault Account.

As a multisig Vault Account needs multiple signatures to send a transaction, compound commands are used to finish transaction signing. Use `--generate-only` to generate  transaction information pending signing and  let signers to sign. At last, collect all the signatures  and broadcast.

Take clear transaction as an example. Other transactions (delay transaction, revoke transaction, and change clearing height transaction) take the same procedures：

i. Generate transaction info

```bash
gatecli tx clear [ Vault Account 1]([ Vault Account 2] [ Vault Account 3]...) --from [sender] --generate-only --chain-id [chain ID] > [transaction file]
```

ii.  Use private keys to sign the transaction

```bash
gatecli tx sign [transaction file] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature  file]
```

iii. Collect signatures

```bash
gatecli tx multisign [transaction file] [multisig account ] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature file]
```

vi. Broadcast transaction

```bash
gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
```

Example：  

	1. Generate transaction info
	gatecli tx send gt11662vk3dg522te4d0lngxkvpkrd544uu0ewn7lj 3gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --generate-only --chain-id testnet > tx
	2. signature I
	gatecl tx sign tx --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet --output-document=s4_sign.json
	3.signature II
	gatecli tx sign tx --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v  --chain-id testnet --output-document=s3_sign.json
	4. Collect signatures
	gatecli tx multisign tx m2 s4_sign.json s3_sign.json --chain-id testnt >tx_with_sign.json
	5. Broadcast transaction
	gatecli tx broadcast tx_with_sign.json
