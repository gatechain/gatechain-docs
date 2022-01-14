## 功能介绍
  
  GateBridge协议提供了一种基于流动性池的跨链协议，此协议定义了更宏观的流动性池，重新制定了做市商做市方式和价格模型，设计了独特的资产账本交互流程。
  
## 功能模块

  GateBridge跨链协议采用四层结构：
  
  <div align="center">
  <a data-fancybox title="" href="@assets/img/zh/gatebridge-principles1.png"><img src="@assets/img/zh/gatebridge-principles1.png"  height=60% width=60%></a>
  </div>
  
   1. 网络层：GateBridge支持市场上所有的智能链，可以保证资产在所有智能链之间快速、安全的转移。
   2. 市场流动性：GateBridge定义了宏观流动性池，在保证用户跨链资产转移或兑换的基础上，引入了跨链AMM的角色。
   3. 结算层：基于私钥签名授权，通过智能合约完成交易结算。系统通过三层账单模型，帮助用户低成本、快速、安全资产跨链转移和结算。
   4. 应用层：GateBridge平台，给用户提供便捷、人性化的操作界面，帮助用户更好的完成自己的操作。
 
## 系统核心模块

### 系统角色
   1. 用户（User）：使用GateBridge进行资产跨链转移的用户；
   2. 跨链中继器（Relayer）: 跨链的中继器，是由多个relayer节点组成，用来负责智能链之间的数据通信；
   3. 跨链流动性池（Liquidity Pool）：部署在各个智能链上的智能合约，实现跨链资产的转移；
   4. 账本（Ledger）：部署在智能链上的智能合约，负责记录整个跨链系统的账本记录以及维护整个系统的资产安全；
   5. 流动性提供者（Liquidity Provider）：

      a. 各个不同来源的自动化做市商；
      
      b. 为跨链矿池提供流动性的LP做市商。
      
### 账本模型

   1. 用户交易信息账本(User Ledger)：用户发送交易后的用户账本记录，记录用户关于流动性池的相关操作，由部署在各个智能链的智能合约完成此功能；
   2. 流动池信息总账本(System Ledger)：跨链系统所有的账本记录，总账本智能合约部署在GateChain主链上，主要优点为保证了账本的安全之外、极大的节省账本维护的开销；
   3. 流动池执行结果信息账本(Result Ledger)：账本执行结果会发送到各个需要执行的智能链进行执行，并且将执行结果记录在流动池执行结果信息账本上，执行结果账本部署在各个智能链上。

### 价格模型

由于跨链转移的资产是价值基本相等的代币，所以价格比基本不变的两种资产是比较符合这个定义的。例如两种资产X和Y，那么卖出dx数量的资产X，将导致购买dy数量资产Y，这时$dx=dy$。可以概括为具有"线性"不变量的任意数量的资产X，即恒定总和的价格模型:
<center> $\sum x_i=D$ </center>
  
此模型中资产价格可以确定为$dx_i / dx_j$，假如$dx_i = dx_j$，则价格则一直为1，即一个资源池中的所有代币的价格都是相等的。但是这种价格模型非常不利于市场的资产自动调节，容易导致资源池中的资产单边枯竭，造成跨链资产转移的失败。像Uniswap、Balancer等去中心化交易所的代币价格经常会随着市场波动，他们采用的是恒定乘积价格模型，即：
<center>$x * y=D$</center>

则可以将此公式推广到任意数量的任意比例的代币流动池中，就像Balancer的价格模型一样：
<center>$\prod x_i^{w_i}=D$</center>

但是这种模型并不适用于价格比基本不变的代币，因为这种模型对于价格比基本不变的代币会造成巨大的滑点损失。所以我们借鉴了stableswap的价格模型，即混合型恒定总和及恒定乘积公式（Hybrid Constant Sum and Constant Product ）。StableSwap 的价格曲线特性是：在代币平衡时较平坦像是恒定总和，代币不平衡时就过渡为类似恒定乘积。这种价格模型的滑点模型也像一个平底锅，在平底区域基本没有滑点，但是越过这个区域就会有很大的滑点，如图所示：

<div align="center">
  <a data-fancybox title="" href="@assets/img/zh/gatebridge-principles2.png"><img src="@assets/img/zh/gatebridge-principles2.png"  height=60% width=60%></a>
</div>
  
StableSwap的最终计算公式如下:
<div align="center">
  $An^n\sum x_i + D = ADn^n + \frac{D^{n+1}}{n^n\prod x_i}$
