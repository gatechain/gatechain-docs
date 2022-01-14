
### Query The Latest Block Information
```
GET /v1/block/latest
```
::: details Return example:
	{
	    "hash": "H44ZPPWLRIXI3TJ64UZSHKKSJ4XRJMWIGU6FHFQXWFTRY3QHW3426MWP3IA44KJHZHBEHSOYYEWNO",//hash of the current block 
	    "previousBlockHash": "BF4BVNISMRNALPYXZAPPK4LKLVGTUDVWGNA5BQYJVHPDRZXTVGQG3LA4FB6RPHSYX5IEA44BGD3DE",//hash of the preceding block 
	    "seed": "HSIWSUEVTY4VRJCZMJ4VE7MFTDBA6SGIM7LY6YOWJ624ON7LFOINBIT6A3STY4GV52D5IIMNZDVNO",//VRF seed for draw
	    "proposer": "gt11ynwpc98gkh9uxxnkld7gjp5knu5ht75f0223uf298ap6ug6vtx5ank5vfde0pylmu09wzh",//consensus account that make a  proposal in the block
	    "height": "959",//block height
	    "period": "0",//block phase
	    "txnRoot": "LHHTNT65QQOXUV6MQM4LIZ5PRGGY32XQRFTHIO4WXY4BPVBCWEXQFZ2NZU37AYKWOOUFSL4YTX2A4",// hash of the transaction collection in a block
	    "txnps": {//transaction collection
	        "proxyTransactions": null
	    },
	    "timestamp": "1591788058",//time the block is generated at
	    "UpgradeState": { //consensus protocol version status
	        "currentProtocol": "v1", //current version number
	        "nextProtocol": "", //target version number to upgrade to 
	        "nextProtocolApprovals": "0", //votes already received by target version
	        "nextProtocolVoteBefore": "0",//deadline height  to vote to  target version
	        "nextProtocolSwitchOn": "0" // height to upgrade to target version
	    },
	    "UpgradeVote": { //voting status of consensus protocol upgrade 
	        "upgradePropose": "", //target version number to upgrade to 
	        "upgradeApprove": false //voting results of upgrading to target version
	    },
	    "CertCommitteeInfo": [ //block committee information(in locall certificate)（potential reward winners of next round）
	       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
	       "singleCommitteePower": "90000341" // consensus account power of this round
	    ],
	    "BlockCommitteeInfo": [ //block committee information（in block head）（reward winners of this round）
	       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
	       "singleCommitteePower": "90000323" //consensus account power of preceding round 
	    ],
	    "autoOfflineAccounts": [] //consensus accounts auto-offline at specified round
	}
:::


### <span id="Query-A-Specific-BLock-Information">Query A Specific BLock Information [command line](../../cli/block/index.md#query-a-specific-bLock-information-api)</span>

```
GET /v1/block/{height}
```
Parameters:

| Parameter | Description | 
| ----| ---- |
| height | block height（>=1）|


::: details Return example:
	{
	    "hash": "H44ZPPWLRIXI3TJ64UZSHKKSJ4XRJMWIGU6FHFQXWFTRY3QHW3426MWP3IA44KJHZHBEHSOYYEWNO",//hash of current block 
	    "previousBlockHash": "BF4BVNISMRNALPYXZAPPK4LKLVGTUDVWGNA5BQYJVHPDRZXTVGQG3LA4FB6RPHSYX5IEA44BGD3DE",//hash of preceding block 
	    "seed": "HSIWSUEVTY4VRJCZMJ4VE7MFTDBA6SGIM7LY6YOWJ624ON7LFOINBIT6A3STY4GV52D5IIMNZDVNO",//VRF seed for draw
	    "proposer": "gt11ynwpc98gkh9uxxnkld7gjp5knu5ht75f0223uf298ap6ug6vtx5ank5vfde0pylmu09wzh",//consensus account to propose in a block
	    "height": "959",//block height
	    "period": "0",//block phase
	    "txnRoot": "LHHTNT65QQOXUV6MQM4LIZ5PRGGY32XQRFTHIO4WXY4BPVBCWEXQFZ2NZU37AYKWOOUFSL4YTX2A4",// hash of the transaction collection in a block
	    "txnps": {//transaction collection
	        "proxyTransactions": null
	    },
	    "timestamp": "1591788058",//time the block is generated at
	    "UpgradeState": { //consensus protocol version status
	        "currentProtocol": "v1", //current version number
	        "nextProtocol": "", //target version number to upgrade to 
	        "nextProtocolApprovals": "0", //votes already received by target version
	        "nextProtocolVoteBefore": "0",//deadline height  to vote to  target version
	        "nextProtocolSwitchOn": "0" // height to upgrade to target version
	    },
	    "UpgradeVote": { //consensus protocol upgrade voting status
	        "upgradePropose": "", //target version number to upgrade to 
	        "upgradeApprove": false //voting results of upgrading to target version
	    },
	    "CertCommitteeInfo": [ //block committee information (in localcertificate)（potential reward winners of next round）
	       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
	       "singleCommitteePower": "90000341" //consensus account power of this round 
	    ],
	    "BlockCommitteeInfo": [ //block committee information（in block head）（reward winners of this round）
	       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
	       "singleCommitteePower": "90000323" //consensus account power of preceding round 
	    ],
	    "autoOfflineAccounts": [] //consensus accounts auto-offline  at specified round
	}
:::




