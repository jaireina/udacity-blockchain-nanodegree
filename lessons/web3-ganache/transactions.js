const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx').Transaction;
const web3 = new Web3('http://127.0.0.1:7545');

const sending = {
  address: "0x9813CEA533B147DC792AaEEE9CafC0dA86AE4F71",
  key: Buffer.from("86ff4ca54c30230a3a10163b071f2f0f692c8957a058db0bfc4933e4709b9cdf", 'utf8').toString('hex'),
}

const receiving = {
  address: "0x2759641a39802ecC05ebaaE64BeCbE8f0EA1C0A6",
  key: Buffer.from("9e2a9258cba2c8abecc7a9af0195b5e926e7100d9513cdd397648e3e1f1f73eb", 'utf8').toString('hex')
}

async function printBalance(acc) {
  console.log(await web3.eth.getBalance(acc));
}

// get all acccounts and their balances
(async function() {
  await printBalance(sending.address);
  await printBalance(receiving.address);
  console.log('hex', Buffer.from('mierda', 'hex').toString('hex'));
  console.log(Buffer.from("9e2a9258cba2c8abecc7a9af0195b5e926e7100d9513cdd397648e3e1f1f73eb", 'utf8').toString('hex'))
  // Create transaction
  const rawTransaction = {
    nonce: 0,
    to: "0x2759641a39802ecC05ebaaE64BeCbE8f0EA1C0A6",
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 100,
    data: ""
  };

  // Sign the transaction
  const transaction = new EthereumTransaction(rawTransaction);
  // transaction.sign(sending.key);

  // // Send the serialized transaction
  // const serializedTransaction = transaction.serialize();
  // await web3.eth.sendSignedTransaction(serializedTransaction);

  // await printBalance(sending.address);
  // await printBalance(receiving.address);
})();

