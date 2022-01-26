
### 常见问题解答

**问**：GateChain兼容EVM是什么意思？

::: details 答:

	EVM是以太坊虚拟机，是以太坊专门执行智能合约的组件，是以太坊区块链的一部分。
	我们日常所说的典型的区块链，比如BTC、LTC、Doge等第一代的区块链是不能执行智能合约的，只可以进行账户之间的转账。
	
	Ethereum作为第二代区块链的代表，在账户之间转账的功能之外，额外提供了EVM这个智能合约的运行环境。每个加入以太坊的节点，都会运行EVM，来处理智能合约类型的交易。
	
	举个例子：早些年的手机（区块链），只有打电话和发短信的功能。后来微软苹果谷歌，纷纷推出了自己的智能手机操作系统（EVM），安装在性能更好的手机上，每个手机就可以运行第三方开发的应用程序APP（智能合约）。
	所以兼容EVM的意思就是，GateChain除了支持普通账户的转账，也提供了智能合约的执行环境。开发者可以把自己部署在以太坊、BSC等链上的智能合约代码直接拿过来部署在GateChain上，不需要做任何的改动。
	
例如：以太坊普通转账交易：<a href="https://etherscan.io/tx/0x46eefc3ab029c8e4737f0deba186b3c0e3282fbfdfc515849f9ef9093563f690" target="_blank">https://etherscan.io/tx/0x46eefc3ab029c8e4737f0deba186b3c0e3282fbfdfc515849f9ef9093563f690</a>
	
以太坊智能合约交易：<a href="https://etherscan.io/tx/0xd0cc5983fd933f6e3468b731476a55957721fe7534b76f6cebd8f2b5a8df2d65" target="_blank">https://etherscan.io/tx/0xd0cc5983fd933f6e3468b731476a55957721fe7534b76f6cebd8f2b5a8df2d65</a>

:::

**问**：ERC20是什么意思？

::: details 答:

<a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank">https://eips.ethereum.org/EIPS/eip-20</a>

	ERC的全称是Ethereum Request for Comment，用于对代币和以太坊生态系统提出改进建议。提交ERC后，以太坊社区将对其进行评估，并决定是否接受或拒绝该建议。获得绿灯后，ERC将被正式确定为以太坊改进建议（EIP）。简而言之，代币标准是用来定义数据和实现它的每个代币的功能。
	
	可以这么理解，以太坊上除去原生代币ETH，其他的代币都是符合各种标准的ERC代币。
	
	举个例子：最早汽车市场是不分什么类型车的，后来各种用途的车出现后，国际标准组织或者国家就根据车的大小、用途、类型制定了一些标准，并约束以后生产的车型。比如四门轿车、SUV、MPV、皮卡、货车、厢式货车等等。
	
	ERC20是以太坊于2015年11月份推出的一个协议标准，在2017年9月被正式标准化，该协议规定了具有可替代性通证（token）的一组基本接口，包括代币符号、发行量、转账、授权等，符合该标准的通证代币与以太坊钱包完全兼容。ERC20的标准化，直接带动了ICO的热潮和2017年的牛市。

:::

**问**：ERC721是什么意思？

::: details 答:

<a href="https://eips.ethereum.org/EIPS/eip-721" target="_blank">https://eips.ethereum.org/EIPS/eip-721</a>

	ERC721是2018年1月份提出的，也就是去年NFT热潮的底层标准。它和ERC20的主要区别就是，每一个token都是带编号的。一旦有了编号做区分，不同token id所代表的价值就可以不同，类似艺术品。
	
	举个例子：如果ERC20是普通的人民币，每一张的价值和购买力是相同的；那ERC721就是银行每年发行的纪念币，每一张都带编号，也只能属于一个账户，价格也会有很大差异。

:::

**问**：ERC1155是什么意思？

::: details 答:

<a href="https://eips.ethereum.org/EIPS/eip-1155" target="_blank">https://eips.ethereum.org/EIPS/eip-1155</a>

	ERC1155是2018年6月提出的，叫做Multi Token Standard。意思是发行一个ERC1155的token，里面可以包含多种类型的ERC Token，包括ERC20、ERC721。所以这是一个token集合的概念。

:::

**问**：项目方如果在BSC、ETH已经有代币开发了，那在GateChain上开发对他们来说具体操作是怎样的，他们可能遇到的问题会是哪些？

