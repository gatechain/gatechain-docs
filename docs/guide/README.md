---
# sidebar: auto
---
# GateBridgeV2使用文档

## GateBridge 介绍

GateBridgeV2是桥接市场上多种智能链（如ETH、GateChain、BSC、HECO）上主流资产（UDST、USDC、WBTC、WETH等）的去中心化交易平台，起着市场上主链的跨链资产桥梁和应用枢纽的作用，此协议使得资产跨链不需要对原生区块链做出升级或者改动，也不需要额外的钱包或者软件就能完成资产的跨链转移。GateBridge还引入了广义的流动性池，使得不同区块链的资产所有者可以将自己的资产单边加入到流动性池中获取收益，而且避免了跨链代币流动性竞争的问题，使得用户跨链资产就是主流的价值代币。

## GateBridge 功能

### 添加流动性

1.&nbsp;打开[Hipo](https://www.hipo.com/ethereum/zh/)网站，切换所需网络并连接钱包；

![添加流动性](@assets/img/liquidity/add-step1.png)

2.&nbsp;进入GateBridge模块，点击流动性；

![添加流动性](@assets/img/liquidity/add-step2.png)

3.&nbsp;点击&quot;添加&quot;，输入添加的数量，首次添加需要先授权，点击授权；

![添加流动性](@assets/img/liquidity/add-step3.png)

4.&nbsp;授权完成后，点击&quot;确定&quot;，在MetaMask确认签名；

![添加流动性](@assets/img/liquidity/add-step4.png)

5.&nbsp;提交交易后，可转至&quot;历史订单&quot;模块，查询交易进度；

![添加流动性](@assets/img/liquidity/add-step5.png)

### 提取流动性

1.&nbsp;在流动性模块，选择要提取的币种，点击&quot;提取&quot;；

![提取流动性](@assets/img/liquidity/remove-step1.png)

2.&nbsp;选择需要提取比例，首次提取需要先授权，点击授权；

![提取流动性](@assets/img/liquidity/remove-step2.png)

3.&nbsp;授权完成后，点击&quot;确定&quot;，在MetaMask确认签名；

![提取流动性](@assets/img/liquidity/remove-step3.png)

4.&nbsp;提交交易后，可转至&quot;历史订单&quot;模块，查询交易进度；

### 跨链

1.&nbsp;打开[Hipo](https://www.hipo.com/ethereum/zh/)网站，切换所需网络并连接钱包；

![跨链](@assets/img/gateBridge/step1.png)

2.&nbsp;进入GateBridge模块，点击跨链；

![跨链](@assets/img/gateBridge/step2.png)

3.&nbsp;选择要跨链的币种、网络和数量，首次跨链需要先授权，点击授权；

![跨链](@assets/img/gateBridge/step3.png)

4.&nbsp;授权完成后，点击&quot;确定&quot;，在MetaMask确认签名；

![跨链](@assets/img/gateBridge/step4.png)

5.&nbsp;提交交易后，可转至&quot;历史订单&quot;模块，查询交易进度；

![跨链](@assets/img/gateBridge/step5.png)

## 获取流动性收益

GateBridge的流动性池中，会收取跨链兑换金额的千分之三作为交易手续费并且将这笔手续费放在流动性池中作为流动性提供者的奖励。流动性提供者不管是单边流动性提供者、还是多边流动性提供者，都按照先到先得（FCFS）的原则获得全部跨链流动性收益。

### 历史订单状态

1.&nbsp;交易上链中：

2.&nbsp;交易上链失败：

3.&nbsp;relayer执行中：

4.&nbsp;relayer执行成功：

5.&nbsp;relayer执行失败：

6.&nbsp;交易回滚中：

7.&nbsp;交易回滚成功：

8.&nbsp;交易回滚失败：
