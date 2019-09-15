pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract GLDToken777 is ERC777 {
    constructor( uint256 initialSupply, address[] memory defaultOperators ) ERC777("Gold", "GLD", defaultOperators) public {
         _mint(msg.sender, msg.sender, initialSupply * 10 ** 18, "", "");
    }
}