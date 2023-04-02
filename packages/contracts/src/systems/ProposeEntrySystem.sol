// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposedEntry, ProposedEntryData } from "../tables/ProposedEntry.sol";
import { IWorld } from "../world/IWorld.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";
import { ParentEntryTableId, ParentEntry } from "../tables/ParentEntry.sol";
 
bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {
  function proposeEntry(string memory entry) public returns (string memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record

  //eventually need to get parent key from frontend.
    bytes32 parentKey = key;
    // check if valid proposal period


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

    ParentEntry.set(
      key,
      parentKey
    );

    return entry;
  }

  function vote(bytes32 proposedEntryKey) public returns (bool) {

    //check whether in a current valid voting period

      ProposedEntryData memory entry = ProposedEntry.get(proposedEntryKey);
      address[] memory votes = entry.votes;
      bytes32 parentKey = entry.parentKey;

      address sender = _msgSender();
      

      address worldAddress = _world();
      bool currentlyVoting = IWorld(worldAddress).getCurrentlyVoting(parentKey);

      if(currentlyVoting == false) return false;
      
      //check if already voted
      for (uint i=0; i < votes.length; i++) {
          if (sender == votes[i]) {
              return false;
          }
      }

      address[] memory newvotes = new address[](votes.length + 1);

      for (uint i=0; i < votes.length; i++) {
          newvotes[i] = votes[i];
      }

      newvotes[votes.length + 1] = sender;

      ProposedEntry.setVotes(proposedEntryKey, newvotes);

      return true;
  }

  
  function countVotes(bytes32 parentKey) public view returns (ProposedEntryData memory) {
   bytes32[] memory proposedEntries = getKeysWithValue(ParentEntryTableId, ParentEntry.encode(parentKey) );
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

