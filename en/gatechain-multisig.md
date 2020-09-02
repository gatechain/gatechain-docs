# Overview

A multisignature account functions differently from a single signature one and can be categorised into two types:


- Multisignature Standard Account
	- prefix：'gt2'
	- example：'gt21p8qmx5q8h7h3es3wl4x0y4efgme552hk7x5g6ppeelel2v2vvsthxk0ce65gw9mfls9ugp'

- Multisignature Vault Account
  - prefix：'vault2'
  - example：'vault21fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'

### Creating a Multisignature Account

- [Greate a Multisignature Standard Account](./cli/account.md)

- Greate a Multisignature Vault Account
	-  Use the multisig Standard Account created at the first step to create a multisig Vault Account.

		- [Create Multisig  Vault Accounts with  CLI](./cli/vault-account.md)

		- [Create Multisig  Vault Accounts with  API](./API/vault-account.md)
	
	-  Change a multisignature Vault Account's address (vault1->vault2)：
		- Add `pubkey` when creating the multisig Vault Account

		- Execute [Publish multisig account](./cli/account.md)

		- Use the newly created Vault account to transfer out some tokens

### Managing a Multisignature Account 
- Multisig Standard Account
	- Transactions 
	```
	 When sending a normal transaction, a multisignature Normal Account works the same way as a single signature Normal Account. As multisignature accounts need multiple signatures to send a transaction, compound commands are used to finish transaction signing. Use`--generate-only`to generate transaction information pending and let the remaining owners sign,then collect all the signatures and broadcast.
	```
		- Generate transaction info  
		```bash
		gatecli tx send [recipient account] [transfer amount] --from [multisig account] --generate-only --chain-id [chain ID] > [transaction file]
	```
	
		- Use private keys to sign the transaction  
		```bash
	gatecli tx sign [transaction file] --from [signer account] --multisig [multisig account] --chain-id [chain ID] --output-document=[signature  file]
		```
		
		- Collect signatures 
	```bash
	gatecli tx multisign [transaction file] [multisig account] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature  file]
	```
	
		- Broadcast transaction  
 	```bash
	gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
	```
	
	- [Publish multisig Standard Account](./cli/account.md)

- Multisignature Vault Account
```
When sending transactions (delayed transaction, revocable transaction, change clearing height transaction, and clearing transaction), multisignature Vault Accounts work the same way as single signature Vault Accounts. As a multisignature Vault Account needs multiple signatures to send a transaction, compound commands are used to finish transaction's signing. Use`--generate-only`to generate the transaction information pending and let owners sign, then collect all the signatures and broadcast.
```
Take a clearing transaction as an example. Other transactions (delay, revoke, and clearing height change) follow the same procedure:

	- Generate transaction info
	```bash
gatecli vault-account clear [Vault Account 1]([Vault Account 2] [Vault Account 3]...) --from [sender] --generate-only --chain-id [chain ID] > [transaction file]
	```
	
	- Use private keys to sign the transaction
```bash
gatecli tx sign [transaction file] --from [signer account] --multisig [multisig account] --chain-id [chain ID] --output-document=[signature  file]
```

	- Collect signatures
```bash
gatecli tx multisign [transaction file] [multisig account] [signature file1] [signature file2] ... --chain-id [chain ID] > [transaction signature  file]
```

	- Broadcast transaction
	```
	gatecli tx broadcast [transaction signature file] --chain-id [chain ID]
	```
	
	
