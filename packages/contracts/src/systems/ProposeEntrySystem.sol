// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { Entry } from "../tables/Entry.sol";
import { ProposedEntry, ProposedEntryData } from "../tables/ProposedEntry.sol";
import { IWorld } from "../world/IWorld.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";
import { ParentEntryTableId, ParentEntry } from "../tables/ParentEntry.sol";
 
bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {
  function proposeEntry(bytes32 parentKey, string memory entry) public returns (string memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record

  //eventually need to get parent key from frontend.
    //  = key;
    // check if valid proposal period
      address worldAddress = _world();
      bool currentlyProposing = IWorld(worldAddress).getCurrentlyActive(parentKey);

      if(currentlyProposing == false) return "did not work";

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
      // address worldAddress = _world();
      // address sender = _msgSender();
      // ProposedEntryData memory entry = ProposedEntry.get(proposedEntryKey);

      //check whether in a current valid voting period

      // ProposedEntryData memory entry = ProposedEntry.get(proposedEntryKey);
      // address[] memory votes = entry.votes;
      // bytes32 parentKey = entry.parentKey;

      address sender = _msgSender();
      

      // address worldAddress = _world();
      // bool currentlyVoting = IWorld(worldAddress).getCurrentlyActive(parentKey);

      // if(currentlyVoting == false) return false;
      
      //check if already voted
      // ProposedEntry.getVotes()
      // for (uint i=0; i < votes.length; i++) {
      //     if (sender == votes[i]) {
      //         return false;
      //     }
      // }

      // address[] memory newvotes = new address[](votes.length + 1);

      // for (uint i=0; i < votes.length; i++) {
      //     newvotes[i] = votes[i];
      // }

      // newvotes[votes.length + 1] = sender;

      // ProposedEntry.pushVotes(proposedEntryKey, sender);

      // We good
      ProposedEntry.pushVotes(proposedEntryKey, sender);
      return true;
  }

  
  function countVotes(bytes32 parentKey) public returns (ProposedEntryData memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32[] memory proposedEntries = getKeysWithValue(ParentEntryTableId, ParentEntry.encode(parentKey));

    uint maxVotes = 0;
    ProposedEntryData memory winningProposal;


    for (uint i=0; i < proposedEntries.length; i++) {
      ProposedEntryData memory proposal = ProposedEntry.get(proposedEntries[i]);
      uint votes = proposal.votes.length;

      if (votes > maxVotes) {
        maxVotes = votes;
        winningProposal = proposal;
      }
    }

    bytes32 entryKey = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record
    Entry.set(entryKey, winningProposal.parentKey, owner, winningProposal.sentence);


    // Entry.set(entryKey, address(0), proposer, sentence);
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

