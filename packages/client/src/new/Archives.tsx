import styled from "styled-components";

import { useMUD } from "../MUDContext";

import { Story } from "./Story";
import { EntityIndex, getComponentValueStrict, Has } from "@latticexyz/recs";
import { useEntityQuery } from "@latticexyz/react";
import { useEffect, useState } from "react";

export const Archives = () => {
  const {
    components: { Entry },
  } = useMUD();
  const [stories, setStories] = useState<
    {
      key: EntityIndex;
      parent: string;
      proposer: string;
      sentence: string;
    }[]
  >([]);

  // Update this to only grab Entry where parent = address(0)
  const entities = useEntityQuery([Has(Entry)]);

  useEffect(() => {
    // Updates everytime a new story is detected.

    // Builds the stories state object, meaning, it has to do the recursive DB pull
    // of parent addresses.

    console.log("A new top level Entry (story) has appeared.");

    const newStories = entities.map((ent) => {
      const { parent, proposer, sentence } = getComponentValueStrict(
        Entry,
        ent
      );
      return {
        key: ent,
        parent,
        proposer,
        sentence,
      };
    });

    setStories(newStories);
  }, [entities]);

  return (
    <ArchivesWrapper>
      {stories.reverse().map((story) => (
        <Story worldName={story.key} entries={[story.sentence]} />
      ))}
    </ArchivesWrapper>
  );
};

const ArchivesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-right: 64px;
`;
