const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/5415e10f8c344be4b081ed970c3a835b"
);

function toDollars(wei) {
  return web3.utils.fromWei(wei) * 4500;
}

(async ()=>{
  const gasInWei = await web3.eth.getGasPrice();
  const currentBlockNumber = await web3.eth.getBlockNumber();
  const uncles = await web3.eth.getBlockUncleCount(currentBlockNumber);
  console.log('STATS');
  console.log(`Current block: ${currentBlockNumber}`);
  console.log(`Gas Price: $${toDollars(gasInWei)}`);
  console.log(`Uncles ${uncles}`);
  console.log(`Trx count: ${await web3.eth.getBlockTransactionCount(currentBlockNumber)}`);


})();