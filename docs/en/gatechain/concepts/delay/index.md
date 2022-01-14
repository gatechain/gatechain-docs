Vault Account that features revoking assets that have been being stolen,When a user creates an Vault account,Decide the delay time of the transaction(calculated in blocks)，The transaction created by the Vault Account is revocable. Users are able to initiate a "Revoke" request within the Revocable Delay Period.

Together with the features of management of Multisig Account management, assets transfer , and the backup recovery of private keys, GateChain has achieved almost 100% asset security. The usage of cold wallet and hardware wallet further consolidates the safety issues, offering a bank-level asset security storage scheme.


### Create a Vault Account 

Vault Account:A new type of account that features revocable transactions. Assets in this type of account are transferred after a preset delay. Suitable for storage and safekeeping of funds not ment for immediate use.[Create a Vault Account](../../../developers/cli/vault-account/index.md)

### Revocable Delay Period

Revocable Delay Period:The time period during which a transaction from a vault account is revocable. During this period (calculated in blocks), recovery of funds is possible by initiating a "revoke" request and have the funds sent to the “Retrieval Account’.[Revoke](../../../developers/cli/revocable-tx/index.md#Revoke-a-Revocable-Transaction)