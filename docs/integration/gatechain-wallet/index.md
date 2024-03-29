## 钱包 wallet

>  本文档涉及的版本为正式版，新功能开发工作在持续进行。

GateChain生态针对个人、专业用户和企业用户的差异化需求，提供了类型丰富的钱包应用。

* 在测试网阶段，GateChain提供基于Windows、Mac OS平台的桌面版钱包。专业用户也可以通过RPC方式访问和测试。

* 在主网阶段，GateChain将提供多种针对个人、专业用户和企业用户的钱包应用。包括：命令行钱包、基于Android和iOS的APP钱包、Web钱包、多签钱包、硬件钱包等。

### 规范说明
#### 1.1 GateChain地址类型 ###

GateChain的账户分普通账户（Normal Account）和保险账户（Vault Account）两类。不同账户类型，对应于不同的地址前缀标识：

* 普通账户（Normal Account）：以“gt”作为前缀标识。其中，“gt1”表示普通单签账户，“gt2”表示普通多签账户。
* 保险账户（Vault Account）：以“vault”作为前缀标识。其中，“vault1”表示保险单签账户，“vault2”表示保险多签账户。

使用GateChain定义的地址前缀标识机制，收款账户易于识别付款账户的类型。由此，对于保险账户发送的付款交易，用户可注意到并根据自身需求确认收款，在可撤回时间之后安全确认。

#### 1.2 GateChain交易类型 ###

GateChain具有多种转账交易类型。为便于用户有效识别不同的转账类型，GateChain创新地提出了转账交易类型标识。

下面列出不同转账类型的前缀标识：

* 不可撤回交易支付（Irrevocable Pay）：“IRREVOCABLEPAY-”
* 可撤回交易支付（Revocable Pay）：“REVOCABLEPAY-”
* 修改账户属性（Account Set）： “ACCOUNTSET-”
* 创建保险账户（Vault Create）：“VAULTCREATE-”
* 撤回交易（Revoke）: “REVOKE-”
* 清算保险账户（Vault Clear）：“VAULTCLEAR-”
* 其他未命名交易类型（Untitled）： “BASIC-”

#### 1.3 其他定义 ###

- 由于GateChain独创的可撤回交易，为了防止这一安全措施被滥用，GateChain使用了醒目的交易头标识。用户在接收到一笔交易时，可以通过以下特征来判断交易是否可撤回，进行识别后再进行收款确认等后继操作。
> 1. 普通账户以“gt”作为前缀，使用“gt”前缀的地址作为转账来源的交易是不可撤回的。
> 2. 不可撤回的转账交易id前缀是 IRREVOCABLEPAY- ，这种前缀的转账交易是不可撤回的。
> 3. 保险账户以“vault”作为前缀，使用“vault”前缀的地址作为转账来源的交易是可以被撤回的。
> 4. 可撤回的转账交易id前缀是 REVOCABLEPAY- ，这种前缀的转账交易是可撤回的。

* 找回账户：保险账户的预设安全关联账户，当保险账户的转账操作被撤回后，资金将被转移到这一账户。

* 可撤回时间：是在可撤回交易执行后允许进行交易撤回操作的有效时间，也就是在当前交易发出后，系统出块数量达到预设值之前可以进行交易撤回操作。

* 清算块高：是未来的某个时间，也就是未来这个区块链高度的时间，到达这个清算高度以后，账户中的资金将允许被清算。

>在GateChain中所有时间设定均使用区块高度计算，目前系统有交易出块速度约为4秒，没有交易出块速度为30秒，设置上述时间请据此作为参考。

### 下载安装
#### 2.1 桌面版钱包
- 进入GateChain的官网<a href="https://www.gatechain.io" target="_blank">点击进入</a>，点击上方的“钱包下载”，下载系统对应的版本。<br/><a data-fancybox title="" href="@assets/img/zh/0.png"><img src="@assets/img/zh/0.png"  height=50% width=50%></a></br>
	
- 也可以直接访问<a href="https://www.gatechain.io/wallets" target="_blank">点击进入</a>，下载PC版钱包。
  	
	>目前支持Windows 和 Mac OS 系统。
	
#### 2.2 APP钱包和Web钱包

- APP钱包下载方式：进入wallet.io的官网<a href="https://wallet.io/download" target="_blank">wallet.io</a>，根据手机系统选择Android版或iOS版
- Web钱包打开方式：进入wallet.io的官网<a href="https://wallet.io/download" target="_blank">wallet.io</a>，点击右上角的产品--个人钱包。<br/><a data-fancybox title="" href="@assets/img/zh/0-0.png"><img src="@assets/img/zh/0-0.png"  height=50% width=50%></a></br>


### 桌面版钱包

>  桌面版钱包可以自由配置连接MainNet、TestNet、DevNet，以及任何用户自己搭建的网络。TestNet和DevNet中的测试币可能在重置中清空，再次获取新的测试币即可。

