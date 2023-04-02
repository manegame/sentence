import { mudConfig, resolveTableId } from "@latticexyz/cli";
// import { ProposedEntry, ProposedEntryData } from "./src/tables/ProposedEntry.sol";

export default mudConfig({
  overrideSystems: {
    ProposeEntrySystem: {
      fileSelector: "proposalssystem",
      openAccess: true
    },
  },
  tables: {
    Story: {
      fileSelector: "story",
      schema: {
        startBlock: "uint256",
        startPrompt: "string",
      }
    },
    Entry: {
      fileSelector: "entry",
      schema: {
        parentKey: "bytes32",
        proposer: "address",
        proposals: "bytes32[]"
      }
    },
    ProposedEntry: {
      fileSelector: "proposedentries",
      schema: {
        parentKey: "bytes32",
        proposedOnBlock: "uint256",
        timestamp: "uint256",
        proposer: "address",
        sentence: "string",
        votes:"address[]"
      },
    },
    NewEntryPeriod: {
      fileSelector: "newentryperiod",
      schema: {
        periodStartsBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    },
    NewVotePeriod: {
      fileSelector: "newvoteperiod",
      schema: {
        periodStartsBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    }
  },
  modules: [],
});
