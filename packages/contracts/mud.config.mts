import { mudConfig, resolveTableId } from "@latticexyz/cli";

export default mudConfig({
  overrideSystems: {
    ProposeEntrySystem: {
      fileSelector: "proposalssystem",
      openAccess: true,
    },
  },
  tables: {
    Entry: {
      fileSelector: "entry",
      schema: {
        parent: "address",
        proposer: "address",
        sentence: "string",
      },
    },
    ProposedEntry: {
      fileSelector: "proposedentry",
      schema: {
        id: "uint256",
        storyId: "uint256",
        parentBlock: "uint256",
        proposedOnBlock: "uint256",
        timestamp: "uint256",
        proposer: "address",
        sentence: "string",
        votes: "address[]",
      },
    },
    EntryPeriod: {
      fileSelector: "entryperiod",
      schema: {
        id: "uint256",
        parentBlock: "uint256",
        periodEndsBlock: "uint256",
      },
    },
    VotePeriod: {
      fileSelector: "voteperiod",
      schema: {
        id: "uint256",
        parentBlock: "uint256",
        periodEndsBlock: "uint256",
      },
    },
  },
  modules: [],
});