#### 3.1 密码和安全
- 桌面版钱包是本地钱包，所以不需要注册登陆账户，但在首次运行时，需要设置登陆密码，此密码除用于登录本地钱包以外也作为进行钱包各项操作时的“解锁密码”，十分重要！如果丢失可能会造成您的财产损失，所以请尽量设置较为复杂的密码，并妥善保管。<br/><a data-fancybox title="" href="@assets/img/zh/open.png"><img src="@assets/img/zh/open.png"  height=50% width=50%></a></br>

#### 3.2 创建普通账户
- 1 ）点击主界面“创建账户”，选择“单签账户 ”-->>“普通账户。

<a data-fancybox title="" href="@assets/img/zh/1.png"><img src="@assets/img/zh/1.png"  height=50% width=50%></a>

- 2 ）输入账户名称，点击“创建”。

<a data-fancybox title="" href="@assets/img/zh/2.png"><img src="@assets/img/zh/2.png"  height=50% width=50%></a>

- 3 ）输入解锁密码，点击“确认”。

<a data-fancybox title="" href="@assets/img/zh/3.png"><img src="@assets/img/zh/3.png"  height=50% width=50%></a>

- 4 ）账户创建成功，注意识别单签普通账户，普通账户地址以“gt”作为前缀。

<a data-fancybox title="" href="@assets/img/zh/4.png"><img src="@assets/img/zh/4.png"  height=50% width=50%></a>

#### 3.3 账户导入

除了创建账户以外，也可以使用“导入账户”功能来导入一个之前已经创建的账户，具体操作步骤如下：

- 1 ) 点击主界面“导入账户”，选择单签账户。 <br/><a data-fancybox title="" href="@assets/img/zh/account9.png"><img src="@assets/img/zh/account9.png"  height=50% width=50%></a></br>

- 2 ）进入账户导入界面，依次填写账户名称（不必与原账户名相同），账户备份文件（Keystore文件）以及Keystore文件的解密密码（导出账户文件时输入的密码），点击“导入”按钮。
 <br/><a data-fancybox title="" href="@assets/img/zh/account10.png"><img src="@assets/img/zh/account10.png"  height=50% width=50%></a></br>
- 3 ）输入当前解锁密码，点击“确认”按钮，完成账户导入。

#### 3.4 获得测试币 
- **通过钱包获得测试币：** 
	- 钱包账户概览界面有 “获得测试币 (Give me GT) 图标”，点击后会自动向测试链提交申请拨发测试币，几分钟后测试币就显示在钱包余额里面了。<br/><a data-fancybox title="" href="@assets/img/zh/5.png"><img src="@assets/img/zh/5.png"  height=50% width=50%></a></br>

- **通过网站获得测试币：** 
	- 访问网站： <a href="https://gatescan.org/faucet" target="_blank">点击进入</a>
	- 输入要获取测试币的账户地址，点击添加申请，几分钟后测试币就显示在钱包余额里面了。<br/><a data-fancybox title="" href="@assets/img/zh/6.png"><img src="@assets/img/zh/6.png"  height=50% width=50%></a></br>

> 每个账户在24小时内只能申请一次测试币，每次通过钱包申请测试币将获得以下提示。
> <br/><a data-fancybox title="" href="@assets/img/zh/5-1.png"><img src="@assets/img/zh/5-1.png"  height=50% width=50%></a></br>

#### 3.5 创建保险账户
- 1 ）点击主界面“创建账户”，选择“单签账户 ”-->>“保险账户

<a data-fancybox title="" href="@assets/img/zh/7.png"><img src="@assets/img/zh/7.png"  height=50% width=50%></a>

- 2 ）输入账户名称，点击“创建”
 
<a data-fancybox title="" href="@assets/img/zh/8.png"><img src="@assets/img/zh/8.png"  height=50% width=50%></a>

- 3 ）输入解锁密码解锁，点击“确认”

<a data-fancybox title="" href="@assets/img/zh/9.png"><img src="@assets/img/zh/9.png"  height=50% width=50%></a>

- 4 ）账户创建成功，提示需要激活，点击“激活”按钮

<a data-fancybox title="" href="@assets/img/zh/10.png"><img src="@assets/img/zh/10.png"  height=50% width=50%></a>

- 5 ）选择手续费付款账户，输入一个自己的备用账户作为“找回账
号”，选择交易可撤回时间（比如 48 小时），清算块高（比如 5 年）,点击“下一步” 
<br/><a data-fancybox title="" href="@assets/img/zh/11.png"><img src="@assets/img/zh/11.png"  height=50% width=50%></a></br>

- 6 ）确认保险账户激活参数后，点击“确定”，输入解锁密码后激活保险账户。
 
<a data-fancybox title="" href="@assets/img/zh/13.png"><img src="@assets/img/zh/13.png"  height=50% width=50%></a>
<br/><a data-fancybox title="" href="@assets/img/zh/14.png"><img src="@assets/img/zh/14.png"  height=50% width=50%></a></br>
<br/><a data-fancybox title="" href="@assets/img/zh/15.png"><img src="@assets/img/zh/15.png"  height=50% width=50%></a></br>

