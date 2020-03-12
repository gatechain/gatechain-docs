
### 去中心化交易所存储交易信息
```
POST  /dex/trade
```

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req": {
        "from": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "trade" : {
        "tradeid" : "100000",
        "market" : "validatortoken_gc",
        "maker-orderid" : "3",
        "maker-nonce" : "1",
        "maker-pubkey" : "gc1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "maker-side" : "buy",
        "maker-amount" : "1000validatortoken",
        "maker-price" : "1gc",
        "maker-sign" : "deae06a585193aaa29305f215040c9004c9b818e211963e0387bfda5909f97643d26fddd93f60263d142aacb6c0498d22c1e0b647a87f342fd215277f0033952",
        "maker-time" : "1566894567",
        "taker-orderid" : "4",
        "taker-nonce" : "1",
        "taker-pubkey" : "gc1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
        "taker-side" : "sell",
        "taker-amount" : "1000validatortoken",
        "taker-price" : "1gc",
        "taker-sign" : "c384d31098f317863e682756e9cdbaa5ae88c43a002f2624a0f530c9d98d862932470c0eff946331de326c11905c04d27ddb72883e64961bae8ab7b872f0d58d",
        "taker-time" : "1566894567",
        "price" : "1gc",
        "amount" : "10validatortoken",
        "maker-add-amount" : "10validatortoken",
        "maker-sub-amount" : "10gc",
        "maker-fee" : "1validatortoken",
        "taker-fee" : "1gc",
        "taker-gas" : "1gc"
    }
}
```
%/accordion%


返回：

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
              "denom": "gc"
            },
            "maker-pubkey": "gc1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
            "maker-side": "buy",
            "maker-sign": "3q4GpYUZOqopMF8hUEDJAEybgY4hGWPgOHv9pZCfl2Q9Jv3dk/YCY9FCqstsBJjSLB4LZHqH80L9IVJ38AM5Ug==",
            "maker-sub-Amount": {
              "amount": "10",
              "denom": "gc"
            },
            "maker-time": "2019-08-27T08:29:27Z",
            "market": "validatortoken_gc",
            "price": {
              "amount": "1",
              "denom": "gc"
            },
            "sender": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "taker-amount": {
              "amount": "1000",
              "denom": "validatortoken"
            },
            "taker-fee": {
              "amount": "1",
              "denom": "gc"
            },
            "taker-gas": {
              "amount": "1",
              "denom": "gc"
            },
            "taker-nonce": "1",
            "taker-orderid": "4",
            "taker-price": {
              "amount": "1",
              "denom": "gc"
            },
            "taker-pubkey": "gc1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
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


### 账户充代币到去中心化交易所
```
POST  /dex/deposit
```

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "fees":[
            {
                "amount":"2000",
                "denom":"gc"
            }
        ],
        "chain_id":"testing"
    },
    "deposit":{
        "to":"gc11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp",
        "amount":"10gc"
    }
}
```    
%/accordion%

返回：

%accordion%json%accordion%

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "gc"
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
                "denom": "gc"
              }
            ],
            "from": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "to": "gc11wcjrdqhhy9dusftu29dqqqdc25klvcgq7lj3vp"
          }
        }
      }
    ],
    "signatures": null
  }
}
```

%/accordion%


### 从去中心化交易所提取代币
```
POST  /dex/withdraw
```

**只有管理员有权限执行此操作**

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req": {
        "from": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "chain_id" : "testing"
    },
    "withdraw" : {
        "pubkey" : "gc1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
        "coin" : "10gc",
        "nonce" : "2",
        "time" : "1563183005",
        "sign" : "45274cf1e0aa5d0582ecb9961f66384270146b2a16b43d8965d90c5270f2cf8f7af86b000d33f77c63a8862d113251c64cdb5f2921c3bbf1d3215709327942c7",
        "gas" : "1gc"
    }
}
```
%/accordion%

