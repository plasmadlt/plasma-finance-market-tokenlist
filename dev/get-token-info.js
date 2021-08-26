const { MULTICALL_CONTRACTS, WEB3_PROVIDERS } = require('./constants');
const erc20ABI = require('./abis/erc20.json');

async function getTokenInfo(chainId, address) {
  if (!MULTICALL_CONTRACTS[chainId] || !WEB3_PROVIDERS[chainId]) {
    throw new Error(`Unsupported chainId ${chainId}`);
  }

  const web3 = WEB3_PROVIDERS[chainId];
  address = web3.utils.toChecksumAddress(address.toLowerCase());
  const multicall = MULTICALL_CONTRACTS[chainId];
  const token = new web3.eth.Contract(erc20ABI, address);

  const param = [
    [address, token.methods.name().encodeABI()],
    [address, token.methods.symbol().encodeABI()],
    [address, token.methods.decimals().encodeABI()],
  ];

  return multicall.methods.aggregate(param).call().then(result => {
    let name;
    try {
      name = web3.eth.abi.decodeParameter('string', result.returnData[0]);
    } catch (e) {}
    if (!name) {
      name = web3.utils.hexToUtf8(web3.eth.abi.decodeParameter('bytes32', result.returnData[0]));
    }

    let symbol;
    try {
      symbol = web3.eth.abi.decodeParameter('string', result.returnData[1]);
    } catch (e) {}
    if (!symbol) {
      symbol = web3.utils.hexToUtf8(web3.eth.abi.decodeParameter('bytes32', result.returnData[1]));
    }

    const decimals = +web3.eth.abi.decodeParameter('uint8', result.returnData[2]);

    return { chainId, address, name, symbol, decimals };
  });
}

exports.getTokenInfo = getTokenInfo;
