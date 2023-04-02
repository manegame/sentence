import styled from "styled-components";
import { useMUD } from "../MUDContext";

export const VotableEntry = ({ entry }: { entry: string }) => {
  const {
    network: { signer },
    worldSend,
  } = useMUD();

  const vote = (vote: number) => {
    // submit transactions here to vote.
    // handle edge cases here.
    console.log(vote);
    return;
  };
  return (
    <ProposedEntryContainer>
      <VotingContainer>
        <Clickable onClick={() => vote(1)}>+</Clickable>
        <Clickable onClick={() => vote(-1)}>-</Clickable>
      </VotingContainer>
      <TextContainer>{entry}</TextContainer>
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
