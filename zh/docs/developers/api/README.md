## API

> 通过本文档提供构造交易的接口，其请求参数必须设置大于0NANOGT的交易费;
> 
> 命令中所用到的资产数额（Asset amount）均为乘以10E18转换后的正整数值(Integer of the Value);
> 资产数额（Asset amount）支持科学计数法，比如10E9 NANOGT就表示1GT。


## <span id="查询节点状态信息">查询节点状态信息 [命令行](../cli/README.md#查询节点状态信息)</span>

```
GET /v1/status  
```

??? note "返回示例:"
    ```python
    {
        "node_status": {
            "lastHeight": "996",//当前高度
            "lastConsensusVersion": "v1",//当前共识版本号
            "nextConsensusVersion": "v1",//下一个区块共识版本号
            "nextConsensusVersionRound": "997",//下一个共识版本的高度
            "nextConsensusVersionSupported": true, //是否支持升级
            "timeSinceLastRound": "16",//最新区块生成后的时间
            "catchupTime": "0",//本节点下载区块的时间
            "hasSyncedSinceStartup": false, //启动后是否完成了一轮共识
            "step": "2", //步骤
            "period": "0", //阶段
            "zeroTimeStamp": "2020-06-11T06:38:29.626739Z", //当前step开始时间
            "deadline": "43", //超时时间
            "fastRecoveryDeadline": "597", //快速恢复模式的超时时间
            "minimumTxFee": "10" //当前节点最低打包手续费要求
        },
        "application_version": {
            "name": "gate", //应用名称
            "server_name": "gated", //进程名称
            "client_name": "gatecli", //客户端名称
            "version": "0.9.0-236-g2531c037", //版本号
            "commit": "2531c037c6d1324288f4609ca201c8429029243f", //提交信息
            "build_tags": "netgo,ledger", //构建标签
            "go": "go version go1.13.7 darwin/amd64" //golang版本
        }
    }
    ```






