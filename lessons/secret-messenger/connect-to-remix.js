const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

(async () => {
  const count = await web3.eth.getTransactionCount('0xF52c5CC8C01cec2Ebd1951B7520f634719313A2a');
  console.log(count);
})();