</div>
 
 对于资产组合$\{x_i\}$需要计算 $D$，并且当资产在流动性池中进行交换时，此公式两边要保持相等，这就完成了Stableswap的价格模型计算。在Stableswap价格模型下，当一个流动池中的资产配比不平衡时，会存在一定的套利空间，市场上的套利者会很快进行套利，从而将流动性池的资产配比恢复到平衡状态，但是Stableswap价格模型也有两个缺点：
 
 1. 对于小体量资产来说，很容易添加或者提取流动性的时候超出滑点模型的平底区域，造成很大的资产滑点损失。
 2. 对于部分资产在部分链比较热门，部分链比较冷门的情况下，资产很容易在一个流动池中非常不平衡，从而导致资源池中资产价格出现大幅度的差异。
 
 为了解决以上两个问题，我们也对Stableswap价格模型做出了如下调整：
 
1. 在流动池中的资产数量比较少时，采用恒定总和价格模型；当资产数量到达流动池预先的设定值时，流动池会自动切换为混合型恒定总和及恒定乘积价格模型。
2. 当流动池中的资产配比严重失衡时，流动性池的价格比会有最低和最高限制，保证流动性池中流动性提供者承受的滑点损失是可控的。此时流动性池存在一定的套利空间，当市场套利者进行套利，流动性池资产配比恢复正常后，流动性池价格比按照正常计算即可。
3. 在单边添加流动性时，如果导致流动池中的资产脱离了滑点模型的平底区域，我们会收取额外的手续费到流动性池中来抵消流动性提供者的滑点损失。

### 跨链交易流程

  <div align="center">
  <a data-fancybox title="" href="@assets/img/zh/gatebridge-principles3.png"><img src="@assets/img/zh/gatebridge-principles3.png"  height=70% width=70%></a>
  </div>
  
#### 流动性操作示例：
1. 流动性提供者A在Eth上要在流动性池中增加100BTC，则A在GateBridge操作界面选择增加流动性，并且存入100BTC，则User Ledger会记录A增加了100BTC的流动性；
2. Realyer在监控到用户A在Eth存入了100BTC的流动性后，各个Relayer会统一将收集到的用户事件打包，批量发送给GateChain上的System Ledger；
3. System Ledger在收到各个Realyer发送的批量交易后，会校验此批量交易是否得到足够Relayer的支持（POA方式），如果校验通过，则将各个交易分别发送给不同的流动性池进行账本计算，在此例中是BTC流动性池；
4. 流动性池计算完成后，会将计算结果记录在System Ledger上；
5. Relayer在监控到System Ledger上的账本执行结果后，会将收集到的计算结果打包，并且发送给具体的执行智能链，在这里是Eth；
6. 当Eth上的ResultLedger收到Realyer发送过来的执行结果后，如果是成功，则将100BTC价值的LP-Token发送给A用户；如果执行结果是失败，则将100BTC重新退回给A用户；
7. 去除流动性流程和增加流动性流程非常类似。
#### 用户跨链操作示例：
1. 用户B在Eth上要往Bsc上跨链10BTC，则B在GateBridge操作界面选择跨链兑换，并且提供10BTC，操作成功后，User Ledger会记录用户B需要往Bsc兑换10BTC；
2. Realyer在监控到用户B在Eth上要往Bsc上跨链10BTC的动作后，各个Relayer会统一将收集到的用户事件打包，批量发送给GateChain上的System Ledger；
3. System Ledger在收到各个Realyer发送的批量交易后，会校验此批量交易是否得到足够Relayer的支持（POA方式），如果校验通过，则将各个交易分别发送给不同的流动性池进行账本计算，在此例中是BTC流动性池；
4. 流动性池计算完成后，会将计算结果记录在System Ledger上；
5. Relayer在监控到System Ledger上的账本执行结果后，会将收集到的计算结果打包，并且根据执行结果发送到不同的执行链：如果计算结果是成功，则将此计算结果打包后发送给BSC；如果计算结果是不成功（一般情况为Bsc上流动性不够，不能够提取出10BTC），则将计算结果重新发送回Eth；
6. 如果Bsc上的ResultLedger收到Relayer发送过来的执行结果，则代表结果执行成功，则将接近10BTC的代币发送给用户B（接近10BTC是因为要扣除流动性手续费）；如果Eth上的ResultLedger收到Relayer发送过来的执行结果，则代表结果执行失败，则将10BTC退还给用户B。