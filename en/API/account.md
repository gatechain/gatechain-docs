
### Query Account Information  [command line](../cli/account.md#Query Account Information-api)
  
```
GET /v1/account/{account}
```
Parameters:

| Parameter |Description|
| :---- | :---- |
| account | account |

Return example:

%accordion%json%accordion%
```
{
    "height":"5129", //block height
    "result":{
        "type":"AccountResp",
        "value":{
            "account_field":{
                "type":"VaultAccount",
                "value":{
                    "base_account":{
                        "account_number":"7", //account serial number
                        "address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //account address
                        "public_key": {
                            "type": "gatechain/PubKeyEd25519",
                            "value": "99gGX+9YCUV26rE+V/54v2graA/b4xKeqaYGOr6wWTU="
                        },                        
                        "sequence":"4",
                        "tokens":[
                            {
                                "amount":"89999999999999880", //account balance
                                "denom":"NANOGT" //unit
                            }
                        ]
                    },
                    "clearing_height":{ //clearing height of the account,  the value is only for  Vault Account. 
                        "last_clearing_effect_height":"0", //transaction height when setting clearing height last time
                        "last_clearing_height":"0", //clearing height set last time
                        "next_clearing_effect_height":"0", //transaction height when setting  the new clearing height 
                        "next_clearing_height":"0" //the new clearing height
                    },
                    "delay_height":"0", //delay height before a transaction takes effect for the Vault Account
                    "received_revocable_tokens":null, //token still can be revoked 
                    "security_address":"", //Retrieval Account
                    "sent_revocable_tokens":null, //token sent and revocable
                    "vault_address":[
                        "vault112t7hfsmd63a2nz0vwqhpy3msd98vvl35qeuej2uavh2ssjls4f8amqtwgpq3pwksgdqfe6" //Vault Account address,  a value in this field indicates that the  account queried is the Retrieval Account of the Vault Account 
                    ]
                }
            },
            "account_type":0 //Account Type：0.Single Signature Standard Account,1.Single Signature Vault Account, 2.Multisignature Standard Account,3.Multisignature Vault Account
        } 
    }
}
```
%/accordion%


### Query Balance [command line](../cli/account.md#Query Balance-api)
```
GET /v1/account/balance/{account}
```
Parameters:

| Parameter |Description|
| :----| :---- |
| account | account |

Return example:

%accordion%json%accordion%

```
{
    "height":"5483", //block height
    "result":[
        {
            "amount":"8999999989968", //account balance
            "denom":"NANOGT" //unit
        },
    ]
}
```
%/accordion%


### Publish A Multisignature  Account[command line](../cli/account.md#Publish A Multisignature  Account-api)

######This interfaces generates  the transaction body of “publishing a multisignature  account”. After locally  signing it, you can invoke “Send Transaction” interface to finish broadcasting. 
```
POST /v1/account/publish-multisig/{address}
```
Request BODY example：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //sender account
    "memo": "",//transaction remarks
    "chain_id": "testnet",//chain ID
    "gas": "200000",//gas consumed by the transaction
    "fees": [
      {
        "denom": "NANOGT", //unit
        "amount": "20" // fee
      }
    ],
    "simulate": false, //whether calcuate  simulated  gas 
    "valid_height": [ //height when a tranasction takes effect
          "600",
          "900"
    ] 
  },
  "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2" //multisignature account public key
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
                "type":"MsgPublishMultiSigAccount", //transaction type
                "value":{
                    "from_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //Sender account
                    "to_address":"gt11ja8j8qskxvccwf3rchp9efxjdu6v5wfkj5uwu4cmktue7h7ufjwqlgqs9ja64xj9kgd5zj", //multisignature account 
						"pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2" //multisignature account public key
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGT", //unit
                    "amount":"20" //fee
                }
            ],
            "gas":"200000" //gas consumed by the transaction
        },
        "signatures":null, //Signature
        "memo":"",
        "valid_height": [ //height when a tranasction takes effect
           "600",
           "900"
        ] 
    }
}
```
%/accordion%