> 亦可以通过其他普通账户激活保险账户
> 
> - 进入用于激活保险账户的其他账户概览界面，点击右侧“激活其他账户”
> <br/><a data-fancybox title="" href="@assets/img/zh/vault14.png"><img src="@assets/img/zh/vault14.png"  height=50% width=50%></a></br>
> - 进入激活保险账户页面。
> - 激活流程同上。<br/><a data-fancybox title="" href="@assets/img/zh/vault15.png"><img src="@assets/img/zh/vault15.png"  height=50% width=50%></a></br>
> 注：当前用于激活保险账户的普通账户地址将被自动填写入“找回账户”栏内。希望使用其他账户作为找回账户的用户请注意修改。

#### 3.6 保险账户清算时间可以进行修改
具体步骤如下:

- 1 ）进入需要修改清算时间的保险账户，点击“清算块高”右侧修改按钮。<br/><a data-fancybox title="" href="@assets/img/zh/vault10.png"><img src="@assets/img/zh/vault10.png"  height=50% width=50%></a></br>
- 2 ）进入修改页面，设置新的清算块高。<br/><a data-fancybox title="" href="@assets/img/zh/vault11.png"><img src="@assets/img/zh/vault11.png"  height=50% width=50%></a></br>
- 3 ）核对信息并输入解锁密码<br/><a data-fancybox title="" href="@assets/img/zh/vault12.png"><img src="@assets/img/zh/vault12.png"  height=50% width=50%></a></br>
- 4 ）修改交易发起成功。 <br/><a data-fancybox title="" href="@assets/img/zh/vault13.png"><img src="@assets/img/zh/vault13.png"  height=50% width=50%></a></br>


#### 3.7 设置保险账户告警通知

GateChain为保险账户提供了邮件和短信两种告警通知方式。

- 1 ）进入区块链浏览器监控页面
	- 可以点击保险账户地址右侧图标链接进入账户监控设置页面。<br/><a data-fancybox title="" href="@assets/img/zh/monitor1.png"><img src="@assets/img/zh/monitor1.png"  height=50% width=50%></a></br>
	- 或者直接访问<a href="https://gatescan.org/monitor" target="_blank">区块浏览器</a>点击“监控”进入账户监控设置页面。 <br/><a data-fancybox title="" href="@assets/img/zh/monitor0.png"><img src="@assets/img/zh/monitor0.png"  height=50% width=50%></a></br>
- 2 ) 填写需要监控的账户地址以及用于接收预警信息的手机、邮箱信息。
 <br/><a data-fancybox title="" href="@assets/img/zh/monitor2.png"><img src="@assets/img/zh/monitor2.png"  height=50% width=50%></a></br>
  
#### <span id="evm">3.8 使用普通账户转账（不可撤回）</span>
- 1 ）从钱包账户列表中选择需要进行转出操作的账户，点击进入账户概要。<br/><a data-fancybox title="" href="@assets/img/zh/18.png"><img src="@assets/img/zh/18.png"  height=50% width=50%></a></br>

- 2 ) 选择“转账”按钮。<br/><a data-fancybox title="" href="@assets/img/zh/19.png"><img src="@assets/img/zh/19.png"  height=50% width=50%></a></br>

- 3 ) 进入转账页面，填写接收账户地址以及需要转账金额，确认后点击“发送”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/20.png"><img src="@assets/img/zh/20.png"  height=50% width=50%></a></br>

- 4 ) 对转账信息进行核对后点击“确认” 按钮
<br/><a data-fancybox title="" href="@assets/img/zh/21.png"><img src="@assets/img/zh/21.png"  height=50% width=50%></a></br>

- 5 ) 输入解锁密码，并点击“确认” 
- 6 ) 获取交易发起成功反馈
<br/><a data-fancybox title="" href="@assets/img/zh/22.png"><img src="@assets/img/zh/22.png"  height=50% width=50%></a></br>

**注意：** 
> 1. 普通账户以“gt”作为前缀，使用“gt”前缀的地址作为转账来源的交易是不可撤回的。
> 2. 不可撤回的转账交易id前缀是 IRREVOCABLEPAY- ，这种前缀的转账交易是不可撤回的。
> 3. 使用此功能，可将gt地址余额转账到以太坊0x...地址余额中，以进行后续的合约部署及交互。
> 
> **此类转账交易是即时生效并且不可撤回的，收到交易后可以放心确认和使用**


- 7 ) 在账户概览“转账记录”中查询本账户的转账记录

<a data-fancybox title="" href="@assets/img/zh/23.png"><img src="@assets/img/zh/23.png"  height=50% width=50%></a>

#### 3.9 使用保险账户转账（可撤回）

保险交易转账都是延时生效的转账交易，因此在使用保险账户进行转账时相较于普通转账需要填写额外内容。具体步骤如下：

- 1 ）使用保险账户发起对外转账（ Send Revocable Payment from Vault Account)<br/><a data-fancybox title="" href="@assets/img/zh/vault1.png"><img src="@assets/img/zh/vault1.png"  height=50% width=50%></a></br>

