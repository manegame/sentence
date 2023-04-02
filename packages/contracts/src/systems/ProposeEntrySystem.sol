// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposedEntry, ProposedEntryData } from "../tables/ProposedEntry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {
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

  function vote(bytes32 proposedEntryKey) public view returns (bool) {
      ProposedEntryData memory entry = ProposedEntry.get(proposedEntryKey);
      address[] memory votes = entry.votes;

      address sender = _msgSender();
      
      // bool hasAlreadyVoted = false;
          
      // for (uint i=0; i < votes.length; i++) {
      //     if (sender == votes[i]) {
      //         hasAlreadyVoted = true;
      //         return false;
      //     }
      // }

      address[] memory newvotes = new address[](votes.length + 1);

      for (uint i=0; i < votes.length; i++) {
          newvotes[i] = votes[i];
      }

      newvotes[votes.length + 1] = sender;

      return true;
  }
}
