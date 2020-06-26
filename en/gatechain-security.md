# Overview

GateChain uses its unique Vault Account technology and clearing system to provide utmost safety possible for users assets at GateChain. 
GateChain can provide safety  guarantee in the two typical scenarios:

- Private key theft： provides revocable transaction, that supports transaction alarm and can give users enough time to revoke the transaction.
- Private key missing：	provide clear transaction, that can use a Vault Account to clear and transfer asset out from an account to which private key is missing.


## Definition

##### Standard Account

- A Standard Account is a traditional blockchain account, suitable for normal transfer. Changes to account sate takes effect immediately. It does not support “revoke”request.

##### Vault Account

- Vault account is an account created for allowing revocable transaction. It supports delayed transaction. When creating Vault Account, you need to bind a newly created Standard Account.


##### [Account types](./cli/account.md)

## Vault Account

[Operational Details for CLI](./cli/vault-account.md)

[Operational Details for API](./API/vault-account.md)

## Safe Transaction

[Operational Details for CLI](./cli/revocable-tx.md)

[Operational Details for API](./API/revocable-tx.md)
