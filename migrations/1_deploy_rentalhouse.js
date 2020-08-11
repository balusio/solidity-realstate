const RentHouse = artifacts.require("RentHouse");

module.exports = (deployer) => {
  deployer.deploy(RentHouse);
};
