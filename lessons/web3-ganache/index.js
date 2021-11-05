const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

// get all acccounts and their balances
(async function() {
  const accs = await web3.eth.getAccounts();
  for(let acc of accs) {
    const balance = await web3.eth.getBalance(acc);
    console.log(`Acc: ${acc} => ${balance}`);
  }
})();