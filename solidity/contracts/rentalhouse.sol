// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RentHouse is ERC721 {
  string[] public houses;
  mapping(string => bool) _houseExist;

  constructor() ERC721("RENTHOUSE", "RHS") public {
  }

  // TOKEN GENERATOR with adress as string and more data
  function mint(string memory _house) public {
    // push the new string into the array containing all the departaments
    houses.push(_house);
    uint _id = houses.length;
    // create a new unique token on the contract with the ERC721 MINT function
    _mint(msg.sender, _id);
    _houseExist[_house] = true;
  }
}
