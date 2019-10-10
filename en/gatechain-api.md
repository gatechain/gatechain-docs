##GateChain API document

>structural transaction interface provided  in this document
>Parameter must set a transaction fee greater than  0gt
> 
> Any asset amount in command  is converted to  Integer of the Value by multiplying 1E8 
> Asset amount supports scientific notation, e.g.10E18GT stands for 10.0GT


###1 Query the latest block
```
GET /block/latest
```
return:

```
{"block_meta": {......}}
```

---

###2 Query a specific block height
```
GET /block/{height}
```
parameter:

| parameter name | description |
| ----| ---- |
| height | block height（>=1）|

return:

```
{"block_meta": {......}}
```

---

###3 Query a  transaction
```
GET /tx/{hash}
```
parameter:

| parameter name | description |
| ----| ---- |
| hash | transaction HASH |

return:

```
{"height":"...", "tx": {......}...}
```

---

###4 Query a transaction based on criteria
```
GET /tx?sender={sender}&action={action}&recipient={recipient}
```
parameter:

| parameter name | description |
| ----| ---- |
| sender | sender account |
| action | action type |
| recipient | recipient account  |

return:

```
{"type":"...", "value": {......}...}
```

---

###5 Query an account 
```
GET /account/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | account  |

return:

```
{"type":"...", "value": {......}...}
```

---

###6 Query balance of  a specific  account 
```
GET /account/balance/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | account |

return:

```
[{"denom":"...","amount":"..."}]
```

---

###7 Send a transaction
```
POST /tx
```

Request BODY example:

```
{
	"tx": {
		"msg": [{
			"type": "gate/MsgSend",
			"value": {
				"from_address": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
				"to_address": "gt110euwduf3unz9332rsgaxzfyy408yqajvjcsacn",
				"amount": [{
					"denom": "gt",
					"amount": "200000000"
				}]
			}
		}],
		"fee": {
			"amount": null,
			"gas": "200000"
		},
		"signatures": [{
			"pub_key": {
				"type": "tendermint/PubKeySecp256k1",
				"value": "A+33aULKbgRV7bmmb7mEIr6eMu3tkT3GmDKsSm+Tv2tK"
			},
			"signature": "hghJdloTqC6Tcrow9MeAetVlP1ONT0NiRIg8hmsrIGlptmUo3xj8N7VTgKBeDzFTrjwbwuRFnKY6LB+Ox3+QwA=="
		}],
		"memo": ""
	},
	"return": "block"
}
```

parameter:

| parameter name | description |
| ----| ---- |
| return | block：after transaction submitted,return；sync：after CheckTx, return；async：immediate return。 |

return:

```
{"txhash": "..."...}
```

---

###8 Query  a node status 
```
GET /status
```

return:

```
{"channels":"4020212223303800","id":"...."....}
```

---

###9 Normal transaction
```
POST  /tx/send/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | recipient account |

request BODY example：

```
{
	"base_req": {
		"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
		"memo": "",
		"chain_id": "testnet",
		"account_number": "0",
		"sequence": "4",
		"gas": "200000",
		"gas_adjustment": "1.2",
		"fees": [{
			"denom": "gt",
			"amount": "5000"
		}],
		"simulate": false
  	},
  	"amount": [{
		"denom": "gt",
	  	"amount": "5000"
	}]
}
```

return:

```
{"msg": "..."...}
```

---

###10 Create a Vault account
```
POST  /vault-account/create/{base-account}
```
parameter:

| parameter name | description |
| ----| ---- |
| base-account | base account |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "gt",
	  "amount": "5000"
	}
  ],
  "insurance_req":{
	"security": "gt110euwduf3unz9332rsgaxzfyy408yqajvjcsacn",
	"pubkey": "",
	"delay_height": "3600",
	"clear_time": "50000000"
  }
}
```

return:

```
{"msg": "..."...}
```

---

###11 Revocable Transaction
```
POST  /revocable-tx/send/{account}
```
parameter:

| parameter name | description |
| ----| ---- |
| account | recipient account, can be a Standard Account or a vault account |

