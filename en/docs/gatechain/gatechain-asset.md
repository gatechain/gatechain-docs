
## Overview

Issued assets are stored on GateChain in in the form of tokens. Issued assets should comply with GateChain's Token Management Standards.

Asset owners can additionally issue, burn, and freeze/unfreeze their assets. These functions incur fees, paid in GateTokens.


## Issuance

Via Cli or API, you can issue your own digital assets on GateChain.

The issuer may fill in the parameters according to the requirements. After being verified, the issuer can publish his own digital asset in the form of a token on GateChain. Below are the related commands:


## Token Management

####[Operational Details for CLI](../developers/cli/token.md)

####[Operational Details for API](../developers/api/token.md)

* Token issuance incurs a fee of 200GT, please make sure you have adequate GT token at account.



## ERC20 Token

This standard specifies the functions and event records that the Ethereum token contract needs to implement, that is, a set of api standards. It has developed a set of standard interfaces for the Ethereum token contract, so that a wide variety of tokens can be used by more DAPPs. , Compatible with the exchange. These include interfaces such as token name, token symbol, decimal point, total supply, balance, transfer, transfer from others, allowable value, events, etc.


## ERC721 Token

Compared to inheriting some of the basic functional interfaces of the ERC 20 standard, he mainly added tokenid. ERC20 is a standard Token interface. The Token of ERC20 can be subdivided into 10^18 infinitely, while the smallest unit of Token of ERC721 is 1, which cannot be divided.

