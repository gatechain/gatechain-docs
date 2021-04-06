## PoS Mining

There are two ways to take part in Gatechain's POS mining:

1. Build a GateChain full node and work as a consensus account. 
2. Delegate your GT to a consensus account.

### Build a GateChain Full Node and Work as a Consensus Account 
By building a full node to participate in the consensus, you can earn delegation commission on top of your mining revenue, as you can opt to accept delegations from other accounts.

1. On a linux or mac device of good performance, install the latest GateChain binaries according to [Installation Document](./gatechain-build.md).
2. Create a normal account. Consensus accounts don't need too much balance in order to go live. The minimum amount to participate in the consensus is 1GT(10e9 NANOGT). You should also ensure to be able to pay the fees of online transactions (0.01GT), Therefore, the balance of a consensus account should be ≥ 1GT.

  	a.Create a single signature account [CLI](/cli/account.md# Generate single signature account )
  	
  	b.Initiate a transaction [CLI](/cli/tx.md#Send transactions-api) [API](/API/tx.md# normal transaction)
  	
3. Create a Consensus Account using a single signature account.

 	a.Create a Consensus Account [CLI](/cli/con-account.md# Create a Consensus Account)
 	
4. On the node, initiate a "consensus account online transaction"; if successful, the single signature normal account becomes a consensus account. 

 	a.consensus account online transaction [CLI](/cli/con-account.md#consensus account online)

5. This consensus account and its node will participate in GateChain's consensus mechanism. Make sure your system is running well and network connection is stable. 

6. Each time the consensus account is elected in the consensus committee, it will be credited with the PoS mining reward. 

 	a.Query consensus account for the POS mining reward and miner fees [CLI](/cli/distribution.md#query consensus account earnings-api) [API](/API/distribution.md#query consensus account earnings-command-line)
 	
7. As a consensus account, you can accept delegations from accounts.
 	
 	a.Accepting delegations adds weight to the consensus account's votes and increases the odds to be elected into committee. 
 	
 	b.Besides getting mining rewards, a consensus account can also charge delegator accounts “delegation commission”. The commission rate can be specified when initiating a “consensus account online transaction”.。
 	
 	c.To query delegation related information, use the following interfaces:
 	
 	 * Query a consensus account for delegation records [CLI](/cli/staking.md#Query all delegations of a specific consensus account -api)  [API](/API/staking.md#Query all delegations of a specific consensus account -command-line)
 	 
 	 * Query a consensus account for delegation shifts records [CLI](/cli/staking.md#query all delegation shifts of a specific consensus account -api) [API](/API/staking.md#query delegation shifts -command-line)
 	 
 	 * Query a consensus account for undelegated records  [CLI](/cli/staking.md#Query all undelegated records of a specific consensus account-api) [API](/API/staking.md#Query all undelegated records of a specific consensus account-command-line)
 	 
 	 * Query a consensus account for outstanding delegation income [CLI](/cli/distribution.md#Query a consensus account for outstanding delegation income-api) [API](/API/distribution.md#Query a consensus account for outstanding delegation income-command-line)


### Delegate GT to a Consensus Account 

If you do not want to build a node and POS mine as a consensus account, you can opt to delegate your GT to a consensus account and get a share of mining rewards. Delegation can be performed via CLI/API/Wallet.


* There is no minimum delegation amount for the account. If too low, then the yielding rate will be relatively low as well. If too high, yields will fall off and it's suggested to build more nodes.
* All account types can delegate to consensus accounts，**It is recommended to use a vault account, guaranteeing the safety of the funds.**
* Delegations initiated by vault accounts work exactly the same way as from normal accounts. The delegattion takes effect immediately; rewards are calculated from the very next block. There is still a 21 day freeze period required if you wish to redelegate/undelegate your funds. Reward withdrawals will be credited to the account immediately.**When a vault account initiates a clearing transaction, there mustn't be any ongoing delegations or frozen funds, otherwise the clearing transaction will fail.**Delegation does not affect the security of the accounts' funds, therefore, after the clearing height is reached, four kinds of delegation transactions can still be initiated.

**How-To Delegate:


1. First, choose a consensus account to delegate your GT to.

 	a.You can check the commission, holdings, rate of returns etc of a consensus accounts and decide which one to choose.
 	
 	b.You can view using a blockchain explorer：https://gatescan.org/consensus
 	 	
2. Initiate a  "delegate" transaction to delegate all or a portion of your GT to one or more consensus accounts. 

 	 a.Initiate a delegation transaction [CLI](/cli/staking.md#delegate token to consensus accounts-api) [API](/API/staking.md#delegate token to consensus accounts-command-line)
 	 
3. If the delegation transaction succeededs, you can get a share of the mining reward following the consensus account's POS mining.

4. While delegating, a delegator can perform three functions: “fetch income” , “shift delegation” or  “undelegate”

	Note: When the principal performs one of the functions: "fetch income", "shift delegation" and "undelegate", reward amount is directly credited to their account's balance. To query the specific reward amount, you need to view the content of "transfer" in the corresponding transaction details.

    a.Delegator can initiate a “fetch income” transaction and get credited its share of the mining rewards to their own account.
 	 
 	 * Query all delegation info [CLI](/cli/staking.md#Query delegator account for all delegations in all consensus accounts-api) [API](/API/staking.md#Query delegator account for all delegations in all consensus accounts-command -line)
 	 
 	 * Query all delegation transactions [API](/API/staking.md#query  delegator account for the delegation transactions list)
 	 
 	 * Set account to fetch delegation income [CLI](/cli/distribution.md#set account to fetch delegation income-api) [API](/API/distribution.md#set account to fetch delegation income-command -line)
 
 	 * Query delegation income [CLI](/cli/distribution.md#Query delegator account for delegation income-api) [API](/API/distribution.md#Query delegator account for delegation income-command -line)
 	 
 	 * Fetch partial income [CLI](/cli/distribution.md#Delegator account fetches part of its income from a single consensus account.-api) [API](/API/distribution.md#Delegator account fetches part of its income from a single consensus account.-command -line)
 	 
 	 * Fetch all income [CLI](/cli/distribution.md#Delegator account fetches  all of its income from consensus account.-api) [API](/API/distribution.md#Delegator account fetches  all of its income from consensus account -command-line)
	
  b.Delegator can initiate a “shift delegation” transaction for a given delegation to move their GT funds to another consensus account 

   * After the delegation shift, the income from the consensus account will be settled immeditely. But the delegation can not be shifted again from the consensus account for a period of 21 days.
   
   * Initiate a shift delegation transaction [CLI](/cli/staking.md#shift delegation-api)  [API](/API/staking.md#shift delegation-command -line)
   
   * Query a delegator account for all delegation shifts [CLI](/cli/staking.md#query delegation shifts-api) [API](/API/staking.md#query delegation shifts-command -line)
   
   * query  a delegator account for delegation shifts between two consensus accounts  [CLI](/cli/staking.md#query  a delegator account for delegation shifts between two consensus accounts ) [API](/API/staking.md#query delegation shifts-command -line)

 c.Delegator can “undelegate” its delegation from a consensus account in part of in  whole
 	
 	 * Note, the delegation income will be settled immediately at the consensus account after undelegating. But the earning and principal will be credited 21 days later
 	 
 	 * Initiate an “undelegate” transaction [CLI](/cli/staking.md#undelegate from a consensus account -api) [API](/API/staking.md#undelegate from a consensus account-command -line)
 	 
 	 * Query a delegator account for  undelegated records from a consensus account  [CLI](/cli/staking.md#Query a delegator account for  undelegated records from a consensus account -api) [API](/API/staking.md#Query a delegator account for  undelegated records from a consensus account -command -line)
 	 
 	 * Query a delegator account for  undelegated records from all consensus account  [CLI](/cli/staking.md#Query a delegator account for  undelegated records from all consensus account api)
 [API](/API/staking.md#Query a delegator account for  undelegated records regarding all consensus account -command -line)
 
 	 * Query undelegated records regarding a specific consensus account  [CLI](/cli/staking.md#Query  undelegated records regarding a specific consensus account -api) [API](/API/staking.md#Query  undelegated records regarding a specific consensus account -command -line)

 	 
### Rewards distribution structure between consensus and delegator accounts


The total reward of each block is 0.4GT + Transaction fees.
(The lower the weight, the higher the rewards), weight =(Currency holdings+delegation GT quantity)* Loyalty coefficient.

1. Rewards distribution rules of consensus accounts, three cases:

	a.Three consensus accounts were selected into the block Committee, according to each account's weight proportions, If they are between 40% and 27%, distribution will occur according to the actual proportions, If more than 40% or less than 27%, distribution will occur evenly split:40%.33%.27%;

	b.Two consensus accounts were selected into the block Committee, according to each account's weight proportions, if they are between 60% and 40%, distribution will occur according to the actual proportions, If more than 60% or less than 40%, distribution will occur evenly split:60%.40%;
	
	c.One consensus accounts was selected into the block Committee, gets 100% rewards.
	
2. The consensus account and the delegator account shall be allocated the due reward according to the proportion of money held, example:The consensus account should receive 40% of the rewards, Namely 0.16GT, Consensus account holding 10000GT, Delegation quantity 10000GT, 0.16*50%=0.08，Therefore, the consensus account and the delegator account get 0.08GT respectively(The delegator account shall pay a certain fee to the consensus account according to the fee rate).


