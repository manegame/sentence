// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { PackedCounter } from "@latticexyz/store/src/PackedCounter.sol";
import { Entry } from "../codegen/tables/Entry.sol";
import { Story } from "../codegen/tables/Story.sol";
import { ProposedEntry, ProposedEntryData } from "../codegen/tables/ProposedEntry.sol";
import { IWorld } from "../codegen/world/IWorld.sol";
import { getKeysWithValue } from "@latticexyz/world-modules/src/modules/keyswithvalue/getKeysWithValue.sol";
import { ParentEntryTableId, ParentEntry } from "../codegen/tables/ParentEntry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));
uint256 constant proposalPeriod = 20;
uint256 constant votingPeriod = 20;

contract ProposalsSystem is System {
  function proposeEntry(bytes32 parentKey, string memory entry) public returns (string memory) {
    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function
    bytes32 key = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record
    address[] memory votes;

    ProposedEntry.set(key, block.number, parentKey, block.timestamp, owner, entry, votes); // creating our record!

    ParentEntry.set(key, parentKey);

    return entry;
  }

  // Vote on an entry
  function vote(bytes32 proposedEntryKey) public returns (bool) {
    //check whether in a current valid voting period

    address[] memory votes = ProposedEntry.getVotes(proposedEntryKey);
    bytes32 parentKey = ProposedEntry.getParentKey(proposedEntryKey);

    uint256 ends = Story.getPeriodEndsBlock(parentKey);

    if (ends > block.number) {
      revert("Not ready to vote. Wait until voting period arrives");
    }

    if (block.number > ends + votingPeriod) {
      revert("Voting is over");
    }

    address sender = _msgSender();

    // check if already voted
    for (uint i = 0; i < votes.length; i++) {
      if (sender == votes[i]) {
        revert("already voted");
      }
    }

    // We good
    ProposedEntry.pushVotes(proposedEntryKey, sender);
    return true;
  }

  /**
   * Count votes according to a simple algo
   * Most votes wins
   * If most votes is equal and not 0, first proposer wins
   *
   * Revert if periodEndsBlock has not passed yet
   * If there is a winning entry, add it to the story
   *
   * If there is no winning block, end the story and start a new one
   */
  function countVotes(bytes32 parentKey) public {
    uint256 ends = Story.getPeriodEndsBlock(parentKey);

    if (ends > block.number) {
      revert("The story is active");
    }

    if (ends + votingPeriod > block.number) {
      revert("The voting period is active");
    }

    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function

    (bytes memory staticData, PackedCounter encodedLengths, bytes memory dynamicData) = ParentEntry.encode(parentKey);
    bytes32[] memory proposedEntries = getKeysWithValue(ParentEntryTableId, staticData, encodedLengths, dynamicData);

    uint maxVotes = 0;
    ProposedEntryData memory winningProposal;

    for (uint i = 0; i < proposedEntries.length; i++) {
      ProposedEntryData memory proposal = ProposedEntry.get(proposedEntries[i]);
      uint votes = proposal.votes.length;

      if (proposal.proposedOnBlock > ends - proposalPeriod && proposal.proposedOnBlock < ends) {
        if (votes > maxVotes) {
          maxVotes = votes;
          winningProposal = proposal;
        }
        if (votes == maxVotes && proposal.proposedOnBlock < winningProposal.proposedOnBlock) {
          winningProposal = proposal;
        }
      }
    }

    if (maxVotes == 0) {
      // Wrap up the story and start a new one
      address worldAddress = _world();
      IWorld(worldAddress).mud_FirstEntrySystem_createStory();
    } else {
      bytes32 entryKey = bytes32(keccak256(abi.encodePacked(block.number, owner, gasleft()))); // creating a random key for the record
      Entry.set(entryKey, winningProposal.parentKey, owner, block.number, winningProposal.sentence);
      // Update voting on story
      Story.setPeriodEndsBlock(parentKey, block.number + votingPeriod);
    }
  }
}
