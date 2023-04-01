// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { SentencesTable } from "../tables/SentencesTable.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract WriteSystem is System {
  // function getCurrentTimestamp() public view returns (uint256) {
  //   return block.timestamp;
  // }

  function append() public returns (string memory) {
    bytes32 key = SingletonKey;
    string memory sentence = SentencesTable.getSentence(key);
    string memory added = string.concat(sentence, "a");
    
    SentencesTable.setSentence(key, added);
    
    return added;
  }

  function addEntry(string memory sentence) public returns (string memory) {
    bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    SentencesTable.set(key, owner, block.timestamp, sentence); // creating our record!
    return sentence;
  }
}
