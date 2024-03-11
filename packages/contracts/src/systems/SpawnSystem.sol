// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { System } from "@latticexyz/world/src/System.sol";
import { Name, Counter } from "../codegen/index.sol";
import { LibUtils } from "../libraries/Libraries.sol";

contract SpawnSystem is System {
  function spawn(string memory _name) public returns (bytes32) {
    bytes32 playerEntity = LibUtils.addressToEntityKey(_msgSender());
    require(keccak256(abi.encodePacked(_name)) != keccak256(abi.encodePacked("")), "no name");

    Name.set(playerEntity, _name);
    Counter.set(playerEntity, 0);

    return playerEntity;
  }
}
