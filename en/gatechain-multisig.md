# Overview

A multi-sig account is distinct from a single signature account. It has two types:

- Multi- signature  Standard Account
	- prefix：`gc2`
	- example：`gc210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`

- Multi- signature Vault Account
  - prefix：`vault2`
  - example：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

## Create a multisig account

- [Generate a multisig  Standard Account](./cli/account.md)
- Generate a multisig  Vault Account
  - Use the  multisig  Standard Account created at the first step to create a  multisig  Vault Account.
    - [Use CLI to Generate a multisig  Vault Account](./cli/vault-account.md)
    - [Use API to Generate a multisig  Vault Account](./API/vault-account.md)
  - Change a multisig  Vault Account's address(vault1->vault2)：
    - Add the `pubkey` parameter when you create the multisig Vault Account
    - Excute the [Publish multisig account](./cli/account.md) command
    - Use the newly created Vault account to transfer out some token

## Manage multisig account 

- Multisig Standard Account 
  
  - Send a normal transaction 
  
    ```
    When sending a normal transaction, multisig account uses the same procedures as a single signature account.  As multisig account need multiple signatures to send  a transaction, compound commands are used to finish transaction signing. Use `--generate-only` to generate  transaction information pending signing and  let signers to sign. At last, collect all the signatures  and broadcast.
    ```
  
    - Generate transaction info
  
      ```
      gatecli tx send [recipient account ] [transfer amount ] --from [multisig account ] --generate-only --chain-id [chain ID] > [transaction file]
      ```
  
    - Use private keys to sign the transaction
  
      ```
      gatecli tx sign [transaction file] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature  file]
      ```
  
    - Collect signatures
  
      ```
      gatecli tx multisign [transaction file] [multisig account ] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature  file]
      ```
  
    - Broadcast transaction
  
      ```
      gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
      ```
  
    - [Publish multisig account](./cli/account.md)
  
- Multisig Vault Account

  ```
  Transactions sending from a multisig Vault Account (delay  transaction, revoke transaction, change clearing height transaction, and clear transaction) are the same with a single signature  Vault Account.
  As a multisig Vault Account needs multiple signatures to send a transaction, compound commands are used to finish transaction signing. Use `--generate-only` to generate  transaction information pending signing and  let signers to sign. At last, collect all the signatures  and broadcast.
  ```

  Take clear transaction as an example. Other transactions (delay transaction, revoke transaction, and change clearing height transaction) take the same procedures：

  - Generate transaction info

    ```
    gatecli tx clear [ Vault Account 1]([ Vault Account 2] [ Vault Account 3]...) --from [sender] --generate-only --chain-id [chain ID] > [transaction file]
    ```

  - Use private keys to sign the transaction

    ```
    gatecli tx sign [transaction file] --from [signer account ] --multisig [multisig account ] --chain-id [chain ID] --output-document=[signature  file]
    ```

  - Collect signatures

    ```
    gatecli tx multisign [transaction file] [multisig account ] [signature  file1] [signature  file2] ... --chain-id [chain ID] > [transaction signature file]
    ```

  - Broadcast transaction

    ```
    gatecli tx broadcast [transaction signature  file] --chain-id [chain ID]
    ```

