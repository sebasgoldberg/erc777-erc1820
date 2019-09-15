var GLDToken777 = artifacts.require("./GLDToken777.sol");

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(GLDToken777, 1000, []);
};

