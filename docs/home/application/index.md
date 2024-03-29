
<!--为兼顾日常支付的快速高效和资金存储的安全可靠，GateChain具有普通账户（Normal Account）和保险账户（Vault Account）两种类型的账户。普通账户账户中的资金可以快速支付，支付后不能撤回，私钥丢失后也不能恢复，普通账户跟比特币的地址特性很相近。而GateChain最主要的发明-链上保险账户“Vault Account”-具有被盗资金可撤回以及私钥丢失可以恢复的重要安全特性。将这两种账户的特性相结合，GateChain在个人和专业领域均具有广泛的应用。-->

GateChain提供普通账户（Normal Account）和保险账户（Vault Account）两种类型账户，兼顾了日常支付的快速高效需求，以及资金存储的安全可靠需求。普通账户类似于比特币操作，支持账户资金的快速支付，但支付后不能撤回，并且账户私钥一旦丢失则无法恢复资产。链上保险账户“Vault Account”是GateChain的重要创新，其提供被盗资金可撤回及私钥丢失可恢复等重要安全特性。结合使用普通账户及保险账户，为GateChain用户提供了完备的安全特性支持。


## 个人资金的安全管理	

<!--个人用户可以同时拥有一个普通账户和一个保险账户。将日常需要使用的少量资金存放在普通账户，将绝大部分临时用不到的资金存放在保险账户。设置保险账户的资金延迟取出时间为2天（举例）。用户日常可以像使用比特币一样使用普通账户中的资金，支付即时确认，不能撤回。恶劣的情况下出现私钥被盗或者丢失的情况，仅损失少量资金，风险可控。当普通账户中的日常使用资金不够的时候，可以提前规划从保险账户中取出部分所需资金，等待2天（举例）后到账。如果恶劣的情况下保险账户中的资金被盗，只需要在2天（举例）内发起撤回请求，即可立即撤回被盗资金到找回账户“Retrieval Account”，挽回损失。-->

GateChain为个人用户提供了普通账户和保险账户。普通账户用于存放用户日常使用的少量资金，保险账户中存放用户暂时无需使用的资金。保险账户的资金可设置一个延迟取出时间，例如2天。

日常，用户可以像使用比特币一样操作普通账户中的资金，支付即时确认，但不能撤回。一旦出现私钥被盗或者丢失等异常情况，用户仅会损失普通账户中的少量资金，风险可控。当普通账户中资金不够时，可以提前规划从保险账户中取出部分资金，需等待设定的延迟取出时间（本例中为2天）后到账。一旦在延迟时间内发现保险账户被盗，用户只需要发起撤回请求，即可立即撤回被盗资金到找回账户（Retrieval Account），避免资金发生损失。

## 个人遗产或赠与的自动释放

数字遗产的处理一直都是非常让人头疼的事情，因为不像银行资金，房产等资产可以通过合法途径由他人处理。数字资产的私钥因为安全原因基本都是由本人保管的，不经过复杂的处理过程，很多人的数字资产在死后都将永久封存，后人无法获取。GateChain的保险账户可以支持个人资产在未来设定的某个时间安全的自动释放给目标人员，并且在这段时间内不用担心私钥丢失或资金被盗的风险。因此只要个人在生前通过GateChain设定好数字遗产分配比例和释放时间，就可以安全放心的在指定时间将数字遗产转移给指定人员。  
这种资产处理方式也可以用于按规划的赠与情形，比如父母希望在孩子18岁的时候为孩子赠送一笔数字资产作为孩子的成人发展资金，就可以把指定自己的保险账户在孩子18岁的时候自动发送资金到孩子的账户。

## 银行资金的安全存储

<!--银行资金的存储需要有极高的安全性，目前银行即使采用冷存储和硬件钱包，也无法100%保证区块链资产安全，特别是重大自然灾害等带来的私钥损毁风险，大大限制了区块链资产被大规模采用的可能。银行资金如果采用GateChain保险账户存储，可以设置较长的延迟取出时间（如30天）或者保险账户级联方式，指数级的降低资金被盗风险。在实际应用中，仅需要很低的成本即可达到无限接近100%安全级别。就像比特币密钥被暴力解算的可能性接近于零一样，虽然不是理论上的100%安全，但已经是现实中的100%安全。并且，还可以在这个基础上叠加使用零钱包和硬件钱包技术，进一步巩固资金安全。-->

银行资金的存储，对安全性具有极高的要求。目前，区块链中采取的主要机制是链下冷存储和硬件钱包。但是这些机制无法100%地保证区块链资产安全，尤其是无法解决用户私钥损毁所导致的资产损失风险。这些问题限制了区块链资产被大规模采用的可能。

采用GateChain保险账户存储，银行可以通过设置较长的延迟取出时间，降低资金存储的风险。另一方面，GateChain支持保险账户级联，可指数级地降低资金被盗的风险。

在实际应用中，GateChain以很低的成本达到无限接近100%的资金存储安全。就像比特币密钥被暴力解算的可能性接近于零一样，虽然不是理论上的100%安全，但已经是现实中的100%安全。在此基础上，叠加使用零钱包和硬件钱包技术，可进一步巩固资金的安全。

