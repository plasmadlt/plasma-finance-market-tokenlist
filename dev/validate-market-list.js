const fs = require('fs');
const { Spinner } = require('cli-spinner');
const { getTokenInfo } = require('./get-token-info');
const chalk = require('chalk');

const listFileName = 'plasma-finance-market-list-new';
const listRaw = fs.readFileSync(`${__dirname}/../${listFileName}.json`, 'utf-8');
const list = JSON.parse(listRaw);

function processListItem(listItem) {
  const promises = listItem.tokens.map(token => {
    return getTokenInfo(+token.chainId, token.address).catch(error => {
      console.log(chalk.red(`\nHandle token error: chainId=${token.chainId}; address=${token.address};\n${error.message}`));
      return Promise.resolve(null);
    })
  });

  return Promise.all(promises).then(tokens => {
    const oldTokens = listItem.tokens;
    listItem.tokens = [];

    tokens.forEach(token => {
      if (!token) {
        console.log(chalk.yellow(`\nFIX: Remove invalid token, from ${listItem.name};`));
        return;
      }
      const oldToken = oldTokens.find(i => i.address.toLowerCase() === token.address.toLowerCase() && Number(i.chainId) === token.chainId);
      if (oldToken.chainId !== token.chainId) {
        console.log(chalk.yellow(`\nFIX: Convert token chainId to number, address=${token.address}, chainId=${token.chainId};`));
      }

      if (oldToken.address !== token.address) {
        console.log(chalk.yellow(`\nFIX: Token address was checksummed, address=${token.address}, chainId=${token.chainId};`));
      }

      if (oldToken.decimals !== token.decimals) {
        console.log(chalk.yellow(`\nFIX: Token decimals was updated, ${oldToken.decimals}=>${token.decimals}, address=${token.address}, chainId=${token.chainId};`));
      }

      listItem.tokens.push(token);
    });
    return listItem;
  });
}

function processList(unhandledList, callback, spinner, handledList = []) {
  const item = unhandledList.pop();
  if (!item) {
    spinner.stop(true);
    callback(handledList);
  }

  processListItem(item).then(processedItem => {
    handledList.push(processedItem);
    spinner.setSpinnerTitle(`${handledList.length}/${list.length} tokens processed... %s`);

    processList(unhandledList, callback, spinner, handledList);
  });
}

async function run() {
  const spinner = Spinner(`0/${list.length} tokens processed... %s`);
  spinner.start();

  return new Promise(resolve => {
    processList(list.concat().reverse(), resolve, spinner);
  })
}

run()
  .then(handledList => {
    fs.writeFileSync(`${__dirname}/../${listFileName}.back.json`, listRaw);
    fs.writeFileSync(`${__dirname}/../${listFileName}.json`, JSON.stringify(handledList, undefined, ' '));

    console.log(chalk.green('Finished'));
    process.exit(0);
  })
  .then(() => process.exit(0));
