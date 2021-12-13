### GateChain EVM节点列表
1. Mainnet
	2. https://evm.gatenode.cc （推荐）
  	2. https://evm.gatenode.net
  	3. https://evm-1.gatenode.cc
  	4. https://evm-2.gatenode.cc
  	5. https://evm-3.gatenode.cc
2. 测试链Meteora
  	1. https://meteora.gatenode.cc:6061
### MetaMask配置GateChain网络
1. 点击MetaMask-设置-网络-添加网络，配置GateChain网络服务
2. Mainnet配置
  	1. 网络名称: GateChain
  	2. RPC URL: https://evm.gatenode.cc（可填写以上任意节点地址）
  	3. 链 ID: 86
  	4. 符号: GT
  	5. 区块浏览器: https://gatescan.org/
3. 测试链Meteora配置
  	1. 网络名称: Meteora
  	2. RPC URL: https://meteora.gatenode.cc:6061
  	3. 链 ID: 85
  	4. 符号: GT
  	5. 区块浏览器: https://gatescan.org/testnet/
### 测试链Meteora申请测试币入口
1. https://gatescan.org/testnet/faucet
### WebSocket订阅说明
1. 地址: wss://evm-ws.gatenode.cc
2. 使用示例：
 	1. npm install -g wscat
  	2. wscat -c wss://evm-ws.gatenode.cc
  	3. Param:   {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
  	4. 订阅成功会反返回result id,符合条件ws会推送至客户端
 <img src="../../images/websocket.png"  height=70% width=70%>