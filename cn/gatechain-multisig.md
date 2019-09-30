# 多重签名

多签账户类型与单签账户有所区别，其类型如下：

- 普通多签账户
	- 前缀：`gt2`
	- 示例：`gt210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`

- 保险多签账户
  - 前缀：`vault2`
	- 示例：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

## 1. 创建多签账户

### 1.1 生成普通多签账户

```bash
gatecli account create [账户] --multisig [账户列表] --multisig-threshold [最小有效数量]
```		    
示例：

```bash
gatecli account create gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
```
说明：

* 账户列表是指已创建的的账户。

### 1.2 生成保险多签账户

使用1.1 创建的普通多签账户创建保险账户

```bash
	gatecli vault-account create [基础账户] [找回账户] [延迟生效高度] [清算高度] [转移代币数量]--from [发送者账户]--chain-id [链ID]
```
	
示例：
```bash
	gatecli vault-account create gt11d9t6p5g69kzz0rf39av5s24tqvdprwk6s6a57r gt11cmsfq3hmzzhze2z3mgrxq5x8ndhq6nkxyu9l2l 38 300 30gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --chain-id testnet
```

说明：

* 必须使用新生成的账户，直接用来发送创建保险账户交易，
* 如果先向该账户发送了普通交易，该账户即为普通账户，不能用来再发送创建保险账户交易
* 清算高度需要大于（当前高度+延迟生效高度）

## 2. 管理多签账户
### 2.1 多签普通账户
#### 2.1.1发送普通交易
多签账户发送普通交易通单签账户一样，但由于多签普通账户发送交易需要多个签名，因此使用组合命令才能完成交易签名。使用`--generate-only`生成未签名交易信息,然后各个账户对其签名,最终汇总签名填入交易广播。
	
 i. 生成交易信息  
	
	gatecli tx send [接受者账户] [转移金额] --from [多签账户] --generate-only --chain-id [链ID] > [交易文件]
	
ii.  使用各个私钥对交易进行签名  

	gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
	
iii. 汇总交易签名  

	gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
	
vi.	广播交易  
 
	gatecli tx broadcast [交易签名文件] --chain-id [链ID]
	
#### 2.1.2 公布普通多签账户交易
    gatecli tx publish_multi_sig [账户地址] [账户公钥] [转移金钱] --from [发送者账户] --chain-id [链ID]
    
示例：

	gatecli tx publish_multi_sig gt11kzhwcp82pw636mq2quzhq7tad2gk85s55nx59z gt1pub1ytql0csgqgfzd666axrjzq... 1gt --chain-id testnet --from validator

### 2.2 保险多签账户
多签保险账户发送的所有相关交易(延迟交易,撤回交易,修改清算高度交易,清算交易)同单签保险账户一样。

但由于多签保险账户发送交易需要多个签名，因此使用组合命令才能完成交易签名。使用`--generate-only`生成未签名交易信息,然后各个账户对其签名,最终汇总签名填入交易广播。

以清算交易为例，其他交易（延迟交易,撤回交易,修改清算高度交易）步骤相同：

i. 生成交易信息

```bash
gatecli tx clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者] --generate-only --chain-id [链ID] > [交易文件]
```

ii.  使用各个私钥对交易进行签名

```bash
gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
```

iii. 汇总交易签名

```bash
gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
```

vi. 广播交易

```bash
gatecli tx broadcast [交易签名文件] --chain-id [链ID]
```

示例：  

	1. 生成交易信息
	gatecli tx send gt11662vk3dg522te4d0lngxkvpkrd544uu0ewn7lj 3gt --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --generate-only --chain-id test > tx
	2. 签名一
	gatecl tx sign tx --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v --chain-id testnet --output-document=s4_sign.json
	3. 签名二
	gatecli tx sign tx --from gt110nxr6854yn8gf6pl890qc6flj5g48d63jerjcc --multisig gt116z4sq6y0dmk45e7ft6qqwrtsmuj5z08r8nh57v  --chain-id testnet --output-document=s3_sign.json
	4. 汇总签名
	gatecli tx multisign tx m2 s4_sign.json s3_sign.json --chain-id testnet >tx_with_sign.json
	5. 广播交易
	gatecli tx broadcast tx_with_sign.json
