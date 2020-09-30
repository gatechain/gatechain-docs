
### Create A Vault Account [command line](../cli/vault-account.md# Create A Vault Account-api)
######The interface generates transaction body  for “ Create A Vault Account”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.

```
POST  /v1/vault-account/create/{base-account}
```
Parameters:

| Parameter | Description |
| :----| :--- |
| base-account | base account |

Request BODY example：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
    "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
    "chain_id": "testnet", //chain ID
    "gas": "200000", //gas consumed by this transaction
    "fees": [
      {
        "denom": "NANOGT", //unit
        "amount": "5000" //fee
      }
    ],
    "simulate": false, //if calculate simulated gas?
    "valid_height":[ //Block height at which a transaction takes effect
         "600",
         "900"
    ]
  },
  "amount": [
    {
      "denom": "NANOGT", //unit
      "amount": "500000000" //transfer token amount
    }
  ],
  "vault_req":{
    "security": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Retrieval Account
    "pubkey": "", //When creating a multisignature Vault Account,fill the public key of a  multi signature Standard Account; when creating a single signature Vault Account, leave it blank.
    "delay_height": "100", //delay height of transactions for the Vault Account
    "clear_height": "50000" //clearing height of the account
  }
}
```
%/accordion%

Return example:

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgCreateVault", //Transaction type
                "value":{
                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
                    "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", // the base account to the Vault Account, or the recipient
                    "security_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Retrieval Account
                    "delay_height":"100", //delay height of transactions for the Vault Account
                    "clearing_height":"50000", //clearing height of the account
                    "amount":[
                        {
                            "denom":"NANOGT", //unit
                            "amount":"500000000" //transfer token amount
                        }
                    ],
                    "pubkey":"" //When creating a multisignature Vault Account,fill the public key of a  multi signature Standard Account; when creating a single signature Vault Account, leave it blank.
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //unit
                    "amount":"5000" //fee
                }
            ],
            "gas":"200000" //gas consumed by this transaction
        },
        "signatures":null, //Signature
        "memo":"",
        "valid_height": [ //block height at which the transaction takes effect
            "600",
            "900"
        ] 
    }
}
```
%/accordion%

### Change Clearing Height [command line](../cli/vault-account.md#Change Clearing Height-api)

######The interface generates transaction body  for “ Change Clearing Height”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.
```
POST /v1/vault-account/update-clearing-height
```

Request BODY example：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //sender account
    "memo": "", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
    "chain_id": "testnet", //chain ID
    "gas": "200000", //gas consumed by this transaction
    "fees": [
      {
        "denom": "NANOGT", //unit
        "amount": "5000" //fee
      }
    ],
    "simulate": false, //if calculate simulated gas?
    "valid_height": [ //block height at which the transaction takes effect
         "600",
         "900"
   ] 
  },
  "clearing_height": "6200" //new clearing height
}
```
%/accordion%

Return example：

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgUpdateClearingHeight", //Transaction type
                "value":{
                    "vault_address":"vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", //sender account
                    "clearing_height":"6200" //new clearing height
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //unit
                    "amount":"5000" //fee
                }
            ],
            "gas":"200000" //gas consumed by the transaction
        },
        "signatures":null, //Signature
        "memo":"",
    	 "valid_height": [ //block height at which the transaction takes effect
           "600",
           "900"
   		] 
    }
}
```
%/accordion%

### Clear Account Transaction [command line](../cli/vault-account.md# Clear Account Transaction-api)

######The interface generates transaction body  for “ Clear Account Transaction”.After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting.
```
POST /v1/vault-account/clear
```

Request BODY example：

%accordion%json%accordion%

```
{
    "base_req": {
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account，which is the Retrieval Account to the Vault Account
    "memo": "", //transaction remarks
    "chain_id": "testnet", //chain ID
    "gas": "200000", //gas consumed by this transaction
    "fees": [ 
      {
        "denom": "NANOGT", //unit
        "amount": "5000" //fee
      }
    ],
    "simulate": false, //if calculate simulated gas?
    "valid_height": [ //block height at which the transaction takes effect
         "600",
         "900"
   ] 
  },
  "vaults": ["vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6"] //Vault Account address
}
```
%/accordion%

Return example：

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgClearVaultAccount", //Transaction type
                "value":{
                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account，which is Retrieval Account to the Vault Account
                    "vault_address":[
                        "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6" //Vault Account
                    ]
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //unit
                    "amount":"5000" //fee
                }
            ],
            "gas":"200000" //gas consumed by this transaction
        },
        "signatures":null, //Signature
        "memo":"",
        "valid_height": [ //block height at which the transaction takes effect
            "600",
            "900"
        ] 
    }
}
```
%/accordion%

###Query A Vault Account Information [command line](../cli/vault-account.md#Query A Vault Account Information-api)
```
GET  /v1/vault-account/{address}
```
Parameters：

| Parameter | Description |
| :----| :---- |
| address | Vault Account |

Return example:

%accordion%json%accordion%

```
{
    "height": "4618", //block height
    "result": {
        "type": "AccountResp",
        "value": {
            "account_field": {
                "type": "VaultAccount",
                "value": {
                    "base_account": {
                        "account_number": "12",
                        "address": "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6", /Vault Account
                        "public_key": {
                            "type": "gatechain/PubKeyEd25519",
                            "value": "IK8RZV4tqj/m/s9eEY9agWXF42yA5U3s31Q0D6Zp1rI="
                        },
                        "sequence": "0",
                        "tokens": [
                            {
                                "amount": "9889", //account balance
                                "denom": "NANOGT" //unit
                            }
                        ]
                    },
                    "clearing_height": {
                        "last_clearing_effect_height": "0", //transaction height when set up clearing height last time
                        "last_clearing_height": "0", //clearing height set last time
                        "next_clearing_effect_height": "3693", //transaction height when set up  new clearing height
                        "next_clearing_height": "100000" //new clearing height
                    },
                    "delay_height": "100", //delay height before a transaction takes effect
                    "received_revocable_tokens": null, //token that can be revoked
                    "security_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //Retrieval Account
                    "sent_revocable_tokens": [], //token sent and revocable
                    "vault_address": null //Vault Account 
                }
            },
            "account_type": 1 //account type：0.ingle signature Standard Account,1.single signature Vault Account,2.multisignature Standard Account,3.multisignature Vault Account 
        }
    }
}
```
%/accordion%


### Query All Revocable Transactions At A Vault Account [command line](../cli/revocable-tx.md#Query A List of Revocable Transactions At A Vault Account-api)
```
GET  /v1/vault-account/list-revocable-txs/{vault-account}
```
Parameters:

| Parameter | Description |
| :----| :---- |
| vault-account | Vault Account |

Return example：

%accordion%json%accordion%

```
{
    "height":"6947", //block height
    "result":[
        {
            "height":"6947", //block height at which  the transaction takes effect
            "msg_index":"0",
            "tokens":[
                {
                    "amount":"5", //transfer token amount
                    "denom":"NANOGT" //unit
                }
            ],
            "tx_hash":"REVOCABLEPAY-BB042E7853D6E32C6F81E0205A3CDD5FDA6545F2A7E92627E50EA19F86EFD6B8" //transaction hash
        }
    ]
}
```
%/accordion%

