### Query an account 

```
GET /account/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | account  |

return:

%accordion%json%accordion%

```
{
    "height":"5129",
    "result":{
        "type":"AccountResp",
        "value":{
            "account_field":{
                "type":"VaultAccount",
                "value":{
                    "base_account":{
                        "account_number":"7",
                        "address":"gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88",
                        "public_key":{
                            "type":"tendermint/PubKeySecp256k1",
                            "value":"Augr+YcqdYO5fN0imCuuHaTrR+3eZTdMIkAbCIIWnB/+"
                        },
                        "sequence":"4",
                        "tokens":[
                            {
                                "amount":"89999999999999880",
                                "denom":"NANOGC"
                            }
                        ]
                    },
                    "clearing_height":{
                        "last_clearing_effect_height":"0",
                        "last_clearing_height":"0",
                        "next_clearing_effect_height":"0",
                        "next_clearing_height":"0"
                    },
                    "delay_height":"0",
                    "received_revocable_tokens":null,
                    "security_address":"",
                    "sent_revocable_tokens":null,
                    "vault_address":[
                        "vault11c7geh5zs34nwct7chmyda8prl8e2jsyuvt9r49"
                    ]
                }
            },
            "account_type":0
        }
    }
}
```

%/accordion%

### Query balance of  a specific  account 

```
GET /account/balance/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | account |

return:

%accordion%json%accordion%

```
{
    "height":"5483",
    "result":[
        {
            "amount":"8999999989968",
            "denom":"NANOGC"
        },
    ]
}
```

%/accordion%

### Publish multisig account 

```
GET /account/publish-multisig/{address}
```
request BODY example ：

%accordion%json%accordion%

```
{
  "base_req": {
    "from": "gc11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "1",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "NANOGC",
        "amount": "2"
      }
    ],
    "simulate": false
  },
  "pubkey":"gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
}
```

%/accordion%

return  example:

%accordion%json%accordion%

```
{
    "type":"StdTx",
    "value":{
        "msg":[
            {
                "type":"MsgPublishMultiSigAccount",
                "value":{
                    "from_address":"gc11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
                    "to_address":"gc11zpxee6l20jnprfqgctas2tnw7xvwqpv3z0lyz8",
						"pubkey":"gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"NANOGC",
                    "amount":"2"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":"",
        "valid_height":null
    }
}
```

%/accordion%