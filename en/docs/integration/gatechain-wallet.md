# Wallet

>  This document is for testnet. Multiple network reset operations may occur during the test phase as ongoing development follows up
>  The test token may be emptied in the reset, please request new test token from the testnet.

GateChain ecosystem provides a variety of wallet applications to cater to differentiated demands from individual, professional and enterprise users.

* At testnet phase, GateChain provides desktop wallets for Windows and Mac OS. Professional users can also access and test using RPC.

* At mainnet phase, GateChain will provide command-line wallet, mobile wallet for Android and iOS, Web wallet, multi-signature wallet, and hardware wallet, among others to cater to individual, professional and enterprise users.

## 1.Specifications
### 1.1 GateChain  Address Types ###

GateChain has two  main account types, Standard Account and Vault Account, with different  identifier at the start in their addresses:

* Standard Account：start with “gt’’. “gt1” indicates a single- signature Standard Account, and “gt2” indicates a multi- signature  Standard Account.
* Vault Account：start with “vault’.“vault 1” indicates a single- signature Vault Account, and “ vault2” indicates a multi- signature   Vault Account.

With the address identifier system invented by GateChain, the recipient account can easily identify the sending account's  type and set confirmation requirement  accordingly.If it is from a Vault Account, confirmation is safe  only after revocable delay period.

### 1.2 GateChain Transaction Types ###

GateChain has many transaction types.  To identify different transaction types efficiently, GateChain creatively provides transaction type identifier.

Below are identifiers  different  transaction types start with:

* （Irrevocable Pay）：“IRREVOCABLEPAY-”
* （Revocable Pay）：“REVOCABLEPAY-”
* （Account Set）： “ACCOUNTSET-”
* （Vault Create）：“VAULTCREATE-”
* （Revoke）: “REVOKE-”
* （Vault Clear）：“VAULTCLEAR-”
* （Untitled）： “BASIC-”

### 1.3 Other Definitions ###
* Retrieval Account：the preset  account  bound  to  a Vault Account. When a transaction in vault account is revoked, the transaction asset will be moved to this account. 

* Revocable Delay Period ：The valid duration during which a “revoke ” operation is  allowed after the revocable transaction is initiated. That is,after the revocable transaction is initiated, “revok’ operation is allowed before the preset number of blocks are reached.

* Clearing Height：it is a future time. At the time when this future block height is hit, the asset in the account will allow clearing. 

>Any “Time” settings at GateChain is calculated using block height. The current block time is 1s. Please use it as a reference when setup the above time.

## 2. Download and Installation

- You can go to CateChain website <a href="https://wallet.io/download" target="_blank">[wallet.io]</a>，and click “Wallets” at the top to  download proper wallet version for your operation system.<br/><img src="../../images/0.png" height=50% width=50%></br>
	
- You can also access to <a href="https://wallet.io/download" target="_blank">[wallet.io]</a> to download wallet for PC
  	
	>Wallets are  available for Windows  and  Mac OS at this time.
  
  	

## 3. Get Started

### 3.1 Password and Safety
- GateChain provides local wallets and  need not to register an account before logging in. But setting up a password is required when running the wallet for the first time.  The password will also be used as “unlock password” for many other operations at the wallet. It is of vital Importance!  If it is lost, your asset will be at risk. Please setup a complicated password and save it safely.<br/><img src="../../images/open.png"  height=50% width=50%></br>

- Revocable transaction is invented by GateChain. To avoid abuse of this safety feature, GateChain uses prefix identifiers to give distinct mark. When receiving a transaction, you can check with  two rules to determine if it is  irrevocable and safe to confirm. 
> 1. Standard Account starts with" gt". Transactions from address starting with “gt” is irrevocable.
> 2. Irrevocable transaction ID starts with" IRREVOCABLEPAY-" .Transaction with this prefix is irrevocable.
> 3. Vault Account starts with" vault". Transactions from address starting with “vault” is revocable.
> 4.  Revocable transaction ID starts with" REVOCABLEPAY-" .Transaction with this prefix is revocable.

