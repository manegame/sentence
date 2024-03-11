import { addToSequencer } from "./actionSequencer"

// --- API --------------------------------------------------------------

export function spawn(name: string) {
  return addToSequencer(WorldFunctions.Spawn, [name])
}

// export function increment() {
//   return addToSequencer(WorldFunctions.Increment, [])
// }

// export function createStory() {
//   return addToSequencer(WorldFunctions.CreateStory, [])
// }

// export function propose(parentKey: string, proposal: string) {
//   return addToSequencer(WorldFunctions.Propose, [parentKey, proposal])
// }


// --- MORE -------------------------------------------------------------
export enum WorldFunctions {
  Spawn = "mud_SpawnSystem_spawn",
  Increment = "mud_IncrementSystem_increment",
  CreateStory = "mud_FirstEntrySystem_createStory",
  Propose = "mud_ProposeEntrySyst_proposeEntry",
  Vote = "mud_ProposeEntrySyst_vote",
  CountVotes = "mud_ProposeEntrySyst_countVotes"
}