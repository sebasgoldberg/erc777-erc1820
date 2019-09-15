try {
    require('openzeppelin-test-helpers/configure')({ web3 });
} catch (e) {
    console.error("ERROR: Failed openzeppelin-test-helpers configuration.")
}
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function(deployer, network, accounts) {
  const erc1820 = await singletons.ERC1820Registry(accounts[0]);
};
