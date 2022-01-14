
### 账户类型
- 单签账户
	- 前缀：'gt1'
	- 示例：
	- 'gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq'
- 多签账户
	- 前缀：'gt2'
	- 示例：
	- 'g211twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq'
- 保险单签账户
	- 前缀：'vault1'
	- 示例：
	- 'vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'
- 保险多签账户
	- 前缀：'vault2'
	- 示例：
	- 'vault21fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww'

### 生成单签账户
```bash
gatecli account create
```

::: details 返回示例:
	- name: vault //账户名称
	  type: local //账户类型
	  address: gt1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthz7a7xld //账户地址
	  pubkey: gt1pub1u8s6p73qf92hfdy6sp3s3657ssqrnpjtwevc86ht6d9txyrnt7239528z6wqxjhlfn //账户公钥
	  mnemonic: "" //账户助记词，在下方显示具体内容，用于其他节点恢复该账户
	  threshold: 0 //账户有效数量，多签账户有值
	  pubkeys: []
	
	**Important** write this mnemonic phrase in a safe place.
	It is the only way to recover your account if you ever forget your password.
	
	flee agree charge truth answer flush inflict shove nice valid auto love laugh review frame sword later man inside couch slogan level guitar diet 
	//账户助记词，只出现在创建账户时，之后使用show、list都不会显示，建议保存
	
:::

### 生成多签账户

```bash
gatecli account create [账户] --multisig [账户列表] --multisig-threshold [最小有效数量]
```		    
::: details 请求示例:
	gatecli account create gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --multisig gt110nxr6.....,gt113454xdr..... --multisig-threshold 2
:::

::: details 返回示例:
	Key "gt11efwuug5y8ccvz54uunhdet22wpdf5huva7720v47ffej2vv0cy4863gc945j9d22n3n9v0" saved to disk. 
	//多签账户地址，使用gatecli account list查询该地址公钥等信息，使用gatecli account publish-multisig公布多签账户后，得到gt2开头的多签账户地址
:::


说明：

* 账户列表是指已创建的的账户.


### 查询账户列表
```bash
gatecli account list
```

::: details 返回示例:
	- name: con //账户名称
	  type: local //账户类型
	  address: gt11ewdeyjdlxs2x4yglnhtulp0tclgdp7c2t8d5c6495r83qvrfr7p0qt40uddu3k44s7rxg6 //账户地址
	  pubkey: gt1pub1u8s6p73qg4vmn6pjsnfehrh0nph8sqnp0nta0clfayjhsgtmjpfeek289gdsmr7au2 //账户公钥
	  mnemonic: "" //账户助记词，只在创建账户时显示
	  threshold: 0 //账户有效数量，多签账户有值
	  pubkeys: []
	- name: ...
:::



### <span id="查询账户信息">查询账户信息 [API](../../api/account/index.md#查询账户信息-命令行)</span>
```bash
gatecli account show [账户] --chain-id [链ID]
```

::: details 请求示例:
	gatecli account show gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details 返回示例:
	Account:
	  Address:            gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //账户地址
	  Pubkey:        gt1pub1u8s6p73q634mnsu7knd4fz23ng3gwvcyjfldrhlyffty3mnpx5phtr6ydyyqlj3uv8 //账户公钥
	  Tokens:        69998999899999967NANOGT //账户余额
	  AccountNumber: 4 //账户编号
	  Sequence:      0
	  AccountType:        0 ////账户类型：0.单签普通账户、1.单签保险账户、2.多签普通账户、3.多签保险账户
	  VaultAddress:   [vault1124j4d2tjt0c7vrq5er4n2ksyp539gkv28krrsye5ym2y2mf5ekvg2s7neydamthzwag272] //保险账户地址，此字段有值代表该账户为此保险账户的找回账户
	  ReceivedRevocableTokens: //仍可撤回的代币
:::


### 修改账户密码
```bash
gatecli account update [name]
```
::: details 请求示例:
	gatecli account update 1583472684
:::

::: details 返回示例:
Password successfully updated! //密码更新成功
:::



### 删除账户
```
gatecli account delete [name]
```
::: details 请求示例:
	gatecli account delete 1583472684
:::

::: details 返回示例:
	Key deleted forever (uh oh!) //账户删除成功，永久删除密钥
:::

	

### <span id="查询账户余额">查询账户余额 [API](../../api/account/index.md#查询账户余额-命令行)</span>
```bash
gatecli account balance [账户] --chain-id [链ID]
```

::: details 请求示例:
	gatecli account balance gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --chain-id testnet
:::

::: details 返回示例:
	1000000NANOGT //账户余额
:::



### 查询账户公钥
```bash
gatecli account show-key [name]
```

::: details 请求示例:
	gatecli account show-key 1583472684
:::

::: details 返回示例:
	- name: delegate //账户名称
	  type: local //账户类型
	  address: gt11m5acrv46s5xzr8r3h8f3z9hz8wdl3ucfcmw6ssac2kfvad649u6nfzhx2rpk4ucvrxla6s //账户地址
	  pubkey: gt1pub1u8s6p73qva7mzaymcwfxf6ssmvamtjzzd3adp4eavlky0gwhlwwlwpukqq6sqwuxfg //账户公钥
	  mnemonic: ""
	  threshold: 0
	  pubkeys: []
:::



### <span id="公布多签账户">公布多签账户 [API](../../api/account/index.md#公布多签账户-命令行)</span>

```bash
gatecli account publish-multisig [账户] [公钥] --from [发送者账户] --fees [交易手续费] --chain-id [链ID]
```

::: details 请求示例:
	gatecli account publish-multisig gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq gt1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq --fees 10000000NANOGT --chain-id testnet
:::

::: details 返回示例:
	  TxHash: BASIC-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //交易hash，使用gatecli tx show {hash}查询此交易详细信息
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //交易发送成功
:::




