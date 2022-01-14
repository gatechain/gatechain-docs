## 概述

“EVM” 模块是 “GateChain V2.0” 新增加的重要组件，赋予了GateChain运行智能合约的能力，打开通往DeFi世界的大门。

选择“EVM”作为“GateChain”的智能合约引擎，是基于区块链开源社区的主流选择。以太坊拥有最活跃的开发社区，最完整的生态产品，在过去几年孕育了无数优秀的项目，尤其是一系列DeFi的头部应用，更是开拓了整个行业的疆土。而这些创新的基础，就是智能合约虚拟机“EVM”。兼容“EVM”，运行智能合约，也成了多数主链的选择。

“GateChain”主网上线后，一直稳定高效的运行。原生提供的安全账户、清算等功能也深受用户的喜爱；“Gatemint”作为底层共识协议，提供了去中心化的安全保障。为了让用户在使用智能合约的同时，也能享受原生的安全特性，同时尽量降低用户的迁移成本，我们没有采用同类公链的折中方案：以多链跨链的方式实现智能合约功能。“GateChain-EVM”是主链的原生功能，用户无需跨链迁移资产即可使用智能合约。

为了让用户和开发者能够将“ETH”生态产品无成本迁移到“GateChain”，我们基于“Gatemint”共识将原有“GateChain”的账号体系做了扩展，新增了“EVM-Account”类型。“EVM-Account”在用法、格式、安全性上，与“ETH”保持一致。用户甚至不用在“GateChain”创建新的账户，用“ETH”的原生账户就可以使用“GateChain”的“EVM”功能。

在提供这种便捷服务的同时，作为最安全的公链，我们也考虑到用户对资产的安全需求。“EVM-Account”可以与“GateChain”原生的保险账户进行直接转账，进而使用交易可撤回、定期清算等功能，轻松享受到最高级别的安全保护。

除了账号的兼容性，“GateChain-EVM”完全兼容“ETH”虚拟机智能合约代码。任何在以太坊上正常运行的智能合约，都可以无缝迁移到“GateChain”上运行。

“GateChain-EVM”完全兼容“ETH”生态产品。MetaMask等浏览器钱包[[接入指南]](../.././integration/tool-metamask/index.md)、Remix等开发工具[[接入指南]](../.././integration/tool-remix/index.md)，都可以轻松接入，帮助用户轻松上手，无学习成本玩转Defi。例如“MetaMask”钱包，只需要将“网络”配置为"GateChain”，原“ETH”用户就可以使用同一套私钥/公钥/地址（不推荐），在“GateChain”上进行转账和合约调用。

“GT”作为“GateChain”主网燃料，同样是“GateChain-EVM”中支付“Gas”费用的唯一资产。部署、调用智能合约，用户都需要在账户中预存一定数量的GT，来支付手续费。随着“GT”的不断销毁和应用场景的增多，持有“GT”的用户能得到更多的便利。

“GateChain-EVM”在研发过程中，借鉴了<a href="https://github.com/ethereum/go-ethereum" target="_blank">go-ethereum</a>和<a href="https://github.com/cosmos/ethermint" target="_blank">Ethermint</a>两个项目的设计思路和代码，在此表示致敬和感谢~


