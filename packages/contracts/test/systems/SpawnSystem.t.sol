// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.21;
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { MudTest } from "@latticexyz/world/test/MudTest.t.sol";
import "../../src/codegen/index.sol";
import "../../src/libraries/Libraries.sol";

contract SpawnSystemTest is MudTest {
  IWorld world;
  address internal alice;
  address internal bob;
  GameConfigData gameConfig;

  function setUp() public override {
    super.setUp();
    world = IWorld(worldAddress);
    gameConfig = GameConfig.get();
    alice = address(111);
    bob = address(222);
  }

  function testSpawn() public {
    setUp();

    vm.startPrank(alice);
    bytes32 playerEntity = world.mud_SpawnSystem_spawn("alice");
    vm.stopPrank();

    assertEq(Name.get(playerEntity), "alice");
  }

  function testRevertNoName() public {
    setUp();

    vm.startPrank(alice);
    vm.expectRevert("no name");
    world.mud_SpawnSystem_spawn("");
    vm.stopPrank();
  }
}
