import styled from "styled-components";
import { useMUD } from "../MUDContext";
import { EntityID, EntityIndex, Has } from "@latticexyz/recs";
import { useEntityQuery } from "@latticexyz/react";

export const VotableEntry = ({
  proposalKey,
  entry,
  votes,
}: {
  proposalKey: EntityID;
  entry: string;
  votes: number;
}) => {
  const {
    network: { signer },
    worldSend,
    world
  } = useMUD();

  const vote = async () => {
    // submit transactions here to vote.
    // handle edge cases here.
    const s = signer.get();
    if (!s) throw new Error("No signer");

    const tx = await worldSend("vote", [proposalKey]);

    console.log("vote tx", tx);
    console.log("vote result", await tx.wait());

    return;
  };

  return (
    <ProposedEntryContainer>
      <VotingContainer>
        <Clickable onClick={vote}>+</Clickable>
        <p>({votes})</p>
      </VotingContainer>
      <TextContainer>{entry} ({votes})</TextContainer>
    </ProposedEntryContainer>
  );
};

const ProposedEntryContainer = styled.div`
  background-color: #d9d9d9;
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 0px;
`;

const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;
`;

const TextContainer = styled.div``;

export const Clickable = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 0px;
  flex-shrink: 0;

  :focus {
    outline: none;
  }
`;
