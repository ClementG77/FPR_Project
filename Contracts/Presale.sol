// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Presale is Ownable {
    using SafeERC20 for ERC20;
    using Address for address;
//Change values
    uint public constant MAX_SOLD = 100000 ;
    uint public constant PRICE = 0.005 ether ;
    uint public constant MIN_SALE_PER_ACCOUNT = 1 ;
    uint public constant MAX_SALE_PER_ACCOUNT = 150 ;
    address public owners;
    ERC20 Token;

    uint public sold;
    address public LCRT;
    bool publicSale;
    mapping( address => uint256 ) public invested;

    constructor(address _token) {
        Token = ERC20(_token);
        owners = msg.sender;
        sold = 0;
 
    }

    function buyLCRT(uint256 amount) public payable  {
        require(sold < MAX_SOLD, "sold out");
        require(sold + amount < MAX_SOLD, "not enough remaining");
        require(amount <= MAX_SALE_PER_ACCOUNT, "amount exceeds buyable amount");
        require(amount + invested[msg.sender] >= MIN_SALE_PER_ACCOUNT, "amount is not sufficient");
        require(publicSale == true, "sale is not active");
        require(msg.value >= PRICE * amount, "Incorrect price received");
        Token.safeTransferFrom(address(this), msg.sender, amount );
        invested[msg.sender] += amount;
        sold += amount;
    }


    // token withdrawal by owners
    function withdraw(address _token) public {
        require(msg.sender == owners, "not owners");
        uint b = IERC20(_token).balanceOf(address(this));
        IERC20(_token).transfer(owners,b);
    }

    // manual activation of public presales
    function activatePublicSale() public {
        require(msg.sender == owners, "not owners");
        publicSale = true;
    }
    // manual deactivation of public presales
    function deactivatePublicSale() public {
        require(msg.sender == owners, "not owners");
        publicSale = false;
    }

    function setSold(uint _soldAmount) public {
        require(msg.sender == owners, "not owners");
        sold = _soldAmount;
    }

}