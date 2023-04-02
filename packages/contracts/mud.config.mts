import { mudConfig, resolveTableId } from "@latticexyz/cli";

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
        id: "uint256",
        lastProposalId: "uint256" // should this be last entry id?
      }
    },
    Entry: {
      fileSelector: "entry",
      schema: {
        id: "uint256",
        storyId: "uint256",
        parentId: "uint256",
        proposer: "address"
      }
    },
    ProposedEntry: {
      fileSelector: "proposedentries",
      schema: {
        id: "uint256",
        storyId: "uint256",
        parentId: "uint256",
        proposedOnBlock: "uint256",
        timestamp: "uint256",
        proposer: "address",
        sentence: "string",
      },
    },
    Vote: {
      fileSelector: "vote",
      schema: {
        id: "uint256",
        proposedEntryId: "uint256",
        voter: "address"
      }
    },
    newEntryPeriod: {
      fileSelector: "newentryperiod",
      schema: {
        id: "uint256",
        parentBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    },
    newVotePeriod: {
      fileSelector: "newvoteperiod",
      schema: {
        id: "uint256",
        parentBlock: "uint256",
        periodEndsBlock: "uint256"
      }
    }
  },
  modules: [],
});
