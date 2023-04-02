import { mudConfig, resolveTableId } from "@latticexyz/cli";

export default mudConfig({
  overrideSystems: {
    ProposeEntrySystem: {
      fileSelector: "proposalssystem",
      openAccess: true,
    },
  },
  tables: {
    ProposedEntry: {
      fileSelector: "proposedentries",
      schema: {
        proposedOn: "uint256",
        timestamp: "uint256",
        proposer: "address",
        entry: "string",
      },
    },
  },
  modules: [],
});
