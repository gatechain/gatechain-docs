##GateChain API文档

>通过本文档提供构造交易的接口，其请求参数必须设置大于0gc的交易费
> 命令中所用到的资产数额（Asset amount）均为乘以10E18转换后的正整数值(Integer of the Value)
> 资产数额（Asset amount）支持科学计数法，比如10E9 NanoGC就表示1.0GC


## 查询节点状态信息
```
GET /status
```

返回:

```
{"channels":"4020212223303800","id":"...."....}
```





