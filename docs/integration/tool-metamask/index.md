<span id="MetaMask接入指南"></span>

GateChain-Evm是基于Gatemint共识的原生模块，支持运行以太坊智能合约及提供rpc服务来兼容MetaMask接入，用户只需切换网络即可在GateChain部署及调用合约等。

### MetaMask简介

MetaMask是为了创建更安全和可用的以太坊网站而创建的。特别是，它处理帐户管理并将用户连接到区块链。Chrome、Brave和Safari浏览器都支持它。

### 安装

示例:在Chrome浏览器中安装

1. 在Chrome浏览中搜索：<a href="https://chrome.google.com/webstore/search/MetaMask" target="_blank">点击安装</a>
	* 注意：请确保它由metamask.io提供
	
	<a data-fancybox title="" href="@assets/img/zh/metamask1.png"><img src="@assets/img/zh/metamask1.png"  height=50% width=50%></a>

2. 点击“添加至Chrome”，安装成功，接下来快去创建钱包吧！

	<a data-fancybox title="" href="@assets/img/zh/metamask2.png"><img src="@assets/img/zh/metamask2.png"  height=50% width=50%></a>

### 创建账户

1.可以选择导入钱包或创建钱包，点击“创建钱包”

<a data-fancybox title="" href="@assets/img/zh/metamask3.png"><img src="@assets/img/zh/metamask3.png"  height=50% width=50%></a>

2.输入密码及备份账户助记词

<a data-fancybox title="" href="@assets/img/zh/metamask4.png"><img src="@assets/img/zh/metamask4.png"  height=50% width=50%></a>
<a data-fancybox title="" href="@assets/img/zh/metamask5.png"><img src="@assets/img/zh/metamask5.png"  height=50% width=50%></a>

3.完成助记词验证后，创建账户成功，接下来快去与gatechain网络连接吧!

<a data-fancybox title="" href="@assets/img/zh/metamask6.png"><img src="@assets/img/zh/metamask6.png"  height=50% width=50%></a>


### 将您的MetaMask与GateChain网络连接

1. 点击MetaMask-设置-网络-添加网络，配置GateChain网络服务

<a data-fancybox title="" href="@assets/img/zh/metamask7.png"><img src="@assets/img/zh/metamask7.png"  height=50% width=50%></a>

> 网络名称: GateChain （可自定义）
> 
> RPC URL1: https://evm.gatenode.cc
>
> RPC URL2: https://evm-hk.gatenode.cc
>
> 链 ID: 86
> 
> 符号: GT
> 
> 区块浏览器: https://gatescan.org/


### 将您的“gt”账户余额转入到MetaMask账户余额中

1. 钱包转账:复制MetaMask账户地址，粘贴到钱包-转账-接收地址中，进行转账[[具体操作步骤]](../gatechain-wallet/index.md#evm)

2. CLI或API转账：与普通转账交易一样，只需替换接收人地址即可。
> [[CLI操作步骤]](../../developers/cli/tx/index.md#发送交易-api)
> 
> [[API操作步骤]](../../developers/api/tx/index.md#发送交易-命令行)

### 将您的GT转账到MetaMask其他账户中

1.选择要转账的账户，进入主页点击“发送”按钮。

<a data-fancybox title="" href="@assets/img/zh/metamask10.png"><img src="@assets/img/zh/metamask10.png"  height=50% width=50%></a>

2.输入要发送的账户地址及金额，点击“下一步”。

<a data-fancybox title="" href="@assets/img/zh/metamask11.png"><img src="@assets/img/zh/metamask11.png"  height=50% width=50%></a>

3.确认交易信息，点击“确认”，等待交易打包。

<a data-fancybox title="" href="@assets/img/zh/metamask12.png"><img src="@assets/img/zh/metamask12.png"  height=50% width=50%></a>

4.交易成功后可以去gatechain浏览器查看交易详细信息。
	
>浏览器地址：<a href="https://gatescan.org/txs" target="_blank">点击进入</a>





 