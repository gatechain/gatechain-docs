
### 账户类型
- 单签账户
	- 前缀：`gc1`
	- 示例：`gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88`
- 多签账户
	- 前缀：`gc2`
	- 示例：`gc21kfwurleaskangv45ssmpzs2sprhxjsfdztca9d`
- 保险单签账户
	- 前缀：`vault1`
	- 示例：`vault118mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e`
- 保险多签账户
	- 前缀：`vault2`
	- 示例：`vault218mlcn9uxmmuv33s0y8zdl9lmms7jxnexjme28e `

### 生成单签账户
```bash
gatecli account create
```

### 生成多签账户

```bash
gatecli account create [账户] --multisig [账户列表] --multisig-threshold [最小有效数量]
```		    
示例：

```bash
gatecli account create gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --multisig gc110nxr6.....,gc113454xdr..... --multisig-threshold 2
```
说明：

* 账户列表是指已创建的的账户.


### 查询账户列表
```bash
gatecli account list
```

### 查询账户信息
```bash
gatecli account show [账户] --chain-id [链ID]
```

示例：

```
gatecli account show gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 修改账户密码
```bash
gatecli account update [name]
```
示例：

```
gatecli account update 1583472684
```

### 删除账户
```
gatecli account delete [name]
```
示例：

```
gatecli account delete 1583472684
```

### 查询账户余额
```bash
gatecli account balance [账户] --chain-id [链ID]
```

示例：

```bash
gatecli account balance gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 --chain-id testnet
```

### 查询账户公钥
```bash
gatecli account show-key [name]
```

示例：

```bash
gatecli account show-key 1583472684
```

### 公布多签账户
```bash
gatecli account publish-multisig [账户] [公钥] --chain-id [链ID]
```

示例：

```bash
gatecli account publish-multisig gc11kxgm58wpfr6dch276wwtuq07m8v7g8s9krjx88 gc1pub1ytql0csgqgfzd666axrjzqegteuuxvghau9u0q67lltpjqla3ykzz3t8efmh6sqhyt4uhnh3q5fzd666axrjzqkhwmygytf0grzudhv69h9ttcy4xhze0v4mtf4jza6mrp0j3lq68qfzd666axrjzqn6wmq0uuyvxr8tywehal0zyzhpy5tv4h5tpryvc449jmznnzdruqy68ks2 --from gc11wmnygdl4mtrz3x9sgkev5rhajzxxqh2j0gr3vr --chain-id testnet
```

