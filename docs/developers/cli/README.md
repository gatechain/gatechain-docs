# 命令行 CLI

> 本文档所有交易指令(非查询命令)都需要支付一定量的交易费;
> 可使用--gas-prices或者--fees 为交易添加交易费。
> 
> 命令中所用到的资产数额（Asset amount）均为乘以10E18转换后的正整数值(Integer of the Value);
> 资产数额（Asset amount）支持科学计数法，比如10E9 NANOGT就表示1GT。


### 启动本地RPC服务
```bash
gatecli rest-server
```

说明：

* RPC服务启动后，由于存储加锁，所以无法执行命令行指令。

### <span id="查询节点状态信息">查询节点状态信息 [API](../api/README.md#查询节点状态信息-命令行)</span>
```bash
gatecli status
```

说明：

* 查询本地节点服务状态信息

### 版本号
```bash
gatecli version
```

说明：

* 查询命令行版本信息

### 帮助
```bash
gatecli [命令1] [命令2] [命令3]... --help
```

说明：

* 如果想得到更多关于命令行操作说明，请使用help

### 报错处理
```bash
Must specify these options: --chain-id  when --trust-node is false
```

如果信任该节点请输入 '--trust-node=true'，否则需要输入'--chain-id'，解决上述错误。