request BODY example ：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": [
	{
	  "denom": "gt",
	  "amount": "5000"
	}
  ]
}
```

return:

```
{"msg": "..."...}
```

---

###12 Query all revocable transactions  of a Vault Account 
```
GET  /vault-account/list-revocable-txs/{vault-account}
```
parameter:

| parameter name | description |
| ----| ---- |
| vault-account | Vault Account |

return：

```
{"type":"...", "value": {......}...}
```

---

###13 Revoke a Revocable Transaction
```
POST /revocable-tx/revoke/{tx-hash}
```
parameter:

| parameter name | description |
| ----| ---- |
| tx-hash | Revocable Transaction Hash |

request BODY example ：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "index": "0"
}
```

return：

```
{"msg": "..."...}
```

---

###14 Change clearing height
```
POST /vault-account/update-clearing-height
```

request BODY example ：

```
{
  "base_req": {
	"from": "vault11rjac62lz7l7xkak46xq03qdradkju8qu0z0qp2",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "clear_time": "10000000"
}
```

return：

```
{"msg": "..."...}
```

---


###15 Clear transaction
```
POST /vault-account/clear
```

request BODY example ：

```
{
  	"base_req": {
	"from": "vault11lka0de7gqg5eg8un0nax2cpp2clyj24gpge33y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "insurances": ["vault11lka0de7gqg5eg8un0nax2cpp2clyj24gpge33y"]
}
```

return：

```
{"msg": "..."...}
```

---


###16 Multisig Standard Account /Vault Account transfer transaction

* Building a transaction in Multisig Standard Account is the same with a Standard Account. See interface 9
* Building a transaction in Multisig Vault Account is the same with a Vault Account. See interface 11,13,14, and 15
* when a transaction is built, multiple sign it offline (see details at related multisig command line operations )
* and then broadcast the signed transaction. See interface 7


---


###17 Issue token
```
POST  /token/issue/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "token_name": "test token",
  "total_supply": "1000000000000000000",
  "mintable": false
}
```

return：

```
{"msg": "..."...}
```

---


###18 Query token issuance status
```
GET  /token/show-issue/{issue-tx-id}
```
parameter:

| parameter name | description |
| ----| ---- |
| issue-tx-id | token issue transaction Hash |

return：

```
{"value":"...","type":"..."...}
```

---

    
###19 Query token
```
GET  /token/show/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

return：

```
{"value":"...","type":"..."...}
```

---


###20 Issue additional token
```
POST /token/mint/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "amount": "1000000000000000"
}
```

return：

```
{"value":"...","type":"..."...}
```

---


###21 Freeze token
```
POST /token/freeze/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
}
```

return：

```
{"msg": "..."...}
```

---

###22 Unfreeze token
```
POST /token/unfreeze/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
}
```

return：

```
{"msg": "..."...}
```

---

###23 Burn token 
```
POST /token/burn/{symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
	"base_req": {
		"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
		"memo": "",
		"chain_id": "testnet",
		"account_number": "0",
		"sequence": "4",
		"gas": "200000",
		"gas_adjustment": "1.2",
		"fees": [{
			"denom": "gt",
			"amount": "5000"
		}],
		"simulate": false
	},
	"amount": "1000000000000000"
}
```

return：

```
{"msg": "..."...}
```

---

###24 Query all tokens
```
GET  /token/list
```

return：

```
{"issues": ["..."]}
```

---

###25 Publish a trading pair
```
POST /trading-pair/publish
```
parameter:

| parameter name | description |
| ----| ---- |
| symbol | token symbol |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "proposal_id": "1",
  "base_symbol": "gt",
  "quote_symbol": "aaa-bf5"
}
```

return：

```
{"msg": "..."...}
```

---

 
###26 Query a trading pair 
```
GET /trading-pair/{base-symbol}/{quote-symbol}
```
parameter:

| parameter name | description |
| ----| ---- |
| base-symbol | base token symbol |
| quote-symbol | quote token symbol |

return：

```
{"result": true}
```

