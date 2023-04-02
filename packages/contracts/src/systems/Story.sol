// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { Story, StoryData } from "../tables/Story.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract StorySystem is System {
  
  function setNewStory(bytes32 parentKey) public returns (bytes32) {
    bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record
    string memory prompt = "the most important thing to this society is water";

    Story.set(
      key,
      block.number,
      prompt
    ); // creating our record!

    return key;
  }
}
