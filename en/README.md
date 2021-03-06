# Overview

Welcome to GateChain's Documents.

The documents will give you a summary of GateChain, its basic concepts, features, and functions. Tutorials and technical information are provided from beginner to professional, including Command Line Interface (CLI) and API walkthroughs.

The documents are updated regularly alongside GateChain's development. Follow us and stay tuned!    


## Ecosystem

<!--The creation of blockchain technology brought up many advantages in a variety of industries, providing increased security in trustless environments. This type of safety, however, had some disadvantages such as:
~Limited efficiency;
~Consensus Attacks;
~Private Key Loss/Theft;
~Immutability, a double edged sword if not implemented carefully.-->

GateChain sets out to solve the very interesting and complex problems that emerged alongside blockchains, without compromising any decentralized aspects or advantages. The ecosystem comprises of the GateChain mainnet, GateChain DEX, GT, wallets, and more; forming an enterprise-grade decentralized ecosystem that can store, issue and trade digital assets efficiently and securely.

The main features of GateChain's ecosystem can be listed as follows:

1. **Transfers/Payments**：Using a wallet or client-side Apps, users can send and receive GateTokens GT, as well as popular onchain assets.
2. **Asset Issuance**：Users can issue their own tokens to digitalize and manage their assets. For more details, visit [Asset Management](./gatechain-asset.md).
3. **Multi-Signature**: Multiple individuals can share ownership of an account, and customize its management, suitable for both enterprise and family demands. For more details, visit [Multi-signature](./gatechain-multisig.md).
4. **Asset Safe Storage**: With a uniquely designed vault account and a clearing mechanism, an account can be 100% secure with revoking/clearing functions countering abnormal transactions. For more details, visit [Transaction Protection](./gatechain-security.md).
5. **PoS Consensus Mechanism**: GT works as a stable incentive for users participating in staking, ensuring the underlying health and stability of the ecosystem.[PoS Mining](./gatechain-pos.md).

### GateChain Blockchain

<!--GateChain is a novel public chain of the next generation centered on asset safety and decentralized exchange. With a unique onchain vault account and clearing system, it offers creative solutions to  core problems  in the industry, from asset theft and private key missing, to decentralized trading and cross-chain transfer.  Unlike traditional blockchains, such as Bitcoin and Ethereum, GateChain has many novel features especially designed for asset safety, like  Normal Account, Vault Account, Clearing Height, Revocable Delay Period, Address Type,  and Transaction Type, many of which  are  introduced to the industry for the first time. For these new terms, we will give detailed explanation later.-->