返回：

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
          "from": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
          "gas": {
            "amount": "1",
            "denom": "gc"
          },
          "withdraw": {
            "coin": {
              "amount": "10",
              "denom": "gc"
            },
            "nonce": "2",
            "pubkey": "gc1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
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

### 去中心化交易所设置管理员账户
```
POST  /dex/set-admin
```

**只有现管理员有权限设置新管理员**

请求BODY示例：

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gc11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
        "fees":[
            {
                "amount":"2000",
                "denom":"gc"
            }
        ],
        "chain_id":"testing"
    },
    "setadmin":{
        "acc":"gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
        "type":"admin"
    }
}
```
%/accordion%
    
返回：

%accordion%json%accordion%

```
{
  "type": "auth/StdTx",
  "value": {
    "fee": {
      "amount": [
        {
          "amount": "2000",
          "denom": "gc"
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
            "acc": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja",
            "from": "gc11wc8uc265yfzs3m0xnj0zcsm5th33nhu5qfywds",
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


### 去中心化交易所查询交易信息
```
GET		/dex/query-trade/{trade-id}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| trade-id | 交易ID |
    
返回：

%accordion%json%accordion%

```
{
   "type": "dex/Trade",
   "value": {
     "tradeid": "100001",
     "market": "validatortoken-1e9_gc",
     "maker-orderid": "5",
     "maker-nonce": "2",
     "maker-pubkey": "gc1pub1addwnpepq22grmd2m3q54qfred9hw2s6pj6suereyvdpsjka2jensj5u5uzf7yz0xku",
     "maker-side": "buy",
     "maker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "maker-price": {
       "denom": "gc",
       "amount": "1"
     },
     "maker-sign": "dAjjeMv6hh1p6LM3UfY+N4iUJ/kdxtkNBM8vhpkox7R4e1UKN2ONrxsJSec+rwQdDC5+rBKaEludxMuRGNzG1g==",
     "maker-time": "2019-08-27T08:29:27Z",
     "taker-orderid": "6",
     "taker-nonce": "2",
     "taker-pubkey": "gc1pub1addwnpepqf9ylh4cw2dz24d9qurewjvn80p77kpwef6dyhrrf6l0p7gcnty5q7rrgzy",
     "taker-side": "sell",
     "taker-amount": {
       "denom": "validatortoken-1e9",
       "amount": "1000"
     },
     "taker-price": {
       "denom": "gc",
       "amount": "1"
     },
     "taker-sign": "ZGWMCR7PjGs3p808dxhrKtflFvIDMbvfkVketvUgjptVWsZpg+H6xzZWT4FYOYwWLkQ/2ZKQqgwrt4Mg8wgUgw==",
     "taker-time": "2019-08-27T08:29:27Z",
     "price": {
       "denom": "gc",
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
       "denom": "gc",
       "amount": "10"
     },
     "maker-fee": {
       "denom": "validatortoken-1e9",
       "amount": "1"
     },
     "taker-fee": {
       "denom": "gc",
       "amount": "1"
     },
     "taker-gas": {
       "denom": "gc",
       "amount": "1"
     },
     "time": "2019-09-03T03:49:17.782624089Z",
     "sender": "gc11y6dgh0d94gqraqax7ptaste5c4ya96nyzswsja"
   }
 }
```

%/accordion%


### 去中心化交易所查询账户信息
```
GET /dex/query-account/{dex-account}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| dex-account | DEX账户 |

返回：

%accordion%json%accordion%

```
[{
	"denom": "gc",
	"amount": "1090"
},
{
	"denom": "validatortoken-1e9",
	"amount": "1009"
}]
```

%/accordion%

### 去中心化交易所查询管理员信息
```
GET /dex/query-admin/{admin-type}
```
参数:

| 参数名 | 说明 |
| :----| :---- |
| admin-type| owner/admin/fee |

返回：

%accordion%json%accordion%

```
{
	"type": "dex/SetAccInfo",
	"value": {
		"typ": "fee",
 		"acc": "gc11uqyqvmzwvqprv50x73lkzkxlgm9mw3fr7u003y",
 		"from": ""
	}
}
```
%/accordion%
