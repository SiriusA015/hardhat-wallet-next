// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Register__ {
    mapping(address => bool) private wallet;
    uint256 public s_count = 0;

    function isRegister(address address_) public returns(bool isregister){
        isregister = wallet[address_];
    }

    function register() public {
        require(!wallet[msg.sender], "Already registered.");
        wallet[msg.sender] = true;
        s_count = s_count + 1;
    }
    function getCount() public view returns(uint256) { return s_count; }
}