# Overview

A multisig account is distinct from a single signature accoun. It has two types:
：

- Multisignature  Standard Account
	-  prefix：'gt2'
	- example：'gt21p8qmx5q8h7h3es3wl4x0y4efgme552hk7x5g6ppeelel2v2vvsthxk0ce65gw9mfls9ugp'

- Multisignature Vault Account
  - prefix：'vault2'
  - example：'vault21fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'

### Create a Multisig Account

- [Greate Multisig  Standard Accounts](./cli/account.md)

- Greate a multisig  Vault Account
	-  Use the  multisig  Standard Account created at the first step to create a  multisig  Vault Account.

		- [Create Multisig  Vault Accounts with  CLI](./cli/vault-account.md)

		- [Create Multisig  Vault Accounts with  API](./API/vault-account.md)
	
	-  Change a multisig  Vault Account's address (vault1->vault2)：
		- Add `pubkey` when creating the multisig Vault Account

		- Execute [Publish multisig account](./cli/account.md)

		- Use the newly created Vault account to transfer out some tokens

### Manage Multisig Account 
- Multisig Standard Account
	- Send normal transactions 
	```
	 When sending a normal transaction, multisig account works the same way as a single signature account. As multisig account need multiple signatures to send  a transaction, compound commands are used to finish transaction signing. Use`--generate-only`to generate  transaction information pending signing and  let signers to sign. And then collect all the signatures  and broadcast.
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

- Multisig Vault Account
```
When sending transactions (delay  transaction, revoke transaction, change clearing height transaction, and clear transaction), multisig Vault Account  work the same way as single signature  Vault Account. As a multisig Vault Account needs multiple signatures to send a transaction, compound commands are used to finish transaction signing. Use`--generate-only`to generate  transaction information pending signing and  let signers to sign. At last, collect all the signatures  and broadcast.
```
Take clear transaction as an example. Other transactions (delay transaction, revoke transaction, and change clearing height transaction) take the same procedures：：

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
gatecli tx multisign [transaction file] [multisig account] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature  file]
```

	- Broadcast transaction
	```
	gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
	```
	
	
