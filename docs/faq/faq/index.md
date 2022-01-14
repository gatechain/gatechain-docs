
### 常见问题解答

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