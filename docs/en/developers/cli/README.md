# Command Line Interface（CLI）

> All transaction related commands  (non-query command) will incur a certain amount of fees.
> You can use--gas-prices or--fees  to add fees for transaction
> 
> Any asset amount in command  is converted to  Integer of the Value by multiplying 10E18.
> Asset amount supports scientific notation, e.g.10E9 NanoGT stands for 1.0GT


### Start a Local RPC Service
```bash
gatecli rest-server
```

Description：

* When RPC service starts, command line can not be executed due to  storage lock.

### <span id="Status">Status [API](../api/README.md#query-a-node-status-command-line)</span>
```bash
gatecli status
```

Description：

* Query  a local node service status 

### Version Number
```bash
gatecli version
```

Description：

* Query version information of  the command line 

### Help
```bash
gatecli [Help1] [Help2] [Help3]... --help
```

Description：

*  For more about how to operation with command line, visit help

### Errors
```bash
Must specify these options: --chain-id  when --trust-node is false
```

If trust this node, please enter '--trust-node=true'，Otherwise enter'--chain-id'to solve the above error.









