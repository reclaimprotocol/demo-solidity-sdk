// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./lib/Reclaim.sol";

contract Attestor {
    address public reclaimAddress;

    constructor(address _reclaimAddress){
        reclaimAddress = _reclaimAddress;
    }

    function verifyProof(Reclaim.Proof memory proof) public view{
        Reclaim(reclaimAddress).verifyProof(proof);
    }
}