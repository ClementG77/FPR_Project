// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LaunchorToken is ERC20 {
    constructor() ERC20("Launchor token", "LCRT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // Balances for each account
mapping (address => uint256) private balances;

// Transfer the balance from owner's account to another account
function transfer(address _to, uint256 _value) public override returns (bool) {
  balances[msg.sender] -= _value;
  balances[_to] += _value;
  emit Transfer(msg.sender, _to, _value);
  return true;
}
    
}