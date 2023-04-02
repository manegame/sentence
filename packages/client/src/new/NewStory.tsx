import styled from "styled-components";

import { useEntityQuery } from "@latticexyz/react";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

import { useMUD } from "../MUDContext";

import { Composer } from "./Composer";
import { Story } from "./Story";
import { VotableEntry } from "./VotableEntry";

export const NewStory = () => {
  const {
    components: { ProposedEntry },
  } = useMUD();

  const entities = useEntityQuery([Has(ProposedEntry)]);
  const getCurrentStoryEntries = () => {
    // Go to blockchain for this.
    // Return array of entries.
    return ["Imagine a nation based upon water..."];
  };

  const getCurrentEntryProposals = () => {
    //
    return [];
  };

  return (
    <FlexColumn>
      <Story worldName="new world" entries={getCurrentStoryEntries()}>
        <Composer />
        {/* Would be good to show some loading stuff here/handle empty case. */}
        {entities.length ? (
          entities.map((ent) => {
            const proposal = getComponentValueStrict(ProposedEntry, ent);
            return <VotableEntry entry={proposal.sentence} />;
          })
        ) : (
          <></>
        )}
      </Story>
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