### 3.2 Create Standard Account
- 1 ）At main interface, click “Create Account” , then  choose   “Single Signature”-->>“Standard Account”.

<img src="../../images/1.png"  height=50% width=50%>

- 2 ）Enter an account name,  click “Create”.

<img src="../../images/2.png"  height=50% width=50%>

- 3 ）Enter the unlock password, click “Confirm”.

<img src="../../images/3.png"  height=50% width=50%>

- 4 ）Account is created successfully. Pay attention to the identifier of single signature account. Standard Account starts with “gt”.

<img src="../../images/4.png"  height=50% width=50%>

### 3.3 Account Import

Besides creating an account, you can also use “Import account” function to import one you have created.  Steps as follows:

- 1 ) At main interface, click “Import account” and select"Single signature".  <br/><img src="../../images/account9.png"  height=50% width=50%></br>

- 2 ）Go to account importing interface, enter the following information one by one: account name (not necessarily its original account name), account backup file (keystore file) and decryption pass to the Keystore file (pass entered when exporting account file). Click “Import” button.
  <br/><img src="../../images/account10.png"  height=50% width=50%></br>
- 3 ）Enter the current unlock password and click “Confirm” button to finish account importing.

### 3.4 Give Me GT 
- **Get Testnet GT From wallet：** 
	- At wallet overview interface, you can see a “Give me GT” icon. Click it and a testnet GT application is sent. Testnet GT will display at your wallet balance a few minutes later.<br/><img src="../../images/5.png"  height=50% width=50%></br>

- **Get Testnet GT From Website：** 
	- <a href="https://gatescan.org/faucet" target="_blank">Visit website</a>
	- Enter the account address to receive testnet GT and click to add application. Testnet GT will display at your wallet balance a few minutes later.<br/><img src="../../images/6.png"  height=50% width=50%></br>

> Each account can apply once per 24 hours. Each time applying for testnet GT from wallet will have the following prompt.

> <br/><img src="../../images/5-1.png"  height=50% width=50%></br>

### 3.5 Create Vault Account
- 1 ）At main interface, click  “Create account”, then select“Single signature ”-->>“Vault account".

<br/><img src="../../images/7.png"  height=50% width=50%></br>

- 2 ）Enter an account name, and click “Create”
 
<br/><img src="../../images/8.png"  height=50% width=50%></br>

- 3 ）Enter unlock pass, click “confirm”.

<br/><img src="../../images/9.png"  height=50% width=50%></br>

- 4 ）Account is created successfully.  A prompt for activation will display. Click “Activate” button.

<br/><img src="../../images/10.png"  height=50% width=50%></br>

- 5 ）Select a fee payment account, enter a backup account as “Retrieval Account”. Select a revocable delay period (e.g.48 hrs ), clearing height (e.g.5 years).Click “Next”.
<br/><img src="../../images/11.png"  height=50% width=50%></br>

- 6 ）After confirming Vault Account parameters for activation,click “Confirm”. Enter unlock password to activate the Vault Account.
 
<img src="../../images/13.png"  height=50% width=50%>

<br/><img src="../../images/14.png"  height=50% width=50%></br>
<br/><img src="../../images/15.png"  height=50% width=50%></br>

> You can also activate Vault Account through a Standard Account.
> 
> -  Access to the overview of an account you will use it to activate the Vault Account. Click "Activate other account" at the right side”
> <br/><img src="../../images/vault14.png"  height=50% width=50%></br>
> - Access to activate Vault Account page
> - Activation process is as above mentioned.<br/><img src="../../images/vault15.png"  height=50% width=50%></br>
> Note: the Standard Account used to activate the Vault Account will auto- fill “Retrieval Account” field. If you want to use another account as Retrieval Account, please modify it. 

### 3.6 The Clearing Time of Vault Account Can Be Changed
Steps as follows:

