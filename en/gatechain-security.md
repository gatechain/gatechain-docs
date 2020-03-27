# Overview

GateChain uses its unique Vault Account technology and clearing system to provide an utmost safety for users assets at GateChain. 

GateChain can provide safety  guarantee respectively to tackle  safety problems in the two typical scenarios:
- Private key theft ：provides revocable transaction, that supports transaction alarm and can give users enough time to revoke the transaction.
- Private key missing：Provide clear transaction, that can use a Vault Account to clear and transfer asset out from an account to which private key is missing.

## Definition

##### Standard Account

- A Standard Account is a traditional blockchain account, suitable for normal transfer. Changes to account sate takes effect immediately. It does not support “revoke”request. 

##### Vault Account

- Vault account is an account created for allowing revocable transaction. It supports delayed transaction. When creating Vault Account, you need to bind a newly created Standard Account.

##### [Account types](./cli/account.md)
## Vault Account
[Details for CLI Usage](./cli/vault-account.md)

[Details for API Usage](./API/vault-account.md)

## Safe Transaction

[Details for CLI Usage](./cli/revocable-tx.md)

[Details for API Usage](./API/revocable-tx.md)