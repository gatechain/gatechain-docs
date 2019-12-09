# 0verview

Welcome to GateChain Documents.

The documents will give you a summary of GateChain, its basic concepts, features, and functions. They also provide tutorials for beginners, as well as technical details including Command Line Interface（CLI）and API for professionals and developers.

The documents keep updating as GateChain develops. Follow us and stay tuned. 


## GateChain Ecosystem ##

<!-- ### GateChain Features ###

GateChain and the DEX (Decentralized Exchange ) based on it are aimed to offer a novel solution and build an enterprise-grade   decentralized  ecosystem that can store, issue and trade digital assets efficiently and securely. -->

GateChain ecosystem comprises CateChain mainnet, GateChain DEX, GateChain Token (GT), wallets, etc. They form a decentralized ecosystem characterized by enterprise-grade safety and efficiency for digital asset storage, issuance and trading, they present a novel solution for blockchain transaction safety.

The main features of GateChain ecosystem can be listed as follows:

1. **Transfer/payment**：Using a wallet or client-side Apps, users can send and receive GateChain Token (GT), as well as other popular onchain assets.
2. **Asset issuance**： Users can issue and use their own tokens (e.g., GT) to digitalize and manage their assets. For more details, visit [Asset Management](./gatechain-asset.md).
3. **Decentralized cross-chain transaction**：GateChain provides support for high-performance decentralized trading among different digital currencies.
4. **Asset safe storage**：     With a uniquely designed vault account and a clearing technology, an account can have comprehensive protection and support revoking /clearing operations targeting abnormal transactions. For more details, visit [Transaction Protection](./gatechain-security.md).
5. **Multi-signature**： Multiple signers can share ownership of one account, and get customized management over their digital assets, which best fit the enterprise demands. For more details, visit [Multi-signature](./gatechain-multisig.md).
6. **POS staking reward**:GT works as a stable incentive for users participating in PoS staking, which safeguards the robustness of underlying blockchain.

### GateChain Blockchain ###

<!--GateChain is a novel public chain of the next generation centered on asset safety and decentralized exchange. With a unique onchain vault account and clearing system, it offers creative solutions to  core problems  in the industry, from asset theft and private key missing, to decentralized trading and cross-chain transfer.  Unlike traditional blockchains, such as Bitcoin and Ethereum, GateChain has many novel features especially designed for asset safety, like  Normal Account, Vault Account, Clearing Height, Revocable Delay Period, Address Type,  and Transaction Type, many of which  are  introduced to the industry for the first time. For these new terms, we will give detailed explanation later.-->