- 2 ）填写接收账户地址，转出金额等信息，点击“发送”按钮
<br/><a data-fancybox title="" href="@assets/img/zh/vault2.png"><img src="@assets/img/zh/vault2.png"  height=50% width=50%></a></br>

- 3 ）确认转账信息，点击“确认” 按钮
<br/><a data-fancybox title="" href="@assets/img/zh/vault3.png"><img src="@assets/img/zh/vault3.png"  height=50% width=50%></a></br>

- 4 ）输入钱包登陆密码后即可获得“可撤回交易发起成功的通知
<br/><a data-fancybox title="" href="@assets/img/zh/vault4.png"><img src="@assets/img/zh/vault4.png"  height=50% width=50%></a></br>
	
> 收款账户在收款记录中可以看到该笔交易，点击具体交易获取交易详细信息（交易状态，预计确认时间，金额等）
> <br/><a data-fancybox title="" href="@assets/img/zh/vault4-1.png"><img src="@assets/img/zh/vault4-1.png"  height=50% width=50%></a></br><a data-fancybox title="" href="@assets/img/zh/vault4-2.png"><img src="@assets/img/zh/vault4-2.png"  height=50% width=50%></a>

- 5 ）如已经对相关账户设置过接收预警消息，在转账后将立即获得告警通知 (Receive alarm of vault account out going payment)


- 6 ）发起撤回交易将资金撤回 (Revoke the undesired vault account payment)，在账户概览页面点击转账记录，查询可撤回转账交易记录，点击右侧“撤回交易”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/vault5.png"><img src="@assets/img/zh/vault5.png"  height=50% width=50%></a></br>
- 7 ）确认待撤回交易信息后点击“下一步”
<br/><a data-fancybox title="" href="@assets/img/zh/vault6.png"><img src="@assets/img/zh/vault6.png"  height=50% width=50%></a></br>
- 8 ）再次确认撤回交易细节，并输入钱包登陆密码
<br/><a data-fancybox title="" href="@assets/img/zh/vault7.png"><img src="@assets/img/zh/vault7.png"  height=50% width=50%></a></br>
- 9 ）撤回交易发起成功
<br/><a data-fancybox title="" href="@assets/img/zh/vault8.png"><img src="@assets/img/zh/vault8.png"  height=50% width=50%></a></br>
- 10 ）本次撤回交易转入对应找回账户中
<br/><a data-fancybox title="" href="@assets/img/zh/vault9.png"><img src="@assets/img/zh/vault9.png"  height=50% width=50%></a></br>

**注意:** 
> 1. 保险账户以“vault”作为前缀，使用“vault”前缀的地址作为转账来源的交易是可以被撤回的。
> 2. 可撤回的转账交易id前缀是 REVOCABLEPAY- ，这种前缀的转账交易是可撤回的。
> 
> **此类转账只有在超过可撤回期限后还未被撤回的情况下才算成功接收。**

#### 3.10 委托代币
GateChain的用户有两种方式参与POS挖矿：

1、搭建GateChain全节点，成为共识账户。

2、委托GT给其他共识账户。

钱包提供第二种委托给其他共识账户，来获得挖矿收益，具体操作步骤如下：

- 1 ）进入账户主页，点击“委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/24.png"><img src="@assets/img/zh/24.png"  height=50% width=50%></a></br>

- 2 ）委托页面，在页面右上角点击“发起委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/25.png"><img src="@assets/img/zh/25.png"  height=50% width=50%></a></br>

- 3 ）填写要委托的共识账户、委托金额，或者可以在委托账户处点击“查看所有共识账户”按钮，跳转到浏览器选择需要委托的共识账户。
<br/><a data-fancybox title="" href="@assets/img/zh/26.png"><img src="@assets/img/zh/26.png"  height=50% width=50%></a></br><a data-fancybox title="" href="@assets/img/zh/27.png"><img src="@assets/img/zh/27.png"  height=50% width=50%></a>

- 4 ）确认委托信息，点击“确认”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/28.png"><img src="@assets/img/zh/28.png"  height=50% width=50%></a></br>

- 5 ）回到委托页面，在我的委托列表显示委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/29.png"><img src="@assets/img/zh/29.png"  height=50% width=50%></a></br>

- 6 ）委托页面，在我的委托列表右侧有“再次委托”按钮，可对此共识账户再次委托。
<br/><a data-fancybox title="" href="@assets/img/zh/30.png"><img src="@assets/img/zh/30.png"  height=50% width=50%></a></br>

- 7 ）委托页面，在我的委托列表右侧有“转移委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/31.png"><img src="@assets/img/zh/31.png"  height=50% width=50%></a></br>

- 8 ）点击“转移委托”按钮后，填写需要转移到共识账户地址、转移代币数量。
<br/><a data-fancybox title="" href="@assets/img/zh/32.png"><img src="@assets/img/zh/32.png"  height=50% width=50%></a></br>

