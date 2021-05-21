##Overview

Assets and smart contracts are key to DeFi. GateChain-EVM provides the environment to run smart contracts, allowing any project team to easily deploy and manage their dapps on GateChain. For how to transfer assets safely and quickly between other blockchains and GateChain, we has introduced a comprehensive cross-chain solution to provide interoperability between blockchains,including ERC tokens cross-chain solution, native tokens cross-chain solution, and native token- ERC asset cross-chain solution. On the consensus layer, GateChain provides cross-chain solutions using smart contract based GateBridge, and consensus nodes based GateHub.

##GateBridge 

To help assets on the Ethereum compatible networks to migrate to GateChain quickly, at this stage, smart contract based GateBridge is first introduced, which offers the cross-chain solution for ERC tokens.

GateBridge uses the multisig solution of ChainSafe + hardware. Its transfer and consensus reaching are executed by a smart contract, transparent and safe. Consensus voting participants (called Relayers) will vote for each and every cross-chain transaction using the multisig of the hardware to make decisions for  the token issuing and freezing event. This can significantly enhance security and is a big improvement from the ChainSafe solution that is more centralized.

The process can be described as below:

1. User deposits his/her ERC tokens to the Bridge contract in the original chain, specifying the target chain and target address (deposit)
2. If consensus is reached by multiple relayers, the Bridge contract in the target chain will use mint method to issue the corresponding amount of ERC tokens and then transfer them to the target address.
3. When the user deposited the tokens, the user would pay the gas fees native to the original chain as the cross-chain network fees for. The gas might be in ETH or BNB. Relayers will get a portion of the gas fee paid by the user as a reward for their work.

GateBridge can be widely used on any chain that uses EVM as a smart contract engine. The cluster of relayers will provide security and decentralization.


##GateHub Upgrading Plan
The smart contract based Cross-chain has its advantages in security and speed, but it comes with shortages: it will have higher gas fees, its delayers might have key missing risks, and it might become an obvious attack target, transactions can not be generated autonomously, cross-chain transactions can only be processed on a transaction by transaction basis, etc. The final cross-chain solution will still be made by sidechain with a higher level of security. That is where GateHub, a complete blockchain that provides cross-chain consensus service, can work.

The cross-chain process can be described as below:

1. GateHub-Validators are elected autonomously, and their consensus is secured by a complete side-chain. This makes the GateHub-Validators decentralized and difficult to be attacked.。
2. A user make an asset transfer request from the original chain, specifying the target chain and target address.
3.  When consensus is reached among these GateHub-Validators, the recent cross-chain transactions will be included in a block on GateHub sidechain and mined, and finally sent to the target chain for bulk processing. This way, the gas fee is drastically reduced.
4. When the user deposits the asset, the user will pay gas fee native to the original chain, such as in ETH or BNB, as cross-chain fees. GateHub will reward honest consensus nodes a portion of the fees and punish the malicious nodes.

Besides the mainnet level consensus security,we will also use the MPC method to enhance the security in decentralization and lower cost for cross-chain transactions.

When GateHub is introduced, GateChain consensus accounts can deposit tokens to become a GateHub-Validator and earn rewards from the cross-chain gas fees. This way, cross-chain transactions will be as decentralized and secured as the mainnet, with minimum network fees.


* GateChain dev team is planning to roll out a common development framework Gatemint-SDK this year,which will allow any developer team build a pos protocol in a short period of time.


##Applications
GateBridge will be firstly  deployed on the Ethereum and GateChain, allowing asset transfers between these two networks. Later, we will deploy the smart contract on BSC, Heco, and OKChain to allow cross-chain among all the EVM.

When GateHub goes live, the GateBridge will be upgraded as well. We will continue bringing interoperability between Cosmos and Polkadot eco, achieving seamless transfer between native chain assets and ERC tokens.



