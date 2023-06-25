## GateChain EVM RPC

1. Mainnet
	1. https://evm.nodeinfo.cc  (Recommend)
	2. https://evm-1.nodeinfo.cc
	3. https://evm.gatenode.cc
	4. https://evm-hk.gatenode.cc  (Chinese HongKong)

2. Testnet(Meteora)
  	1. https://meteora-evm.gatenode.cc
## Connect MetaMask to GateChain

1. Click MetaMask-Setup-Network-Add Network, and configure GateChain network service.

2. Mainnet
  	1. Network name: GateChain
  	2. RPC URL: https://evm.nodeinfo.cc
  	3. Chain ID: 86
  	4. Symbol: GT
  	5. Block explorer: https://gatescan.org/
  
3. Testnet(Meteora)
  	1. Network name: Meteora
  	2. RPC URL: https://meteora-evm.gatenode.cc
  	3. Chain ID: 85
  	4. Symbol: GT
  	5. Block explorer: https://gatescan.org/testnet/
  
## Testnet(Meteora) apply for faucet
1. https://gatescan.org/testnet/faucet

## WebSocket Subscription
1. URL: wss://evm-ws.gatenode.cc
2. Example:
 	1. npm install -g wscat
  	2. wscat -c wss://evm-ws.gatenode.cc
  	3. Param:   {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
  	4. If the subscription succeeds, the result id will be returned, and the qualified WS will be pushed to the client.
  	
  	<a data-fancybox title="" href="@assets/img/en/websocket.png"><img src="@assets/img/en/websocket.png"  height=70% width=70%></a>