export type Entity = {
  [key: string]: any
  name?: string
  counter?: number
  gameConfig?: GameConfig
}

export type Player = {
  [key: string]: any
  name: string
  counter: number
}

export type Entities = {
  [key: string]: Entity
}

export type Players = {
  [key: string]: Player
}

export type GameConfig = {
  increment: number
}

export type Story = {
  archived: boolean
}


export type Stories = {
  [key: string]: Story
}

export type ProposedEntry = {
  entry: {
    proposedOnBlock: number
    parentKey: string
    timestamp: number
    proposer: string
    sentence: string
    votes: string[]
  }
  parentStory: {
    parentKey: string
  }
  proposalPeriod: {
    periodEndsBlock: BigInt
  }
}

export type ProposedEntries = {
  [key: string]: ProposedEntry
}


