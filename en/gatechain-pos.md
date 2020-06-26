## PoS Mining

There are two ways to participate in Gatechain POS mining, and you can choose either. We will give below  detailed information:

1. Build a GateChain full note and  work as a consensus account. 
2. Delegate your GT to a  consensus account.

### Build a GateChain Full Note and  Work as a Consensus Account 
By building a full node to participate in the consensus, you  can earn delegation commission besides mining income, as you  can also  accept delegations from other people.

1. On a linux or mac device of good performance, install the latest GateChain binaries gated according to  [Installation Document](./gatechain-build.md), then start it properly.
2. Create a standard account on the node and transfer in adequate GT from other accounts.Make sure you have enough GT in this account. 

  	a.Create a standard account [CLI](/cli/account.md# Generate  single signature account )
  	
  	b.Send a transaction [CLI](/cli/tx.md#Send transactions-api) [API](/API/tx.md# normal transaction)
  	
3. Create a Consensus Account using a standard a account.

 	a.Create a Consensus Account [CLI](/cli/con-account.md# Create a Consensus Account)
 	
4. On the node, initiate a "consensus account online transaction"; if successful, the standard account becomes a consensus account. 

 	a.consensus account online transaction [CLI](/cli/con-account.md#consensus account online)
5. This consensus account  and the node will participate in the consensus process at GateChain. Make sure your device running  well and network connection is good. 

6. Each time the  consensus account  is elected in  consensus committee, it will get PoS mining reward  and  miner fees. 

 	a.Query consensus account for  the POS mining reward and miner fees [CLI](/cli/distribution.md#query consensus account earnings-api) [API](/API/distribution.md#query consensus account earnings-command-line)
 	
7. As consensus account, you can accept delegations from others.
 	
 	a.Accepting delegations will add a consensus account's weight in voting and increase the odds to be elected into committee. 
 	
 	b.Besides getting  mining rewards and miner fees,  a consensus  account can also charge delegator accounts “delegation commission”. The commission rate can be specified when initiating “consensus account online transaction”.。
 	
 	c.To query delegation related information, use following interfaces:
 	
 	 * Query a consensus account  for   delegation records [CLI](/cli/staking.md#Query all delegations of a specific consensus account -api)  [API](/API/staking.md#Query all delegations of a specific consensus account -command-line)
 	 
 	 * Query a consensus account  for  delegation shifts records [CLI](/cli/staking.md#query all  delegation shifts of a specific consensus account -api) [API](/API/staking.md#query delegation shifts -command-line)
 	 
 	 * Query a consensus account  for  undelegated records  [CLI](/cli/staking.md#Query all undelegated records of a specific consensus account-api) [API](/API/staking.md#Query all undelegated records of a specific consensus account-command-line)
 	 
 	 * Query a consensus account  for  outstanding delegation income [CLI](/cli/distribution.md#Query a consensus account  for  outstanding delegation income-api) [API](/API/distribution.md#Query a consensus account  for  outstanding delegation income-command-line)


### Delegate GT to a Consensus Account 

If you do not want to build a node and POS mine as a consensus account, you can choose to delegate your GT to a consensus account and get a share of mining reward. 

1. First, choose a consensus account to delegate your GT.

 	a.You can check commission, holding, rate of return etc of a consensus accounts and decide which one to choose.
 	
 	b.You can view using a blockchain explorer：http://explorer.gatechain.io/testnet/consensus
 	
2.Initiate a  "delegate" transaction to delegate all or  part of your GT to  selected one or more consensus accounts. Now you become a delegator.

 	 a.Initiate a delegation transaction [CLI](/cli/staking.md#delegate token to consensus accounts-api) [API](/API/staking.md#delegate token to consensus accounts-command-line)
 	 
3. If the delegation transaction succeeded, you can get a share of the mining reward following the consensus account's POS mining.

4. During delegating, delegator can initiate  three operations to “fetch income” , “shift delegation” or  “undelegate”

    a.Delegator can initiate “fetch income” transaction  to extract its share of mining reward income to its own account.
 	 
 	 * Query all delegation info [CLI](/cli/staking.md#Query delegator account for all delegations in all consensus accounts-api) [API](/API/staking.md#Query delegator account for all delegations in all consensus accounts-command -line)
 	 
 	 * Query all delegation transactions [API](/API/staking.md#query  delegator account for the delegation transactions list)
 	 
 	 * Set account to fetch delegation income [CLI](/cli/distribution.md#set account to fetch delegation income-api) [API](/API/distribution.md#set account to fetch delegation income-command -line)
 	 
 	 *Query delegation income [CLI](/cli/distribution.md#Query delegator account for delegation income-api) [API](/API/distribution.md#Query delegator account for delegation income-command -line)
 	 
 	 * Fetch partial income [CLI](/cli/distribution.md#Delegator account fetches part of its income from a single consensus account.-api) [API](/API/distribution.md#Delegator account fetches part of its income from a single consensus account.-command -line)
 	 
 	 * Fetch all income [CLI](/cli/distribution.md#Delegator account fetches  all of its income from consensus account.-api) [API](/API/distribution.md#Delegator account fetches  all of its income from consensus account -command-line)

   b.Delegator can initiate a “shift delegation” transaction for a given delegation to move GT delegation to another  consensus account 

  
 	 * After the delegation shift, the income at From consensus  account will be settled immeditely. But the delegation can not be shifted again from the To consensus account  for a period  of 21 days. 
 	 
 	 * Initiate a shift delegation transaction [CLI](/cli/staking.md#shift delegation-api)  [API](/API/staking.md#shift delegation-command -line)
 	 
 	 * Query a delegator account for all delegation shifts [CLI](/cli/staking.md#query delegation shifts-api) [API](/API/staking.md#query delegation shifts-command -line)
 	 
 	 * query  a delegator account for delegation shifts between two consensus accounts  [CLI](/cli/staking.md#query  a delegator account for delegation shifts between two consensus accounts ) [API](/API/staking.md#query delegation shifts-command -line)
 	 
   c.Delegator can “undelegate” its delegation from a consensus account in part of in  whole
 	
 	 * Note, the delegation income will be settled immediately at the consensus account after undelegating. But the earning and principal will be credited 21 days later
 	 
 	 * Initiate an  “undelegate” transaction [CLI](/cli/staking.md#undelegate from a consensus account -api) [API](/API/staking.md#undelegate from a consensus account-command -line)
 	 
 	 * Query a delegator account for  undelegated records from a consensus account  [CLI](/cli/staking.md#Query a delegator account for  undelegated records from a consensus account -api) [API](/API/staking.md#Query a delegator account for  undelegated records from a consensus account -command -line)
 	 
 	 * Query a delegator account for  undelegated records from all consensus account  [CLI](/cli/staking.md#Query a delegator account for  undelegated records from all consensus account api)
 [API](/API/staking.md#Query a delegator account for  undelegated records regarding all consensus account -command -line)

 	 * Query  undelegated records regarding a specific consensus account  [CLI](/cli/staking.md#Query  undelegated records regarding a specific consensus account -api) [API](/API/staking.md#Query  undelegated records regarding a specific consensus account -command -line)

 	 
