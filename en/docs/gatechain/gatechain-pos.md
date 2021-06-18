
## PoS Mining

There are two ways to take part in Gatechain's POS mining:

1. Build a GateChain full node and work as a consensus account. 
2. Delegate your GT to a consensus account.

### Build a GateChain Full Node and Work as a Consensus Account 
By building a full node to participate in the consensus, you can earn delegation commission on top of your mining revenue, as you can opt to accept delegations from other accounts.


### Delegate GT to a Consensus Account 

If you do not want to build a node and POS mine as a consensus account, you can opt to delegate your GT to a consensus account and get a share of mining rewards. Delegation can be performed via CLI/API/Wallet.

* There is no minimum delegation amount for the account. If too low, then the yielding rate will be relatively low as well. If too high, yields will fall off and it's suggested to build more nodes.
* All account types can delegate to consensus accounts，**It is recommended to use a vault account, guaranteeing the safety of the funds.**
* Delegations initiated by vault accounts work exactly the same way as from normal accounts. The delegattion takes effect immediately; rewards are calculated from the very next block. There is still a 21 day freeze period required if you wish to redelegate/undelegate your funds. Reward withdrawals will be credited to the account immediately.**When a vault account initiates a clearing transaction, there mustn't be any ongoing delegations or frozen funds, otherwise the clearing transaction will fail.**Delegation does not affect the security of the accounts' funds, therefore, after the clearing height is reached, four kinds of delegation transactions can still be initiated.


### Rewards distribution structure between consensus and delegator accounts


The total reward of each block is 0.4GT + Transaction fees.
(The lower the weight, the higher the rewards), weight =(Currency holdings+delegation GT quantity)* Loyalty coefficient.

1. Rewards distribution rules of consensus accounts, three cases:

	a.Three consensus accounts were selected into the block Committee, according to each account's weight proportions, If they are between 40% and 27%, distribution will occur according to the actual proportions, If more than 40% or less than 27%, distribution will occur evenly split:40%.33%.27%;

	b.Two consensus accounts were selected into the block Committee, according to each account's weight proportions, if they are between 60% and 40%, distribution will occur according to the actual proportions, If more than 60% or less than 40%, distribution will occur evenly split:60%.40%;
	
	c.One consensus accounts was selected into the block Committee, gets 100% rewards.
	
2. The consensus account and the delegator account shall be allocated the due reward according to the proportion of money held, example:The consensus account should receive 40% of the rewards, Namely 0.16GT, Consensus account holding 10000GT, Delegation quantity 10000GT, 0.16*50%=0.08，Therefore, the consensus account and the delegator account get 0.08GT respectively(The delegator account shall pay a certain fee to the consensus account according to the fee rate).