GateChain is a novel next-generation public blockchain, focused on onchain asset safety and decentralized trading. With a uniquely designed Vault Account and its functions for handling abnormal transactions, GateChain presents a never before seen clearing mechanism, tackling the challenging problems of asset theft and private key loss. Decentralized trading and cross-chain transfers will also be supported alongside other core features. GateChain focuses on on-chain asset safety and introduced the following novel concepts: [Normal Account](#na)、[Vault Account](#va)、[Retrieval Account](#ra)、[Clearing Height](#ch)、[Revocable Delay Period](#rdp)、[Address Type](#addrt)、[Transaction Type](#transt).

<!--### GateChain DEX

<!--GateChain DEX, a decentralized exchange with matching engines of ultra high performance and low cost, can provide users with a safe, quick and  transparent trading experience as long as they have control over the private keys to their wallets. GateChain DEX leverages private owned encrypted wallets or hardware wallets to safeguard users’ assets and solves trust issues that centralized exchanges face. It also supports cross-chain transfer for multiple currencies. -->

<!--GateChain DEX, a decentralized exchange with matching engines of ultra high performance and low cost, thus providing users with a safe, quick and transparent trading experience Cross-chain transfes will be supported for multiple currencies. 


Anyone who has full control over his account's private keys can trade freely and safely. GateChain DEX does not store users' funds or private keys but leverages privately owned encrypted mobile or hardware wallets to safeguard users’ assets and solves the trust issues that arise when trading on centralized exchanges.-->

### GateToken

<!--GateChain Coin GC  is the native currency of GateChain mainnet. It  fuels the GateChain mainnet and is used to pay  transfer fee  on Gatechain network.It is the incentive reward for PoS staking at GateChain. In addition, it is  an important ecosystem  member for Gate.io exchange. -->

GateToken (GT) is the native currency of GateChain's ecosystem. It is used to pay for transaction fees on GateChain’s network and also serves as the PoS staking reward. It is essential to GateChain's functions.


### GateChain Wallets

<!--GateChain provides various wallet applications for individual, professional and enterprise users. At testnet phase, GateChain provides desktop wallets for Windows and Mac OS; professional users can also access and test using API. At mainnet phase, GateChain will provide command line wallet, mobile wallet for Android and iOS, Web wallet, multi-signature wallet, and hardware wallet, among other tools to cater to  individual and enterprise users.-->

GateChain provides various wallet applications ranging from personal to professional use cases.

* During the testnet phase, GateChain provided desktop wallets for Windows and Mac OS; professional users could also access and test the API.

* During the mainnet phase, GateChain will provide a wider variety, to cater for every kind of necessity: {command-line interface wallet | mobile wallet (Android/iOS) | web wallet | multi-signature wallet | hardware wallet}

## Application

<!--Considering the demands for efficiency in daily payment and safety in asset storage, GateChain offers two types of accounts, namely  Normal Account and  Vault Account. Similar to the features of a bitcoin address, Normal Account allows instant  payment  and transaction is irreversible. It does not allow private key restoration  if it is lost. While the Vault Account, an major novel creation of GateChain, allows revocable transaction and private key restoration. By combining both types of accounts, GateChain opens broad applications in both personal and professional fields. -->

GateChain offers two types of accounts, either a Normal or a Vault Account, enabling users to seamlessly navigate through the digital era without any safety concerns. Normal Accounts can pay instantly and transactions are irreversible. Private keys cannot be restored, similar to how a bitcoin address functions. The Vault Account though, GateChain's innovations, features revocable transactions and private key restoration. By combining both types of accounts, GateChain provides total safety to its users. 

### 1. **Individual asset management**：	

<!--Individual user can own a Normal Account and a Vault Account at the same time. He can leave a tiny fraction of assets in Normal Account for daily use while put the majority in Vault Account for storage, and set a delay time in transfer, 2 days for example.  Spending asset in the Normal Account is like  using bitcoin: transaction is confirmed upon payment and  is irreversible.  In the worst case when the Normal Account’s private key is lost or stolen, his loss is limited to the small portion. Risk is till under control.When the asset in the Normal Account is insufficient, he can transfer  more from the Vault Account  based on his plan. The transfer will be received with a 2 days'  (example) delay. In the worst  case when asset in Vault Account is stolen, he can still recover his asset by making a revoke request  within 2 days (example). The stolen transaction will be revoked and returned to “Retrieval Account” and loss is avoided.-->

A Normal Account is used to store a fraction of assets for daily use while a Vault Account is used to store the majority, not in immediate need. The Vault Account can set a predetermined transfer delay period, (e.g. 2 days).

For everyday transactions, users can use assets in the Normal Account just like they would on a bitcoin address: a transaction is confirmed upon payment and is irreversible. In the case of a Normal Account's private key loss/theft, the loss is limited to that "daily allowance". Risk is still under control. A Normal Account can be topped up by transfering from the Vault Account and the amount will be received after the revocable delay period that's been set. If a private key theft/loss is found during this period, a "Revoke" request can be initiated from the Vault Account. The transaction will be revoked and moved to the “Retrieval Account”. Funds are safe.

### 2. **Legacy or Grant Auto-Release**:

Digital asset inheritance has been a point of concern for many as it can not be executed similar to bank assets and real estate under the existing applicable laws. The private keys of digital assets are usually kept by the holder himself for security reasons. Without elaborate planning, digital assets can be forever frozen following the death of the holder and leave his lawful heirs no way to access to his legacy. GateChain's Vault Accounts support the release of digital assets at a predetermined time to a beneficiary, without having to worry about private keys loss/theft. 

As long as one is able to set his digital asset distribution ratio and release date, his digital asset will be transferred to his named beneficiary accordingly. This feature can also be used in any scenario where a future release of funds at predetermined time is required. (E.g. After a child's 18th birthday, university fund and so on)

### 3. **Safe Storage**：	

<!--Bank assets storage demands an extremely high  level of safety. Even with cold storage and hardware wallet, Bank can not 100% guarantee the safety of blockchain asset, especially when it comes to private key damage risk in  major natural disasters, which has significantly  limited the possibility of blockchain asset massive application.  If the Bank would use the Vault Account of GateChain to store asset, it could set a longer delay time (30 days for example) or cascaded Vault Accounts to exponentially reduce the risk of theft.In practice, it can bring as close to 100% as possible safety with a minimal cost, just like the  possibility of Bitcoin  being brute force attacked is close to zero in practice. Though not 100% safety in principle, it is already 100% safety in practice. In addition, you can still use pocket money  wallet and hardware wallet technology to give it further protection. -->

Asset storage demands an extremely high level of safety. The prevailing mechanisms in the blockchain industry are cold storage and hardware wallets. Even these mechanisms, though, cannot guarantee the assets' safety when it comes to asset risks arising from private key loss/theft. Safety concerns have significantly hindred the massive adoption of blockchain assets. 

With GateChain’s Vault Account, revocable delay periods can be set to significantly reduce asset storage risk. Vault Accounts cascading is also supported, exponentially reducing risks of theft.

In practice, GateChain can achieve complete asset safety at a very low cost. In addition, our hardware wallet with touch-id will be there to help you safeguard your assets! 


## Academic Research

<!--In  terms of academic research,  GateChain’s main invention is an on-chain “Vault Account”, which  has important safe features to restore lost private key and revoke  stolen asset, providing a novel  solution to blockchain asset safety for individuals,  enterprises and banks,where asset safety is sensitive.   Research shows that by linearly adding the revocable delay time and the cascaded Vault Accounts , safety increases exponentially. In practice, it can  completely solve the  blockchain asset safe storage  problems for both individual and banks.  Academic research is available to view later.-->

GateChain Research focuses on studying principles and applications around onchain trading safety, promoting the blockchain development and its use cases.

GateChain's major innovations are：

* An on-chain “Vault Account”. A safety solution to individuals, enterprises, and asset sensitive banks. 
* A transaction model that supports retractable logic, called RTM（Revokable Transaction Model）.

Please refer to [GateChain Academic Research](./gatechain-research.md) for more details.


## Terms

<!--GateChain is  a novel public chain based on academic research, which has a complete self- consistent safety  system. As it introduces many  new concepts to blockchain industry that have  never been proposed before, we give explanation about  these concepts and terms for better understanding.

Normal Account：Storage of assets, suitable for daily use. Assets in this type of account can be sent instantly and transactions are irreversible once confirmed on-chain. Lost private key can not be restored.
Vault Account：A new type of account that features revocable transactions. Assets in this type of account are transferred after a preset delay. Suitable for storage and safekeeping of funds not ment for immediate use. 
Revocable Delay Period：The time period during which a transaction from a vault account is revocable. During this period (calculated in blocks), recovery of funds is possible by initiating  a "revoke" request and have the funds sent to the “Retrieval Account’.
Retrieval Account：A predetermined account bound to the Vault Account. When a transaction is revoked, the assets will be transferred to this account. 
Clearing Height：A future block height. When this block height is reached, the assets in the account are transferred according to the account holders' instructions. 
Revoke: When a transaction initiated from a Vault Account is still in the revocable delay period, “revoke” request can be initiated and the assets will be sent to the “Retrieval Account’.
Revocable Transaction： A transaction initiated from a Vault Account is a revocable transaction, allowing assets to be transfered to the “Retrieval Account” instead of the original address. After the revocable period, transaction can not be revoked.
Irrevocable Transaction：Transactions initiated from Normal Accounts. It is irreversible once it is confirmed by blockchain.-->

As an innovative public chain focusing on on-chain asset security, GateChain introduces a number of new concepts. GateChain hopes to help users understand GateChain’s security logic more comprehensively by providing the description of the concepts. Also, for the consideration of transaction security, GateChain innovatively put forward the identification of address type and transaction type to facilitate the user to effectively identify different account type and transfer type, to avoid user mis-operation.

### GateChain Basic Concepts

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

### GateChain Address Types

GateChain has two main account types, Normal Account, and Vault Account, with a different identifier at the start of their addresses.

* Normal Account：starts with "gt". "gt1" indicates a single-signature Normal Account, and "gt2" indicates a multi-signature Normal Account. 
* Vault Account：starts with "vault"."vault1" indicates a single-signature Vault Account, and "vault2" indicates a multi-signature Vault Account.

With GateChain's address identifier mechanism, confirmation requirements can be set and carried out accordingly. If a transaction is initiated from a Vault Account, confirmation is safe only after a revocable delay period.


### GateChain Transaction Types

GateChain has many transaction types. To identify different transaction types efficiently, GateChain provides a transaction type identifier.

Below are the identifiers that different transaction types can start with:

* Irrevocable Payment：“IRREVOCABLEPAY-”
* Revocable Payment：“REVOCABLEPAY-”
* Account Setting： “ACCOUNTSET-”
* Vault Creation：“VAULTCREATE-”
* Revoke Request: “REVOKE-”
* Vault Clearance：“VAULTCLEAR-”
* Untitled： “BASIC-”


## Quick Start

<!-- 1. Online wallet (pending)-->
1. [GateChain desktop wallet instruction](./gatechain-wallet.md)
2. Visit [GateChain mainnet explorer](https://gatescan.org/index)

## Advanced Docs

- **Full Node**: Anyone can build a full node and participate in the consensus mechanism or run his own network. A full node has all of GateChain's functions. For detailed installation instructions visit [Install and Deploy](./gatechain-build.md).
   - **Connect**： A full node can connect to the public mainnet (using the same network version)<!--，Latest code[get](pending developing)here-->）to monitor and broadcast transactions, update blocks and other network tasks in real time.
   - **CLI**：Client programs which can interact with GateChain using the command line interface are also provided. Many operations can be performed on your onchain account using a command line interface, including account management, transaction management, and asset management. In addition, simple onchain inquiries can be made rearding account balance and transaction details. For more details visit [Command Line Interface Reference](./cli/README.md).
   - **API**：GateChain Nodes support advanced REST API interface services, for more details visit [REST API List](./API/README.md).
