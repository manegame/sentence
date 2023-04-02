// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { console } from "forge-std/console.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { ProposedEntry } from "../tables/ProposedEntry.sol";

bytes32 constant SingletonKey = bytes32(uint256(0x060D));

contract ProposeEntrySystem is System {
  function proposeEntry(string memory entry) public returns (string memory) {
    bytes32 key = bytes32(abi.encodePacked(block.number, msg.sender, gasleft())); // creating a random key for the record

    address owner = _msgSender(); // IMPORTANT: always refer to the msg.sender using the _msgSender() function

    ProposedEntry.set(key, block.number, block.timestamp, owner, entry); // creating our record!

    return entry;
  }
}
