// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposedEntry, ProposedEntryData } from "../tables/ProposedEntry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {

  function includesAddress (address[] memory arr, address val) public pure returns (bool) {
      for (uint i = 0; i < arr.length; i++) {
          if (arr[i] == val) {
              return true;
          }
      }
      return false;
  }

  function proposeEntry(string memory entry) public returns (string memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function

    bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record

    address[] memory votes;

    ProposedEntry.set(
      key,
      block.number,
      block.number,
      block.number,
      block.number,
      block.timestamp,
      owner,
      entry,
      votes
    ); // creating our record!

    return entry;
  }

  function vote(bytes32 proposedEntryKey) public returns (bool) {
      address sender = _msgSender();

      address[] memory votes = ProposedEntry.getVotes(proposedEntryKey);

      // IS sender in votes?
      if (includesAddress(votes, sender)) return false;

      ProposedEntry.pushVotes(proposedEntryKey, sender);
      return true;
  }
}

// struct ProposedEntryData {
    // bytes32 key,
    // uint256 id,
    // uint256 storyId,
    // uint256 parentId,
    // uint256 proposedOnBlock,
    // uint256 timestamp,
    // address proposer,
    // string memory sentence
// }

