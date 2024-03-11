/*
 *  Central store for all entities in the game.
 *
 */
import { network } from "../network"
import { writable, derived } from "svelte/store"
import { Entities, Players, Stories, ProposedEntries, GameConfig } from "./types"

const GAME_CONFIG_ID = "0x"

// * * * * * * * * * * * * * * * * *
// DEFAULT ENTITY STORE
// * * * * * * * * * * * * * * * * *

/**
 * Mirror of the full on chain state.
 *
 * Only ever written to via the update systems in module/systems
 */
export const entities = writable({} as Entities)

// * * * * * * * * * * * * * * * * *
// DERIVED ENTITY STORES
// * * * * * * * * * * * * * * * * *

/**
 * Players
 */
export const players = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([_, entity]) => entity.name
    )
  ) as Players
})

/**
 * Stories
 */
export const stories = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([, entity]) => {
        return entity.story
      }
    )
  ) as Stories
})

/**
 * Succeeded entries
 */
export const chosenEntries = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([, entity]) => {
        return entity?.entry
      }
    )
  ) as ProposedEntries
})

/**
 * Proposed Entries
 */
export const proposedEntries = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([, entity]) => {
        return entity?.proposedEntry
      }
    )
  ) as ProposedEntries
})

/**
 * Current voting period
*/
export const votingPeriods = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([, entity]) => {
        return entity?.periodEndsBlock
      }
    )
  ) as ProposedEntries
})


/**
 * Players ordered by counter value in descending order
 */
export const leaderBoard = derived(players, $players => {
  // Sort the array based on the counter value 
  return Object.values($players).sort((a, b) => b.counter - a.counter);
});

// * * * * * * * * * * * * * * * * *
// LOCAL PLAYER STORES
// * * * * * * * * * * * * * * * * *

export const localPlayerAddress = derived(
  network,
  $network => $network.walletClient?.account.address || "0x0"
)

/**
 * Entity Id is a 32 byte hex string (64 characters long) of the player address
 */
export const localPlayerEntityId = derived(
  network,
  $network => $network.playerEntity || "0x0"
)

export const localPlayer = derived(
  [players, localPlayerEntityId],
  ([$players, $localPlayerEntityId]) => $players[$localPlayerEntityId]
)

// * * * * * * * * * * * * * * * * *
// GAME CONFIG STORE
// * * * * * * * * * * * * * * * * *

export const gameConfig = derived(
  entities,
  $entities => $entities[GAME_CONFIG_ID].gameconfig as GameConfig
)

export const countdown = derived(stories, ($stories) => {
  console.log("$stories")
  console.log($stories)

  return -1
})