// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Entry } from "../tables/Entry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract FirstEntrySystem is System {
    function createStory() public {
        address proposer = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
        
        bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, proposer, gasleft()))); // creating a random key for the record
        address parentAddress = address(0);
        string memory sentence = "Imagine a nation based upon water...";

        Entry.set(key, parentAddress, proposer, sentence);
    }
}

