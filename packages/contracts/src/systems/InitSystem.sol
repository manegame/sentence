// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { System } from "@latticexyz/world/src/System.sol";
import { GameConfig, GameConfigData } from "../codegen/index.sol";

contract InitSystem is System {
  function init() public {
    GameConfig.set(GameConfigData({ increment: 1 }));
  }
}