---


###27 Submit a proposal
```
POST /proposal/submit
```

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "title": "string",
  "description": "string",
  "proposal_type": "text",
  "proposer": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "initial_deposit": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ]
}
```

return：

```
{"msg": "..."...}
```

---


###28 Query  a proposal
```
GET /proposal/{proposal-id}
```
parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | Proposal serial number |

return：

```
{"proposal_content":"...","proposal_id":"..."...}
```

---

###29 submit  a trading pair proposal
```
POST  /trading-pair/proposal/submit
```

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "title": "string",
  "description": "string",
  "proposal_type": "TradingList",
  "proposer": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "initial_deposit": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ],
  "base_symbol":"aaa-df4",
  "quote_symbol":"gt",
  "init_price":"10000000000",
  "expire_time":"5046546",
  "voting_period":"4555"
}
```

return：

```
{"msg": "..."...}
```

---
	
###30 staking for proposal
```
POST  /proposal/deposit/{proposal-id}
```

parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | proposal serial number |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "depositor": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "amount": [
	{
	  "denom": "gt",
	  "amount": "50"
	}
  ]
}
```

return：

```
{"msg": "..."...}
```

---


###31 Vote for proposal
```
POST  /proposal/vote/{proposal-id}
```

parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | proposal serial number |

request BODY example ：

```
{
  "base_req": {
	"from": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
	"memo": "",
	"chain_id": "testnet",
	"account_number": "0",
	"sequence": "4",
	"gas": "200000",
	"gas_adjustment": "1.2",
	"fees": [
	  {
		"denom": "gt",
		"amount": "5000"
	  }
	],
	"simulate": false
  },
  "voter": "gt11a8jhycg9hwgnk7nzr60hxe4s7q30x7jgm5lr9y",
  "option": "yes"
}
```

return：

```
{"msg": "..."...}
```

---

###32 Query proposal  staking status
```
GET  /proposal/deposit/show/{proposal-id}
```

parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | proposal serial number |

return：

```
[{"amount":"...","proposal_id":"..."...}...]
```

---

###33 Query proposal  voting status
```
GET  /proposal/vote/show/{proposal-id}
```

parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | proposal serial number |

return：

```
[{"voter":"...","proposal_id":"..."...}...]
```

---

###34 Submit a foundation modification proposal
```
POST  /foundation/proposal/submit
```
**Note:  rest interface only provides functions to create a foundation modification proposal transaction. Submitting  the proposal transaction  needs offline signing and  then  broadcasting using interface 7 to send the transaction with signatures. **

request BODY example ：

```
{
     	"base_req": {
     		"from": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
     		"memo": "",
     		"chain_id": "testnet",
     		"account_number": "0",
     		"sequence": "1",
     		"gas": "200000",
     		"gas_adjustment": "1.2",
     		"fees": [{
     			"denom": "gt",
     			"amount": "50"
     		}],
     		"simulate": false
     	},
     	"title": "Test Foundation Proposal",
     	"description": "foundation newe scheme",
     	"proposal_type": "foundation",
     	"proposer": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
     	"initial_deposit": [{
     		"denom": "gt",
     		"amount": "50"
     	}],
     	"extra": "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
     }

