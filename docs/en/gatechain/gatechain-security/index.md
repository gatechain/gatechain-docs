
## Overview

GateChain uses its unique Vault Account technology and clearing system to provide utmost safety possible for users assets at GateChain. 
GateChain ensure that the users of its ecosystem no longer have to worry about private key loss or theft and can seamlessly navigate through the digital era.

- Private key theft： provides a revocable transaction feature, an alarm when is triggered when an abnormal transaction is observed, giving users enough time to revoke the transaction.
- Private key loss：	provides a clearing mechanism that a Vault Account can use to clear and transfer assets out when a private key is missing.


## Definition

1. Standard Account

	- A Standard Account is a traditional blockchain account, suitable for normal everyday transactions. Changes to the account's state take effect immediately. “Revoke” requests are not supported.

2. Vault Account

	- A Vault Account is an account with a revocable transaction model. It supports delayed transactions. When creating Vault Account, you need to bind a newly created Standard Account.


3. [Account types](../../developers/cli/account/index.md)


## Vault Account

[Operational Details for CLI](../../developers/cli/vault-account/index.md)

[Operational Details for API](../../developers/api/vault-account/index.md)

## Safe Transaction

[Operational Details for CLI](../../developers/cli/revocable-tx/index.md)

[Operational Details for API](../../developers/api/revocable-tx/index.md)