GateChain is a novel next-generation public blockchain, focused on onchain asset safety and decentralized exchange. With unique Vault Account technology and its supporting transaction model design, GateChain has implemented a guaranteed safe clearing mechanism, creatively solving the challenging problem of asset theft and missing private keys. It also supports decentralized trading and cross-chain transfer among other core applications. Compared with traditional blockchains, such as Bitcoin and Ethereum, GateChain focuses on on-chain asset safety. It creatively proposed a bunch of novel concepts, including [Normal Account](#na)、[Vault Account](#va)、[Retrieval Account](#ra)、[Clearing Height](#ch)、[Revocable Delay Period](#rdp)、[Address Type](#addrt)、[Transaction Type](#transt).definition and explanation visit[GateChain Document]().

### GateChain DEX ###

<!--GateChain DEX is a decentralized exchange based on GateChain. With matching engines of  ultra high performance and low participating cost, it can provide users  safe, quick and  transparent trading experience as long as they have control over their private keys to their wallets. GateChain DEX  leverages private owned  encrypted wallets or  hardware wallets to safeguard users’ assets and solves the trust issue that is present for centralized exchange. It also supports cross-chain transfer for multiple currencies. -->

GateChain DEX is a decentralized exchange based on GateChain. It has matching engines of ultra-high performance and low participating cost, thus providing users with a safe, quick and transparent trading experience. It also supports cross-chain transfer for multiple currencies. 


Anyone who has full control over the private key of his account can exchange freely. GateChain DEX uses private own encrypted wallets or hardware wallets to safeguard users’ assets and solves the trust issue that is present for centralized exchange.

### GateChain Token ###

<!--GateChain Token (GT)  is the native currency of GateChain mainnet. It  fuels the GateChain mainnet and is used to pay  transfer fee  on Gatechain network.It is the incentive reward for PoS staking at GateChain. In addition, it is  an important ecosystem  member for Gate.io exchange. -->

GateChain Token (GT) is the native currency of GateChain mainnet. It is used to pay transfer fees on GateChain network and works as an incentive reward for PoS staking. It is fundamental to GateChain network. In addition, it is an important ecosystem member for Gate.io exchange.

The issue plan of GT is determined as :

* GateChain initial supply 300 million GTs, all of which were given away to users in a transparent method in its initial distribution. 
* In 10 years, GT supply will reach 1 billion, which is its designed total supply cap. Among them, 
  * 200 million GTs will go to developing and researching, released linearly over a term of 10 years after a 12 months lockup; 
  * 100 million GTs will go to market expansion, released linearly over a term of 10 years after a 12 months lockup; 
  * 200 million GTs will go to ecosystem building, released linearly over a term of 10 years after a 12 months lockup; and 
  * 200 million GTs will be produced as staking rewards.


### GateChain Wallets ###

<!--GateChain provides various wallet applications for individual, professional and enterprise users. At testnet phase, GateChain provides desktop wallets for Windows and Mac OS; professional users can also access and test using API. At mainnet phase, GateChain will provide command line wallet, mobile wallet for Android and iOS, Web wallet, multi-signature wallet, and hardware wallet, among other tools to cater to  individual and enterprise users.-->

GateChain provides various wallet applications for individual, professional and enterprise users.

* During the testnet phase, GateChain provides desktop wallets for Windows and Mac OS; professional users can also access and test using API.

* During the mainnet phase, GateChain will provide command-line wallet, mobile wallet for Android and iOS, Web wallet, multi-signature wallet, and hardware wallet, to cater to individual, professional and enterprise users.

## GateChain Typical Application ##

<!--Considering the demands for efficiency in daily payment and safety in asset storage, GateChain offers two types of accounts, namely  Normal Account and  Vault Account. Similar to the features of a bitcoin address, Normal Account allows instant  payment  and transaction is irreversible. It does not allow private key restoration  if it is lost. While the Vault Account, an major novel creation of GateChain, allows revocable transaction and private key restoration. By combining both types of accounts, GateChain opens broad applications in both personal and professional fields. -->

GateChain offers two types of accounts, Normal Account and Vault Account, to meet the efficiency demand in daily payments and safety demand in asset storage. Normal Account allows instant payment and transactions are irreversible. It does not allow restoring a lost private key, similar to the features of a bitcoin address. While the onchain Vault Account, a major novel creation of GateChain, allows revocable transaction and private key restoration. By combining both types of accounts, GateChain provides complete safety features to its users. 

### 1. **Individual assets management**：	

<!--Individual user can own a Normal Account and a Vault Account at the same time. He can leave a tiny fraction of assets in Normal Account for daily use while put the majority in Vault Account for storage, and set a delay time in transfer, 2 days for example.  Spending asset in the Normal Account is like  using bitcoin: transaction is confirmed upon payment and  is irreversible.  In the worst case when the Normal Account’s private key is lost or stolen, his loss is limited to the small portion. Risk is till under control.When the asset in the Normal Account is insufficient, he can transfer  more from the Vault Account  based on his plan. The transfer will be received with a 2 days'  (example) delay. In the worst  case when asset in Vault Account is stolen, he can still recover his asset by making a revoke request  within 2 days (example). The stolen transaction will be revoked and returned to “Retrieval Account” and loss is avoided.-->

GateChain provides individual users with two types of accounts, a Normal Account and a Vault Account. Normal Account is used to store a tiny fraction of assets for daily use while Vault Account is used to store the majority, not in immediate need. The vault account can set a transfer delay period, 2 days for example.

For everyday transactions, users can use assets in the Normal Account just like they are using bitcoin: a transaction is confirmed upon payment and is reversible. In the worst case when the Normal Account’s private key is lost or stolen, the loss is limited to the small portion. Risk is still under control. When the asset in the Normal Account is insufficient, they can transfer more from the Vault Account based on his plan. The transfer will be received with a 2 days (example) delay. If theft is found during the delay period, he can simply initiate a "Revoke" request. The stolen transaction will be revoked and moved to “Retrieval Account”. Loss is avoided.

### 2. **Legacy or Grant auto-release**:

Digital asset inheritance has been a headache for many as it can not be handled by a middle man such as bank assets and real estate under the existing applicable laws. The private key of digital assets is usually kept by the holder himself for security reasons. Without complicated processing procedures, digital assets will be frozen forever following the death of the holder and leave his lawful heir no way to access to his legacy. Vault Account at GateChain supports releasing digital assets at a preset future time point to a predefined beneficiary, without worries about private keys missing or theft during this period. 
As long as one can set a digital asset distribution ratio and release time when he is able to do it, his digital asset will be transferred to his named beneficiary accordingly.
This asset processing method can also be used in other scenarios like scheduled fund granting. For example, if parents want to give their children some digital assets when they are 18 years old to fund their development after they have grown up. The parents can specify at their own Vault Account to send a certain amount of digital assets to their children when they are 18 years old.  

### 3. **Safe Storage of Bank Asset**：	

<!--Bank assets storage demands an extremely high  level of safety. Even with cold storage and hardware wallet, Bank can not 100% guarantee the safety of blockchain asset, especially when it comes to private key damage risk in  major natural disasters, which has significantly  limited the possibility of blockchain asset massive application.  If the Bank would use the Vault Account of GateChain to store asset, it could set a longer delay time (30 days for example) or cascaded Vault Accounts to exponentially reduce the risk of theft.In practice, it can bring as close to 100% as possible safety with a minimal cost, just like the  possibility of Bitcoin  being brute force attacked is close to zero in practice. Though not 100% safety in principle, it is already 100% safety in practice. In addition, you can still use pocket money  wallet and hardware wallet technology to give it further protection. -->

Bank asset storage demands an extremely high level of safety. The prevailing mechanisms in the blockchain industry are cold storage and hardware wallets. But these mechanisms can not 100% guarantee the safety of blockchain asset, especially when it comes to asset risks arising from private key damage. These issues have significantly limited the possibility of blockchain asset massive adoption. 

With GateChain’s Vault Account, the bank can set a longer transfer delay time to significantly reduce asset storage risk. Besides, GateChain also supports Vault Accounts cascading, which can exponentially reduce risks of theft.

In practice, GateChain can achieve an approximate 100% safety for asset storage at a very low cost. Just like the possibility of Bitcoin being brute force attacked is close to zero in practice, though not 100% safety in principle, it is already 100% safety in practice. In addition, pocket money wallet and hardware wallet technologies can still be used to give it further protection. 


## GateChain Academic Research ##

<!--In  terms of academic research,  GateChain’s main invention is an on-chain “Vault Account”, which  has important safe features to restore lost private key and revoke  stolen asset, providing a novel  solution to blockchain asset safety for individuals,  enterprises and banks,where asset safety is sensitive.   Research shows that by linearly adding the revocable delay time and the cascaded Vault Accounts , safety increases exponentially. In practice, it can  completely solve the  blockchain asset safe storage  problems for both individual and banks.  Academic research is available to view later.-->

To promote the development of blockchain technology and its applications in the real world, GateChain research focuses on studying principles and applications around onchain trading safety.

The major innovation of GateChain is：

* Put forward and implemented an on-chain “Vault Account”. This type of account has safety features allowing revocable transactions and damaged private key restoration, thus providing a novel blockchain safety solution to individuals, enterprises, and asset sensitive banks. 
* A transaction model that supports retractable logic which called RTM（Revokable Transaction Model）.

Please refer to [GateChain Academic Research](./gatechain-research.md) for more detail.


## GateChain Terms ##

<!--GateChain is  a novel public chain based on academic research, which has a complete self- consistent safety  system. As it introduces many  new concepts to blockchain industry that have  never been proposed before, we give explanation about  these concepts and terms for better understanding.

Normal Account：Account similar to a Bitcion address that can store asset and is suitable for daily use. Asset in this type of account can be sent instantly and is irreversible once confirmed in blockchain. Lost privatekey can not be restored.
Vault Account：GateChain’s novel creation. This is a new type of account that allows for  revocable transaction in the case of theft and private key restoration in the case of lost or damaged private key. Transfer asset in this type of account have to wait for  a preset  period of  time. It is suitable for storing and protecting  large amount of asset that is  not for immediate use. 
Revocable Delay Period：The time duration within which transaction transfer from vault account is revocable. During this time of period (calculated by blocks), recovery of transaction is possible by initiating  a "revoke" operation to return the transaction to “Retrieval Account’.
Retrieval Account：the preset  account  bound  to  a Vault Account. When a transaction in vault account is revoked, the transaction asset will be moved to this account. 
Clearing Height：it is a future time. At the time when this block height is hit, the asset in the account will allow clearing. 
Revoke. (verb）: When the transaction initiated from Vault Account is still in the revocable delay period, “revoke” operation can be initiated to return the asset to “Retrieval Account’.
Revocable Transaction： transaction initiated from Vault Account is revocable transaction, which allows for  revoking to move the asset to “Retrieval Account” during the revocable delay period. After that revocable period, transaction can not be revoked.
Irrevocable Transaction：Transactions initiated from Normal Account. It is irreversible once it is confirmed by blockchain.-->

As an innovative public chain focusing on on-chain asset security, GateChain introduces a number of new concepts. GateChain hopes to help users understand GateChain’s security logic more comprehensively by providing the description of the concepts. Also, for the consideration of transaction security, GateChain innovatively put forward the identification of address type and transaction type to facilitate the user to effectively identify different account type and transfer type, to avoid user misoperation.

### GateChain Basic Concepts ###

GateChain is a novel public chain. Its principal research has introduced many novel concepts that form the principle fundamentals for building complete self-consistency in assets safety.

* <span id="na">Normal Account：Account similar to a Bitcoin address that can store assets and is suitable for daily use. An asset in this type of account can be sent instantly and is irreversible once confirmed on the blockchain. A lost private key can not be restored.</span>
* <span id="va">Vault Account：GateChain’s novel creation. This is a new type of account that allows revocable transaction in the case of theft and private key restoration in the case of lost or damaged private key. Transfer of assets in this type of account have to wait for a preset period of time. It is suitable for storing and protecting a large amount of assets that are not for immediate use.</span>
* <span id="rdp">Revocable Delay Period ：The time duration within which transaction transfer from vault account is revocable. During this time period (calculated by blocks), recovery of a transaction is possible by initiating a "revoke" operation to return the transaction to “Retrieval Account’. </span>
* <span id="ra">Retrieval Account：the preset account bound to a Vault Account. When a transaction in the vault account is revoked, the transaction asset will be moved to this account. </span>
* <span id="ch">Clearing Height：it is a future time. At the time when this future block height is hit, the asset in the account will allow clearing. </span>
* <span id="revoke">Revoke: When the transaction initiated from Vault Account is still in the revocable delay period, the “revoke” operation can be initiated to return the asset to “Retrieval Account’. </span>
* <span id="rt">Revocable Transaction：any transaction initiated from Vault Account is a revocable transaction, which allows for revoking to move the asset to “Retrieval Account” during the revocable delay period. After the revocable period, the transaction can not be revoked. </span>
* <span id="irt">Irrevocable Transaction：Transactions initiated from Normal Account. It is irreversible once it is confirmed by blockchain.</span>

<!--### GateChain Address Types ###

GateChain has two main account types, Normal Account, and Vault Account, with a different identifier at the start in their addresses:

Normal Account：start with “gt’’. “gt1” indicates a single- signature Normal Account, and “gt2” indicates a multi-signature Normal Account.
Vault Account：start with “vault’.“vault 1” indicates a single- signature Vault Account, and “ vault2” indicates a multi-signature Vault Account,

With the address identifier mechanism invented by GateChain, the recipient account can easily identify the sending account's type and set the confirmation requirement accordingly. If it is from a Vault Account, confirmation is safe only after a revocable delay period. -->


<span id="addrt">

### GateChain Address Types ###

GateChain has two main account types, Normal Account, and Vault Account, with a different identifier at the start in their addresses.

* Normal Account：start with “gt’’. “gt1” indicates a single- signature Normal Account, and “gt2” indicates a multi-signature Normal Account. 
* Vault Account：start with “vault’.“vault 1” indicates a single- signature Vault Account, and “ vault2” indicates a multi-signature Vault Account.

With the address identifier mechanism invented by GateChain, the recipient account can easily identify the sending account's type and set the confirmation requirement accordingly. If it is from a Vault Account, confirmation is safe only after a revocable delay period.</span>

<span id="transt">

### GateChain Transaction Types ###

GateChain has many transaction types. To identify different transaction types efficiently, GateChain creatively provides a transaction type identifier.

Below are identifiers different transaction types start with:

* Irrevocable Pay：“INREVOCABLEPAY-”
* Revocable Pay：“REVOCABLEPAY-”
* Account Set： “ACCOUNTSET-”
* Vault Create：“VAULTCREATE-”
* Revoke: “REVOKE-”
* Vault Clear：“VAULTCLEAR-”
* Untitled： “BASIC-”

</span>


## Quick Start ##

<!-- 1. Online wallet (pending)-->
1. [GateChain desktop wallet instruction](./gatechain-wallet.md)
2. Visit [GateChain testnet explorer](https://explorer.gatechain.io/)

## GateChain Advanced Docs ##

- **Full Node and Local Testnet**：	Anyone can build a full node and run his testnet. A full node has all the functions GateChain has. Detailed installation visit [Install and Deploy](./gatechain-build.md).
   - **Join Testnet**： A full node can connect to public testnet (use the same version of testnet )<!--，Latest code[get](pending developing)here-->）to monitor and broadcast transaction and block update and other tasks in real time in the network.
   - **Command Line Interface**：Besides wallets, we also provide client programs, which can interact with GateChain using command line. Many operations can be done to onchain account using a command line interface, including account management, transaction management, and asset management. In addition, simple inquiry to onchain data is also allowed using a command line interface, such as inquiry of account balance, and transaction details.  More Details visit [Command Line Interface Reference](./gatechain-cli.md).
- **API**：GateChain node provides advanced REST API interface service, related API information visit [REST API List](./gatechain-api.md).
