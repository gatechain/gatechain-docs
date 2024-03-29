
### <span id="Send-a-Revocable-Transaction">Send a Revocable Transaction [API](../../api/revocable-tx/index.md#send-a-revocable-transaction-command-line)</span>

```bash
gatecli revocable-tx send [recipient account] [transfer token amount] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```

::: details Example:
	gatecli revocable-tx send gt11twm7dma44k7wg5jppeyphrct9nx2l4m8szy44h72qv9eatyla3hkaevg3vx99mlslwsnfq 10NANOGT --from vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: REVOCABLEPAY-0FD8A17798EC2CC637252687CA7DACA39BE0C555496EC3242F90C7C0BBBFE5F10A34A51D866BEC91A9866275BED9B522 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction 
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::


Description：

* Only Vault Account can send a Revocable Transaction.

### Query a Single Transaction
```bash
gatecli revocable-tx show [transaction Hash] --chain-id [chain ID]
```

::: details Example:
	gatecli revocable-tx show 03190D3F56D6B65CC11BFE3F9CD961729B134D224A35AC731728601C9DD3A3C7 --chain-id testnet
:::

::: details Return example:
	Response:
	  Height: 773 //block height of a transaction
	  TxHash: REVOCABLEPAY-082A18896CD1397563569D939C884D446B303865012C750ACB40E3911CF8FD69144F836537C97B77EFF473776D7889F5 //transaction hash
	  Data: A402B9CDCFED0A6747B161CE0A284A1F4D73BD5D8B08DB5F8D720B63C0C5E5C09F312F53DE24B3E8AB2D86DF80B31E38DAABE8CFFCE712286C316F27CB3371EB8A8E6C201C91EEA649777892A98788F743ABAAB89445B56833EAEBF88D24E8541A0D0A064E414E4F4754120331303012120A0C0A064E414E4F47541202313110C09A0C1A30B94B240CB12506E73813D1B31BFE5B6A508398678996D6AA39D38E592BC35322FBD134B76728A831A3C9059153F6109B22690A25E1E1A0FA200C7B87BFBA51F76F22BC5FFE1D6183FD2AC021BD12220D34F98FC463130343A212403F2B5EC54D272161E400E6247226E03D2A82BDA2977CFC78AD2C7685F728DAF67E5CE2FE7E715D8118BF19AED1C54DDEFB51CE486C68C1867B532592C3C0900F3204FA05CC07
	  Raw Log: [{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"gt11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll8805fq0f"},{"key":"module","value":"revocable"},{"key":"action","value":"revocable"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7"}]}]}]
	  Logs: [{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"sender","value":"vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww"},{"key":"module","value":"revocable"},{"key":"action","value":"revocable"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7"}]}]}]
	  GasWanted: 200000 //gas  consumed by the transaction 
	  GasUsed: 95467 
	  Timestamp: 2020-06-19T07:56:11+08:00 //UTC transaction time
	  Events:
			- message
				- sender: vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww //sender account
				- module: revocable //transaction module
				- action: revocable //transaction action
			- transfer
				- recipient: gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7 //recipient account 
:::

### <span id="Query-Revocable-Transaction-List-From-A-Vault-Account">Query Revocable Transaction List From A Vault Account [API](../../api/vault-account/index.md#query-revocable-transaction-list-from-a-vault-account-command-line)</span>
```bash
gatecli revocable-tx list [Vault Account] --chain-id [chain ID]
```

::: details Example:
	gatecli revocable-tx list vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --chain-id testnet
:::

::: details Return example:
	  Txs: count  1  //Revocable Transaction quantity
	  TxHash:         REVOCABLEPAY-082A18896CD1397563569D939C884D446B303865012C750ACB40E3911CF8FD69144F836537C97B77EFF473776D7889F5 //transaction hash
	  Index:          0 //message serial number
	  Height:         873 //block height at which the transaction takes effect
	  Tokens:          100NANOGT //transfer token amount
:::


### <span id="Revoke-a-Revocable-Transaction">Revoke a  Revocable Transaction [API](../../api/revocable-tx/index.md#revoke-a-revocable-transaction-command-line)</span>

```bash
gatecli revocable-tx revoke [transaction Hash] --from [sender account] --fees [tx fees] --chain-id [chain ID]
```

::: details Example:
	gatecli revocable-tx revoke 0E3B67C685C271632CE6F4DAA2AB06AF7E8077509E1CB5310F63F6C147786E12 --from vault11fg056uaatk9s3k6l34eqkc7qchjup8e39afauf9naz4jmpklsze3uwx6405vll88l5lvww --fees 100000NANOGT --chain-id testnet
:::

::: details Return example:
	  TxHash: REVOKE-9F685A8362E6218E372CE60E306E8BC35B66006D82F9B3381A6AECE26FA6355CA38CD75AFFDF597794159D9356BE0376 
	  //transaction hash, using gatecli tx show {hash}to query details of this transaction 
	  Data: rQO5zc/tCu8BYPD/ggoo3TuBsrqFDCGccbnTERbiO5v48wnG3ahDuFWSzrdVLzU0iuZQw2rzDBIoHk1VTbZ0J94UnjHi3aO8fwO1V5rK5I2NZvxNF1lFstSU9JD3J18JbxqUAWd0MXB1YjE4cTJmZ3VnZ3F5Znp0YzBwNXJhenEwZnRwdXplNzJwOXRwN25lZ2plZTl6amtjaGx2MHFwNThyZTdyZGduajNqd2x3d3JscjN6Z2o3cmNkcWxnc2Z3Y2V2YWRqaGE0ZXZoOThkejdzN3pjYzh5MHZhZnY3amh1ajNobXR1M2ZtajM2eXdqZWNtbnF1OWgSEgoMCgZOQU5PR1QSAjExEMCaDBowMXrG9msevrtuVTHWuZdFIixl5hSO4tWOvIZV01T/p+Pbg1sPeBgWGHbKUcm1064KImkKJeHhoPogZ32xdJvDkmTqENs7tchCbHrQ1z1n7Eeh1/ud9weWADUSQJRr9hYE0jvDKTx9IsfYAh3myFPQaYV9pt+TEi+IKdFm2KOZGYckVEbFx9ydMn2F6UbhopD5Y5HbrKJzf0fF9woyBNcEqQY=
	  Raw Log: sync broadcast tx success //transaction is sent successfully
:::

