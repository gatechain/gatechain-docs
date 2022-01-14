As an innovative public chain focusing on on-chain asset security, GateChain introduces a number of new concepts. GateChain hopes to help users understand GateChain’s security logic more comprehensively by providing the description of the concepts. Also, for the consideration of transaction security, GateChain innovatively put forward the identification of address type and transaction type to facilitate the user to effectively identify different account type and transfer type, to avoid user mis-operation.

## GateChain Basic Concepts

GateChain is a novel public chain. Its principal research has introduced many novel concepts that form the principle fundamentals for building complete self-consistency in assets safety.

* <span id="na">Normal Account：Storage of assets, suitable for daily use. Assets in this type of account can be sent instantly and transactions are irreversible once confirmed on-chain. Lost private key can not be restored.</span>
* <span id="va">Vault Account：A new type of account that features revocable transactions. Assets in this type of account are transferred after a preset delay. Suitable for storage and safekeeping of funds not ment for immediate use.</span>
* <span id="rdp">Revocable Delay Period：The time period during which a transaction from a vault account is revocable. During this period (calculated in blocks), recovery of funds is possible by initiating  a "revoke" request and have the funds sent to the “Retrieval Account’. </span>
* <span id="ra">Retrieval Account：A predetermined account bound to the Vault Account. When a transaction is revoked, the assets will be transferred to this account. </span>
* <span id="ch">Clearing Height：A future block height. When this block height is reached, the assets in the account are transferred according to the account holders' instructions. </span>
* <span id="revoke">Revoke: When a transaction initiated from a Vault Account is still in the revocable delay period, “revoke” request can be initiated and the assets will be sent to the “Retrieval Account’. </span>
* <span id="rt">Revocable Transaction： A transaction initiated from a Vault Account is a revocable transaction, allowing assets to be transfered to the “Retrieval Account” instead of the original address. After the revocable period, transaction can not be revoked. </span>
* <span id="irt">Irrevocable Transaction：Transactions initiated from Normal Accounts. It is irreversible once it is confirmed by blockchain.</span>

<!--### GateChain Address Types ###

GateChain has two main account types, Normal Account, and Vault Account, with a different identifier at the start of their addresses:

Normal Account：starts with “gt’’. “gt1” indicates a single-signature Normal Account, and “gt2” indicates a multi-signature Normal Account.
Vault Account：starts with “vault’.“vault1” indicates a single-signature Vault Account, and “ vault2” indicates a multi-signature Vault Account,

With GateChain's address identifier mechanism, confirmation requirements can be set and carried out accordingly. If it is from a Vault Account, confirmation is safe only after a revocable delay period. -->

## GateChain Address Types

GateChain has two main account types, Normal Account, and Vault Account, with a different identifier at the start of their addresses.

* Normal Account：starts with "gt". "gt1" indicates a single-signature Normal Account, and "gt2" indicates a multi-signature Normal Account. 
* Vault Account：starts with "vault"."vault1" indicates a single-signature Vault Account, and "vault2" indicates a multi-signature Vault Account.

With GateChain's address identifier mechanism, confirmation requirements can be set and carried out accordingly. If a transaction is initiated from a Vault Account, confirmation is safe only after a revocable delay period.


## GateChain Transaction Types

GateChain has many transaction types. To identify different transaction types efficiently, GateChain provides a transaction type identifier.

Below are the identifiers that different transaction types can start with:

* Irrevocable Payment：“IRREVOCABLEPAY-”
* Revocable Payment：“REVOCABLEPAY-”
* Account Setting： “ACCOUNTSET-”
* Vault Creation：“VAULTCREATE-”
* Revoke Request: “REVOKE-”
* Vault Clearance：“VAULTCLEAR-”
* Untitled： “BASIC-”



