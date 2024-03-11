// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposalPeriod } from "../codegen/tables/ProposalPeriod.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));
uint256 constant proposalPeriod = 600;

contract TimingSystem is System {
  
  function setProposalTime(bytes32 parentKey) public returns (uint256) {
    uint256 periodEndsBlock = block.number + proposalPeriod;

    // console.log(parentKey);

    ProposalPeriod.set(
      parentKey,
      periodEndsBlock
    );

    return periodEndsBlock;
  }

  function getCurrentlyActive(bytes32 parentKey) public view returns (bool) {
    uint256 currentBlock = block.number;
    uint256 proposalPeriodEnds = ProposalPeriod.get(parentKey);

    // console.log("checking currently active", proposalPeriodEnds, currentBlock);
    if (currentBlock < proposalPeriodEnds){
      // console.log("currently active");
      return true;
    }
    else {
      // console.log('not currently active');
      return false;
    }
    //get the block number of the entity being voted/proposed on
    //return whether we are in the voting period for that entity
  }


  // function setVotingTime(bytes32 parentKey) public returns (uint256) {
  //   //bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record

  // uint256 periodEndsBlock = block.number + votingPeriod;

  //   NewVotePeriod.set(
  //     parentKey,
  //     block.number,
  //     periodEndsBlock
  //   ); // creating our record!

  //   return periodEndsBlock;
  // }

  // function getCurrentlyVoting(bytes32 parentKey) public view returns (bool) {
  //   uint256 currentBlock = block.number;
  //   NewVotePeriodData memory votingPeriodData = NewVotePeriod.get(parentKey);
  //   if (currentBlock < votingPeriodData.periodEndsBlock && currentBlock > votingPeriodData.periodStartsBlock){
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  //   //get the block number of the entity being voted/proposed on
  //   //return whether we are in the voting period for that entity
  // }

  // function getCurrentlyProposing(bytes32 parentKey) public view returns (bool) {
  //   uint256 currentBlock = block.number;
  //   NewEntryPeriodData memory entryPeriodData = NewEntryPeriod.get(parentKey);
  //   if (currentBlock < entryPeriodData.periodEndsBlock && currentBlock > entryPeriodData.periodStartsBlock){
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  //   //get the block number of the entity being voted/proposed on
  //   //return whether we are in the voting period for that entity
  // }
}
