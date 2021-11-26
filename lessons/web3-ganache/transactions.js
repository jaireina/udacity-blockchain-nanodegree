const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx');
const web3 = new Web3('http://127.0.0.1:7545');

const sending = {
  address: "0xF52c5CC8C01cec2Ebd1951B7520f634719313A2a",
  key: Buffer.from("8baf1a151feda13031373cf1ea360da44e01a4ab6a47a1ae81c16ad0e86b56ae", 'hex'),
}

const receiving = {
  address: "0x334af99d21a54E12a0f684B60398E531a3BC57db",
  key: Buffer.from("6847926a226153a37be52f130341ce193d5779ff9fc1906571bae55389e7406d", 'hex')
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
    value: 1,
    data: ""
  };

  // Sign the transaction
  const transaction = new EthereumTransaction(rawTransaction);
  transaction.sign(sending.key);

  // // Send the serialized transaction
  const serializedTransaction = transaction.serialize();
  console.log("result", await web3.eth.sendSignedTransaction(serializedTransaction));

  await printBalance(sending.address);
  await printBalance(receiving.address);
})();