- 9 ）确认转移委托信息，点击“确认”按钮
<br/><a data-fancybox title="" href="@assets/img/zh/33.png"><img src="@assets/img/zh/33.png"  height=50% width=50%></a></br>

- 10 ）回到委托页面，在我的委托列表显示转移委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/34.png"><img src="@assets/img/zh/34.png"  height=50% width=50%></a></br>

- 11 ）委托页面，在我的委托列表右侧有“解除委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/35.png"><img src="@assets/img/zh/35.png"  height=50% width=50%></a></br>

- 12 ）点击“解除委托”按钮后，填写需要解绑的代币数量。
<br/><a data-fancybox title="" href="@assets/img/zh/36.png"><img src="@assets/img/zh/36.png"  height=50% width=50%></a></br>

- 13 ）确认解除委托信息，点击“确认”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/37.png"><img src="@assets/img/zh/37.png"  height=50% width=50%></a></br>

- 14 ）回到委托页面，在我的委托列表中“解除委托中的代币数量”处，显示目前正在解绑的代币数，解除委托锁定时间为21天。
<br/><a data-fancybox title="" href="@assets/img/zh/38.png"><img src="@assets/img/zh/38.png"  height=50% width=50%></a></br>

- 15 ）委托页面，在我的委托列表右侧有“提取收益”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/39.png"><img src="@assets/img/zh/39.png"  height=50% width=50%></a></br>

- 16 ）点击“提取收益”按钮后，点击“发送”按钮，并确认提取收益信息。
<br/><a data-fancybox title="" href="@assets/img/zh/40.png"><img src="@assets/img/zh/40.png"  height=50% width=50%></a></br>

- 17 ）回到委托页面，在我的委托列表“总收益”显示处，收益清零，提取的收益直接进入账户余额。
<br/><a data-fancybox title="" href="@assets/img/zh/41.png"><img src="@assets/img/zh/41.png"  height=50% width=50%></a></br>

- 18 ）委托页面有委托历史列表，里面显示具体的委托、转移委托、解除委托、提取收益的交易信息。
<br/><a data-fancybox title="" href="@assets/img/zh/42.png"><img src="@assets/img/zh/42.png"  height=50% width=50%></a></br>

---
#### 3.11 进阶功能
>本部分内容涉及账户操作，请谨慎使用，避免因误操作造成资产损失。

钱包支持对本地钱包账户列表中的账户进行包括账户导出、账户删除和查看账户私钥在内的各项操作。

- 选择需要进行操作的账户，点击进入账户概览。<br/><a data-fancybox title="" href="@assets/img/zh/account1.png"><img src="@assets/img/zh/account1.png"  height=50% width=50%></a></br>

- 点击右上角，进入账户详情。<br/><a data-fancybox title="" href="@assets/img/zh/account2.png"><img src="@assets/img/zh/account2.png"  height=50% width=50%></a></br>

- 查看账户详情<br/><a data-fancybox title="" href="@assets/img/zh/account3.png"><img src="@assets/img/zh/account3.png"  height=50% width=50%></a></br>

> 普通账户只显示“账户信息”，保险账户将额外显示相关的“保险设置”信息。

##### 3.11.1 账户导出
- 单签账户导出
	- 单签账户可以导出到文件进行备份，进入账户详情。
	- 点击“Keystore”右侧“下载”按钮，输入解锁密码后进行账户备份。
<br/><a data-fancybox title="" href="@assets/img/zh/account4.png"><img src="@assets/img/zh/account4.png"  height=50% width=50%></a></br>

##### 3.11.2 查看私钥
- 进入账户详情后点击“私钥”右侧“查看”按钮，输入解锁密码后查看账户私钥。
<br/><a data-fancybox title="" href="@assets/img/zh/account5.png"><img src="@assets/img/zh/account5.png"  height=50% width=50%></a></br><a data-fancybox title="" href="@assets/img/zh/account6.png"><img src="@assets/img/zh/account6.png"  height=50% width=50%></a>

>所显示私钥请不要使用截图，复制等方式保存在可联网电脑中，以避免资产风险。

##### 3.11.3 删除账户
- 进入账户详情后点击右上方“删除账户”按钮
<br/><a data-fancybox title="" href="@assets/img/zh/account7.png"><img src="@assets/img/zh/account7.png"  height=50% width=50%></a></br>

- 输入解锁密码后点击“确认”按钮，相关账户即被删除。
<br/><a data-fancybox title="" href="@assets/img/zh/account8.png"><img src="@assets/img/zh/account8.png"  height=50% width=50%></a></br>

#### 3.12 多签账户
##### 3.12.1 创建多签账户
* 1 ）点击主界面“创建账户”，选择“多签账户 ”-->>“普通账户。<br/><a data-fancybox title="" href="@assets/img/zh/multi0.png"><img src="@assets/img/zh/multi0.png"  height=50% width=50%></a></br>

