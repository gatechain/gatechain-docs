
   2. Market Liquidity: GateBridge defines the liquidity pool in a broad sense, bringing in Cross-Chain Automated Market Maker role within the cross-chain transfer or swap. 
   3. Settlement:  Transactions are settled via smart contracts with the authorisation and signature performed using the private keys, which help to achieve safe, fast and low-cost cross-chain transfers and settlements on a three-layer ledger model. 
   4. Application: GateBrige provides an easy-to-use and intuitive interface to facilitate a better user experience. 
2. Relayer:  A relayer comprises of multiple nodes, responsible for data transition from one chain to another.  
3.  Liquidity Pool: A series of smart contracts deployed on every smart chain, responsible for asset exchange between chains.
4. Ledger: A series of smart contracts deployed on every smart chain, responsible for maintaining the ledger and security of the entire system.
5. Liquidity Provider:
	1. AMMs from different chains and tokens;
  	2. LPs that provides liquidity for the cross-chain liquidity pool.
2. System Ledger: The ledger of the entire cross-chain system, which is a smart contract deployed on the GateChain mainnet, ensuring safety at a minimal maintenance cost.  
3. Result Ledger: Tx execution result on System Ledger will be sent to every smart chains and execute, the result will be recorded in the LP Ledger, which are deployed on every smart chains.

The formula can be expanded to a liquidity pool with tokens at any allocation and amount; such as model used in Balancer:

2. For asset that has imbalanced popularities in some chains, the asset amount formats in a pool is likely unfairly allocated, thus causing a drastic price deviation in pools.
2. When the assets allocation is drastically imbalanced in a pool, the price is limited with upper and lower limits, to ensure a manageable slippage for liquidity provider. When the balance is restored again with arbitragers joining in later, the price will resume.
3. When adding liquidity to one side, which enlarge slippage outside the flat bottom area, an extra fee will be charged to offset the slippage loss of LPs in the pool.
2. Every Relayer monitored that Alice added 100 BTC to the liquidity pool, it would pack this message and other user events, send to System Ledger in GateChain.
3. System Ledger will receive the package from relayers, then verify if the package was approved by a certain number of relayers (POA); if yes, then the transactions in the package would be sent to related liquidity pools for computing, BTC pool in this case. 
4. When the liquidity pool finishes computing, the result would be recorded on System Ledger.
5. Relayers detect execution results on the System Ledger, they would pack the computing result and send to certain chain to execute them. Etheruem in this case.
6. Result Ledger on Ethereum had received the results from the relayer, it would check the execute result, if succeed, then sent 100 BTC worth LP tokens to Alice; otherwise sent 100 BTC back to Alice. 
7. The process of removing liquidity is quite similar.
2. Relayers monitor Bob's operation, and all relayers would packed this and other user events, send in pack to the System Ledger on GateChain.
3. After receiving transactions package from different relayers, the System Ledger verify to see if the package was approved by a certain number of relayers; if yes, then the transactions would be sent to liquidity pools for computing, BTC liquidity pool in this case.
4. After the liquidity pool completed calculation, the result would be recorded on the System Ledger.  
5. When the relayer monitored results of System Ledger, they would pack results and send to object chain for execution: if the result was a success, then the calculation result would be packed and sent to BSC; if failure(the main reason of failure was insufficient liquidity on the BSC, resulting insufficient funds to withdraw 10 BTC), the calculation result would be sent back to the Ethereum. 
6. If Result Ledger on the BSC received results from the Relayer, then the execution was a success; the 10 BTC less liquidity fee would be sent to Bob；if Result Ledger of the Ethereum received the result, then the execution was a failure, 10 BTC would be returned to Bob.