```

return example：

```    
{
	"type": "auth/StdTx",
	"value": {
		"msg": [{
			"type": "gate/MsgSubmitProposal",
			"value": {
				"title": "Test Foundation Proposal",
				"description": "foundation newe scheme",
				"proposal_type": "Foundation",
				"proposer": "gt11dpea5pjvfhgezjar32aduwlf9ydlwgvwnmmq5q",
				"initial_deposit": [{
					"denom": "gt",
					"amount": "50"
				}],
				"extra": "{\"member_scheme\":[{\"deal_address\":\"gt11le7mk4k0c8ye7r3pw0wapg83v7rgw706zuq2nk\",\"deal_proportion\":\"12\",\"deal_type\":\"insert\"},{\"deal_address\":\"gt11fd0zlkskwpfx73nm5n5et5tqphuxegkpax9hqt\",\"deal_proportion\":\"1\",\"deal_type\":\"delete\"},{\"deal_address\":\"gt113g4ht8mvrw9meqjyf2xd4e4hp7yu865x5q5csu\",\"deal_proportion\":\"1\",\"deal_type\":\"update\"}]}"
			}
		}],
		"fee": {
			"amount": [{
				"denom": "gt",
				"amount": "50"
			}],
			"gas": "200000"
		},
		"signatures": null,
		"memo": ""
	}
}
```

---

###34 Confirm a foundation modification proposal
```
POST  /foundation/proposal/confirm/{proposal-id}
```

parameter:

| parameter name | description |
| ----| ---- |
| proposal-id | proposal serial number |

**Note:  rest interface only provides functions to create a foundation modification proposal transaction. Submitting  the transaction  needs offline signing and  then  broadcasting using interface 1.6 to send the transaction with signatures. **
        
request BODY example 

```        
{
  	"base_req": {
  		"from": "gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0",
  		"memo": "",
  		"chain_id": "testnet",
  		"account_number": "0",
  		"sequence": "1",
  		"gas": "200000",
  		"gas_adjustment": "1.2",
  		"fees": [{
  			"denom": "gt",
  			"amount": "50"
  		}],
  		"simulate": false
  	},
  	"confirmer":"gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0"
  }
```

return  example:

```    
{
    "type":"auth/StdTx",
    "value":{
        "msg":[
            {
                "type":"gate/MsgConfirmFoundationProposal",
                "value":{
                    "proposal_id":"1",
                    "from_address":"gt11j6rg5xjytecfrqglgp9nfrh3pvlp595lrdz7c0"
                }
            }
        ],
        "fee":{
            "amount":[
                {
                    "denom":"gt",
                    "amount":"50"
                }
            ],
            "gas":"200000"
        },
        "signatures":null,
        "memo":""
    }
}
```

---

###35 Query foundation members
```
GET  /foundation/distribution
```

return  example:

```     
{
     "reward":"0.020000000000000000",
     "max_members":"20",
     "members":[
         {
             "address":"gt11e53svtfsjknalpucu3r9gn2c9vfy59ll5nqmte",
             "proportion":"2",
             "funds_pool":[
                 {
                     "denom":"gt",
                     "amount":"0.800000000000000001"
                 }
             ]
         },
         {
             "address":"gt11657rsnh95jyvy6qerghe0trkkwp9ut3zskxg26",
             "proportion":"1",
             "funds_pool":[
                 {
                     "denom":"gt",
                     "amount":"0.399999999999999999"
                 }
             ]
         }
     ]
}
```

---


###36 Transaction information stored at an decentralized exchange
```
POST  /dex/trade
```

request BODY example ：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "trade" : {
        "tradeid" : "100000",
        "market" : "validatortoken_gt",
        "maker-orderid" : "3",
        "maker-nonce" : "1",
        "maker-pubkey" : "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "maker-side" : "buy",
        "maker-amount" : "1000validatortoken",
        "maker-price" : "1gt",
        "maker-sign" : "deae06a585193aaa29305f215040c9004c9b818e211963e0387bfda5909f97643d26fddd93f60263d142aacb6c0498d22c1e0b647a87f342fd215277f0033952",
        "maker-time" : "1566894567",
        "taker-orderid" : "4",
        "taker-nonce" : "1",
        "taker-pubkey" : "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
        "taker-side" : "sell",
        "taker-amount" : "1000validatortoken",
        "taker-price" : "1gt",
        "taker-sign" : "c384d31098f317863e682756e9cdbaa5ae88c43a002f2624a0f530c9d98d862932470c0eff946331de326c11905c04d27ddb72883e64961bae8ab7b872f0d58d",
        "taker-time" : "1566894567",
        "price" : "1gt",
        "amount" : "10validatortoken",
        "maker-add-amount" : "10validatortoken",
        "maker-sub-amount" : "10gt",
        "maker-fee" : "1validatortoken",
        "taker-fee" : "1gt",
        "taker-gas" : "1gt"
    }
}
```
    
