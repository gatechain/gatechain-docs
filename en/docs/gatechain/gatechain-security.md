
# Overview

GateChain uses its unique Vault Account technology and clearing system to provide utmost safety possible for users assets at GateChain. 
GateChain ensure that the users of its ecosystem no longer have to worry about private key loss or theft and can seamlessly navigate through the digital era.

- Private key theft： provides a revocable transaction feature, an alarm when is triggered when an abnormal transaction is observed, giving users enough time to revoke the transaction.
- Private key loss：	provides a clearing mechanism that a Vault Account can use to clear and transfer assets out when a private key is missing.


## Definition

### Standard Account

- A Standard Account is a traditional blockchain account, suitable for normal everyday transactions. Changes to the account's state take effect immediately. “Revoke” requests are not supported.

### Vault Account

- A Vault Account is an account with a revocable transaction model. It supports delayed transactions. When creating Vault Account, you need to bind a newly created Standard Account.


### [Account types](../developers/cli/account.md)


## Vault Account

[Operational Details for CLI](../developers/cli/vault-account.md)

[Operational Details for API](../developers/api/vault-account.md)

## Safe Transaction

[Operational Details for CLI](../developers/cli/revocable-tx.md)

[Operational Details for API](../developers/api/revocable-tx.md)
