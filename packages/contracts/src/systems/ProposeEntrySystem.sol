// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposedEntry, ProposedEntryData } from "../tables/ProposedEntry.sol";
import { IWorld } from "../world/IWorld.sol";

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

  //eventually need to get parent key from frontend.
    bytes32 parentKey = key;


    address[] memory votes;

    ProposedEntry.set(
      key,
      parentKey,
      block.number,
      block.timestamp,
      owner,
      entry,
      votes
    ); // creating our record!

    return entry;
  }

  function vote(bytes32 proposedEntryKey) public returns (bool) {
      address worldAddress = _world();
      address sender = _msgSender();
      ProposedEntryData memory entry = ProposedEntry.get(proposedEntryKey);

    //check whether in a current valid voting period
      address[] memory votes = ProposedEntry.getVotes(proposedEntryKey);
      bytes32 parentKey = entry.parentKey;
      
      bool currentlyVoting = IWorld(worldAddress).getCurrentlyVoting(parentKey);


      // IS sender in votes?
      if (includesAddress(votes, sender)) return false;
      // Are we currently in the voting period?
      if (currentlyVoting == false) return false;

      // We good
      ProposedEntry.pushVotes(proposedEntryKey, sender);
      return true;
  }


  function countVotes(bytes32 parentKey) public view returns (ProposedEntryData memory) {
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

