const { expect, assert } = require('chai');

const RentHouse = artifacts.require('./RentHouse.sol');

require('chai').use(require('chai-as-promised')).should();

contract('RentHouse', (accounts) => {
  let contract;

  before(async () => {
    contract = await RentHouse.deployed();
  });

  it('deplous succesfully', async () => {
    const { address } = contract;
    assert.notEqual(address, '');
    assert.notEqual(address, 0x0);
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it('has a name', async () => {
    const name = await contract.name();
    assert.equal(name, 'RENTHOUSE');
  });

  it('has a symbol', async () => {
    const symbol = await contract.symbol();
    assert.equal(symbol, 'RHS');
  });
});
