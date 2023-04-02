// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Entry } from "../tables/Entry.sol";
import { Story } from "../tables/Story.sol";
import { ParentStoryTableId, ParentStory } from "../tables/ParentStory.sol";
import { IWorld } from "../world/IWorld.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract FirstEntrySystem is System {
    function getRandomIndex(uint256 arrayLength) public view returns (uint256) {
        bytes32 blockHash = blockhash(block.number - 1);
        uint256 randomIndex = uint256(blockHash) % arrayLength;
        return randomIndex;
    }

    function createStory() public {
        address proposer = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
        bytes32 storyKey = bytes32(keccak256(abi.encodePacked(block.number, proposer, gasleft()))); // creating a random key for the record
        
        // Create Story
        Story.set(storyKey, false);
    
        // Create first Entry of Story
        // TODO: Add more prompts
        string[] memory storyBeginnings = new string[](5);
        storyBeginnings[0] = "The story so far: in the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move.";
        storyBeginnings[1] = "Mother died today. Or maybe, yesterday; I can't be sure.";
        storyBeginnings[2] = "Ships at a distance have every man's wish on board.";
        storyBeginnings[3] = "It was a bright cold day in April, and the clocks were striking thirteen.";
        storyBeginnings[4] = "Imagine a nation based upon water...";

        string memory sentence = storyBeginnings[getRandomIndex(5)];

        // Uh can we use storyKey here instead?
        bytes32 entryKey = bytes32(keccak256(abi.encodePacked(block.number, storyKey, proposer, gasleft()))); // creating a random key for the record
        Entry.set(entryKey, address(0), proposer, sentence);

        // Create ParentStory Index
        ParentStory.set(entryKey, storyKey);

        // Create First Proposal Window
        address worldAddress = _world();
        IWorld(worldAddress).setProposalTime(entryKey);
    }
}