::: details 答:
	
	GateChain是和Ethereum、BSC、Heco、Polygon一样的公链，都支持标准的以太坊智能合约代码。所以对于有意愿部署多链的项目方来说，GateChain是其中一个选择。
	
	对于有自主开发能力的项目方，想要加入GateChain生态有很多种方法：
	
	1. 将在其他链上成功部署的智能合约代码，直接拿到GateChain上面再部署一次。包括ERC20、ERC721、GameFi等等；
	2. 通过Hipo.com提供的一键发币，直接在GateChain上发行自己的ERC20代币；
	3. 在GateBridge里提交申请，我们为项目方部署好跨链合约，可以将其他链上的部分资产冻结，然后在GateChain上发行对应数量的ERC20代币；	部署完成之后，在Hipo.com上提供了一些基础服务，包括GateSwap、Farming、GateBridge跨链等，可以直接使用。
	同时对于一些初创项目，可以申请Gate.io的首发和Gate Grunts的资助。
	
	可能遇到的问题：
	1. 支不支持ERC20、ERC721、NFT等？完全支持。
	2. 跨链桥：GateBridge已经提供了和主流公链的USDT、USDC的跨链池，后续会增加更多。资产可以自动流通。
	3. 技术资料：可以参考ppt中的资源列表。
	4. 可以得到的技术支持：加入GateChain官方discord或者发送邮件到dev@gatechain.org。
	5. 可以得到的商务支持：Startup或者Grunts或者Ventures。

:::

**问**：开多个虚拟机是不是要在不同的机器上创建新的账户，这些虚拟机是否能共用一个账户？

::: details 答:

	如果您需要多个虚拟机都参与共识，那必须在新的机器创建账户并上线共识账户。
:::

**问**：开了多个节点，每个节点的区块链信息都需要单独同步吗？

::: details 答:

	可以单独同步，也可以把其他已经同步节点的信息打包到新节点中，具体方法：把gated运行的根目录打包拷贝。默认  ～/.gated文件夹。但是如果您的多个节点想要新建共识账户参与共识，需要把拷贝过来的partkey删除，partkey所在目录为 ～/.gated/mainnet/ 下后缀为.0.0.partkey的文件，重新创建新的共识账户。
:::

**问**：搭建节点成功后，使用gatecli命令报错：open /Users/XXX/.gatecli/api.token: no such file or directory

::: details 答:

	因为.gatecli目录下没有api.token，需要您从.gated目录下拷贝，命令：cp ~/.gated/api.token ~/.gatecli/
:::

**问**：使用gatecli account show [address]命令，报错：account XXXX does not exist，这是为什么？

::: details 答:

	因为您查询的账户没有上链，您需要向此账户发起一笔交易，交易成功后就可以查询到。
:::

**问**：创建账户后，如果使用助记词恢复账户？

::: details 答:
	
	使用gatecli account create --recover 命令来恢复您的账户。
:::

**问**：如果我向本地创建的账户转了一笔钱，但是本地还没有同步到此交易块高，该如何快速从此账户转出？

::: details 答:

	您可以通过rpc构造交易体，本地签名后，再通过rpc广播，具体操作如下：
	
	1. 构造交易体，修改valid_height(交易有效高度)参数，建议修改GateChain目前最新高度到300块以后的高度。[指南](../../developers/api/tx/index.md#普通交易)
	2. 保存返回的交易体到您的桌面，然后在本地命令行执行：gatecli tx sign [交易体文件] --from [发送者账户] --chain-id mainnet --offline --account-number 1
	3. 复制已签名的信息，广播交易。[指南](../../developers/api/tx/index.md#发送交易)
	4. GateChain API节点列表。[进入](../../integration/rpc-node-list/index.md)
:::

**问**：已经给准备上线的共识账户转了钱，但是发起上线共识账户还是报错，报错：account XXXX does not exist，这是为什么？

::: details 答:

	请确认您本地同步节点，已经≥给共识账户转账的那笔交易块高，如果是＜，需要等待同步到转账交易，再发起上线共识账户。
:::

**问**：共识账户忠诚系数涨跌与什么有关系？

::: details 答:
	
	忠诚系数涨与入选委员会次数有关，如果您的节点长时间未参与共识，GateChain会对共识账户操作自动离线处理，忠诚系数会跌至1。
:::

**问**：委托给某共识账户，但是发现此共识账户长时间没有参与共识，应该怎么办？

::: details 答:

	共识账户委托确实存在收益受损的风险，比如委托的节点断网、断电等不可抗因素无法参与主网共识，就不会产生收益。正常建议用户自己搭建节点，保证节点网络稳定；若发现共识账户长时间未参与共识，且无条件自己搭建节点的用户，也可以转移委托至其他共识账户。
:::

**问**：GateChain支持智能合约的开始区块。

::: details 答:

	731444
:::

**问**：EVM的接口，获取BlockNumber报错404。

::: details 答:

	检查您的8080端口是不是gated占用的，必须保证gated启动时，8080端口是空闲的。否则就要修改cofig.json文件，摒弃evm rpc启动要增加参数。所以建议把8080端口空闲出来给gated使用。
:::

**问**：EVM的接口，获取BlockNumber报错:HTTP 401 Unauthorized: Invalid API Token\n

::: details 答:

	执行此命令：cp ~/.gated/api.token ~/.gatecli/
:::

> 常见问答持续更新中~


**更多知识问答及区块链百科，可转至 <a href="https://www.gate.io/cn/bitwiki" target="_blank">gate.io</a> 进行了解学习~**
