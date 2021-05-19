## GateBridge

### 介绍
  1. 合约跨链是指通过受信任的ETH合约和GateChain、BSC、HECO上的合约进行互相通信，并且实现资产转移的方法。即可以将ETH上的资产转移到GateChain、BSC、HECO上，并且GateChain、BSC、HECO还能将这份资产转移回去；
  2. 从ETH跨链到BSC、HECO必须先将资产转移到GateChain，然后从GateChain向BSC、HECO转移资产；
  3. ETH上的erc20token和GateChain、BSC、HECO上的erc20token必须是一一对应的，所以需要用户提交注册跨链代币申请[申请入口](https://gatescan.org/bridge),申请提交后，由合约管理员进行绑定。
  
### 使用
  1. 打开[Hipo](https://www.hipo.com/Ether/zh/)网站，切换所需网络，点击GateChain跨链；
	<img src="../images/crosschain1.png"  height=50% width=50%>

  2. 点击链接钱包，将Hipo与您的钱包链接；
 
	<img src="../images/crosschain2.png"  height=50% width=50%>

  3. 在跨链兑换页面，选择网络后，输入要操作跨链的资产token，此token地址为原网络中的地址（[跨链代币列表](https://gatescan.org/bridge)），输入数量及接收地址等信息，点击“授权”；
	* Hipo选择的网络需要与钱包网络一致；
	* [GateChain网络接入](../rpc-node-list.md)
	* [BSC网络接入](https://academy.binance.com/zh/articles/connecting-metamask-to-binance-smart-chain)
	* [HECO网络接入](https://docs.hecochain.com/#/mainnet)
	 
	<img src="../images/crosschain3.png"  height=50% width=50%>

  4. 授权完成后，点击“下一步”，进行跨链操作；

	* 请保证账户中有足够的余额支付对应网络的手续费
	
 <img src="../images/crosschain4.png"  height=50% width=50%>
 
  5. 原网络交易成功后，等待5分钟就可以切换到目标网络查询余额是否到账啦，至此跨链操作完成；

  
  