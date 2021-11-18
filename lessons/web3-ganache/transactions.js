const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx');
const web3 = new Web3('http://127.0.0.1:7545');

const sending = {
  address: "0x76Ba2F248a31e34f6035F8e0889f4bFbE79a6C87",
  key: Buffer.from("9a21b417331903d1fd04010503cc217453bd01e6d623fc0e22c1040606b512d8", 'hex'),
}

const receiving = {
  address: "0x498540C4081e27f6c7cb9a68C9A6911Ee1dF8EEb",
  key: Buffer.from("1536da263caefd5279655e0cc3aead97ba58da95cbe0e676865f76c5b27c6b47", 'hex')
}

async function printBalance(acc) {
  console.log("balance", await web3.eth.getBalance(acc));
}

// get all acccounts and their balances
(async function() {
  await printBalance(sending.address);
  await printBalance(receiving.address);

  const nonce = await web3.eth.getTransactionCount(sending.address);

  // Create transaction
  const rawTransaction = {
    nonce,
    to: receiving.address,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 100,
    data: ""
  };

  // Sign the transaction
  const transaction = new EthereumTransaction(rawTransaction);
  transaction.sign(sending.key);

  // // Send the serialized transaction
  const serializedTransaction = transaction.serialize();
  await web3.eth.sendSignedTransaction(serializedTransaction);

  await printBalance(sending.address);
  await printBalance(receiving.address);
})();

