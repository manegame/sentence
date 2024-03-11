// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";

import { IFirstEntrySystem } from "./IFirstEntrySystem.sol";
import { IIncrementSystem } from "./IIncrementSystem.sol";
import { IInitSystem } from "./IInitSystem.sol";
import { IProposeEntrySystem } from "./IProposeEntrySystem.sol";
import { ISpawnSystem } from "./ISpawnSystem.sol";
import { ITimingSystem } from "./ITimingSystem.sol";

/**
 * @title IWorld
 * @notice This interface integrates all systems and associated function selectors
 * that are dynamically registered in the World during deployment.
 * @dev This is an autogenerated file; do not edit manually.
 */
interface IWorld is
  IBaseWorld,
  IFirstEntrySystem,
  IIncrementSystem,
  IInitSystem,
  IProposeEntrySystem,
  ISpawnSystem,
  ITimingSystem
{

}