* 2 ）依次填写“账户名称”，选择“团队总人数”(2-7人数可选)，“最小签名数”以及“成员公钥”（可以使用钱包内已创建的账户公钥或填写其他非本地公钥），点击“下一步”。<br/><a data-fancybox title="" href="@assets/img/zh/multi2.png"><img src="@assets/img/zh/multi2.png"  height=50% width=50%></a></br>
* 3 ）进入确认页面，点击“创建”按钮，完成多签账户创建。<br/><a data-fancybox title="" href="@assets/img/zh/multi3.png"><img src="@assets/img/zh/multi3.png"  height=50% width=50%></a></br>
* 4 ) 按照提示将多签账户发布到链上。<br/><a data-fancybox title="" href="@assets/img/zh/multi4.png"><img src="@assets/img/zh/multi4.png"  height=50% width=50%></a></br>
* 5 ）发布公钥需要产生手续费，选择付款账户，并点击下一步。<br/><a data-fancybox title="" href="@assets/img/zh/multi5.png"><img src="@assets/img/zh/multi5.png"  height=50% width=50%></a></br>
* 6 ）确认信息后，输入解锁密码，获得交易发起成功反馈。<br/><a data-fancybox title="" href="@assets/img/zh/multi6.png"><img src="@assets/img/zh/multi6.png"  height=50% width=50%></a></br>

> 保险多签账户创建流程与普通多签账户一致，激活过程与普通保险账户激活过程一致

##### 3.12.2 导出多签账户
* 1 ）在账户列表选择需要导出的多签账户，进入账户详情。<br/><a data-fancybox title="" href="@assets/img/zh/multi7.png"><img src="@assets/img/zh/multi7.png"  height=50% width=50%></a></br>	
* 2 ) 选择“导出多签账户”按钮，输入解锁密码后生产多签账户文件。<br/><a data-fancybox title="" href="@assets/img/zh/multi8.png"><img src="@assets/img/zh/multi8.png"  height=50% width=50%></a></br>

##### 3.12.3 多签转账交易

* 发起多签账户转账交易首先和普通交易类似，填写收款账户、金额等数据，点击“发送”。 <br/><a data-fancybox title="" href="@assets/img/zh/multi9-1.png"><img src="@assets/img/zh/multi9-1.png"  height=50% width=50%></a></br>
* 对交易信息进行确认后，进入“签名&广播流程”页面。<br/><a data-fancybox title="" href="@assets/img/zh/multi9-2.png"><img src="@assets/img/zh/multi9-2.png"  height=50% width=50%></a></br>
* 因不同多签账户的参与成员数量的不同，请按照“签名&广播流程”页面给出的提示完成“收集签名”以及“广播交易”操作。

**示例：**
> <br/><a data-fancybox title="" href="@assets/img/zh/multi9.png"><img src="@assets/img/zh/multi9.png"  height=50% width=50%></a></br>

---

### APP钱包

以下介绍的是APP钱包（wallet.io）委托功能的使用说明，委托代币到共识账户，用户以此来获得挖矿收益。

#### 4.1 委托入口

1 ）在软件首页，点击GT（官方钱包）。
<br/><a data-fancybox title="" href="@assets/img/zh/app1.png"><img src="@assets/img/zh/app1.png"  height=30% width=30%></a></br>

2 ）选择有足够的GT代币账户（目前暂支持普通单签、多签账户进行委托）。
<br/><a data-fancybox title="" href="@assets/img/zh/app2.png"><img src="@assets/img/zh/app2.png"  height=30% width=30%></a></br>

#### 4.2 委托

1 ）进入账户首页，在资产列表模块点击“委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app3.png"><img src="@assets/img/zh/app3.png"  height=30% width=30%></a></br>
	
2 ）进入委托页面，点击发起委托按钮
<br/><a data-fancybox title="" href="@assets/img/zh/app4.png"><img src="@assets/img/zh/app4.png"  height=30% width=30%></a></br>
	
3 ）填写要委托的共识账户、委托金额，或者可以在填写共识账户处点击“查看共识账户”按钮，跳转到浏览器选择需要委托的共识账户。
<br/><a data-fancybox title="" href="@assets/img/zh/app5.png"><img src="@assets/img/zh/app5.png"  height=30% width=30%></a>
<a data-fancybox title="" href="@assets/img/zh/app6.png"><img src="@assets/img/zh/app6.png"  height=30% width=30%></a></br>

4 ）确认委托信息，点击“下一步”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app7.png"><img src="@assets/img/zh/app7.png"  height=30% width=30%></a></br>

5 ）开始验证授权，短信验证码或谷歌验证。
<br/><a data-fancybox title="" href="@assets/img/zh/app8.png"><img src="@assets/img/zh/app8.png"  height=30% width=30%></a></br>
	
6 ）委托成功后，点击“返回”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app9.png"><img src="@assets/img/zh/app9.png"  height=30% width=30%></a></br>
	
7 ）进入委托页面，在我的委托列表显示委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/app10.png"><img src="@assets/img/zh/app10.png"  height=30% width=30%></a></br>

