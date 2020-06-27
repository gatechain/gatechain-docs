
### Query A Block Information [API](../API/block.md#Query A Block Information-command line)
```bash
gatecli block show [block height] --chain-id [chain ID]
```

Example：

```bash
gatecli block show 10001 --chain-id testnet
```

%accordion%Return Example:%accordion%

```bash
{
    "hash": "H44ZPPWLRIXI3TJ64UZSHKKSJ4XRJMWIGU6FHFQXWFTRY3QHW3426MWP3IA44KJHZHBEHSOYYEWNO",//hash of the current block
    "previousBlockHash": "BF4BVNISMRNALPYXZAPPK4LKLVGTUDVWGNA5BQYJVHPDRZXTVGQG3LA4FB6RPHSYX5IEA44BGD3DE",//hash ofthe preceding block
    "seed": "HSIWSUEVTY4VRJCZMJ4VE7MFTDBA6SGIM7LY6YOWJ624ON7LFOINBIT6A3STY4GV52D5IIMNZDVNO",//VRF seed for draw 
    "proposer": "gt11ynwpc98gkh9uxxnkld7gjp5knu5ht75f0223uf298ap6ug6vtx5ank5vfde0pylmu09wzh",//consensus account to propose in a block
    "height": "959",//block height
    "period": "0",//block phase
    "txnRoot": "LHHTNT65QQOXUV6MQM4LIZ5PRGGY32XQRFTHIO4WXY4BPVBCWEXQFZ2NZU37AYKWOOUFSL4YTX2A4",//hash of the collection of transactions in a block
    "txnps": {// the collection of transactions
        "proxyTransactions": null
    },
    "timestamp": "1591788058",// the time block was generated at
    "UpgradeState": { //version status  of  consensus  protocol
        "currentProtocol": "v1", //current version number
        "nextProtocol": "", //target version number to upgrade 

        "nextProtocolApprovals": "0", //votes received already for target version 
        "nextProtocolVoteBefore": "0", // deadline height  to vote to  target version
        "nextProtocolSwitchOn": "0" //height to upgrade  to  target version 
    },
    "UpgradeVote": { //voting status for consensus protocol upgrading 
        "upgradePropose": "", //target version number to upgrade to
        "upgradeApprove": false //voting result for upgrading to target version
    },
    "CertCommitteeInfo": [ //block committee (in local certificate)（potential reward winners of next round）
       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
       "singleCommitteePower": "90000341" //power of consensus accounts of this round 
    ],
    "BlockCommitteeInfo": [ //blockchain committee（at the block head）（reward winners of this round）
       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
       "singleCommitteePower": "90000323" /consensus accounts of preceding round power
    ],
    "autoOfflineAccounts": [] //consensus accounts auto-offline  at specified rounds 
}
```
%/accordion%