- 1 ）Access to the Vault Account you want to change.  Click the change button right to  “Clearing height”<br/><img src="../../images/vault10.png"  height=50% width=50%></br>
- 2 ）Access to edit page and set the new clearing block height.<br/><img src="../../images/vault11.png"  height=50% width=50%></br>
- 3 ）Double check the information and enter the unlock password<br/><img src="../../images/vault12.png"  height=50% width=50%></br>
- 4 ）Change transaction is successfully initiated. <br/><img src="../../images/vault13.png"  height=50% width=50%></br>


### 3.7 Setup Vault Account Activities Monitor

GateChain provides  two notification channels, via email and via short message.

- 1 ）Access to blockchain explorer monitor page.
	- Click the icon right to  Vault Account address to access to account monitor settings.<br/><img src="../../images/monitor1.png"  height=50% width=50%></br>
	- Or visit <a href="https://gatescan.org/monitor" target="_blank">mainnet explorer</a> and Click"Monitor"	to access to account monitor Settings page. <br/><img src="../../images/monitor0.png"  height=50% width=50%></br>
- 2 ) Fill the account address to monitor and the mobile phones and email address to receive alert notifications. 
<br/><img src="../../images/monitor2.png"  height=50% width=50%></br>
  
### <span id="evm"> 3.8 Standard Account Irrevocable Payment </span>
- 1 ）From the wallet list, select the account to make the payment transfer and click it to access to account overview.<br/><img src="../../images/18.png"  height=50% width=50%></br>

- 2 ) Select “Transfer” button.<br/><img src="../../images/19.png"  height=50% width=50%></br>

- 3 ) Access to transfer page, fill the recipient  address  and the payment amount. Double Check information and click “Send” button.
<br/><img src="../../images/20.png"  height=50% width=50%></br>

- 4 ) Double check the transfer information. Click “confirm” button.
<br/><img src="../../images/21.png"  height=50% width=50%></br>

- 5 ) Enter the unlock password and click "Confirm".
- 6 ) Receive a success message that the transaction is sent successfully.
<br/><img src="../../images/22.png"  height=50% width=50%></br>

**Note：** 
> 1. Standard Account starts with gt. Transaction is  irrevocable from address with prefix “gt”.
> 2. Irrevocable transaction ID starts with IRREVOCABLEPAY-.Transaction with such prefix is irrevocable.
>
> **This type of transfer is immediately effective and irrevocable. You can confirm and use it safely after receiving the transaction**


- 7 ) View “Transfer Records” at account overview for this transaction record.

<img src="../../images/23.png"  height=50% width=50%>

### 3.9 Vault Account Revocable Payment

Transfer from Vault Account will take effect with a delay. Compared with Standard Account, additional information is needed when make a transfer from Vault Account. Steps as follows:

- 1 ）Send Revocable Payment from Vault Account)<br/><img src="../../images/vault1.png"  height=50% width=50%></br>

- 2 ）Fill Recipient address, amount and other information, and click “Send” button
<br/><img src="../../images/vault2.png"  height=50% width=50%></br>

- 3 ）Double check the transfer information and click “Confirm” button.
<br/><img src="../../images/vault3.png"  height=50% width=50%></br>

- 4 ）Enter wallet login password  and you will receive a “revocable transaction is initiated  successfully’ notice.
<br/><img src="../../images/vault4.png"  height=50% width=50%></br>
	
> The recipient account can see this transaction in its Receive records. Click the transaction body to view the transaction details (transaction status, estimated confirmation time, amount, etc)
> <br/><img src="../../images/vault4-1.png"  height=50% width=50%></br><img src="../../images/vault4-2.png"  height=50% width=50%>

- 5 ）If receive alarm has already set at Account Settings, a Receive alarm of vault account out going payment will be immediately  received following the transfer. 
- 6 ）Revoke the undesired vault account payment.At the account overview page, click transfer records to view revocable transaction record. Click “Revoke transaction”button at right side.
<br/><img src="../../images/vault5.png"  height=50% width=50%></br>
- 7 ）Check the  transaction to revoke  and  click “Next’
<br/><img src="../../images/vault6.png"  height=50% width=50%></br>
- 8 ）Double check the transaction details and enter the wallet login password.
<br/><img src="../../images/vault7.png"  height=50% width=50%></br>
- 9 ）Revoke transaction is initiated successfully.
<br/><img src="../../images/vault8.png"  height=50% width=50%></br>
- 10 ）This transaction will be moved to its bound Retrieval Account account. 
<br/><img src="../../images/vault9.png"  height=50% width=50%></br>

