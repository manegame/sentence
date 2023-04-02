import styled from "styled-components";
import { useMUD } from "../MUDContext";

export const VotableEntry = ({ entry, entityId, votes }: { entry: string, entityId: string, votes: number }) => {
  const {
    network: { signer },
    worldSend,
    world
  } = useMUD();

  const vote = async () => {
    // Create a World contract instance
    const s = signer.get();
    if (!s) throw new Error("No signer");

    // const convertedKey = key.padEnd(66, "0")

    const tx = await worldSend("vote", [entityId]);

    // if (inputRef.current) {
    //   inputRef.current.value = "";
    // }

    // Reset input value

    console.log("proposeEntry tx", tx);
    console.log("proposeEntry result", await tx.wait());
  };
  return (
    <ProposedEntryContainer>
      <VotingContainer>
        <Clickable onClick={vote}>+</Clickable>
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
