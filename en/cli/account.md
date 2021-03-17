
### Account Type
- Single Signature account
	- Prefix：'gt1'
	- Example:'gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq'
-  Multisignature account
	- Prefix：'gt2'
	- Example:'g211twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq'
- Single signature Vault Account
	- Prefix：'vault1'
	- Example:'vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'
- Multisignature Vault Account
	- Prefix：'vault2'
	- Example:'vault21fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'

### Generate A Single Signature Account
```bash
gatecli account create
```

%accordion%Return example:%accordion%

```bash
- name: vault //account name
  type: local //account type
  address: gt1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthz7a7xld //account address
  pubkey: gt1pub1u8s6p73qf92hfdy6sp3s3657ssqrnpjtwevc86ht6d9txyrnt7239528z6wqxjhlfn //account public key
  mnemonic: "" //account mnemonic, which displays the details below and can be used to restore the account by other nodes.
  threshold: 0 //valid value of the account, multisignature account has a value
  pubkeys: []

**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

flee agree charge truth answer flush inflict shove nice valid auto love laugh review frame sword later man inside couch slogan level guitar diet //account mnemonic, which displays only when creating account and will not show using show or list afterwards. Saving it is highly recommended.
```
%/accordion%

### Generate A Multisignature Account

```bash
gatecli account create [account] --multisig [account list] --multisig-threshold [minimum effective amount]
```		    
Example:

```bash
gatecli account create gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
```

%accordion%Return example:%accordion%

```bash
Key "gt11efwuug5y8ccvz54uunhdet22wpdf5huva7720v47ffej2vv0cy4863gc945j9d22n3n9v0" saved to disk. // Multisignature account address, using gatecli account list to query details of this address public key; after using gatecli account publish-multisig to publish multisignature account, you can get  a multisignature account address starting with gt2
```
%/accordion%


Description：

* Account list refers to accounts already created.


### Query Account List
```bash
gatecli account list
```

%accordion%Return example:%accordion%

```bash
- name: con //account name
  type: local //account type
  address: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //account address
  pubkey: gt1pub1u8s6p73qg4vmn6pjsnfehrh0nph8sqnp0nta0clfayjhsgtmjpfeek289gdsmr7au2 //account public key
  mnemonic: "" //account mnemonic, which displays only when creating the account 
  threshold: 0 //valid number of a account， multisignature account has the value
  pubkeys: []
- name: ...
```
%/accordion%


### Query Account Information [API](../API/account.md#Query Account Information-command line)
```bash
gatecli account show [account] --chain-id [chain ID]
```

Example:

```
gatecli account show gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
Account:
  Address:            gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //account address
  Pubkey:        gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 //account public key
  Tokens:        69998999899999967NANOGT //account balance
  AccountNumber: 4 //account serial number
  Sequence:      0
  AccountType:        0 ////account type：0.single signature  standard account,1.single signature Vault Account,2.multisignature standard account,3.multisignature Vault Account
  VaultAddress:   [vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272] //Vault Account address, a value in this field indicates the account is a Retrieval Account to the Vault Account
  ReceivedRevocableTokens: //token still can be revoked
```
%/accordion%

### Change Account Password 
```bash
gatecli account update [name]
```
Example:

```
gatecli account update 1583472684
```

%accordion%Return example:%accordion%

```bash
Password successfully updated! //password changed successfully
```
%/accordion%


### Delete Account
```
gatecli account delete [name]
```
Example:

```
gatecli account delete 1583472684
```

%accordion%Return example:%accordion%

```bash
Key deleted forever (uh oh!) //Account  is deleted.  Private key is deleted permanently
```
%/accordion%


### Query Account Balance [API](../API/account.md#Query Account Balance-command line)
```bash
gatecli account balance [account] --chain-id [chain ID]
```

Example:

```bash
gatecli account balance gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
1000000NANOGT //account balance
```
%/accordion%


### Query Account Public Key
```bash
gatecli account show-key [name]
```

Example:

```bash
gatecli account show-key 1583472684
```

%accordion%Return example:%accordion%

```bash
- name: delegate //account name
  type: local //account type
  address: gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //account address
  pubkey: gt1pub1u8s6p73qva7mzaymcwfxf6ssmvamtjzzd3adp4eavlky0gwhlwwlwpukqq6sqwuxfg //account public key
  mnemonic: ""
  threshold: 0
  pubkeys: []
```
%/accordion%


### Publish Multisignature Account [API](../API/account.md#Publish Multisignature Account-command line)
```bash
gatecli account publish-multisig [account] [public key] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```

Example:

```bash
gatecli account publish-multisig gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
```

%accordion%Return example:%accordion%

```bash
  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 // transaction hash, using gatecli tx show {hash} to query details of this transaction
  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
  Raw Log: sync broadcast tx success //transaction is successfully sent
```
%/accordion%
