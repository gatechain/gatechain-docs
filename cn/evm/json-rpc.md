

# JSON-RPC Server

因为GateChain-EVM与以太坊基本兼容，本文档中很多内容来自以太坊EVM文档的贡献。

## JSON-RPC Methods

| Method                                                                            | Namespace | Implemented | Notes                     |
|-----------------------------------------------------------------------------------|-----------|-------------|---------------------------|
| [`web3_clientVersion`](#web3_clientVersion)                                       | Web3      | ✔           |                           |
| [`web3_sha3`](#web3_sha3)                                                         | Web3      | ✔           |                           |
| [`net_version`](#net_version)                                                     | Net       | ✔           |                           |
| [`eth_protocolVersion`](#eth_protocolVersion)                                     | Eth       | ✔           |                           |
| [`eth_syncing`](#eth_syncing)                                                     | Eth       | ✔           |                           |
| [`eth_gasPrice`](#eth_gasPrice)                                                   | Eth       | ✔           |                           |
| [`eth_accounts`](#eth_accounts)                                                   | Eth       | ✔           |                           |
| [`eth_blockNumber`](#eth_blockNumber)                                             | Eth       | ✔           |                           |
| [`eth_getBalance`](#eth_getBalance)                                               | Eth       | ✔           |                           |
| [`eth_getStorageAt`](#eth_getStorageAt)                                           | Eth       | ✔           |                           |
| [`eth_getTransactionCount`](#eth_getTransactionCount)                             | Eth       | ✔           |                           |
| [`eth_getBlockTransactionCountByNumber`](#eth_getBlockTransactionCountByNumber)   | Eth       | ✔           |                           |
| [`eth_getBlockTransactionCountByHash`](#eth_getBlockTransactionCountByHash)       | Eth       | ✔           |                           |
| [`eth_getCode`](#eth_getCode)                                                     | Eth       | ✔           |                           |
| [`eth_sign`](#eth_sign)                                                           | Eth       | ✔           |                           |
| [`eth_sendTransaction`](#eth_sendTransaction)                                     | Eth       | ✔           |                           |
| [`eth_sendRawTransaction`](#eth_sendRawTransaction)                               | Eth       | ✔           |                           |
| [`eth_call`](#eth_call)                                                           | Eth       | ✔           |                           |
| [`eth_estimateGas`](#eth_estimateGas)                                             | Eth       | ✔           |                           |
| [`eth_getBlockByNumber`](#eth_getBlockByNumber)                                   | Eth       | ✔           |                           |
| [`eth_getBlockByHash`](#eth_getBlockByHash)                                       | Eth       | ✔           |                           |
| [`eth_getTransactionByHash`](#eth_getTransactionByHash)                           | Eth       | ✔           |                           |
| [`eth_getTransactionByBlockHashAndIndex`](#eth_getTransactionByBlockHashAndIndex) | Eth       | ✔           |                           |
| [`eth_getTransactionReceipt`](#eth_getTransactionReceipt)                         | Eth       | ✔           |                           |
| [`eth_newFilter`](#eth_newFilter)                                                 | Eth       | ✔           |                           |
| [`eth_newBlockFilter`](#eth_newBlockFilter)                                       | Eth       | ✔           |                           |
| [`eth_newPendingTransactionFilter`](#eth_newPendingTransactionFilter)             | Eth       | ✔           |                           |
| [`eth_uninstallFilter`](#eth_uninstallFilter)                                     | Eth       | ✔           |                           |
| [`eth_getFilterChanges`](#eth_getFilterChanges)                                   | Eth       | ✔           |                           |
| [`eth_getLogs`](#eth_getLogs)                                                     | Eth       | ✔           |                           |                                     
| [`eth_subscribe`](#eth_subscribe)                                                 | Websocket | ✔           |                           |
| [`eth_unsubscribe`](#eth_unsubscribe)                                             | Websocket | ✔           |                           |



### <span id="web3_clientVersion">web3_clientVersion</span>

返回当前的客户端版本。

#### 参数
```
无
```

#### 返回值
```
String - 当前客户端版本
```

#### 示例
```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'

// 结果
{
  "id":67,
  "jsonrpc":"2.0",
  "result": "Mist/v0.9.3/darwin/go1.4.1"
}
```

### <span id="web3_sha3">web3_sha3</span>

返回指定数据的Keccak-256（不同于标准的SHA3-256算法）hash值。

#### 参数

DATA - 要计算SHA3 hash的数据：

```
params: [
  "0x68656c6c6f20776f726c64"
]
```

#### 返回值
```
DATA - 指定字符串的SHA3结果
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_sha3","params":["0x68656c6c6f20776f726c64"],"id":64}'

// 结果
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
}
```

### <span id="net_version">net_version</span>

返回当前连接网络的ID。

#### 参数

```
无
```

#### 返回值
```
String - 当前连接网络的ID

"1": Ethereum Mainnet
"2": Morden Testnet (deprecated)
"3": Ropsten Testnet
"4": Rinkeby Testnet
"42": Kovan Testnet
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'

// 结果
{
  "id":67,
  "jsonrpc": "2.0",
  "result": "3"
}
```


### <span id="eth_protocolVersion">eth_protocolVersion</span>

返回当前以太坊协议的版本。

#### 参数

```
无
```

#### 返回值
```
String - 当前的以太坊协议版本
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_protocolVersion","params":[],"id":67}'

// 结果
{
  "id":67,
  "jsonrpc": "2.0",
  "result": "54"
}
```

### <span id="eth_syncing">eth_syncing</span>

对于已经同步的客户端，该调用返回一个描述同步状态的对象；对于未同步客户端，返回false。

#### 参数
```
无
```

#### 返回值
```
Object|Boolean, 同步状态对象或false。同步对象的结构如下：

startingBlock: QUANTITY - 开始块
currentBlock: QUANTITY - 当前块，同eth_blockNumber
highestBlock: QUANTITY - 预估最高块
```
#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'

// 结果（已同步）
{
  "id":1,
  "jsonrpc": "2.0",
  "result": {
    startingBlock: '0x384',
    currentBlock: '0x386',
    highestBlock: '0x454'
  }
}

//结果（未同步）
{
  "id":1,
  "jsonrpc": "2.0",
  "result": false
}

```

### <span id="eth_gasPrice">eth_gasPrice</span>

返回当前的gas价格，单位：wei。

#### 参数
```
无
```

#### 返回值
```
QUANTITY - 整数，以wei为单位的当前gas价格
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'

// 结果
{
  "id":73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```

### <span id="eth_accounts">eth_accounts</span>

返回客户端持有的地址列表。

#### 参数
```
无
```

#### 返回值
```
DATA - 20字节，客户端持有的地址列表
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]
}
```

### <span id="eth_blockNumber">eth_blockNumber</span>

返回当前块高度。

#### 参数
```
无
```

#### 返回值
```
QUANTITY - 节点当前块编号
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'

// 结果
{
  "id":83,
  "jsonrpc": "2.0",
  "result": "0x4b7" // 1207
}
```

### <span id="eth_getBalance">eth_getBalance</span>

返回指定账户地址的余额。

#### 参数

```
DATA - 20字节，要检查余额的地址
QUANTITY|TAG - 整数块编号，或者字符串"latest", "earliest" 或 "pending"
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest'
]
```

#### 返回值

```
QUANTITY - 当前余额的整数，单位：wei
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x0234c8a3397aab58" // 158972490234375000
}
```

### <span id="eth_getStorageAt">eth_getStorageAt</span>

从指定地址的存储位置返回值。

#### 参数
```
DATA - 20字节，存储地址
QUANTITY - 存储中位置的整数
QUANTITY|TAG - 整数块号，或字符串"latest"、"earliest" 或"pending"
```

#### 返回值

```
DATA - 指定存储位置的值
```

#### 示例

根据要提取的存储计算正确的位置。考虑下面的合约，由0x391694e7e0b0cce554cb130d723a9d27458f9298 部署在地址0x295a70b2de5e3953354a6a8344e616ed314d7251：
```
contract Storage {
    uint pos0;
    mapping(address => uint) pos1;

    function Storage() {
        pos0 = 1234;
        pos1[msg.sender] = 5678;
    }
}
```
提取pos0的值很直接：
```
// 请求
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"], "id": 1}' localhost:8545

// 结果
{"jsonrpc":"2.0","id":1,"result":"0x00000000000000000000000000000000000000000000000000000000000004d2"}
```

要提取映射表中的成员就难一些了。映射表中成员位置的计算如下：
```
keccack(LeftPad32(key, 0), LeftPad32(map position, 0))
```

这意味着为了提取pos1["0x391694e7e0b0cce554cb130d723a9d27458f9298"]的值，我们需要如下计算：
```
keccak(decodeHex("000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"))
```

geth控制台自带的web3库可以用来进行这个计算：
```
> var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"
undefined
> web3.sha3(key, {"encoding": "hex"})
"0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"
```
现在可以提取指定位置的值了：
```
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"], "id": 1}' localhost:8545
```
相应结果：
```
{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000000000000000000000000000000000000000162e"}

```


### <span id="eth_getTransactionCount">eth_getTransactionCount</span>

返回某个地址发送的交易数量。

#### 参数
```
DATA - 20字节，地址
QUANTITY|TAG - 整数块编号，或字符串"latest"、"earliest"或"pending"
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest' // state at the latest block
]
```

#### 返回值
```
QUANTITY - 从指定地址发出的交易数量，整数
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

### <span id="eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</span>

返回指定块内的交易数量，使用块编号指定块。

#### 参数

```
QUANTITY|TAG - 整数块编号，或字符串"earliest"、"latest"或"pending"

params: [
   '0xe8', // 232
]
```

#### 返回值

```
QUANTITY - 此区块的交易数量，整数。
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params":["0xe8"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa" // 10
}
```

### <span id="eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</span>

返回指定块内的交易数量，使用hash来指定块。

#### 参数
```
DATA - 32字节，块hash

params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

#### 返回值
```
QUANTITY - 此区块的交易数量，整数
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xb" // 11
}
```

### <span id="eth_getCode">eth_getCode</span>

返回指定地址的代码

#### 参数
```
DATA - 20字节，地址
QUANTITY|TAG - 整数块编号，或字符串"latest"、"earliest" 或"pending"
params: [
   '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
   '0x2'  // 2
]
```

#### 返回值
```
DATA - 指定地址处的代码
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```

### <span id="eth_sign">eth_sign</span>

使用如下公式计算以太坊签名：sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))。

通过给消息添加一个前缀，可以让结果签名被识别为以太坊签名。这可以阻止恶意DApp签名任意数据（例如交易）并使用 签名冒充受害者。

> 注意：进行签名的地址必须是解锁的。

#### 参数
```
账户、消息

DATA - 20字节，地址
DATA - 要签名的消息
```

#### 返回值
```
DATA: 签名
```

#### 示例
```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

### <span id="eth_sendTransaction">eth_sendTransaction</span>

创建一个新的消息调用交易，如果数据字段中包含代码，则创建一个合约。

#### 参数
```
 对象包含: 

    from: DATA, 20 Bytes - 发送交易的源地址。

    to: DATA, 20 Bytes - 交易的目标地址，当创建新合约时可选。

    gas: QUANTITY - 交易执行可用gas量，可选整数，默认值90000，未用gas将返还。

    gasPrice: QUANTITY - gas价格，可选，默认值：待定(To-Be-Determined)。

    value: QUANTITY - (可选)交易发送的金额。

    data: DATA - 合约的编译代码或调用的方法签名和编码参数的hash。有关详细信息，请参见以太坊合约ABI。

    nonce: QUANTITY - (可选)nonce的整数，可以使用同一个nonce来实现挂起的交易的重写。
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
```
#### 返回值
```
DATA, 32字节 - 交易hash，如果交易还未生效则返回0值hash

当创建合约时，在交易生效后，使用eth_getTransactionReceipt调用获取合约地址。
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### <span id="eth_sendRawTransaction"> eth_sendRawTransaction</span>

为签名交易创建一个新的消息调用交易或合约。

#### 参数
```
DATA - 签名的交易数据
params: ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"]
```

#### 返回值
```
DATA - 32字节，交易hash，如果交易未生效则返回全0 hash。
当创建合约时，在交易生效后，使用eth_getTransactionReceipt获取合约地址。
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[{see above}],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### <span id="eth_call">eth_call</span>

立刻执行一个新的消息调用，无需在区块链上创建交易。

#### 参数

```
 Object - 交易调用对象

    from: DATA, 20 Bytes - (可选) 发送交易的源地址。

    to: DATA, 20 Bytes - 交易的目标地址。

    gas: QUANTITY -交易可用gas量，可选。eth_call不消耗gas，但是某些执行环节需要这个参数。
    
    gasPrice: QUANTITY - (可选)gas价格。
    
    value: QUANTITY - (可选)交易发送的金额。

    data: DATA - (可选)合约的编译代码或调用的方法签名和编码参数的hash。有关详细信息，请参见以太坊合约ABI。

```

#### 返回值

```
DATA - 所执行合约的返回值
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{see above}],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```

### <span id="eth_estimateGas">eth_estimateGas</span>

生成并返回一个交易需要的gas用量估算值。该次交易不会写入区块链。
> 注意：由于多种原因，例如EVM的机制及节点旳性能，估算的数值可能比实际用量大的多。

#### 参数

```
参考eth_call调用的参数，所有的属性都是可选的。如果没有指定gas用量上限，geth将使用挂起块的gas上限。 在这种情况下，当gas的数量高于挂起块的gas限制时，返回的gas估算量可能不足以执行实际的调用/交易。
```

#### 返回值

```
QUANTITY - gas的消耗量
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see above}],"id":1}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```

### <span id="eth_getBlockByHash">eth_getBlockByHash</span>

按hash返回有关块的信息。

#### 参数
``` 
DATA, 32字节 - 块hash
Boolean - 为true时返回完整的交易对象，否则仅返回交易hash
params: [
   '0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae',
   false
]
```

#### 返回值
```
Object - 匹配的块对象，如果未找到块则返回null，结构如下：

number: QUANTITY - 块编号，挂起块为null
hash: DATA, 32 Bytes - 块hash，挂起块为null
parentHash: DATA, 32 Bytes - 父块的hash
nonce: DATA, 8 Bytes - 生成的pow hash，挂起块为null
sha3Uncles: DATA, 32 Bytes - 块中叔伯数据的SHA3 hash
logsBloom: DATA, 256 Bytes - 快日志的bloom过滤器，挂起块为null
transactionsRoot: DATA, 32 Bytes - 块中的交易树根节点
stateRoot: DATA, 32 Bytes - 块最终状态树的根节点
receiptsRoot: DATA, 32 Bytes - 块交易收据树的根节点
miner: DATA, 20 Bytes - 挖矿奖励的接收账户
difficulty: QUANTITY - 块难度，整数
totalDifficulty: QUANTITY - 截止到本块的链上总难度
extraData: DATA - 块额外数据
size: QUANTITY - 本块字节数
gasLimit: QUANTITY - 本块允许的最大gas用量
gasUsed: QUANTITY - 本块中所有交易使用的总gas用量
timestamp: QUANTITY - 块时间戳
transactions: Array - 交易对象数组，或32字节长的交易hash数组
uncles: Array - 叔伯hash数组
```

#### 示例
```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true],"id":1}'

// 结果
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
    "difficulty": "0x027f07", // 163591
    "totalDifficulty":  "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "size":  "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145
    "gasUsed": "0x9f759", // 653145
    "timestamp": "0x54e34e8e" // 1424182926
    "transactions": [{...},{ ... }] 
    "uncles": ["0x1606e5...", "0xd5145a9..."]
  }
}
```

### <span id="eth_getBlockByNumber">eth_getBlockByNumber</span>


返回指定编号的块。

#### 参数

```
QUANTITY|TAG - 整数块编号，或字符串"earliest"、"latest" 或"pending"
Boolean - 为true时返回完整的交易对象，否则仅返回交易hash

params: [
   '0x1b4', // 436
   true
]
```
#### 返回值
```
参考eth_getBlockByHash的结果。
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}'

// 结果
参考eth_getBlockByHash
```


### <span id="eth_getTransactionByHash">eth_getTransactionByHash</span>

返回指定hash对应的交易。


#### 参数

```
DATA：32字节，交易hash

params: [
   "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"
]
```

#### 返回值
```
Object - 交易对象，如果没有找到匹配的交易则返回null。结构如下：

hash: DATA, 32字节 - 交易hash
nonce: QUANTITY - 本次交易之前发送方已经生成的交易数量
blockHash: DATA, 32字节 - 交易所在块的hash，对于挂起块，该值为null
blockNumber: QUANTITY - 交易所在块的编号，对于挂起块，该值为null
transactionIndex: QUANTITY - 交易在块中的索引位置，挂起块该值为null
from: DATA, 20字节 - 交易发送方地址
to: DATA, 20字节 - 交易接收方地址，对于合约创建交易，该值为null
value: QUANTITY - 发送的金额，单位：wei
gasPrice: QUANTITY - 发送方提供的gas价格，单位：wei
gas: QUANTITY - 发送方提供的gas可用量
input: DATA - 随交易发送的数据
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
 
// 结果
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex":  "0x1", // 1
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1",
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464
    "gasPrice":"0x09184e72a000",
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360",
  }
}
```

### <span id="eth_getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</span>

返回指定区块hash和交易索引位置的交易。

#### 参数

```
DATA：32字节 块hash
QUANTITY - 交易在块内的索引序号
params: [
   '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',
   '0x0' // 0
]
```
#### 返回值
```
请参考eth_getTransactionByHash的结果。
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'

// 结果
请参考eth_getTransactionByHash的结果。
```

### <span id="eth_getTransactionReceipt">eth_getTransactionReceipt</span>

返回指定交易的收据，使用hash指定交易。
> 注意：挂起的交易无法获取收据。

#### 参数
```
DATA, 32字节 - 交易hash

params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

#### 返回值
```
Object - 交易收据对象，如果收据不存在则为null。交易对象的结构如下：

transactionHash: DATA, 32字节 - 交易hash
transactionIndex: QUANTITY - 交易在块内的索引序号
blockHash: DATA, 32字节 - 交易所在块的hash
blockNumber: QUANTITY - 交易所在块的编号
from: DATA, 20字节 - 交易发送方地址
to: DATA, 20字节 - 交易接收方地址，对于合约创建交易该值为null
cumulativeGasUsed: QUANTITY - 交易所在块消耗的gas总量
gasUsed: QUANTITY - 该次交易消耗的gas用量
contractAddress: DATA, 20字节 - 对于合约创建交易，该值为新创建的合约地址，否则为null
logs: Array - 本次交易生成的日志对象数组
logsBloom: DATA, 256字节 - bloom过滤器，轻客户端用来快速提取相关日志
返回的结果对象中还包括下面二者之一 :

root : DATA 32字节，后交易状态根(pre Byzantium)
status: QUANTITY ，1 (成功) 或 0 (失败)
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// 结果
{
"id":1,
"jsonrpc":"2.0",
"result": {
     transactionHash: '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238',
     transactionIndex:  '0x1', // 1
     blockNumber: '0xb', // 11
     blockHash: '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
     cumulativeGasUsed: '0x33bc', // 13244
     gasUsed: '0x4dc', // 1244
     contractAddress: '0xb60e8dd61c5d32be8058bb8eb970870f07233155', // or null, if none was created
     logs: [{
         // logs as returned by getFilterLogs, etc.
     }, ...],
     logsBloom: "0x00...0", // 256 byte bloom filter
     status: '0x1'
  }
}
```

### <span id="eth_newFilter">eth_newFilter</span>

基于给定的选项创建一个过滤器对象，接收状态变化时的通知。要检查状态是否变化， 请调用eth_getFilterChanges。
关于特定主题过滤器的说明：主题是顺序相关的。如果一个交易的日志有主题[A, B]，那么将被 以下的主题过滤器匹配：

[] 任何主题
[A] 先匹配A主题
[null, B] 先匹配其他主题，再匹配B主题
[A, B] 先匹配A主题，再匹配B主题，最后匹配其他主题
[[A, B], [A, B]] "先匹配A主题或B主题，再匹配A主题或B主题，最后匹配其他主题

#### 参数
```
Object - 过滤器选项对象：

fromBlock: QUANTITY|TAG - 可选，默认值："latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。
toBlock: QUANTITY|TAG - 可选，默认值："latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。
address: DATA|Array, 20字节 - 可选，合约地址或生成日志的一组地址
topics: Array of DATA, - 可选，32字节主题数组，每个主题可以是数组或使用or选项连接
params: [{
  "fromBlock": "0x1",
  "toBlock": "0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", null, ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"]]
}]
```

#### 返回值
```
QUANTITY - 过滤器编号
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newFilter","params":[{"topics":["0x12341234"]}],"id":73}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

### <span id="eth_newBlockFilter">eth_newBlockFilter</span>

在节点中创建一个过滤器，以便当新块生成时进行通知。要检查状态是否变化， 请调用eth_getFilterChanges

#### 参数
```
无
```

#### 返回值
```
QUANTITY - 过滤器编号

```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":73}'

// 结果
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

### <span id="eth_newPendingTransactionFilter">eth_newPendingTransactionFilter</span>


在节点中创建一个过滤器，以便当产生挂起交易时进行通知。 要检查状态是否发生变化，请调用eth_getFilterChanges。

#### 参数
```
无
```

#### 返回值
```
QUANTITY - 过滤器编号

```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params":[],"id":73}'

// 结果
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

### <span id="eth_uninstallFilter">eth_uninstallFilter</span>

卸载具有指定编号的过滤器。当不在需要监听时，总是需要执行该调用。另外，过滤器 如果在一定时间内未接收到eth_getFilterChanges调用会自动超时。

#### 参数
```
QUANTITY - 过滤器编号

params: [
  "0xb" // 11
]
```

#### 返回值
```
Boolean - 如果成功卸载则返回true，否则返回false

```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0xb"],"id":73}'

// 结果
{
  "id":1,
  "jsonrpc": "2.0",
  "result": true
}
```

### <span id="eth_getFilterChanges">eth_getFilterChanges</span>

轮询指定的过滤器，并返回自上次轮询之后新生成的日志数组。

#### 参数
```
QUANTITY - 过滤器编号

params: [
  "0x16" // 22
]
```

#### 返回值
```
Array - 日志对象数组，如果自从上次轮询后没有新生成的日志，则返回空数组。

使用eth_newBlockFilter创建的过滤器将返回块hash（32字节），例如["0x3454645634534..."]。

使用eth_newPendingTransactionFilter创建的过滤器将返回交易hash (32字节)，例如["0x6345343454645..."]。

使用eth_newFilter创建的过滤器，日志对象具有如下参数：

removed: TAG - 如果由于链重组，日志被删除则返回true，如果是有效日志则返回false
logIndex: QUANTITY - 日志在块内的索引序号。对于挂起日志，该值为null
transactionIndex: QUANTITY - 创建日志的交易索引序号，对于挂起日志，该值为null
transactionHash: DATA, 32字节 - 创建该日志的交易的hash。对于挂起日志，该值为null
blockHash: DATA, 32字节 - 该日志所在块的hash。对于挂起日志，该值为null
blockNumber: QUANTITY - 该日志所在块的编号。对于挂起日志，该值为null
address: DATA, 20字节 - 该日志的源地址
data: DATA - 包含该日志的一个或多个32字节无索引参数
topics: Array of DATA -0~4个32字节索引日志参数的数据。在solidity中，第一个主题是事件签名，例如 Deposit(address,bytes32,uint256)，除非你声明的是匿名事件
```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x16"],"id":73}'

// 结果
{
  "id":1,
  "jsonrpc":"2.0",
  "result": [{
    "logIndex": "0x1", // 1
    "blockNumber":"0x1b4", // 436
    "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "transactionHash":  "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
    "transactionIndex": "0x0", // 0
    "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "data":"0x0000000000000000000000000000000000000000000000000000000000000000",
    "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },{
      ...
    }]
}
```

### <span id="eth_getLogs">eth_getLogs</span>

返回指定过滤器中的所有日志。

#### 参数
```
Object - 过滤器选项对象：
	fromBlock: QUANTITY|TAG - 可选，默认值："latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。
	toBlock: QUANTITY|TAG - 可选，默认值："latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。
	address: DATA|Array, 20字节 - 可选，合约地址或生成日志的一组地址。
	topics: Array of DATA, - 可选，32字节主题数组，主题是按顺序的，每个主题可以是“or”选项的数组。
	blockhash: DATA, 32字节 -可选，随着EIP-234的加入，blockHash将成为一个新的过滤器选项，它限制使用32字节hash blockHash返回到单个块的日志。使用blockHash相当于fromBlock=toBlock=hash blockHash的块号。如果筛选条件中存在blockHash，则不允许使用fromBlock和toBlock。

params: [{
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]
}]
```

#### 返回值
```
请参考eth_getFilterChanges调用。

```

#### 示例

```json
// 请求
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'

// 结果
请参考eth_getFilterChanges。

```

### <span id="eth_subscribe">eth_subscribe</span>

使用JSON-RPC通知进行订阅。这使客户端可以等待事件，而不是轮询事件。

它通过订阅特定事件来工作。该节点将返回订阅ID。对于与订阅匹配的每个事件，带有相关数据的通知将与订阅ID一起发送。

#### 参数
```
订阅名称
可选参数
```
#### 返回示例

```json
// 请求
{"id": 1, "method": "eth_subscribe", "params": ["newHeads", {"includeTransactions": true}]}

// 结果
< {"jsonrpc":"2.0","result":"0x34da6f29e3e953af4d0c7c58658fd525","id":1}
```

### <span id="eth_unsubscribe">eth_unsubscribe</span>


使用订阅ID取消订阅事件

#### 参数
```
订阅ID
```

#### 示例

```json
// 请求
{"id": 1, "method": "eth_unsubscribe", "params": ["0x34da6f29e3e953af4d0c7c58658fd525"]}

// 结果
{"jsonrpc":"2.0","result":true,"id":1}
```
