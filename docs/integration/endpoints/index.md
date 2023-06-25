## GateChain EVM节点列表
1. Mainnet

	* https://evm.nodeinfo.cc （推荐）
	* https://evm-1.nodeinfo.cc
	* https://evm.gatenode.cc
	* https://evm-hk.gatenode.cc （中国香港节点）


2. 测试链Meteora

  	* https://meteora-evm.gatenode.cc
  	
## MetaMask配置GateChain网络

1. 点击MetaMask-设置-网络-添加网络，配置GateChain网络服务
2. Mainnet配置

  	* 网络名称: GateChain
  	* RPC URL: https://evm.nodeinfo.cc（可填写以上任意节点地址）
  	* 链 ID: 86
  	* 符号: GT
  	* 区块浏览器: https://gatescan.org/
  	
3. 测试链Meteora配置

  	* 网络名称: Meteora
  	* RPC URL: https://meteora-evm.gatenode.cc
  	* 链 ID: 85
  	* 符号: GT
  	* 区块浏览器: https://gatescan.org/testnet/
  
## 测试链Meteora申请测试币入口

1. https://gatescan.org/testnet/faucet
## WebSocket订阅说明

1. Mainnet: wss://evm-ws.gatenode.cc
2. 测试链Meteora: wss://meteora-ws.gatenode.cc
3. 使用示例：
 	* npm install -g wscat
 	* wscat -c wss://evm-ws.gatenode.cc
 	* Param:   {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
 	* 订阅成功会反返回result id,符合条件ws会推送至客户端
 <a data-fancybox title="" href="@assets/img/zh/websocket.png"><img src="@assets/img/zh/websocket.png"  height=70% width=70%></a>