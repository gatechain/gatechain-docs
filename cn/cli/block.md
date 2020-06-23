
### 查询单个区块信息 [API](../API/block.md#查询单个区块信息-命令行)
```bash
gatecli block show [区块高度] --chain-id [链ID]
```

请求示例：

```bash
gatecli block show 10001 --chain-id testnet
```

%accordion%返回示例：%accordion%

```bash
{
    "hash": "H44ZPPWLRIXI3TJ64UZSHKKSJ4XRJMWIGU6FHFQXWFTRY3QHW3426MWP3IA44KJHZHBEHSOYYEWNO",//当前区块的hash
    "previousBlockHash": "BF4BVNISMRNALPYXZAPPK4LKLVGTUDVWGNA5BQYJVHPDRZXTVGQG3LA4FB6RPHSYX5IEA44BGD3DE",//前一个区块的hash
    "seed": "HSIWSUEVTY4VRJCZMJ4VE7MFTDBA6SGIM7LY6YOWJ624ON7LFOINBIT6A3STY4GV52D5IIMNZDVNO",//VRF抽签的种子
    "proposer": "gt11ynwpc98gkh9uxxnkld7gjp5knu5ht75f0223uf298ap6ug6vtx5ank5vfde0pylmu09wzh",//区块的提议共识账户
    "height": "959",//区块高度
    "period": "0",//区块阶段
    "txnRoot": "LHHTNT65QQOXUV6MQM4LIZ5PRGGY32XQRFTHIO4WXY4BPVBCWEXQFZ2NZU37AYKWOOUFSL4YTX2A4",//区块中交易集合的hash
    "txnps": {//交易集合
        "proxyTransactions": null
    },
    "timestamp": "1591788058",//区块生成的时间
    "UpgradeState": { //共识协议版本状态
        "currentProtocol": "v1", //当前版本号
        "nextProtocol": "", //升级目标版本号
        "nextProtocolApprovals": "0", //目标版本已投票数
        "nextProtocolVoteBefore": "0", //目标版本投票截止高度
        "nextProtocolSwitchOn": "0" //目标版本更新高度
    },
    "UpgradeVote": { //共识协议升级的投票情况
        "upgradePropose": "", //升级目标版本号
        "upgradeApprove": false //升级目标版本投票结果
    },
    "CertCommitteeInfo": [ //区块委员会信息(本地certificate中)（下一轮可能奖励名单）
       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
       "singleCommitteePower": "90000341" //本轮共识账户power
    ],
    "BlockCommitteeInfo": [ //区块委员会信息（区块头中）（本轮奖励名单）
       "gt117h3k4uaftcql9zaqll5vg2x3gn67576qyklnvmzh9xldczryqpzpdj69xygrm0hvklufun",
       "singleCommitteePower": "90000323" //上一轮共识账户power
    ],
    "autoOfflineAccounts": [] //指定轮数共识账户自动下线名单
}
```
%/accordion%

