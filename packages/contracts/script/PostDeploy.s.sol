// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { Script } from "forge-std/Script.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";

contract PostDeploy is Script {
  function run(address worldAddress) external {
    IWorld world = IWorld(worldAddress);

    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    vm.startBroadcast(deployerPrivateKey);

    world.mud_InitSystem_init();

    vm.stopBroadcast();
  }
}
