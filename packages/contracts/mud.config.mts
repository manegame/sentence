import { mudConfig, resolveTableId } from "@latticexyz/cli";
// import { ProposedEntry, ProposedEntryData } from "./src/tables/ProposedEntry.sol";

export default mudConfig({
  overrideSystems: {
    ProposeEntrySystem: {
      fileSelector: "proposalssystem",
      openAccess: true,
    },
  },
  tables: {
    Story: {
      fileSelector: "story",
      schema: {
        archived: "bool",
      },
    },
    Entry: {
      fileSelector: "entry",
      schema: {
        parent: "bytes32",
        proposer: "address",
        sentence: "string",
      },
    },
    ParentStory: {
      fileSelector: "parentstory",
      schema: {
        parentKey: "bytes32",
      },
    },
    ProposedEntry: {
      fileSelector: "proposedentry",
      schema: {
        parentKey: "bytes32", // Can get rid of this
        proposedOnBlock: "uint256",
        timestamp: "uint256",
        proposer: "address",
        sentence: "string",
        votes: "address[]",
      },
    },
    ParentEntry: {
      fileSelector: "parententry",
      schema: {
        parentKey: "bytes32",
      },
    },
    ProposalPeriod: {
      fileSelector: "proposalperiod",
      schema: {
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
