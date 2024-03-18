import { addToSequencer } from "./actionSequencer"

// --- API --------------------------------------------------------------

export function spawn(name: string) {
  return addToSequencer(WorldFunctions.Spawn, [name])
}


// --- MORE -------------------------------------------------------------
export enum WorldFunctions {
  Spawn = "mud_SpawnSystem_spawn",
  CreateStory = "mud_FirstEntrySystem_createStory",
  Propose = "mud_ProposeEntrySyst_proposeEntry",
  Vote = "mud_ProposeEntrySyst_vote",
  CountVotes = "mud_ProposeEntrySyst_countVotes"
}