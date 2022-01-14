
作为聚焦于链上资产安全的创新型公链，GateChain引入了多项全新概念，同时希望通过对基本概念的阐述能帮助用户更全面的了解GateChain安全逻辑。此外出于交易安全性考虑，为便于用户有效识别不同的账户类型和转账类型，以避免用户误操作，GateChain创新性地提出了账户类型和转账交易类型标识。

## GateChain 基本概念 

GateChain引入全新的概念，为资金安全提供了完备自洽的理论基础。

* <span id="na">普通账户（Normal Account）：类似于比特币地址的资金存储账户，普通账户账户中的资金可以快速支付，一旦被区块链确认后即不能撤回，私钥丢失后也不能恢复，适合用于存储少量资金做日常支付。</span>
* <span id="va">保险账户（Vault Account）：GateChain首创的新账户模型，具有被盗资金可撤回以及私钥丢失可以恢复的重要安全特性，资金每次转出需要等待一定时间，适合存储和保护不需要立即使用的大额资金。</span>
* <span id="rdp">可撤回时间（Revocable Delay Period ）：保险账户资金转出后的可撤回时间，在这个时间内（实际按区块数计算）可以通过发起撤回操作将资金可以撤回到找回账户 “Retrieval Account”。</span>
* <span id="ra">找回账户（Retrieval Account）：保险账户的预设安全关联账户，当保险账户的转账操作被撤回后，资金将被转移到这一账户。</span>
* <span id="ch">清算高度 （Clearing Height）：是未来的某个时间，也就是未来这个区块链高度的时间，到达这个清算高度以后，账户中的资金将允许被清算。</span>
* <span id="revoke">撤回交易：（Revoke）: 当保险账户发起的交易在可撤回时间之内，可以发起这个操作将资金撤回到找回账户 “Retrieval Account”。</span>
* <span id="rt">可撤回交易 （Revocable Transaction）：从保险账户发起的交易为可撤回交易，在可撤回时间内可以通过发起撤回交易将资金撤回到找回账户，超过可撤回时间之后资金将无法被撤回。</span>
* <span id="irt">不可撤回交易 （Irrevocable Transaction）：从普通账户发起的交易为不可撤回交易，一旦被区块链确认，将无法被撤回。</span>



## GateChain 的地址类型 

GateChain的账户分普通账户（Normal Account）和保险账户（Vault Account）两类。不同账户类型，对应于不同的地址前缀标识：

* 普通账户（Normal Account）：以“gt”作为前缀标识。其中，“gt1”表示普通单签账户，“gt2”表示普通多签账户。
* 保险账户（Vault Account）：以“vault”作为前缀标识。其中，“vault1”表示保险单签账户，“vault2”表示保险多签账户。

使用GateChain定义的地址前缀标识机制，收款账户易于识别付款账户的类型。由此，对于保险账户发送的付款交易，用户可注意到并根据自身需求确认收款，在可撤回时间之后安全确认。



## GateChain 的交易类型 

GateChain具有多种转账交易类型。为便于用户有效识别不同的转账类型，GateChain创新地提出了转账交易类型标识。

下面列出不同转账类型的前缀标识：

* 不可撤回交易支付（Irrevocable Pay）：“IRREVOCABLEPAY-”
* 可撤回交易支付（Revocable Pay）：“REVOCABLEPAY-”
* 修改账户属性（Account Set）： “ACCOUNTSET-”
* 创建保险账户（Vault Create）：“VAULTCREATE-”
* 撤回交易（Revoke）: “REVOKE-”
* 清算保险账户（Vault Clear）：“VAULTCLEAR-”
* 其他未命名交易类型（Untitled）： “BASIC-”


