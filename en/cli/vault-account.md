
### Create a Vault Account [API](../API/vault-account.md#Create a Vault Account-command line)

```bash
gatecli vault-account create [base account] [Retrieval Account] [delay height] [Clearing Height] [transfer token  amount] --from [sender account] --chain-id [chain ID]
```

Example:

```bash
gatecli vault-account create gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 38 300 30NANOGT --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57a3457 --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using  gatecli tx show {hash}to query details of this transaction 
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully
```
%/accordion%

Description：

* Must use a newly generated account as base account to send a Create Vault Account transaction
* If a normal transaction is sent to this account first, this account becomes a standard account and it can not be used to send Vault Account creation transaction.
* Clearing Height must be greater than (current height+ delay height)


### Change Clearing Height [API](../API/vault-account.md#Change Clearing Height-command line)

```bash
gatecli vault-account update-clearing-height [new Clearing Height] --from [sender account] --chain-id [chain ID]
```

Example:

```bash
gatecli vault-account update-clearing-height 100000 --from vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
  TxHash: ACCOUNTSET-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using  gatecli tx show {hash}to query details of this transaction 
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully
```
%/accordion%

Description：

* New clearing height must be greater than the current block height+delay height of the Vault Account


### Account Clearing Transaction [API](../API/vault-account.md#Account Clearing Transaction-command line)
```bash
gatecli vault-account clear [Vault Account1]([Vault Account2] [Vault Account3]...) --from [sender account] --chain-id [chain ID]
```

Example:

```bash
gatecli vault-account clear vault11d9t6... vault11w8c3v... vault11v5s2... --from gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
  TxHash: VAULTCLEAR-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 //transaction hash, using  gatecli tx show {hash}to query details of this transaction 
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is sent successfully
```
%/accordion%

Description：

* Sender--from，must be a safe account bound to this Vault Account
* All the Vault Account clearing heights should be met

### Query  Vault Account Information [API](../API/vault-account.md#Query  Vault Account Information-command line)
```bash
gatecli vault-account show [Vault Account] --chain-id [chain ID]
```

Example:

```
gatecli vault-account show vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
Account:
  Address:            vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272 //Account Address
  Pubkey: //Account Public key
  Tokens:        100000000NANOGT //Account Balance
  AccountNumber: 9 //Account Serial Number
  Sequence:      0
  AccountType:        1 //Account type：0.Single Signature Standard Account, 1.Single Signature Vaut Account, 2.Multisignature Standard Account,3.Multisignature Vault Account
  DelayHeight:        100 //delay height of transaction of  a Value Account
  SecurityAddress:    gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //Retrieval Account of a  Value Account
  LastClearingHeight: 0 //Clearing Height set last time
  LastClearingEffectHeight:   0 //the transaction height when setting Clearing Height last time
  NextClearingHeight:      700 //newly set Clearing Height
  NextClearingEffectHeight:   257 //the transaction height when setting the new Clearing Height
  ReceivedRevocableTokens: //token can still be revoked
  SentRevocableTokens: //token sent and revocable
```
%/accordion%


