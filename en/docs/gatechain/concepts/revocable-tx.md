
 
GateChain adopts a dual storage mechanism of Normal Account and Vault Account,For everyday transactions, users can use assets in the Normal Account just like they would on a bitcoin address: a transaction is confirmed upon payment and is irreversible. In the case of a Normal Account's private key loss/theft, the loss is limited to that "daily allowance". Risk is still under control. A Normal Account can be topped up by transfering from the Vault Account and the amount will be received after the revocable delay period that's been set. If a private key theft/loss is found during this period, a "Revoke" request can be initiated from the Vault Account. The transaction will be revoked and moved to the “Retrieval Account”. Funds are safe.
 
 
### Revocable Transaction：
A transaction initiated from a Vault Account is a revocable transaction, allowing assets to be transfered to the “Retrieval Account” instead of the original address. After the revocable period, transaction can not be revoked.[Revocable Transaction](../../developers/cli/revocable-tx.md)


### Revoke: 
When a transaction initiated from a Vault Account is still in the revocable delay period, “revoke” request can be initiated and the assets will be sent to the “Retrieval Account”.[Revoke](../../developers/cli/revocable-tx.md)


 
