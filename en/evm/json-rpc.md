

# JSON-RPC Server

Because GateChain EVM is basically compatible with Ethereum, much of the content in this document comes from the contribution of Ethereum EVM documents.


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


### <span id="web3_clientVersion">web3_clientVersion</span>

Returns the current client version.

#### Parameters
```
none
```

#### Returns
```
String - The current client version
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'

// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "gate enhanced-1.0.5-135-gf00ae80"
}
```

### <span id="web3_sha3">web3_sha3</span>

Returns Keccak-256 (not the standardized SHA3-256) of the given data.

#### Parameters

DATA - the data to convert into a SHA3 hash
```
params: [
  "0x68656c6c6f20776f726c64"
]
```

#### Returns
```
DATA - The SHA3 result of the given string.
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_sha3","params":["0x68656c6c6f20776f726c64"],"id":64}'

// Result
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
}
```


### <span id="net_version">net_version</span>

Returns the current network id.

#### Parameters
```
none
```

#### Returns
```
String - The current network id.

"1337": Meteora
"66":   Mainnet
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'

// Result
{
  "id":67,
  "jsonrpc": "2.0",
  "result": "1337"
}
```

### <span id="eth_protocolVersion">eth_protocolVersion</span>

Returns the current ethereum protocol version.

#### Parameters
```
none
```

#### Returns
```
String - The current ethereum protocol version
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_protocolVersion","params":[],"id":67}'

// Result
{
  "id":67,
  "jsonrpc": "2.0",
  "result": "0x41"
}
```

### <span id="eth_syncing">eth_syncing</span>

Returns an object with data about the sync status or false.

#### Parameters
```
none
```

#### Returns
```
Object|Boolean, An object with sync status data or FALSE, when not syncing:

startingBlock: QUANTITY - The block at which the import started (will only be reset, after the sync reached his head)
currentBlock: QUANTITY - The current block, same as eth_blockNumber
highestBlock: QUANTITY - The estimated highest block

```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'

// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "currentBlock": 106699
    }
}

// Or when not syncing
{
  "id":1,
  "jsonrpc": "2.0",
  "result": false
}
```

### <span id="eth_gasPrice">eth_gasPrice</span>

Returns the current price per gas in wei.

#### Parameters
```
none
```

#### Returns
```
QUANTITY - integer of the current gas price in wei.
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'

// Result
{
  "id":73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```

### <span id="eth_accounts">eth_accounts</span>

Returns a list of addresses owned by client.

#### Parameters
```
none
```

#### Returns
```
Array of DATA, 20 Bytes - addresses owned by the client.
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'

// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        "0xd9a549bcca822b696718802ec4aad4e1acc24367",
        "0xcfe9c51a8039e74b0cce28642be0504fc898094a",
        "0xa1968292d334ef64b56b01862d6ac1b2a8548b91"
    ]
}
```

### <span id="eth_blockNumber">eth_blockNumber</span>

Returns the number of most recent block.

#### Parameters
```
none
```

#### Returns
```
QUANTITY - integer of the current block number the client is on.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'

// Result
{
  "id":83,
  "jsonrpc": "2.0",
  "result": "0x1a0e1" // 106721
}
```

### <span id="eth_getBalance">eth_getBalance</span>

Returns the balance of the account of given address.

#### Parameters
```
DATA, 20 Bytes - address to check for balance.
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest'
]
```

#### Returns
```
QUANTITY - integer of the current balance in wei.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x6c3a050b1aedb4000" // 124776820000000000000
}
```

### <span id="eth_getStorageAt">eth_getStorageAt</span>

Returns the value from a storage position at a given address.

#### Parameters
```
DATA, 20 Bytes - address of the storage.
QUANTITY - integer of the position in the storage.
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"
```

#### Returns
```
DATA - the value at this storage position.
```

#### Example

Calculating the correct position depends on the storage to retrieve. Consider the following contract deployed at 0x391694e7e0b0cce554cb130d723a9d27458f9298 by address 0x295a70b2de5e3953354a6a8344e616ed314d7251.

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

Retrieving the value of pos0 is straight forward:

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"], "id": 1}' localhost:8545

// Result
{"jsonrpc":"2.0","id":1,"result":"0x00000000000000000000000000000000000000000000000000000000000004d2"}
```
Retrieving an element of the map is harder. The position of an element in the map is calculated with:

