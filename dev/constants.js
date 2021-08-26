const Web3 = require('web3');
const path = require('path');
const multicallABI = require('./abis/multicall.json');

const root = process.cwd().replace('/dev', '');
require('dotenv').config({path: path.resolve(root, '.env')});

/**
 * Supported chain ids
 * MAINNET = 1;
 * ROPSTEN = 3;
 * RINKEBY = 4;
 * GÖRLI = 5;
 * KOVAN = 42;
 * MATIC = 137;
 * BSC = 56;
 * BSC_TEST = 97;
 */
const CHAIN_IDS = [1, 3, 4, 5, 42, 137, 56, 97];

/**
 * Web3 providers for each chain id
 * @type {{}}
 */
const WEB3_PROVIDERS = CHAIN_IDS.reduce((acc, chainId) => {
  const url = process.env[`RPC_NETWORK_URL_${chainId}`];
  if (url) {
    acc[chainId] = new Web3(url);
  }

  return acc;
}, {});

/**
 * Multicall contracts addresses
 * @type {{[p: string]: string, [p: number]: string, "1": string, "56": string, "3": string, "4": string, "5": string, "137": string, "42": string, "97": string}}
 */
const MULTICALL_ADDRESSES = {
  [CHAIN_IDS[0]]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [CHAIN_IDS[1]]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [CHAIN_IDS[2]]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [CHAIN_IDS[3]]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [CHAIN_IDS[4]]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [CHAIN_IDS[5]]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [CHAIN_IDS[6]]: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
  [CHAIN_IDS[7]]: '0xae11c5b5f29a6a25e955f0cb8ddcc416f522af5c',
};

/**
 * To create multicall contracts instances
 * @type {{}}
 */
const MULTICALL_CONTRACTS = CHAIN_IDS.reduce((acc, chainId) => {
  if (WEB3_PROVIDERS[chainId] && MULTICALL_ADDRESSES[chainId]) {
    acc[chainId] = new WEB3_PROVIDERS[chainId].eth.Contract(multicallABI, MULTICALL_ADDRESSES[chainId]);
  }
  return acc;
}, {});

exports.CHAIN_IDS = CHAIN_IDS;
exports.WEB3_PROVIDERS = WEB3_PROVIDERS;
exports.MULTICALL_ADDRESSES = MULTICALL_ADDRESSES;
exports.MULTICALL_CONTRACTS = MULTICALL_CONTRACTS;


