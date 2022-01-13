# Plasma.Finance Market Page Token List

To create your token page on the Decentralized Plasma.Finance [Market Page](https://apy.plasma.finance/#/market), please fork this repo and edit this JSON file - https://github.com/plasmadlt/plasma-finance-market-tokenlist/blob/main/plasma-finance-market-list.json. After checking your Pull Request by our staff, your token page will appear on the platform.

___________________


# Spaceport - The First Decentralized Multi-Chain IDO Launchpad

<p align="center"><img src="https://gblobscdn.gitbook.com/assets%2F-MOWBTwEhneL3ZmpuT_Q%2F-McTMFZHOXlDfXSW_FNI%2F-McTMtl3elNtDXm0GsdJ%2Fimage.png"></p>

## SpacePort / Innovation Hub Token List

Links:
- [SpacePort Launchpad](https://apy.plasma.finance/#/spaceport)
- [Innovation Hub](https://apy.plasma.finance/#/innovation-hub)

To add an information for your IDO on Spaceport or on the Innovation Hub page, please fork this repo, create a folder with your token address and JSON file inside with all the data about your project.
https://github.com/plasmadlt/plasma-finance-market-tokenlist/tree/main/spaceport

Here is a model of IDO JSON metadata:

```json
{
  "name": "Chainlink",
  "description": "Chainlink allows blockchains to securely interact with external data feeds, events and payment methods, providing the critical off-chain information needed by complex smart contracts to become the dominant form of digital agreement.",
  "chainId": 1,
  "projectVerifiedByAdmins": "0",
  "kycUrl": "https://chain.link/",
  "socialAllocationUrl": "https://chain.link/",
  "contractAudit": "https://chain.link/",
  "pitchDeckPdf": "https://research.chain.link/whitepaper-v2.pdf",
  "youtubeLink": "https://youtu.be/7Ow8uN1TmxA",
  "email": "hello@gmail.com",
  "tokenomics": {
    "startTimestamp": 1624535311,
    "period": "w",
    "datasets": [
      {
        "title": "Team",
        "line": [0, 0.7, 0.9, 0.8, 1.3, 1.8, 3, 4, 4.3, 5, 7, 8.1, 10]
      },
      {
        "title": "VCs",
        "line": [0, 2, 3, 5, 7, 8, 8.5, 9, 10, 13, 14, 16, 18]
      },
      {
        "title": "IDO",
        "line": [0, 3, 4, 6, 8, 10, 11, 14, 18, 22, 24, 28, 30]
      },
      {
        "title": "Governance",
        "line": [0, 5, 10, 18, 19, 21, 23, 24, 27, 30, 35, 40, 42]
      }
    ]
  },
  "allocations": {
    "datasets": [
      {
        "title": "Team",
        "amount": 10000
      },
      {
        "title": "VCs",
        "amount": 18000
      },
      {
        "title": "IDO",
        "amount": 30000
      },
      {
        "title": "Governance",
        "amount": 42000
      }
    ]
  }
}
```

Tokenomics period:
m - months
w - weeks

More "How to" information you can find [here](https://docs.plasma.finance/spaceport/how-to-launch-ido)

When this file is ready, you can create IDO [here](https://apy.plasma.finance/#/innovation-hub/create-ido)

# Plasma.Finance - Decentralized Market Token Page List
This information we use for token and IDO pages on Plasma.Finance
https://github.com/plasmadlt/plasma-finance-market-tokenlist/blob/main/plasma-finance-market-list.json

See https://apy.plasma.finance/#/market

# Add token in Market Token List and create Token Page on Plasma.Finance
## 1. Press on "Fork" in the top right corner, wait for process to complete.

```
git clone https://github.com/plasmadlt/plasma-finance-market-tokenlist
```

## 2. Add your token .png image in folder "Assets"

```
https://github.com/plasmadlt/token-list/tree/master/assets 
```

### Image Requirements
File extension: png. Uppercase PNG is considered invalid.
File name：<contract_address>.png, all lowercase.
Dimension: 256 x 256 pixels (recommended) or 512 x 512 pixels.
Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
File size: maximum 100kB.  Tip: optimize image size, e.g. using simple drag-and-drop online service tinypng.

## 3.1 Add your token data in plasma-finance-market-list.json

Address contract must be ***checksummed***
Check or convert your address in checksummed address here: https://web3-tools.netlify.app/

```json
  {
    "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
    "chainId": 1,
    "name": "Plasma Finance",
    "description": {
      "en": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "es": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "fr": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "hu": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "id": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "it": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "ja": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "ko": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "nl": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "pl": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "pt": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "ro": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "ru": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "sv": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "th": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "tr": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "vi": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "zh": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform.",
      "zh-tw": "Plasma.Finance is a cross-chain DeFi aggregator and portfolio management platform."
    },
    "symbol": "PPAY",
    "coingeckoId": "plasma-finance",
    "coinmarketcapId": "plasma-finance",
    "decimals": 18,
    "tokenomicsData": {
      "totalSupply": "1000000000"
    },
    "logoURI": "https://raw.githubusercontent.com/plasmadlt/token-list/master/assets/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png",
    "tags": [
      "defi",
      "alliance",
      "dex",
      "trending",
      "ido"
    ],
    "links": [
      {
        "icon": "website",
        "name": "Website",
        "url": "https://plasma.finance"
      },
      {
        "icon": "whitepaper",
        "name": "Whitepaper",
        "url": "https://docs.plasma.finance"
      },
      {
        "icon": "telegram",
        "name": "Telegram",
        "url": "https://t.me/plasmapay_community"
      },
      {
        "icon": "reddit",
        "name": "Reddit",
        "url": "https://www.reddit.com/r/PlasmaFinance/"
      },
      {
        "icon": "twitter",
        "name": "Twitter",
        "url": "https://twitter.com/plasma_pay"
      },
      {
        "icon": "wechat",
        "name": "WeChat",
        "url": ""
      },
      {
        "icon": "discord",
        "name": "Discord",
        "url": "https://discord.gg/M3jDtyJ"
      },
      {
        "icon": "medium",
        "name": "Blog",
        "url": "https://medium.com/plasmapay"
      },
      {
        "icon": "etherscan",
        "name": "Etherscan",
        "url": "https://etherscan.io/token/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2"
      },
      {
        "icon": "github",
        "name": "GitHub",
        "url": "http://github.com/plasmadlt"
      }
    ]
  },
```

## 3.2 Tags

You can add any tag from the next list to your token metadata. You can use up to 3 tags.

```json
"tags": {
      "defi": {
         "name": "DeFi Market",
         "description": "Decentralized Finance protocols"
      },
      "aavev2": {
         "name": "Aave V2",
         "description": "Aave interest bearing tokens"
      },
      "comp": {
         "name": "Compound",
         "description": "Compound protocol balance token"
      },
      "indexes": {
         "name": "DeFi Indexes",
         "description": "Tokenized baskets of high quality DeFi projects"
      },
      "stable": {
         "name": "Stablecoin",
         "description": "Stablecoins may be pegged to a currency like the US dollar or to a commoditys price such as gold"
      },
      "alliance": {
         "name": "Plasma Alliance",
         "description": "Plasma Alliance of ambitious projects and game changing DeFi protocols"
      },
      "dex": {
         "name": "DEX Tokens",
         "description": "Tokens from AMM protocols"
      },
      "wrap": {
         "name": "Wrapped",
         "description": "Wrapped tokens pegged to the value of cryptocurrency from another chain"
      },
      "eth2": {
         "name": "Eth 2 Staking",
         "description": "Eth 2 Staking Tokens"
      },
      "pools": {
         "name": "Pools",
         "description": "Earn trading fees by providing liquidity in a single transaction"
      },
      "synths": {
         "name": "Synthetix",
         "description": "Synthetic cryptocurrency by Synthetix protocol"
      }
   },
```

## 3.3 Coingecko ID

To have all information (like circulation supply, trading volume, total supply, web links) for your token page please add "coingeckoId" to your token scheme.
Go to Coingecko, find your token and copy your token name from token's web page address. Paste this name to your token scheme.

## 4. Make a new PR (pull request)

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```

# 📞 Contacts
Email: [apy@plasma.finance](mailto:apy@plasma.finance) <br>
Telegram: [Announcement Group](https://t.me/OxPlasma), [Chat](https://t.me/OxPlasmaMedia)

# 🔉 Social Media
[Facebook](https://www.facebook.com/plasmapay) <br>
[Plasma Twitter](https://twitter.com/0xPlasma) <br>
[Spaceport Twitter](https://twitter.com/CyberSpacePort) <br>

# 🔗 Useful Links
### [PlasmaPay](https://plasmapay.com/):
- [Crypto Wallet](https://app.plasmapay.com/)

### [Plasma.Finance](https://plasma.finance/):
#### Platform
- [Market](https://apy.plasma.finance/#/market)
- [HyperDEX](https://apy.plasma.finance/#/hyper-dex)
- [DEX Liquidity Management](https://apy.plasma.finance/#/liquidity-pools)
- [Savings](https://apy.plasma.finance/#/savings)
#### IDO
- [SpacePort](https://apy.plasma.finance/#/spaceport)
- [Innovation Hub](https://apy.plasma.finance/#/innovation-hub)
- [Launchpad Alliance](https://apy.plasma.finance/#/launchpads)
- [SpacePort Landing](https://plasma.finance/spaceport)
#### How To
- [Documentation and DeFi University](https://docs.plasma.finance/)

### Media
[PPAY on Coinmarketcap](https://coinmarketcap.com/currencies/plasma-finance/) <br>
[PlasmaSwap (AMM) on CoinMarketCap](https://coinmarketcap.com/exchanges/plasmaswap/) <br>
[Plasma Earn Campaign on CMC](https://coinmarketcap.com/earn/project/plasmafinance) <br>
[PPAY on Coingecko](https://www.coingecko.com/en/coins/plasma-finance) <br>

### Tokens:
#### PPAY
 - [Ethereum (ERC20)](https://etherscan.io/token/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2)
 - [Polygon](https://polygonscan.com/token/0x08158a6b5d4018340387d1a302f882e98a8bc5b4)
#### xPPAY
 - [Ethereum (ERC20)](https://etherscan.io/token/0x9fd1d329bb687fef164f529f6f6dcd6f69e7b978)
