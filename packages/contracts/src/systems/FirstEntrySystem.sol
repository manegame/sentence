// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { Entry } from "../codegen/tables/Entry.sol";
import { Story } from "../codegen/tables/Story.sol";
import { ParentStoryTableId, ParentStory } from "../codegen/tables/ParentStory.sol";
import { IWorld } from "../codegen/world/IWorld.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));
uint256 constant proposalPeriod = 20;

contract FirstEntrySystem is System {
  function getRandomIndex(uint256 arrayLength) public view returns (uint256) {
    bytes32 blockHash = blockhash(block.number - 1);
    uint256 randomIndex = uint256(blockHash) % arrayLength;
    return randomIndex;
  }

  function createStory() public {
    // Return condition
    // Todo: Revert if a story already exists AND the voting period hasn't passed yet

    address proposer = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32 storyKey = bytes32(keccak256(abi.encodePacked(block.number, proposer, gasleft()))); // creating a random key for the record
    uint256 periodEndsBlock = block.number + proposalPeriod;

    // Create Story
    Story.set(storyKey, block.number, periodEndsBlock);
    // storyBeginnings = new string[](29);

    // Create first Entry of Story
    // TODO: Add more prompts
    string[29] memory storyBeginnings = [
      "The most vital thing in this world is money",
      "The most signifiant thing in this society is magic",
      "The most important thing in this group is secrets",
      "This culture is based upon angels",
      "The most essential thing in this group is angels",
      "The most important thing in this society is nature",
      "This civilization is solely reliant on the horizontal",
      "This group is built on money",
      "The most essential thing in this society is water",
      "The most important thing in this civilization is agriculture",
      "This culture is organised around mining",
      "The most valuable thing in this civilization is science",
      "This society is structured around the vertical",
      "The most valuable thing in this civilization is angels",
      "This group is organised around water",
      "The most vital thing in this society is nature",
      "This world is based upon hardness",
      "This civilization is determined by agriculture",
      "This group is based upon hardness",
      "The most valuable thing in this society is hardness",
      "The most vital thing in this culture is transparency",
      "This culture is organised around secrets",
      "The most essential thing in this group is softness",
      "The most vital thing in this world is mystery",
      "This society is based upon agriculture",
      "The most valuable thing in this group is espionage",
      "The most vital thing in this society is drama",
      "The most important thing in this group is angels",
      "This group is determined by drama"
    ];

    string memory sentence = storyBeginnings[getRandomIndex(29)];

    // Uh can we use storyKey here instead?
    bytes32 entryKey = bytes32(keccak256(abi.encodePacked(block.number, storyKey, proposer, gasleft()))); // creating a random key for the record
    bytes32 noParentKey = bytes32(keccak256(abi.encodePacked(address(0)))); // creating a random key for the record
    Entry.set(entryKey, noParentKey, proposer, block.number, sentence);

    // Create ParentStory Index
    ParentStory.set(entryKey, storyKey);
  }
}
