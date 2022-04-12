## Introduction

GateOracle provides real-world data to smart contracts on Gatechain. For example, you can use GateOracle Data Feeds to connect your smart contracts to asset pricing data like the ETH / USD feed. These data feeds use the data aggregated from many independent GateOracle node operators. Each price feed has an on-chain address and functions that enable contracts to read pricing data from that address.

## Usage

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;
    /**
     * Network: Meteora
     * Aggregator: ETH/USD
     * Address: 0x9359fec0A7a4180d3313208eb9F5fE335eb80F36
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x9359fec0A7a4180d3313208eb9F5fE335eb80F36);
    }
    // Returns the latest price
    function getLatestPrice() public view returns (int) {
        ( /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }
}
```

## Feeds

Data feeds for Gatechain Mainnet:

|  | Feed Address | Decimals |
| :---- | :---- | :----: |
| ETH/USDT | 0xaD4E65AB6f123010927E42f4106ac8FbB8ff1838 | 8 |
| BTC/USDT | 0x812B111481018469c0cD6730bC3211aF045C323a | 8 |
| GT/USDT | 0x42d6F77F4208128F7d8C3Aa109b72340b939575d | 8 |
| BNB/USDT | 0xa7a1107125dAbb3CA68DafDc8a46Cf766AD4bbbb | 8 |
| DAI/USDT | 0x49E9Daf94440f63637a38a0BC7B3a988Eb17F394 | 8 |


Data feeds for Gatechain Testnet(Meteora):

|  | Feed Address | Decimals |
| :---- | :---- | :----: |
| ETH/USDT | 0x9359fec0A7a4180d3313208eb9F5fE335eb80F36 | 8 |
| BTC/USDT | 0xF04B8cf2CB29cbE2FcFD0d6CdcD64A3d96b0e944 | 8 |
| GT/USDT | 0x948c46AE6010551a7F8aBbf5D0186a44D7D47Af3 | 8 |
| BNB/USDT | 0xCA4e0946138DCF6f3f12c6D44b77f12fbB5B308E | 8 |
| DAI/USDT | 0xA9B2e4E3282a39A6f76Cd7B60f3B41D071D71902 | 8 |


## Appendix

#### AggregatorV3Interface

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface AggregatorV3Interface {
  function decimals() external view returns (uint8);

  function description() external view returns (string memory);

  function version() external view returns (uint256);

  // getRoundData and latestRoundData should both raise "No data present"
  // if they do not have data to report, instead of returning unset values
  // which could be misinterpreted as actual reported values.
  function getRoundData(uint80 _roundId)
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );

  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );
}
```



