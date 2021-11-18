const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx');
const web3 = new Web3('https://ropsten.infura.io/v3/5415e10f8c344be4b081ed970c3a835b');

const sending = {
  address: "0x35F8edFbd4d6F0e53c463BabA27C48FF814665dd",
  // TODO: get correct private key from metamask
  key: Buffer.from("3afb8addf010008498c56d8bf66a803ffbed6bd1e6acaa4246256edc3c37d298", 'hex'),
}

const receiving = {
  // Ropstein faucet
  address: "0xcDA0D6adCD0f1CCeA6795F9b1F23a27ae643FE7C",
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
  console.log('nonce', nonce);
  // Create transaction
  const rawTransaction = {
    nonce: nonce+2,
    to: receiving.address,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 100,
    data: "0x"
  };

  // Sign the transaction
  const transaction = new EthereumTransaction(rawTransaction, {chain: 'ropsten'});
  transaction.sign(sending.key);

  // // Send the serialized transaction
  const serializedTransaction = transaction.serialize();
  // TODO: check why this is hanging here
  console.log('receipt', await web3.eth.sendSignedTransaction(`0x${serializedTransaction.toString('hex')}`));

  // await printBalance(sending.address);
  // await printBalance(receiving.address);
})();

