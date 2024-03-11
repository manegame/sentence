// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { System } from "@latticexyz/world/src/System.sol";
import { Counter, GameConfig } from "../codegen/index.sol";
import { LibUtils } from "../libraries/Libraries.sol";

contract IncrementSystem is System {
  function increment() public {
    bytes32 playerEntity = LibUtils.addressToEntityKey(_msgSender());
    Counter.set(playerEntity, Counter.get(playerEntity) + GameConfig.get().increment);
  }
}
