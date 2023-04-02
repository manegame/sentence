// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Entry } from "../tables/Entry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract FirstEntrySystem is System {
    function getRandomIndex(uint256 arrayLength) public view returns (uint256) {
        bytes32 blockHash = blockhash(block.number - 1);
        uint256 randomIndex = uint256(blockHash) % arrayLength;
        return randomIndex;
    }


    function createStory() public {
        address proposer = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
        
        bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, proposer, gasleft()))); // creating a random key for the record
        address parentAddress = address(0);

        // TODO: Add more prompts
        string[] memory storyBeginnings = new string[](5);
        storyBeginnings[0] = "The story so far: in the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move.";
        storyBeginnings[1] = "Mother died today. Or maybe, yesterday; I can't be sure.";
        storyBeginnings[2] = "Ships at a distance have every man's wish on board.";
        storyBeginnings[3] = "It was a bright cold day in April, and the clocks were striking thirteen.";
        storyBeginnings[4] = "Imagine a nation based upon water...";


        string memory sentence = storyBeginnings[getRandomIndex(5)];

        Entry.set(key, parentAddress, proposer, sentence);
    }
}

