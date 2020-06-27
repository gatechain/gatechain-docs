
### Trades Information Stored At Decentralized Exchange

```
POST  /dex/trade
```

request BODY example:

%accordion%json%accordion%

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
        "maker-price" : "1NANOGT",
        "maker-sign" : "deae06a585193aaa29305f215040c9004c9b818e211963e0387bfda5909f97643d26fddd93f60263d142aacb6c0498d22c1e0b647a87f342fd215277f0033952",
        "maker-time" : "1566894567",
        "taker-orderid" : "4",
        "taker-nonce" : "1",
        "taker-pubkey" : "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gtnty5q7rrgzy",
        "taker-side" : "sell",
        "taker-amount" : "1000validatortoken",
        "taker-price" : "1NANOGT",
        "taker-sign" : "c384d31098f317863e682756e9cdbaa5ae88c43a002f2624a0f530c9d98d862932470c0eff946331de326c11905c04d27ddb72883e64961bae8ab7b872f0d58d",
        "taker-time" : "1566894567",
        "price" : "1NANOGT",
        "amount" : "10validatortoken",
        "maker-add-amount" : "10validatortoken",
        "maker-sub-amount" : "10NANOGT",
        "maker-fee" : "1validatortoken",
        "taker-fee" : "1NANOGT",
        "taker-gas" : "1NANOGT"
    }
}
```
%/accordion%


Return  example:

%accordion%json%accordion%

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
              "denom": "NANOGT"
            },
            "maker-pubkey": "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "maker-side": "buy",
            "maker-sign": "3q4GpYUZOqopMF8hUEDJAEybgY4hGWPgOHv9pZCfl2Q9Jv3dk/YCY9FCqstsBJjSLB4LZHqH80L9IVJ38AM5Ug==",
            "maker-sub-Amount": {
              "amount": "10",
              "denom": "NANOGT"
            },
            "maker-time": "2019-08-27T08:29:27Z",
            "market": "validatortoken_gt",
            "price": {
              "amount": "1",
              "denom": "NANOGT"
            },
            "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "taker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "taker-fee": {
              "amount": "1",
              "denom": "NANOGT"
            },
            "taker-gas": {
              "amount": "1",
              "denom": "NANOGT"
            },
            "taker-nonce": "1",
            "taker-orderid": "4",
            "taker-price": {
              "amount": "1",
              "denom": "NANOGT"
            },
            "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gtnty5q7rrgzy",
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
%/accordion%


### Deposit Token to A Decentralized Exchange From An Account
```
POST  /dex/deposit
```

request BODY example:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "fees":[
            {
                "amount":"2000",
                "denom":"NANOGT"
            }
        ],
        "chain_id":"testing"
    },
    "deposit":{
        "to":"gt11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp",
        "amount":"10NANOGT"
    }
}
```    
%/accordion%

Return  example:

%accordion%json%accordion%

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "NANOGT"
        }
      ],
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgDeposit",
        "value": {
          "Deposit": {
            "amount": [
              {
                "amount": "10",
                "denom": "NANOGT"
              }
            ],
            "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "to": "gt11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

%/accordion%


### Withdraw Token From An Decentralized Exchange
```
POST  /dex/withdraw
```

**only admin has the permission to execute this operation.**

request BODY example:

%accordion%json%accordion%

```
{
    "base_req": {
        "from": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "withdraw" : {
        "pubkey" : "gt1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "coin" : "10NANOGT",
        "nonce" : "2",
        "time" : "1563183005",
        "sign" : "45274cf1e0aa5d0582ecb9961f66384270146b2a16b43d8965d90c5270f2cf8f7af86b000d33f77c63a8862d113251c64cdb5f2921c3bbf1d3215709327942c7",
        "gas" : "1NANOGT"
    }
}
```
%/accordion%

Return  example:

%accordion%json%accordion%

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
            "denom": "NANOGT"
          },
          "withdraw": {
            "coin": {
              "amount": "10",
              "denom": "NANOGT"
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
%/accordion%

### Setup Admin Account at Decentralized Exchange 
```
POST  /dex/set-admin
```

**only  an existing admin has the permission to setup a new admin.**

request BODY example:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
        "fees":[
            {
                "amount":"2000",
                "denom":"NANOGT"
            }
        ],
        "chain_id":"testing"
    },
    "setadmin":{
        "acc":"gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "type":"admin"
    }
}
```
%/accordion%
    
Return  example:

%accordion%json%accordion%

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "NANOGT"
        }
      ],
      "gas": "200000"
    },
    "memo": "",
    "msg": [
      {
        "type": "dex/MsgAdmin",
        "value": {
          "SetAdminInfo": {
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

%/accordion%


### Query A Trade Information At Decentralized Exchange 
```
GET		/dex/query-trade/{trade-id}
```
Parameters:

| Parameter| Description |
| :----| :---- |
| trade-id | transaction ID|
    
Return  example:

%accordion%json%accordion%

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
       "denom": "NANOGT",
       "amount": "1"
     },
     "maker-sign": "dAjjeMv6hh1p6LM3UfY+N4iUJ/kdxtkNBM8vhpkox7R4e1UKN2ONrxsJSec+rwQdDC5+rBKaEludxMuRGNzG1g==",
     "maker-time": "2019-08-27T08:29:27Z",
     "taker-orderid": "6",
     "taker-nonce": "2",
     "taker-pubkey": "gt1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gtnty5q7rrgzy",
     "taker-side": "sell",
     "taker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "taker-price": {
       "denom": "NANOGT",
       "amount": "1"
     },
     "taker-sign": "ZGWMCR7PjGs3p808dxhrKtflFvIDMbvfkVketvUgjptVWsZpg+H6xzZWT4FYOYwWLkQ/2ZKQqgwrt4Mg8wgUgw==",
     "taker-time": "2019-08-27T08:29:27Z",
     "price": {
       "denom": "NANOGT",
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
       "denom": "NANOGT",
       "amount": "10"
     },
     "maker-fee": {
       "denom": "validatortoken-1e9",
       "amount": "1"
     },
     "taker-fee": {
       "denom": "NANOGT",
       "amount": "1"
     },
     "taker-gas": {
       "denom": "NANOGT",
       "amount": "1"
     },
     "time": "2019-09-03T03:49:17.782624089Z",
     "sender": "gt11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja"
   }
 }
```

%/accordion%


### Query Account Information At Decentralized Exchange 
```
GET /dex/query-account/{dex-account}
```
Parameters:

| Parameter| Description |
| :----| :---- |
| dex-account | DEX Account |

Return  example:

%accordion%json%accordion%

```
[{
	"denom": "NANOGT",
	"amount": "1090"
},
{
	"denom": "validatortoken-1e9",
	"amount": "1009"
}]
```

%/accordion%

### Query Admin Information At Decentralized Exchange 
```
GET /dex/query-admin/{admin-type}
```
Parameters:

| Parameter| Description |
| :----| :---- |
| admin-type| owner/admin/fee |

Return  example:

%accordion%json%accordion%

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
%/accordion%