**Note:** 
> 1. ault Account starts with" vault". Transactions from address starting with “vault” is revocable.
> 2. Revocable transaction ID starts with REVOCABLEPAY-.Transaction with this prefix is revocable.
> 
> **This type of transfer transaction can be successfully received if it is not revoked after Revocable Delay Period.**


### 3.10 Delegate Token
There are two ways to participate in Gatechain POS mining:

1、Build a GateChain full note and work as a consensus account.

2、Delegate your GT to a consensus account.

Wallet support the second,Delegate your GT to a consensus account and get a share of mining reward,Steps as follows：

- 1 ）Go to account main interface,Click “Delegations” button.
<br/><img src="../../images/24.png"  height=50% width=50%></br>

- 2 ）Delegations page,In the top right corner of the page click “Delegate” button.
<br/><img src="../../images/25.png"  height=50% width=50%></br>

- 3 ）Fill the consensus account and the delegate amount or click in the page“All con-accounts”button，Jump to browser to select consensus account to be delegate.
<br/><img src="../../images/26.png"  height=50% width=50%></br><img src="../../images/27.png"  height=50% width=50%></br>

- 4 ）Confirm delegate info,Click “Confirm” button.
<br/><img src="../../images/28.png"  height=50% width=50%></br>

- 5 ）Return to the delegation page,Show my delegation records in the delegation list.
<br/><img src="../../images/29.png"  height=50% width=50%></br>

- 6 ）Delegations page,To the right of my delegation list“Delegate”button.You can delegate the consensus account again.
<br/><img src="../../images/30.png"  height=50% width=50%></br>

- 7 ）Delegations page,To the right of my delegation list“Redelegate”button.
<br/><img src="../../images/31.png"  height=50% width=50%></br>

- 8 ）click “Redelegate” button,Fill in the address and amount to be transferred to the consensus account.
<br/><img src="../../images/32.png"  height=50% width=50%></br>

- 9 ）Confirm redelegate info,Click “Confirm” button.
<br/><img src="../../images/33.png"  height=50% width=50%></br>

- 10 ）Return to the delegation page,Show my redelegate records in the delegation list.
<br/><img src="../../images/34.png"  height=50% width=50%></br>

- 11 ）Delegations page,To the right of my delegation list“Undelegate”button.
<br/><img src="../../images/35.png"  height=50% width=50%></br>

- 12 ）click“Undelegate”button，Fill in the number of tokens to be unbound.
<br/><img src="../../images/36.png"  height=50% width=50%></br>

- 13 ）Confirm undelegate info,Click “Confirm” button.
<br/><img src="../../images/37.png"  height=50% width=50%></br>

- 14 ）Return to the delegation page,Show my "undelegate" in the delegation list，The completion time of undelegating is 21 days.
<br/><img src="../../images/38.png"  height=50% width=50%></br>

- 15 ）Delegations page,To the right of my delegation list“Withdraw”button.
<br/><img src="../../images/39.png"  height=50% width=50%></br>

- 16 ）click“Withdraw”button, click“Send”button and Confirm Withdraw info.
<br/><img src="../../images/40.png"  height=50% width=50%></br>

- 17 ）Return to the delegation page,In the "total rewards" display of the entrustment list,Rewards return to zero,Reward amount is directly returned to account balance.
<br/><img src="../../images/41.png"  height=50% width=50%></br>

- 18 ）History list in delegation page,Show specific delegates/redelegate/undelegate/withdraw in the list.
<br/><img src="../../images/42.png"  height=50% width=50%></br>

---
## 4.  Advanced Features
>This part involves  operations on account. Please use it with caution. Mis-operations may lead to asset loss. 

