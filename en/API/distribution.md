###Setup Account to Fetch Income [command line](../cli/distribution.md#Setup Account to Fetch Income -api)

######The interface generates transaction body for “Setup Account to Fetch Income ”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST /v1/distribution/delegator/{delegatorAddr}/withdraw_address
```
Parameters:

| Parameter| Description |
| :----| :--- |
| delegatorAddr |delegator’s account|


Request BODY example:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //sender account
        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
        "chain_id":"testnet", //chain ID
        "gas":"200000", //gas consumed by this  transaction
        "fees":[
            {
                "denom":"NANOGT", //unit
                "amount":"500" //fee
            }
        ],
        "simulate":false, //If calculate simulated Gas
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    },
    "withdraw_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //new account to fetch income
}
```
%/accordion%

Return example:

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgModifyWithdrawAddress", //transaction type
                "value": {
                    "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //delegator's account
                    "withdraw_address": "gt11s9ey8sex7vut2wpxejf5gvejc300kqxpaqf3r7kkkks6ancw0jjrwc3zrwulcqlamjqzwd" //new account to fetch income
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //unit
                    "amount": "500" //fee
                }
            ],
            "gas": "200000" //gas consumed by this  transaction
        },
        "nonces": [
            null
        ],
        "signatures": null, //signature
        "memo": "",
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%

Description：

* The vault account can only withdraw the income and principal to this account and cannot be set up separately.


###Delegator Account Fetches Partial Income From A Consensus Account [command line](../cli/distribution.md#Delegator Account Fetches Partial Income From A Consensus Account-api)

