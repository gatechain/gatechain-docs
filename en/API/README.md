##GateChain API document

>Structural transaction interface provided  in this document, request parameter must set a transaction fee greater than  0GC
>
> Any asset amount in command  is converted to  Integer of the Value by multiplying 10E18 
> Asset amount supports scientific notation, e.g.10E9 NanoGC stands for 1GC

### Query  a node status 

```
GET /status
```

return:

%accordion%json%accordion%

```
{
    "node_status":{
        "lastRound":"768",
        "lastConsensusVersion":"v1",
        "nextConsensusVersion":"v1",
        "nextConsensusVersionRound":"769",
        "nextConsensusVersionSupported":true,
        "timeSinceLastRound":"1346643544",
        "catchupTime":"0",
        "hasSyncedSinceStartup":false
    },
    "application_version":{
        "name":"gate",
        "server_name":"gated",
        "client_name":"gatecli",
        "version":"0.8.1-265-g67521af8",
        "commit":"67521af80eb609a7f9fb66d07255ef515030cd69",
        "build_tags":"netgo,ledger",
        "go":"go version go1.13.7 darwin/amd64"
    }
}
```

%/accordion%