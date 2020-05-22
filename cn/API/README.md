## 接口 api

> 通过本文档提供构造交易的接口，其请求参数必须设置大于0NANOGT的交易费;
> 通过本文档提供构造交易的接口，其返回交易体中"valid_height"字段需手动设置有效起始高度;
> 命令中所用到的资产数额（Asset amount）均为乘以10E18转换后的正整数值(Integer of the Value);
> 资产数额（Asset amount）支持科学计数法，比如10E9 NanoGT就表示1GT。


## 查询节点状态信息

```
GET /status
```

返回:

%accordion%json%accordion%

```
{
    "node_status":{
        "lastRound":"768",
        "lastConsensusVersion":"v1",
        "nextConsensusVersion":"v1",
        "nextConsensusVersionRound":"769",
        "nextConsensusVersionSupported":true,
        "timeSinceLastRound":"1346643544",
        "catchupTime":"0",
        "hasSyncedSinceStartup":false
    },
    "application_version":{
        "name":"gate",
        "server_name":"gated",
        "client_name":"gatecli",
        "version":"0.8.1-265-g67521af8",
        "commit":"67521af80eb609a7f9fb66d07255ef515030cd69",
        "build_tags":"netgo,ledger",
        "go":"go version go1.13.7 darwin/amd64"
    }
}
```
%/accordion%