```
keccack(LeftPad32(key, 0), LeftPad32(map position, 0))
```

This means to retrieve the storage on pos1[“0x391694e7e0b0cce554cb130d723a9d27458f9298”] we need to calculate the position with:

```
keccak(decodeHex("000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"))
```
The geth console which comes with the web3 library can be used to make the calculation:

```
> var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"
undefined
> web3.sha3(key, {"encoding": "hex"})
"0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"
```
Now to fetch the storage:

```
// Request
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"], "id": 1}' localhost:8545

// Result
{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000000000000000000000000000000000000000162e"}
```


### <span id="eth_getTransactionCount">eth_getTransactionCount</span>

Returns the number of transactions sent from an address.

#### Parameters
```
DATA, 20 Bytes - address.
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest' // state at the latest block
]
```

#### Returns
```
QUANTITY - integer of the number of transactions send from this address.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

### <span id="eth_getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</span>

Returns the number of transactions in a block matching the given block number.

#### Parameters
```
QUANTITY|TAG - integer of a block number, or the string "earliest", "latest" or "pending"
params: [
   '0xe8', // 232
]
```

#### Returns
```
QUANTITY - integer of the number of transactions in this block.

```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params":["0xe8"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa" // 10
}
```

### <span id="eth_getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</span>

Returns the number of transactions in a block from a block matching the given block hash.

#### Parameters
```
DATA, 32 Bytes - hash of a block
params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

#### Returns
```
QUANTITY - integer of the number of transactions in this block.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xb" // 11
}
```

### <span id="eth_getCode">eth_getCode</span>

Returns code at a given address.

#### Parameters
```
DATA, 20 Bytes - address
QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"
params: [
   '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
   '0x2'  // 2
]
```

#### Returns
```
DATA - the code from the given address.

```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```

### <span id="eth_sign">eth_sign</span>

The sign method calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).

By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature. This prevents misuse where a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

> Note the address to sign with must be unlocked.

#### Parameters
```
account, message

DATA, 20 Bytes - address
DATA, N Bytes - message to sign
```

#### Returns
```
DATA: Signature

```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

### <span id="eth_sendTransaction">eth_sendTransaction</span>

Creates new message call transaction or a contract creation, if the data field contains code.

#### Parameters
```
Object - The transaction object
	from: DATA, 20 Bytes - The address the transaction is send from.
	to: DATA, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
	gas: QUANTITY - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.
	gasPrice: QUANTITY - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas
	value: QUANTITY - (optional) Integer of the value sent with this transaction
	data: DATA - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI
	nonce: QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]

```

#### Returns
```
DATA, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.
Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### <span id="eth_sendRawTransaction"> eth_sendRawTransaction</span>

Creates new message call transaction or a contract creation for signed transactions.


#### Parameters
```
DATA, The signed transaction data.
params: ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"]

```

#### Returns
```
DATA, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.
Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### <span id="eth_call">eth_call</span>

Executes a new message call immediately without creating a transaction on the block chain.

#### Parameters
```
1.Object - The transaction call object
	from: DATA, 20 Bytes - (optional) The address the transaction is sent from.
	to: DATA, 20 Bytes - The address the transaction is directed to.
	gas: QUANTITY - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be 	needed by some executions.
	gasPrice: QUANTITY - (optional) Integer of the gasPrice used for each paid gas
	value: QUANTITY - (optional) Integer of the value sent with this transaction
	data: DATA - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity 	documentation
2.QUANTITY|TAG - integer block number, or the string "latest", "earliest" or "pending"

```

#### Returns
```
DATA - the return value of executed contract.

```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```


### <span id="eth_estimateGas">eth_estimateGas</span>

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. 
> Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.


#### Parameters
```
See eth_call parameters, expect that all properties are optional. If no gas limit is specified geth uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

```

#### Returns
```
QUANTITY - the amount of gas used.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```

### <span id="eth_getBlockByHash">eth_getBlockByHash</span>

Returns information about a block by hash.


#### Parameters
```
DATA, 32 Bytes - Hash of a block.
Boolean - If true it returns the full transaction objects, if false only the hashes of the transactions.

