
- **全节点和本地测试网**：每个用户都可以自由搭建并运行一个完整的节点并运行自己的测试网络。全节点具有GateChain所有功能。详细安装部署步骤介绍请参阅“[安装部署](../../developers/gatechain-build/index.md)”。
  - **加入主网**： 全节点可以接入到GateChain的主网络（需要与主网络保持版本一致。<!--，最新代码[由此](待开发)获取-->）实现对网络中的交易、区块信息等各项事务实时监控、广播。
  - **加入测试网**： 全节点可以接入到GateChain的公共测试网络（需要与测试网络保持版本一致。<!--，最新代码[由此](待开发)获取-->）实现对网络中的交易、区块信息等各项事务实时监控、广播。
  - **CLI**：GateChain在钱包以外，还提供客户端程序。用户可以使用命令行接口（CLI）与GateChain进行交互。通过命令行接口（CLI），用户可以操作GateChain链上账户，包括账户管理、交易管理、资产管理等，并对链上数据进行简单查询，例如查询账户余额、交易详情等。细节请参阅“[Command Line Interface Reference](../../developers/cli/README.md)”。
  - **API**： GateChain节点提供高级REST API服务，相关API信息请参阅“[REST API 列表](../../developers/api/README.md)”。
