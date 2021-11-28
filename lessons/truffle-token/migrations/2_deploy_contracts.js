var FomoToken = artifacts.require('FomoToken');

module.exports = function(deployer) {
  deployer.deploy(FomoToken);
}