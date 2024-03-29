
### <span id="Query-Foundation-Member-List">Query Foundation Member List [command line](../../cli/foundation/index.md#query-foundation-member-list-api)</span>

```
GET  v1/foundation/members
```

::: details Return example:    
	{
	    "height": "0", //block height
	    "result": [
	        {
	            "address": "gt11tgjslrwl0j35czlj0ayxq9t7hzd0gtckfwc57qsl3nftl7zyk8gccv5kexetmm3xsv2tj5", //foundation member account
	            "funds_pool": [ 
	                {
	                    "amount": "10000000000000000",//total token quantity
	                    "denom": "NANOGT" //unit
	                }
	            ],
	            "proportion": "1", //the  proportion held by the foundation member
	            "released": [
	                {
	                    "amount": "4666666666.660000000000000000", //token already released
	                    "denom": "NANOGT" //unit
	                }
	            ],
	            "withdraw": [] //revoked token amount
			...
	    ]
	}
:::


### Query Foundation Member Information

```
GET  /v1/foundation/member/{address}
```

Parameters:

| Parameter | Description |
| :----| :---- |
| address | Foundation member address |


::: details Return example:    
	{
	    "height": "0", //block height
	    "result": {
	        "type": "Member",
	        "value": {
	            "address": "gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq", //foundation member account
	            "funds_pool": [
	                {
	                    "amount": "10000000000000000",//total token quantity
	                    "denom": "NANOGT" //unit
	                }
	            ],
	            "proportion": "1", //the  proportion held by the foundation member
	            "released": [
	                {
	                    "amount": "11333333333.330000000000000000", //token already released
	                    "denom": "NANOGT" //unit
	                }
	            ],
	            "withdraw": [] //revoked token amount
	        }
	    }
	}
:::




