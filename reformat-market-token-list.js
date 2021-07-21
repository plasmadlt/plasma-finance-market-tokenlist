const fs = require('fs');

const file = fs.readFileSync('./plasma-finance-market-list.json', 'utf-8');
const list = JSON.parse(file);

const formattedList = list.reduce((acc, item) => {
  const tokenInfo = acc.find(i => i.name === item.name && i.symbol === item.symbol);
  if (tokenInfo) {
    tokenInfo.addresses.push({
      chainId: item.chainId,
      address: item.address,
    })
  } else {
    acc.push({
      name: item.name,
      description: item.description,
      symbol: item.symbol,
      coingeckoId: item.coingeckoId,
      coinmarketcapId: item.coinmarketcapId,
      decimals: item.decimals,
      logoURI: item.logoURI,
      tokenomicsData: item.tokenomicsData,
      tags: item.tags,
      links: item.links,
      addresses: [
        {
          chainId: item.chainId,
          address: item.address,
        }
      ]
    });
  }

  return acc;
}, []);

fs.writeFileSync('./plasma-finance-market-list-dev.json', JSON.stringify(formattedList));
// console.log(formattedList)
