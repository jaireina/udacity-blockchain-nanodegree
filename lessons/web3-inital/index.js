const { contractAddress, abi } = require("./contracts/tether");

const Web3 = require("web3");
const infuraUrl =
  "https://mainnet.infura.io/v3/5415e10f8c344be4b081ed970c3a835b";

const web3 = new Web3(infuraUrl);

async function getBalance(acc) {
  return await web3.eth.getBalance(acc);
}

const eoa = "0x096e5695a827ea3052914ee9c7aa005373071dbb";

(async function () {
  let balance = await getBalance(eoa);
  console.log(balance);

  const contract = new web3.eth.Contract(abi, contractAddress);
  const supply = await contract.methods.totalSupply().call();
  console.log(`supply ${supply}`);

  const name = await contract.methods.name().call();
  console.log(`Name ${name}`);
})();