8 ）在委托页面，我的委托记录，点击下方第一个按钮“再次委托”，可对此共识账户进行再次委托。
<br/><a data-fancybox title="" href="@assets/img/zh/app11.png"><img src="@assets/img/zh/app11.png"  height=30% width=30%></a></br>

#### 4.3 转移委托

1 ）在委托页面，我的委托记录，点击下方第二个按钮“转移委托”。可把委托给此共识账户的代币转移给其他共识账户
<br/><a data-fancybox title="" href="@assets/img/zh/app12.png"><img src="@assets/img/zh/app12.png"  height=30% width=30%></a></br>

2 ）点击“转移委托”后，填写需要转移到共识账户地址、转移代币数量
<br/><a data-fancybox title="" href="@assets/img/zh/app13.png"><img src="@assets/img/zh/app13.png"  height=30% width=30%></a></br>
	
3 ）确认转移委托信息，点击“下一步”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app14.png"><img src="@assets/img/zh/app14.png"  height=30% width=30%></a></br>

4 ）通过短信验证码或谷歌验证后，转移委托成功，点击“返回”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app15.png"><img src="@assets/img/zh/app15.png"  height=30% width=30%></a></br>

5 ）进入委托页面，在我的委托列表显示转移委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/app16.png"><img src="@assets/img/zh/app16.png"  height=30% width=30%></a></br>

#### 4.4 解除委托

1 ）在委托页面，我的委托记录，点击下方第三个按钮“解除委托”。可对此共识账户解除委托
<br/><a data-fancybox title="" href="@assets/img/zh/app17.png"><img src="@assets/img/zh/app17.png"  height=30% width=30%></a></br>

2 ）点击“解除委托”，弹窗提示解除委托的本金锁定21天，21天后自动返回账户余额。
<br/><a data-fancybox title="" href="@assets/img/zh/app18.png"><img src="@assets/img/zh/app18.png"  height=30% width=30%></a></br>

3 ）点击提示框“确认”按钮，进入填写解绑信息页，填写解绑的代币数量，点击“下一步”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app19.png"><img src="@assets/img/zh/app19.png"  height=30% width=30%></a></br>

4 ）确认解绑信息，点击“下一步”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app20.png"><img src="@assets/img/zh/app20.png"  height=30% width=30%></a></br>

5 ）通过短信验证码或谷歌验证后，解绑成功，点击“返回”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app21.png"><img src="@assets/img/zh/app21.png"  height=30% width=30%></a></br>

6 ）进入委托页面，在我的委托列表中“解除委托金额”处，显示目前正在解绑的代币数。
<br/><a data-fancybox title="" href="@assets/img/zh/app22.png"><img src="@assets/img/zh/app22.png"  height=30% width=30%></a></br>

#### 4.5 提取收益

1 ）在委托页面，我的委托记录，点击下方第三个按钮“提取收益”。可提取在此共识账户中的挖矿收益。
<br/><a data-fancybox title="" href="@assets/img/zh/app23.png"><img src="@assets/img/zh/app23.png"  height=30% width=30%></a></br>
	
2 ）点击“提取收益”后，确认提取收益金额等信息，点击“下一步”。
<br/><a data-fancybox title="" href="@assets/img/zh/app24.png"><img src="@assets/img/zh/app24.png"  height=30% width=30%></a></br>

3 ）通过短信验证码或谷歌验证后，提取收益成功，点击“返回”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/app25.png"><img src="@assets/img/zh/app25.png"  height=30% width=30%></a></br>

4 ）进入委托页面，在我的委托列表中显示“总收益”，收益清零，提取的收益直接进入账户余额。
<br/><a data-fancybox title="" href="@assets/img/zh/app26.png"><img src="@assets/img/zh/app26.png"  height=30% width=30%></a></br>

5 ）在委托页面，右上角可以查看“委托历史”。
<br/><a data-fancybox title="" href="@assets/img/zh/app27.png"><img src="@assets/img/zh/app27.png"  height=30% width=30%></a></br>

6 ）点击“委托历史”按钮，显示具体的委托、转移委托、解除委托、提取收益的交易信息。
<br/><a data-fancybox title="" href="@assets/img/zh/app28.png"><img src="@assets/img/zh/app28.png"  height=30% width=30%></a>
<a data-fancybox title="" href="@assets/img/zh/app29.png"><img src="@assets/img/zh/app29.png"  height=30% width=30%></a></br>

### Web钱包

- 以下介绍的是Web钱包<a href="https://wallet.io/home/" target="_blank">(进入钱包)</a>委托功能的使用说明，委托代币到共识账户，用户以此来获得挖矿收益。
#### 5.1 委托入口

1 ）在钱包首页，点击导航栏GT官方。
<br/><a data-fancybox title="" href="@assets/img/zh/web1.png"><img src="@assets/img/zh/web1.png"  height=50% width=50%></a></br>

2 ）选择有足够的GT代币账户（目前暂支持普通单签、多签账户进行委托）。

<br/><a data-fancybox title="" href="@assets/img/zh/web2.png"><img src="@assets/img/zh/web2.png"  height=50% width=50%></a></br>

