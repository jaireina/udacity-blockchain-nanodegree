pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract FomoToken is StandardToken {
  string public name = "Fear of missing out token";
  string public symbol = "FOMO";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 120000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}