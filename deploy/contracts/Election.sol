pragma solidity >=0.7.0 <0.9.0;

pragma experimental ABIEncoderV2;

contract Election {

    string public name;
    string public description;
    uint public sdate;
    uint public edate;

    enum Status {active, pending, finished}
    Status status;

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    uint public candidatesCount;

    constructor (string[] memory _nd, uint[] memory _se, string[] memory _candidates) public {
        name = _nd[0];
        description = _nd[1];
        sdate = _se[0];
        edate = _se[1];
        if(block.timestamp < _se[0]) {
            status = Status.pending;
        } else {
            status = Status.active;
        }
        for(uint i = 0; i < _candidates.length; i++) {
            addCandidate(_candidates[i]);
        }
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidate) public {
        require(!voters[msg.sender], "Voter has already Voted!");
        require(_candidate <= candidatesCount && _candidate >= 1, "Invalid candidate to Vote!");
        voters[msg.sender] = true;
        candidates[_candidate].voteCount++;
    }

}