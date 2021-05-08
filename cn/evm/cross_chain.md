##概述

DeFi有两个关键要素：智能合约、资产。GateChain-EVM提供了智能合约运行的环境，帮助项目方可以轻松的部署和管理应用。对于DeFi用户而言，如何将资产安全、便捷的从其他公链转移到GateChain，是迫切的需求。

为了更好的与其他主流公链打通，实现互操作，并且帮助用户更方便的将自己的资产在不同的主链之间安全、快速的进行转移，我们推出了一整套的跨链解决方案。包括：ERC代币的跨链、原生资产的跨链、ERC代币和原生资产的跨链。协议层面包括：基于智能合约的共识跨链GateBridge、基于Gatechain共识节点集群GateHub的共识跨链。

##GateBridge 

现阶段，为了帮助ETH类公链资产快速迁移到GateChain，我们首先推出了基于智能合约共识的ERC代币跨链方案GateBridge。

GateBridge是基于ChainSafe + 硬件多签方式的跨链方案。此方案的交易和共识过程，都发生在智能合约中，安全透明。参与共识投票的用户，我们称之为Relayer，他们对每一笔跨链交易通过硬件多签方式的进行投票，达成共识后才可以执行代币的冻结和增发。这样极大的加强安全性，有效改进ChainSafe方案中心化比较强的问题。

跨链过程简单描述为：

1. 用户将ERC代币抵押在原始链的Bridge合约中(deposit)，并指明目标链和目标地址。
2. 通过多个安全Relayer的共识达成，触发目标链的Bridge合约中mint方法，增发相应数量的ERC代币，并转账给目标地址。
3. 在抵押(deposit)的过程中，用户需要支付原始链的原生燃料作为跨链手续费，如ETH、GT、BNB等。Relayer通过履行共识任务，挣得部分手续费作为奖励。

GateBridge适用于所有以EVM为智能合约引擎的公链，由Relayer群体保证去中心化和安全性。

附上GateBridge在GateChain测试链（GateChain-Meteora）和Eth测试链(Eth-Goerli)的合约地址：
> ```
> ## eth和gatechain的发送交易url
> SRC_GATEWAY=https://goerli-light.eth.linkpool.io/
> DST_GATEWAY=http://meteora.gatenode.cc:6060/
> 
> ## eth和gatechain的chainId
> SRC_CHAINID=5
> DST_CHAINID=66
> 
> ## 已经绑定好的token对
> RESOURCE_ID="0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00"
> SRC_TOKEN="0xaFF4481D10270F50f203E0763e2597776068CBc5"
> DST_TOKEN="0xaDFaA2f1641e80882e513Db91DC6B930E0810418"
> 
> SRC_BRIDGE 和 DST_BRIDGE 分别是在eth上和gatechain上调用转账方法的合约地址
> SRC_BRIDGE="0x76e8927aE94E383946CD2d13B93579C6F276E126"
> DST_BRIDGE="0x6084344cadA6C109d4aC0F7205589F1314D0AF85"
> 
> ## SRC_HANDLER 和 DST_HANDLER
> SRC_HANDLER="0x05Ad72ee3F659F9D529104F7072EcF29Ebe37D7e"
> DST_HANDLER="0x7Ab932e0376c5c04aA298cAADc92A47a9097B858"
> ```


##GateHub升级计划
基于智能合约的跨链方案，虽然在安全性和速度上有优势，但也存在共识手续费高，Relayer用户私钥丢失、容易被攻击、不能自主生成，跨链交易只能单笔执行等缺点。跨链的最终解决方案，一定是基于安全级别更高的侧链来完成。GateHub，作为提供跨链共识服务的完整区块链，应运而生。

跨链过程简单描述为：

1. GateHub-Validators通过抵押资产自主竞选，其共识安全性由一条完整的侧链来保证，使得GateHub-Validators足够的去中心化，且共识账户节点更难被攻击。
2. 用户在原始链上发起跨链转账请求，并且指明目标链和地址。
3. 通过GateHub-Validators共识后，会在GateHub侧链上对近期的跨链交易批量打包到区块中，并进行共识。最终将打包后的跨链交易发送给目标链批量执行，极大的降级了跨链转账的手续费。
4. 在抵押(deposit)的过程中，用户需要支付原始链的原生燃料作为跨链手续费，如ETH、GT、BNB等。GateHub会对忠诚共识节点持续奖励手续费收益，并且对于作恶节点进行惩罚。

除了主链级别的安全共识保障，我们还将引入MPC方式解决去中心化的安全性和跨链成本问题。

基于Gatemint-SDK开发的GateHub推出后，GateChain广大的共识账户，可以通过抵押代币，竞选成为GateHub-Validator，参与跨链获得手续费奖励。这样一来，跨链的去中心化和安全性将提高到主链的级别，大幅降低跨链的手续费成本。

* GateChain开发团队会在今年推出Gatemint-SDK通用开发框架，基于此框架可以快速开发一条PoS协议的区块链。

##适用范围
GateBridge首先会部署在ETH和GateChain主网，帮助两条公链的用户做资产转移。随后我们会在BSC、Heco、OKChain上分别部署Bridge合约，打通所有EVM之间的跨链通道。

GateHub上线之后，将升级原有的GateBridge，并且会继续打通Cosmos和Polkadot生态的跨链通道，实现链上原生资产和ERC代币之间的无障碍兑换。