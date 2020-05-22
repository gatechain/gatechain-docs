### Query the latest block

```
GET /block/latest
```
return:

%accordion%json%accordion%

```
{
    "hash":"MHCH5NHC2IMVJA6DSLKJFSK4AYNDCMFC5SC32VOVDIPVEIBVRGHA",
    "previousBlockHash":"2IZH63THDKR4W3SBQSDI2C44CZ5GI6CYHGJJPZ3D4A3ZXUS3OLTQ",
    "seed":"XEEEQ5LXSASPY4YSMT7ZBZ4RDSLOPDPQXNNUOYA75VTZXJYCZ5RA",
    "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "round":"6913",
    "period":"0",
    "txnRoot":"WRS2VL2OQ5LPWBYLNBCZV3MEQ4DACSRDES6IUKHGOWYQERJRWC5A",
    "reward":"0",
    "rate":"0",
    "frac":"0",
    "txns":{

    },
    "txnps":{
        "proxyTransactions":null
    },
    "timestamp":"1583535648",
    "UpgradeState":{
        "currentProtocol":"v1",
        "nextProtocol":"",
        "nextProtocolApprovals":"0",
        "nextProtocolVoteBefore":"0",
        "nextProtocolSwitchOn":"0"
    },
    "UpgradeVote":{
        "upgradePropose":"",
        "upgradeApprove":false
    }
}
```

%/accordion%

### Query a specific block height

```
GET /block/{height}
```
parameter:

| parameter name | description |
| :----| :---- |
| height | block height（>=1）|

return:

%accordion%json%accordion%

```
{
    "hash":"HO7BW75ECIXFBTBIFMYAIDDWGSRAEOGDC3GJUOEULBPD5L2M3C5Q",
    "previousBlockHash":"5ZKJQICRC2QS3H2UO5YFQPLFKQ6DUNTDBBF3573P6IQTADHD57MA",
    "seed":"5GIMQOE4GYGKSLGIDUNNY3YMBXIZVRTK2GQLNHFRCNZE5AJQBIIQ",
    "proposer":"gc11prwhekvxf9qzs0vfnnznx8ax3kt5tq8g3dhvkg",
    "round":"6847",
    "period":"0",
    "txnRoot":"MLZADT4OGH4A7HEM6T275WKQQWLIONQ2OLPY2DAZQMIZIWTDQJ5Q",
    "reward":"0",
    "rate":"0",
    "frac":"0",
    "txns":{

    },
    "txnps":{
        "proxyTransactions":[
            "ugG5zc/tCjlHsWHOChSn5OgYFzM5Ss2oLSxDT8k6uSUS0RIUCN182YZJQCg9iZzFMx+mjZdFgOgaBwoCR0MSATUSDQoHCgJHQxIBMRDAmgwaagom61rphyECf5JSNgVnJU01dhlUy/vAyGh0gTpTldbMYJDevIrLtoASQFDNGmgLIEh9h9NF6VQ5Y63fNgMQe/49Im1OlaJpoOXKJUpAzPuPSkNPe4B1Z3OXQFJODd+TabdsDW26cyv41iQ="
        ]
    },
    "timestamp":"1583533998",
    "UpgradeState":{
        "currentProtocol":"v1",
        "nextProtocol":"",
        "nextProtocolApprovals":"0",
        "nextProtocolVoteBefore":"0",
        "nextProtocolSwitchOn":"0"
    },
    "UpgradeVote":{
        "upgradePropose":"",
        "upgradeApprove":false
    }
}
```

%/accordion%