# Plasma.Finance - Decentralized Market Token List
https://github.com/plasmadlt/plasma-finance-market-tokenlist/blob/main/plasma-finance-market-list.json

See https://apy.plasma.finance/market

# Add token in Market Token List 
## 1. Press on Fork in the top right corner, wait for process to complete.

```
git clone https://github.com/plasmadlt/plasma-finance-market-tokenlist
```

## 2. Add your token image in Assets

```
https://github.com/plasmadlt/token-list/tree/master/assets 
```

### Image Requirements
File extension: png. Uppercase PNG is considered invalid.
File name：<contract_address>.png, all lowercase.
Dimension: 256 x 256 pixels or 512 x 512 pixels.
Background: preferably transparent (should fit dark mode as well; deny logos need light border/background).
File size: maximum 100kB.  Tip: optimize image size, e.g. using simple drag-and-drop online service tinypng.

## 3.1 Add your token data in plasma-finance-market-list.json

Address contract must be ***checksummed***
Check or convert your address in checksummed address here: https://web3-tools.netlify.app/

```
  {
    "address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
    "chainId": 1,
    "name": "Plasma Finance",
    "symbol": "PPAY",
    "coingeckoId": "plasma-finance",
    "decimals": 18,
    "logoURI": "https://raw.githubusercontent.com/plasmadlt/token-list/master/assets/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png",
    "tags": [
      "defi",
      "alliance",
      "dex"
    ]
  },
```

## 3.2 Tags

You can add any tag from the next list to your token. Use no more than 3 tags.

```
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

To have all information (like circulation supply, trading volume, total supply, web links) for your token page please add Coingecko_ID to your token scheme.
Go to Coingecko, find your token and copy your token name from token's web page address. Paste this name to your token scheme.

## 4. Make a new PR (pull request)

```
git add -A
git commit -m “Add <token_name>”
git push origin <branch_name>
```
