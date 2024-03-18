/*
 *  Central store for all entities in the game.
 *
 */
import { network, blockNumber } from "../network"
import { writable, derived } from "svelte/store"
import { Entities, Players, Stories, ProposedEntries, GameConfig } from "./types"

const GAME_CONFIG_ID = "0x"
const VOTING_PERIOD = 20

/**
 * Just an util to remove leading zeros for easy and consistent access
 * @param address 
 * @returns 
 */
export function removeLeadingZeros(address) {
  return "0x" + address.slice(2).replace(/^0+/, "")
}

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
    ).map(([address, _]) => [removeLeadingZeros(address), _])
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
 * Parent stories
 */
export const parentStories = derived(entities, $entities => {
  return Object.fromEntries(
    Object.entries($entities).filter(
      ([, entity]) => {
        return entity.parentKey
      }
    )
  ) as Stories
})

/**
 * Latest story
 */
export const latestStory = derived(stories, $stories => {
  if (Object.keys($stories).length === 0) {
    return false
  }

  return Object.entries($stories).reduce((prev, current) => Number(prev[1].story.periodEndsBlock) > Number(current[1].story.periodEndsBlock) ? prev : current)
}) 

export const archive = derived([stories, latestStory], ([$stories, $latestStory]) => {
  if ($latestStory) {
    return Object.fromEntries(Object.entries($stories).filter(([_, story]) => story.story.periodEndsBlock !== $latestStory[1].story.periodEndsBlock))
  }

  return $stories
})

/**
 * When does the voting end?
 */
export const votingEnds = derived(latestStory, $latestStory => {
  if ($latestStory) {
    return Number($latestStory[1].story.periodEndsBlock) + VOTING_PERIOD
  }

  return -1
})

/**
 * Countdown until voting starts
 */
export const votingStartsIn = derived([latestStory, blockNumber], ([$latestStory, $blockNumber]) => {
  if ($latestStory) {
    return Number($latestStory[1].story.periodEndsBlock) - $blockNumber
  }

  return -1
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
  $network => $network.walletClient?.account.address?.toLowerCase() || "0x0"
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
  ([$players, $localPlayerEntityId]) => $players[removeLeadingZeros($localPlayerEntityId)]
)

// * * * * * * * * * * * * * * * * *
// GAME CONFIG STORE
// * * * * * * * * * * * * * * * * *

export const gameConfig = derived(
  entities,
  $entities => $entities[GAME_CONFIG_ID].gameconfig as GameConfig
)