#### 5.2 委托

1 ）进入账户主页，点击“委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/web3.png"><img src="@assets/img/zh/web3.png"  height=50% width=50%></a></br>

2 ）委托页面，在页面右上角点击“发起委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/web4.png"><img src="@assets/img/zh/web4.png"  height=50% width=50%></a></br>

3 ）填写要委托的共识账户、委托金额，或者可以在委托账户处点击“查看所有共识账户”按钮，跳转到浏览器选择需要委托的共识账户。
<br/><a data-fancybox title="" href="@assets/img/zh/web5.png"><img src="@assets/img/zh/web5.png"  height=50% width=50%></a>
<a data-fancybox title="" href="@assets/img/zh/web6.png"><img src="@assets/img/zh/web6.png"  height=50% width=50%></a></br>

4 ）确认委托信息，点击“确认”按钮，开始验证授权，短信验证码或谷歌验证。
<br/><a data-fancybox title="" href="@assets/img/zh/web7.png"><img src="@assets/img/zh/web7.png"  height=50% width=50%></a></br>

5 ）回到委托页面，在我的委托列表显示委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/web8.png"><img src="@assets/img/zh/web8.png"  height=50% width=50%></a></br>

6 ）委托页面，在我的委托列表右侧有“再次委托”按钮，可对此共识账户再次委托。
<br/><a data-fancybox title="" href="@assets/img/zh/web9.png"><img src="@assets/img/zh/web9.png"  height=50% width=50%></a></br>

#### 5.3 转移委托

1 ）委托页面，在我的委托列表右侧有“转移委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/web10.png"><img src="@assets/img/zh/web10.png"  height=50% width=50%></a></br>

2 ）点击“转移委托”按钮后，填写需要转移到共识账户地址、转移代币数量。
<br/><a data-fancybox title="" href="@assets/img/zh/web11.png"><img src="@assets/img/zh/web11.png"  height=50% width=50%></a></br>

3 ）确认转移委托信息，点击“确认”按钮，开始验证授权，短信验证码或谷歌验证。
<br/><a data-fancybox title="" href="@assets/img/zh/web12.png"><img src="@assets/img/zh/web12.png"  height=50% width=50%></a></br>

4 ）回到委托页面，在我的委托列表显示转移委托记录。
<br/><a data-fancybox title="" href="@assets/img/zh/web13.png"><img src="@assets/img/zh/web13.png"  height=50% width=50%></a></br>

#### 5.4 解除委托

1 ）委托页面，在我的委托列表右侧有“解除委托”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/web14.png"><img src="@assets/img/zh/web14.png"  height=50% width=50%></a></br>

2 ）点击“解除委托”按钮后，填写需要解绑的代币数量。
<br/><a data-fancybox title="" href="@assets/img/zh/web15.png"><img src="@assets/img/zh/web15.png"  height=50% width=50%></a></br>

3 ）确认解除委托信息，点击“确认”按钮，开始验证授权，短信验证码或谷歌验证。
<br/><a data-fancybox title="" href="@assets/img/zh/web16.png"><img src="@assets/img/zh/web16.png"  height=50% width=50%></a></br>

4 ）回到委托页面，在我的委托列表中“解除委托金额”处，显示目前正在解绑的代币数，解除委托锁定时间为21天。
<br/><a data-fancybox title="" href="@assets/img/zh/web17.png"><img src="@assets/img/zh/web17.png"  height=50% width=50%></a></br>

#### 5.5 提取收益

1 ）委托页面，在我的委托列表右侧有“提取收益”按钮。
<br/><a data-fancybox title="" href="@assets/img/zh/web18.png"><img src="@assets/img/zh/web18.png"  height=50% width=50%></a></br>

2 ）点击“提取收益”按钮后，点击“下一步”按钮并确认提取收益信息，开始验证授权，短信验证码或谷歌验证。
<br/><a data-fancybox title="" href="@assets/img/zh/web19.png"><img src="@assets/img/zh/web19.png"  height=50% width=50%></a></br>

3 ）回到委托页面，在我的委托列表“总收益”显示处，收益清零，提取的收益直接进入账户余额。
<br/><a data-fancybox title="" href="@assets/img/zh/web20.png"><img src="@assets/img/zh/web20.png"  height=50% width=50%></a></br>

4 ）委托页面有委托历史列表，里面显示具体的委托、转移委托、解除委托、提取收益的交易信息。
<br/><a data-fancybox title="" href="@assets/img/zh/web21.png"><img src="@assets/img/zh/web21.png"  height=50% width=50%></a></br>

### 区块浏览器
-  查询账户、交易ID、区块、验证人等信息，请访问测试链区块浏览器<a href="https://gatescan.org/index" target="_blank">（点击进入）</a>。

<a data-fancybox title="" href="@assets/img/zh/17.png"><img src="@assets/img/zh/17.png"  height=50% width=50%></a>

### 开发文档
- 更多开发文档：<a href="https://www.gatechain.io/docs" target="_blank">点击进入</a>


