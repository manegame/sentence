import styled from "styled-components";

import { useEntityQuery } from "@latticexyz/react";
import { EntityIndex, Has, getComponentValueStrict } from "@latticexyz/recs";

import { useMUD } from "../MUDContext";

import { Composer } from "./Composer";
import { Story } from "./Story";
import { VotableEntry } from "./VotableEntry";
import { useEffect, useState } from "react";

export const NewStory = () => {
  const {
    components: { Entry, ProposedEntry },
    world
  } = useMUD();

  const [story, setCurrentStory] = useState<{
    key: EntityIndex;
    parent: string;
    proposer: string;
    sentence: string;
  }>();

  // Update this to only grab Entry where parent = address(0)
  const entries = useEntityQuery([Has(Entry)]);
  const proposedEntries = useEntityQuery([Has(ProposedEntry)]);

  useEffect(() => {
    // Updates everytime a new story is detected.

    // Builds the stories state object, meaning, it has to do the recursive DB pull
    // of parent addresses.

    console.log("A new top level Entry (story) has appeared.");
    // Only care about newest story
    if (entries.length) {
      const [currentStory] = entries.reverse();
      const { parent, proposer, sentence } = getComponentValueStrict(
        Entry,
        currentStory
      );

      setCurrentStory({
        key: currentStory,
        parent,
        proposer,
        sentence,
      });
    }
  }, [entries]);

  return (
    <FlexColumn>
      <h1 style={{ marginBottom: 24 }}>Current World</h1>
      <Story worldName={story?.key} entries={[story?.sentence]}>
        <Composer />
        {/* Would be good to show some loading stuff here/handle empty case. */}
        {proposedEntries.length ? (
          proposedEntries.map((key) => {
            const proposal = getComponentValueStrict(ProposedEntry, key);
            const entityId = world.entities[key]
            return <VotableEntry entry={proposal.sentence} entityId={entityId} votes={proposal.votes.length} />;
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
  border-right: 2px solid black;
`;