return  example:

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgTrade",
        "value": {
          "Trade": {
            "amount": {
              "amount": "10",
              "denom": "validatortoken"
            },
            "maker-add-amount": {
              "amount": "10",
              "denom": "validatortoken"
            },
            "maker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "maker-fee": {
              "amount": "1",
              "denom": "validatortoken"
            },
            "maker-nonce": "1",
            "maker-orderid": "3",
            "maker-price": {
              "amount": "1",
              "denom": "gt"
            },
            "maker-pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "maker-side": "buy",
            "maker-sign": "3q4GpYUZOqopMF8hUEDJAEybgY4hGWPgOHv9pZCfl2Q9Jv3dk/YCY9FCqstsBJjSLB4LZHqH80L9IVJ38AM5Ug==",
            "maker-sub-Amount": {
              "amount": "10",
              "denom": "gt"
            },
            "maker-time": "2019-08-27T08:29:27Z",
            "market": "validatortoken_gt",
            "price": {
              "amount": "1",
              "denom": "gt"
            },
            "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "taker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "taker-fee": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-gas": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-nonce": "1",
            "taker-orderid": "4",
            "taker-price": {
              "amount": "1",
              "denom": "gt"
            },
            "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
            "taker-side": "sell",
            "taker-sign": "w4TTEJjzF4Y+aCdW6c26pa6IxDoALyYkoPUwydmNhikyRwwO/5RjMd4ybBGQXATSfdtyiD5klhuuire4cvDVjQ==",
            "taker-time": "2019-08-27T08:29:27Z",
            "time": "2019-09-03T09:56:15.735800663Z",
            "tradeid": "100000"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---


###37 Deposit token to an decentralized exchange from an account
```
POST  /dex/deposit
```

request BODY example ：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "topup" : {
        "to" : "gt1pub1addwnpepqg4gte9hx5ge9jqp0m0z5k42j3t3d0sjuyughtc2p5l8f0vfas2s6r4c2td",
        "amount" : "10gt"
    }
}
```    

return  example:

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgTopUp",
        "value": {
          "TopUp": {
            "amount": [
              {
                "amount": "10",
                "denom": "gt"
              }
            ],
            "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "to": "gt1pub1addwnpepqg4gte9hx5ge9jqp0m0z5k42j3t3d0sjuyughtc2p5l8f0vfas2s6r4c2td"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###38 Withdraw token from an decentralized exchange
```
POST  /dex/withdraw
```

**only admin has the privilege to execute this operation.**

request BODY example ：

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "withdraw" : {
        "pubkey" : "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "coin" : "10gt",
        "nonce" : "2",
        "time" : "1563183005",
        "sign" : "45274cf1e0aa5d0582ecb9961f66384270146b2a16b43d8965d90c5270f2cf8f7af86b000d33f77c63a8862d113251c64cdb5f2921c3bbf1d3215709327942c7",
        "gas" : "1gt"
    }
}
```

