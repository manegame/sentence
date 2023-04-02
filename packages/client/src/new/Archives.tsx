import styled from "styled-components";

import { DUMMY_STORIES } from "../data";
import { Story } from "./Story";

export const Archives = () => {
  const getOldStories = () => {
    // This eventually fetches from the World.

    // Object of stories, with array of entries.
    return DUMMY_STORIES;
  };

  const archivedStories = getOldStories();

  return (
    <ArchivesWrapper>
      {Object.keys(archivedStories)
        .reverse()
        .map((worldName, i) => (
          <Story worldName={worldName} entries={archivedStories[i]} />
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
