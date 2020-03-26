# 概述

多签账户类型与单签账户有所区别，其类型如下：

- 普通多签账户
	- 前缀：`gc2`
	- 示例：`gc210fm6dxdd08sh4ptaxt8t2mapaywp5zq57fxx9p`

- 保险多签账户
  - 前缀：`vault2`
  - 示例：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`

### 创建多签账户

- [创建普通多签账户](./cli/account.md)

- 生成保险多签账户
	-  首先创建普通多签账户，用普通多签账户创建保险多签账户

		- [cli生成保险多签账户](./cli/vault-account.md)

		- [api生成保险多签账户](./API/vault-account.md)
	
	- 改变保险多签账户地址的方式(vault1->vault2)：
		- 创建保险多签账户时加公钥

		- 执行[公布多签账户](./cli/account.md)

		- 使用新创建的保险账户转出一笔钱

### 管理多签账户
- 多签普通账户
	- 发送普通交易
	```
	多签账户发送普通交易同单签账户一致，但由于多签普通账户发送交易需要多个签名，因此使用组合命令才能完成交易签名。使用`--generate-only`生成未签名交易信息,然后各个账户对其签名,最终汇总签名填入交易广播。
	```
		- 生成交易信息  
		```bash
		gatecli tx send [接受者账户] [转移金额] --from [多签账户] --generate-only --chain-id [链ID] > [交易文件]
	```
	
		- 使用各个私钥对交易进行签名  
		```bash
	gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
		```
		
		- 汇总交易签名  
	```bash
	gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
	```
	
		- 广播交易  
 	```bash
	gatecli tx broadcast [交易签名文件] --chain-id [链ID]
	```
	
	- [公布普通多签账户](./cli/account.md)

- 保险多签账户
```
保险多签账户发送的所有相关交易(延迟交易,撤回交易,修改清算高度交易,清算交易)同单签保险账户一致。但由于多签保险账户发送交易需要多个签名，因此使用组合命令才能完成交易签名。使用`--generate-only`生成未签名交易信息,然后各个账户对其签名,最终汇总签名填入交易广播。
```
以清算交易为例，其他交易（延迟交易,撤回交易,修改清算高度交易）步骤相同：

	- 生成交易信息
	```bash
gatecli vault-account clear [保险账户1]([保险账户2] [保险账户3]...) --from [发送者] --generate-only --chain-id [链ID] > [交易文件]
	```
	
	- 使用各个私钥对交易进行签名
```bash
gatecli tx sign [交易文件] --from [签名者账户] --multisig [多签账户] --chain-id [链ID] --output-document=[签名文件]
```

	- 汇总交易签名
```bash
gatecli tx multisign [交易文件] [多签账户] [签名文件1] [签名文件2] ... --chain-id [链ID] > [交易签名文件]
```

	- 广播交易
	```
	gatecli tx broadcast [交易签名文件] --chain-id [链ID]
	```
	
	