######The interface generates transaction body for “Delegator Account Fetches Partial Income From A Consensus Account ”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST /v1/distribution/delegator/{delegatorAddr}/{con-account}/rewards
```
Parameters:

| Parameter| Description |
| :----| :--- |
| delegatorAddr |delegator's account |
| con-account |consensus account|


Request BODY example:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //sender account
        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
        "chain_id":"testnet", //chain ID
        "gas":"200000", //Gas consumed by this  transaction
        "fees":[
            {
                "denom":"NANOGT", //unit
                "amount":"500" //fee
            }
        ],
        "simulate":false, //If calculate simulated Gas
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%

Return example:

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgWithdrawDelegationReward", //transaction type
                "value": {
                    "delegator_address": "gt11a0a2pcna4jmkuz4z8af7tejpyh0u8yh2wtktq8xpjt3qaualzdtwxw7r9cwh88pnkfk4xn", //delegator account
                    "con-account_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x" //Consensus Account
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //unit
                    "amount": "500" //fee
                }
            ],
            "gas": "200000" //gas consumed by this  transaction
        },
        "nonces": [
            null
        ],
        "signatures": null, //signature
        "memo": "",
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%


###Delegator Account Fetches  All Income From A Consensus Account  [command line](../cli/distribution.md#Delegator Account Fetches  All Income From A Consensus Account-api)

######The interface generates transaction body for “Delegator Account Fetches  All Income From A Consensus Account ”. After locally signing  it, you can invoke “Send Transaction” interface to finish broadcasting

```
POST /v1/distribution/delegator/{delegatorAddr}/rewards
```
Parameters:

| Parameter| Description |
| :----| :--- |
| delegatorAddr |delegator's account|


Request BODY example:

%accordion%json%accordion%

```
{
    "base_req":{
        "from":"gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //sender account
        "memo":"", ////transaction remarks,The length of the remarks is limited to 85 characters in Chinese and 256 characters in English.
        "chain_id":"testnet", //chain ID
        "gas":"200000", //Gas consumed by this  transaction
        "fees":[
            {
                "denom":"NANOGT", //unit
                "amount":"500" //fee
            }
        ],
        "simulate":false, //If calculate simulated Gas
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%

Return example:

%accordion%json%accordion%

```
{
    "type": "StdTx",
    "value": {
        "msg": [
            {
                "type": "MsgWithdrawDelegationReward", //transaction type
                "value": {
                    "delegator_address": "gt11qfee0959earfv7euauzw8l0fljymwjx34m6s2ccvjhupc59dg93enajhuft3eq50tvz39x", //delegator's account
                    "con-account_address": "gt116h05fjhaay7sx3zl9w5ej3tpx3s94yhcsmt0gqcqsq26w2qvsyt4l82vftygtff0pfsr93" //consensus account
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "NANOGT", //unit
                    "amount": "500" //fee
                }
            ],
            "gas": "200000" //Gas consumed by this  transaction
        },
        "nonces": [
            null
        ],
        "signatures": null, //signature
        "memo": "",
        "valid_height":[ //height at which the transaction takes effect
            "600",
            "900"
    	]
    }
}
```
%/accordion%


### Query  Delegation Income of A  Delegator Account  At A Consensus Account [command line](../cli/distribution.md#Query  Delegation Income of A  Delegator Account  At A Consensus Account-api)
```
GET  /v1/distribution/delegator/{delegatorAddr}/{con-account}/rewards
```
Parameters:

| Parameter| Description |
| :----| :--- |
| delegatorAddr |delegator's account  |
| con-account |consensus account|


Return example:

%accordion%json%accordion%

```
{
    "height": "0", //block height
    "result": [
        {
            "amount": "109475.336424214100340000", //delegation income
            "denom": "NANOGT" //unit
        }
    ]
}
```
%/accordion%


### Query  Delegation Income of A  Delegator Account  At All Consensus Account [command line](../cli/distribution.md#Query  Delegation Income of A  Delegator Account  At All Consensus Account-api)

```
GET  /v1/distribution/delegator/{delegatorAddr}/rewards
```
Parameters:

| Parameter| Description |
| :----| :--- |
| delegatorAddr |delegator's account  |


Return example:

%accordion%json%accordion%

```
{
    "height": "0", //block height
    "result": {
        "rewards": [
            {
                "con-account_address": "gt11dsck7f7txdc7hz5wdsspey0w5eyhw7yj4xrc3a6r4w4t39z9k45r86htlzxjf6z57an2r7", //Consensus Account address
                "reward": [
                    {
                        "amount": "105.030990305699919120", //delegation income
                        "denom": "NANOGT" //unit
                    }
                ]
            },
            ...
         ],
        "total": [
            {
                "amount": "105.035150523300345120", //total income from delegation 
                "denom": "NANOGT" //unit
            }
        ]
    }
}
```
%/accordion%


### Query Delegation Income Pending Paying By A Consensus Account [command line](../cli/distribution.md#Query  Delegation Income Pending Paying By A Consensus Account-api)

```
GET /v1/distribution/con-account/{con-account}/outstanding_rewards
```

Parameters:

| Parameter| Description |
| :----| :--- |
| con-account |consensus account|

Return example:

%accordion%json%accordion%

```
{
    "height": "5365", //block height
    "result": [
        {
            "amount": "12227087603299.775054901980000000", //outstanding delegation income pending paying
            "denom": "NANOGT" //unit
        }
    ]
}
```
%/accordion%


###Query Income of  A Consensus Account  [command line](../cli/distribution.md#Query Income of  A Consensus Account-api)

```
GET /v1/distribution/con-account/{con-account}/rewards
```

Parameters:

| Parameter| Description |
| :----| :--- |
| con-account |consensus account|

Return example:

%accordion%json%accordion%

```
{
    "height": "0", //block height
    "result": [
        {
            "amount": "1341380880051.597973936430380729", //commission and mining earnings
            "denom": "NANOGT" //unit
        }
    ]
}
```
%/accordion%


###  Query Distribution And Foundation Parameters [command line](../cli/distribution.md#Query Distribution And Foundation Parameters-api)

```
GET /v1/distribution/parameters
```

Return example:

%accordion%json%accordion%

```
{
    "height": "0", //block height
    "result": {
        "community_tax": "0.020000000000000000", //Community Tax rate
        "first_committee_reward": "0.400000000000000000", //The first Committee mining reward rate
        "second_committee_reward": "0.350000000000000000", //The second Committee mining reward rate
        "third_committee_reward": "0.250000000000000000", //The third Committee mining reward rate
        "withdraw_addr_enabled": true 
    }
}
```
%/accordion%
