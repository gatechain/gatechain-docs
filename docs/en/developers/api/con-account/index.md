
### <span id="Query-Consensus-Account-List">Query Consensus Accounts List [command line](../../cli/con-account/index.md#query-consensus-account-list-api)</span>

```
GET /v1/staking/con-accounts
```

::: details Return example:
	{
	    "height": "5203", //block height
	    "result": [
	        {
	            "commission": {
	                "commission_rates": {
	                    "max_change_rate": "0.000000000000000000", //max commission rate change 
	                    "max_rate": "0.000000000000000000", /max commission rate 
	                    "rate": "0.000000000000000000" //commission 
	                },
	                "update_time": "1970-01-01T00:00:00Z" //time commission updated at
	            },
	            "delegator_shares": "11000000.000000000000000000", //delegation quantity of a consensus account
	            "description": { //a collection of consensus account attributes
	                "details": "",
	                "identity": "",
	                "moniker": "",
	                "website": ""
	            },
	            "operator_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93", //consensus account address
	            "power": "39000934", //consensus account power
	            "power_rate": "1.000922559773909156", //loyalty coefficient  of a  consensus account
	            "pubkey": "gt1pub1u8s6p73qzlye3d4mljgt3auxhz4shj43w2eu0evladd03rr2auyrhc87aynqpwdz6w", //consensus account public key
	            "status": "online", //online status of consensus account          
	            "tokens": "11000000" //total tokens delegated to consensus account
	        },
	        ...
	    ]
	}
:::



