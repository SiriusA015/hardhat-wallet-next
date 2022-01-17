pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

import './Election.sol';

contract MainContract {

    uint public electionID = 0;
    mapping (uint => address) public Elections;

    function createElection (string[] memory _nd, uint[] memory _se, string[] memory _candidates) public returns(address) {
        Election election = new Election(_nd, _se, _candidates);
        electionID++;
        Elections[electionID] = address(election);
        return Elections[electionID];
    }

}