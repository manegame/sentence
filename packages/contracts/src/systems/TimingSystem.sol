// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { NewEntryPeriod, NewEntryPeriodData } from "../tables/NewEntryPeriod.sol";
import { NewVotePeriod, NewVotePeriodData } from "../tables/NewVotePeriod.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract TimingSystem is System {
  uint256 proposalPeriod = 50;
  uint256 votingPeriod = 40;

  
  function setProposalTime(bytes32 parentKey) public returns (uint256) {
    //bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record

    uint256 periodEndsBlock = block.number + proposalPeriod;

    NewEntryPeriod.set(
      parentKey,
      block.number,
      periodEndsBlock
    ); // creating our record!

    return periodEndsBlock;
  }

  function setVotingTime(bytes32 parentKey) public returns (uint256) {
    //bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record

  uint256 periodEndsBlock = block.number + votingPeriod;

    NewVotePeriod.set(
      parentKey,
      block.number,
      periodEndsBlock
    ); // creating our record!

    return periodEndsBlock;
  }

  function getCurrentlyVoting(bytes32 parentKey) public view returns (bool) {
    uint256 currentBlock = block.number;
    NewVotePeriodData memory votingPeriodData = NewVotePeriod.get(parentKey);
    if (currentBlock < votingPeriodData.periodEndsBlock && currentBlock > votingPeriodData.periodStartsBlock){
      return true;
    }
    else {
      return false;
    }
    //get the block number of the entity being voted/proposed on
    //return whether we are in the voting period for that entity
  }

  function getCurrentlyProposing(bytes32 parentKey) public view returns (bool) {
    uint256 currentBlock = block.number;
    NewEntryPeriodData memory entryPeriodData = NewEntryPeriod.get(parentKey);
    if (currentBlock < entryPeriodData.periodEndsBlock && currentBlock > entryPeriodData.periodStartsBlock){
      return true;
    }
    else {
      return false;
    }
    //get the block number of the entity being voted/proposed on
    //return whether we are in the voting period for that entity
  }
}
