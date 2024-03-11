// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { PackedCounter } from "@latticexyz/store/src/PackedCounter.sol";
import { Entry } from "../codegen/tables/Entry.sol";
import { ProposedEntry, ProposedEntryData } from "../codegen/tables/ProposedEntry.sol";
import { IWorld } from "../codegen/world/IWorld.sol";
import { getKeysWithValue } from "@latticexyz/world-modules/src/modules/keyswithvalue/getKeysWithValue.sol";
import { ParentEntryTableId, ParentEntry } from "../codegen/tables/ParentEntry.sol";
 
bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {
  function proposeEntry(bytes32 parentKey, string memory entry) public returns (string memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record

    //eventually need to get parent key from frontend.
    //  = key;
    // check if valid proposal period
    address worldAddress = _world();
    bool currentlyProposing = IWorld(worldAddress).mud_TimingSystem_getCurrentlyActive(parentKey);
    // console.log('currentlyProposing is', currentlyProposing);

    // if(currentlyProposing == false) revert("outside proposal period");

    address[] memory votes;

    ProposedEntry.set(
      key,
      block.number,
      parentKey,
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

      address[] memory votes = ProposedEntry.getVotes(proposedEntryKey);
      bytes32 parentKey = ProposedEntry.getParentKey(proposedEntryKey);

      address sender = _msgSender();

      address worldAddress = _world();
      bool currentlyVoting = IWorld(worldAddress).mud_TimingSystem_getCurrentlyActive(parentKey);

      // if(currentlyVoting == false) revert("voting period for this block ended");
      
     // check if already voted
      for (uint i=0; i < votes.length; i++) {
          if (sender == votes[i]) {
            revert("already voted");
          }
      }

      // We good
      ProposedEntry.pushVotes(proposedEntryKey, sender);
      return true;
  }

  
  function countVotes(bytes32 parentKey) public returns (ProposedEntryData memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function

    (bytes memory staticData, PackedCounter encodedLengths, bytes memory dynamicData) = ParentEntry.encode(parentKey);
    bytes32[] memory proposedEntries = getKeysWithValue(ParentEntryTableId, staticData, encodedLengths, dynamicData);

    // console.log('counting votes');
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

    // console.log('winning proposal is', winningProposal.sentence);
    // Entry.set(entryKey, address(0), proposer, sentence);
  }
}