params: [
   '0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae',
   false
]
```

#### Returns
```
Object - A block object, or null when no block was found:

number: QUANTITY - the block number. null when its pending block.
hash: DATA, 32 Bytes - hash of the block. null when its pending block.
parentHash: DATA, 32 Bytes - hash of the parent block.
nonce: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
sha3Uncles: DATA, 32 Bytes - SHA3 of the uncles data in the block.
logsBloom: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
transactionsRoot: DATA, 32 Bytes - the root of the transaction trie of the block.
stateRoot: DATA, 32 Bytes - the root of the final state trie of the block.
receiptsRoot: DATA, 32 Bytes - the root of the receipts trie of the block.
miner: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
difficulty: QUANTITY - integer of the difficulty for this block.
totalDifficulty: QUANTITY - integer of the total difficulty of the chain until this block.
extraData: DATA - the “extra data” field of this block.
size: QUANTITY - integer the size of this block in bytes.
gasLimit: QUANTITY - the maximum gas allowed in this block.
gasUsed: QUANTITY - the total used gas by all transactions in this block.
timestamp: QUANTITY - the unix timestamp for when the block was collated.
transactions: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
uncles: Array - Array of uncle hashes.

```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true],"id":1}'

// Result
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

Returns information about a block by block number.

#### Parameters
```
QUANTITY|TAG - integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
Boolean - If true it returns the full transaction objects, if false only the hashes of the transactions.

params: [
   '0x1b4', // 436
   true
]
```

#### Returns
```
See eth_getBlockByHash
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}'

// Result
See eth_getBlockByHash
```

### <span id="eth_getTransactionByHash">eth_getTransactionByHash</span>

Returns the information about a transaction requested by transaction hash.

#### Parameters
```
DATA, 32 Bytes - hash of a transaction
params: [
   "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"
]
```

#### Returns
```
Object - A transaction object, or null when no transaction was found:

	hash: DATA, 32 Bytes - hash of the transaction.
	nonce: QUANTITY - the number of transactions made by the sender prior to this one.
	blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
	blockNumber: QUANTITY - block number where this transaction was in. null when its pending.
	transactionIndex: QUANTITY - integer of the transactions index position in the block. null when its pending.
	from: DATA, 20 Bytes - address of the sender.
	to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
	value: QUANTITY - value transferred in Wei.
	gasPrice: QUANTITY - gas price provided by the sender in Wei.
	gas: QUANTITY - gas provided by the sender.
	input: DATA - the data send along with the transaction.
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
 
// Result
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

Returns information about a transaction by block hash and transaction index position.

#### Parameters
```
DATA, 32 Bytes - hash of a block.
QUANTITY - integer of the transaction index position.
params: [
   '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',
   '0x0' // 0
]
```

#### Returns
```
See eth_getTransactionByHash
```

#### Example
```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'

// Result
see eth_getTransactionByHash
```

### <span id="eth_getTransactionReceipt">eth_getTransactionReceipt</span>

Returns the receipt of a transaction by transaction hash.

> Note That the receipt is not available for pending transactions.

#### Parameters
```
DATA, 32 Bytes - hash of a transaction
params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238',
]
```

#### Returns
```
Object - A transaction receipt object, or null when no receipt was found:

	transactionHash : DATA, 32 Bytes - hash of the transaction.
	transactionIndex: QUANTITY - integer of the transactions index position in the block.
	blockHash: DATA, 32 Bytes - hash of the block where this transaction was in.
	blockNumber: QUANTITY - block number where this transaction was in.
	from: DATA, 20 Bytes - address of the sender.
	to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
	cumulativeGasUsed : QUANTITY  - The total amount of gas used when this transaction was executed in the block.
	gasUsed : QUANTITY  - The amount of gas used by this specific transaction alone.
	contractAddress : DATA, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
	logs: Array - Array of log objects, which this transaction generated.
	logsBloom: DATA, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
It also returns either :

	root : DATA 32 bytes of post-transaction stateroot (pre Byzantium)
	status: QUANTITY either 1 (success) or 0 (failure)
```

#### Example

```json
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
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