return  example:

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgWithdraw",
        "value": {
          "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
          "gas": {
            "amount": "1",
            "denom": "gt"
          },
          "withdraw": {
            "coin": {
              "amount": "10",
              "denom": "gt"
            },
            "nonce": "2",
            "pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "sign": "RSdM8eCqXQWC7LmWH2Y4QnAUayoWtD2JZdkMUnDyz496+GsADTP3fGOohi0RMlHGTNtfKSHDu/HTIVcJMnlCxw==",
            "time": "2019-07-15T09:30:05Z"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###39 Setup an admin account at decentralized exchange 
```
POST  /dex/set-admin
```

**only  an existing admin has the privilege to setup a new admin.**

request BODY example ：

```
{
    "base_req": {
        "from": "gt11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
        "chain_id" : "testing"
    },
    "setacc" : {
        "acc" : "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "type": "admin"
    }
}
```
    
return  example:

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": null,
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgAcc",
        "value": {
          "SetAccInfo": {
            "acc": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "from": "gt11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
            "typ": "admin"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

---

###40 Query a trade information at decentralized exchange 
```
GET		/dex/query-trade/{trade-id}
```
parameter:

| parameter name | description |
| ----| ---- |
| trade-id | trade ID |
    
return  example:

```
{
   "type": "dex/Trade",
   "value": {
     "tradeid": "100001",
     "market": "validatortoken-1e9_gt",
     "maker-orderid": "5",
     "maker-nonce": "2",
     "maker-pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
     "maker-side": "buy",
     "maker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "maker-price": {
       "denom": "gt",
       "amount": "1"
     },
     "maker-sign": "dAjjeMv6hh1p6LM3UfY+N4iUJ/kdxtkNBM8vhpkox7R4e1UKN2ONrxsJSec+rwQdDC5+rBKaEludxMuRGNzG1g==",
     "maker-time": "2019-08-27T08:29:27Z",
     "taker-orderid": "6",
     "taker-nonce": "2",
     "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
     "taker-side": "sell",
     "taker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "taker-price": {
       "denom": "gt",
       "amount": "1"
     },
     "taker-sign": "ZGWMCR7PjGs3p808dxhrKtflFvIDMbvfkVketvUgjptVWsZpg+H6xzZWT4FYOYwWLkQ/2ZKQqgwrt4Mg8wgUgw==",
     "taker-time": "2019-08-27T08:29:27Z",
     "price": {
       "denom": "gt",
       "amount": "1"
     },
     "amount": {
       "denom": "validatortoken-1e9",
       "amount": "10"
     },
     "maker-add-amount": {
       "denom": "validatortoken-1e9",
       "amount": "10"
     },
     "maker-sub-Amount": {
       "denom": "gt",
       "amount": "10"
     },
     "maker-fee": {
       "denom": "validatortoken-1e9",
       "amount": "1"
     },
     "taker-fee": {
       "denom": "gt",
       "amount": "1"
     },
     "taker-gas": {
       "denom": "gt",
       "amount": "1"
     },
     "time": "2019-09-03T03:49:17.782624089Z",
     "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja"
   }
 }
```

---


###41 Query all accounts information at decentralized exchange 
```
GET /dex/query-account/{dex-account}
```
parameter:

| parameter name | description |
| ----| ---- |
| dex-account | DEX account |

return示例：

```
[{
	"denom": "gt",
	"amount": "1090"
},
{
	"denom": "validatortoken-1e9",
	"amount": "1009"
}]
```

---

###42 Query admin information at decentralized exchange 
```
GET /dex/query-admin/{admin-type}
```
parameter:

| parameter name | description |
| ----| ---- |
| admin-type| owner/admin/fee |

return示例：

```
{
	"type": "dex/SetAccInfo",
	"value": {
		"typ": "fee",
 		"acc": "gt11uqyqvmzwvqprv50x73lkzkxlgm9mw3fr7u003y",
 		"from": ""
	}
}
```

###43 Publish multisig account 
```
GET /account/publish-multisig/{address}
```
request BODY example ：

```
{
  "base_req": {
    "from": "gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
    "memo": "",
    "chain_id": "testnet",
    "account_number": "0",
    "sequence": "1",
    "gas": "200000",
    "gas_adjustment": "1.2",
    "fees": [
      {
        "denom": "gt",
        "amount": "2"
      }
    ],
    "simulate": false
  },
  "pubkey":"gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2"
}
```

return  example:

```
{
    "type": "auth/StdTx",
    "value": {
        "fee": {
            "amount": [
                {
                    "amount": "2",
                    "denom": "gt"
                }
            ],
            "gas": "200000"
        },
        "memo": "",
        "msg": [
            {
                "type": "gate/MsgPublishMultiSigAccount",
                "value": {
                    "from_address": "gt11kw7pdgxxxdvgaunznjf7xj88scljk0tr7cnddr",
                    "pubkey": "gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2",
                    "to_address": "gt11za9h6j2j98p953hu60mm2a609uj5ujrnget43k"
                }
            }
        ],
        "signatures": null
    }
}
```
