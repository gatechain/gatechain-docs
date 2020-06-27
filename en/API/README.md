## API

> The document provides interfaces to build transactions, in which request parameter must set a transaction fee greater than  0NANOGT.
> 
> Any asset amount in command  is converted to  Integer of the Value by multiplying 10E18.
> Asset amount supports scientific notation, e.g.10E9 NanoGT stands for 1GT.


## Query  A Node Status [command line ](../cli/README.md# Status-api)

```
GET /v1/status  
```

Return example:

%accordion%json%accordion%

```
{
    "node_status": {
        "lastHeight": "996",//the current height
        "lastConsensusVersion": "v1",//the current consensus version number
        "nextConsensusVersion": "v1",//version number of the next block consensus 
        "nextConsensusVersionRound": "997",//height  of the next consensus version
        "nextConsensusVersionSupported": true, //if support upgrading
        "timeSinceLastRound": "16",//time since the latest block is generated
        "catchupTime": "0",//time  spent to download block by this node
        "hasSyncedSinceStartup": false, //if have finished a round of consensus since startup?
        "step": "2", //step
        "period": "0", //phase
        "zeroTimeStamp": "2020-06-11T06:38:29.626739Z", //When  the  current step begins
        "deadline": "43", // time to timeout
        "fastRecoveryDeadline": "597", //timeout of quick recovery mode
        "minimumTxFee": "10" //the lowest fee required for packaging data by the current node
    },
    "application_version": {
        "name": "gate", //applicatoin name
        "server_name": "gated", //progress name
        "client_name": "gatecli", //client name
        "version": "0.9.0-236-g2531c037", //version number
        "commit": "2531c037c6d1324288f4609ca201c8429029243f", //submit information
        "build_tags": "netgo,ledger", //build tag
        "go": "go version go1.13.7 darwin/amd64" //golang version
    }
}
```
%/accordion%