The wallet supports  account export, account delete, view private keys  and other operations for accounts in the local wallet account list. 

- Select the account to operate and  click to access  account overview.<br/><img src="../../images/account1.png"  height=50% width=50%></br>

- Click upper right corner to access account details.<br/><img src="../../images/account2.png"  height=50% width=50%></br>

- View account details.<br/><img src="../../images/account3.png"  height=50% width=50%></br>

> Standard Account only shows “Account info’. While Vault Account shows "Vault Settings” in addition to “Account info”.

### 4.1 Account Export
- single signature account export
	- you can export single signature account  to a file for backup. Access to account details. 
	- lick  “Download” button right to“Keystore”.Enter unlock pass to back up the account.
<br/><img src="../../images/account4.png"  height=50% width=50%></br>

### 4.2 View Private Key
- Access to account details. Then click “View” button right to“Private key”. Enter the unlock password to view the private key.
<br/><img src="../../images/account5.png"  height=50% width=50%></br><img src="../../images/account6.png"  height=50% width=50%></br>

>Do not screenshot or copy the private key and  save it in  computers that has connection   to  Internet to avoid risk.

### 4.3 Delete Account
- Access to Account details and click “Delete Account ”button at the upper right.
<br/><img src="../../images/account7.png"  height=50% width=50%></br>

- Enter the unlock pass and click “Confirm”button. The account is deleted.
<br/><img src="../../images/account8.png"  height=50% width=50%></br>

### 4.4 Multiple Signatures Account
#### 4.4.1 Create a Multisig Account
* 1 ）At the main interface, click “Account”. Select   “multi-signature ”--->>“Standard Account”<br/><img src="../../images/multi0.png"  height=50% width=50%></br>

* 2 ）Enter “Account name” and  select “total members”(2-7), “required signatures” and “member’s public key”(can use public key created in the wallet or enter a public key not locally created). Click "Next".<br/><img src="../../images/multi2.png"  height=50% width=50%></br>
* 3 ）Access to confirmation page and click “Create” button to finish.<br/><img src="../../images/multi3.png"  height=50% width=50%></br>
* 4 ) Publish the multisig account to the blockchain according to prompt.<br/><img src="../../images/multi4.png"  height=50% width=50%></br>
* 5 ）Publishing public key will incur a fee. Choose a payment account and click “Next".<br/><img src="../../images/multi5.png"  height=50% width=50%></br>
* 6 ）Confirm the information and enter the unlock pass. A transaction initiated successfully message will be returned.<br/><img src="../../images/multi6.png"  height=50% width=50%></br>

> For Multisig  Vault Account, its account creation  process is the same with a Standard Multisig Account, and its activation process is the same with a normal  Vault Account.


#### 4.4.2 Export Multisig Account
* 1 ）From account list , select the multisig account to export and access to account details.<br/><img src="../../images/multi7.png"  height=50% width=50%></br>	
* 2 ) Select “Export multisig account” button. Enter the unlock pass to generate a multisig account file. <br/><img src="../../images/multi8.png"  height=50% width=50%></br>

#### 4.4.3 Multisig Transaction

* Initiating a multisig transaction is similar with a normal transaction. Enter the recipient account, amount,etc. Click “Send”. <br/><img src="../../images/multi9-1.png"  height=50% width=50%></br>
* After confirming the transaction information, go to “Signature & Broadcast process” page. <br/><img src="../../images/multi9-2.png"  height=50% width=50%></br>
* As multisig account varies in participating members, please finish “Collecting signatures” and “broadcast transaction” operations according to prompt in “Signature & Broadcast process” page.

**Example**
> <br/><img src="../../images/multi9.png"  height=50% width=50%></br>

---
## 5. Blockchain Explorer
-  To View account, transaction id, block, validator and more, visit block explorer for testnet at <a href="https://gatescan.org/index" target="_blank">(Click to enter)</a>.

<img src="../../images/17.png"  height=50% width=50%>

## 6. Developer Document
-  View more developer document here：<a href="https://www.gatechain.io/docs" target="_blank">(Click to enter)</a>


