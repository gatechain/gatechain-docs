## 概述

GateChain通过独创的保险账户技术以及清算保障体系来最大程度保障用户在GateChain上的资产安全。 
GateChain针对内最典型的两类安全问题的分别提供对应保障措施：

- 账户密钥被盗 ：提供可撤回交易，支持交易提醒并给用户充分的时间进行撤回操作。
- 密钥遗失：提供清算交易，在遗失资产账户密钥的情况下，使用保险账户对密钥遗失账户中的资产进行清算转移。

## 定义

1. 普通账户

	- 普通账户是传统区块链中的账户，适用于正常转账交易，其中交易对账户状态的更改立刻生效，不支持撤回。

2. 保险账户

	- 保险账户是用户为可撤销业务建立的账户，保险账户支持延时交易，创建保险账户时需要绑定一个新创建的普通账户。

3. [账户类型](../../developers/cli/account/index.md)

## 保险账户

[CLI详细操作](../../developers/cli/vault-account/index.md)

[API详细操作](../../developers/api/vault-account/index.md)

## 安全交易

[CLI详细操作](../../developers/cli/revocable-tx/index.md)

[API详细操作](../../developers/api/revocable-tx/index.md)