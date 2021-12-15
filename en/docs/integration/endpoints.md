### GateChain EVM RPC
1. Mainnet
	1. https://evm.gatenode.cc (Recommend)
  	2. https://evm.gatenode.net
  	3. https://evm-1.gatenode.cc
  	4. https://evm-2.gatenode.cc
  	5. https://evm-3.gatenode.cc
	6. https://evm-hk.gatenode.cc (Chinese mainland)
2. Testnet(Meteora)
  	1. https://meteora.gatenode.cc:6061
### Connect MetaMask to GateChain
1. Click MetaMask-Setup-Network-Add Network, and configure GateChain network service.
2. Mainnet
  	1. Network name: GateChain
  	2. RPC URL: https://evm.gatenode.cc
  	3. Chain ID: 86
  	4. Symbol: GT
  	5. Block explorer: https://gatescan.org/
3. Testnet(Meteora)
  	1. Network name: Meteora
  	2. RPC URL: https://meteora.gatenode.cc:6061
  	3. Chain ID: 85
  	4. Symbol: GT
  	5. Block explorer: https://gatescan.org/testnet/
### Testnet(Meteora) apply for faucet
1. https://gatescan.org/testnet/faucet
### WebSocket Subscription
1. URL: wss://evm-ws.gatenode.cc
2. Example:
 	1. npm install -g wscat
  	2. wscat -c wss://evm-ws.gatenode.cc
  	3. Param:   {"id": 1, "method": "eth_subscribe", "params": ["newHeads"]}
  	4. If the subscription succeeds, the result id will be returned, and the qualified WS will be pushed to the client.
  	
  	<img src="../../images/websocket.png"  height=70% width=70%>