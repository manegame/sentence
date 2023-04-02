import { EntityIndex } from "@latticexyz/recs";
import { ReactNode } from "react";
import styled from "styled-components";

export const Story = ({
  worldName,
  entries,
  children,
}: {
  worldName: EntityIndex;
  entries: string[];
  children?: ReactNode;
}) => {

  console.log('world name ', worldName)

  return (
    <StoryWrapper>
      <h1 style={{ marginBottom: 24 }}>world {worldName}</h1>
      {entries.map((entry: string) => (
        <p>{entry}</p>
      ))}
      {children}
    </StoryWrapper>
  )
};

const StoryWrapper = styled.div`
  width: 100%;
`;
