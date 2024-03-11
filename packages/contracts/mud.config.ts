import { mudConfig, resolveTableId } from "@latticexyz/world/register";

export default mudConfig({
  deploysDirectory: "./deploys",
  overrideSystems: {
    ProposeEntrySystem: {
      fileSelector: "proposalssystem",
      openAccess: true,
    },
  },
  namespace: "mud",
  tables: {
    Name: "string",
    Counter: "uint32",
    GameConfig: {
        keySchema: {},
        valueSchema: {
            increment: "uint32"
        },
        dataStruct: true,
    },
    Story: {
      fileSelector: "story",
      valueSchema: {
        archived: "bool",
        periodEndsBlock: "uint256"
      },
    },
    Entry: {
      fileSelector: "entry",
      valueSchema: {
        parent: "bytes32",
        proposer: "address",
        sentence: "string",
      },
    },
    ParentStory: {
      fileSelector: "parentstory",
      valueSchema: {
        parentKey: "bytes32",
      },
    },
    ProposedEntry: {
      fileSelector: "proposedentry",
      valueSchema: {
        proposedOnBlock: "uint256",
        parentKey: "bytes32", // Can get rid of this
        timestamp: "uint256",
        proposer: "address",
        sentence: "string",
        votes: "address[]",
      },
    },
    ParentEntry: {
      fileSelector: "parententry",
      valueSchema: {
        parentKey: "bytes32",
      },
    },
    ProposalPeriod: {
      fileSelector: "proposalperiod",
      valueSchema: {
        periodEndsBlock: "uint256",
      },
    },
  },
  modules: [
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("ParentEntry")],
    },
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("ParentStory")],
    },
  ],
});

