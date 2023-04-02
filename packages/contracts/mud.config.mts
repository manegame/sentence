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
        parentKey: "bytes32",
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
        periodStartsBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    },
    VotePeriod: {
      fileSelector: "voteperiod",
      schema: {
        periodStartsBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    }
  },
  modules: [],
});
