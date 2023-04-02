import styled from "styled-components";

import { useEntityQuery } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

export const Proposals = () => {
  const {
    components: { ProposedEntry },
    network: { signer },
    world,
    worldSend
  } = useMUD();

  const entities = useEntityQuery([Has(ProposedEntry)]);

  const vote = async (ent: number) => {
    
    // Create a World contract instance
    const s = signer.get();
    if (!s) throw new Error("No signer");

    const entityId = world.entities[ent]

    const tx = await worldSend("vote", [entityId]);

    // if (inputRef.current) {
    //   inputRef.current.value = "";
    // }

    // Reset input value

    console.log("proposeEntry tx", tx);
    console.log("proposeEntry result", await tx.wait());
  };


  return (
    <>
      <Title>
        Active Proposals:
        <br />
      </Title>
      <ol>
        {entities.map((ent) => {
          const proposal = getComponentValueStrict(ProposedEntry, ent);
          
          return (
            <FlexColumn key={ent} style={{ marginBottom: 48 }}>
              <button onClick={() => vote(ent)}>
                Vote
              </button>
              <p style={{ marginBottom: 4 }}>Proposed by:</p>
              <FlexRow style={{ marginBottom: 12 }}>
                <ProfileImg src="https://i.pravatar.cc/100" alt="proposer" />
                <p>
                  <Bold>{proposal.proposer}</Bold>
                </p>
                <p></p>
              </FlexRow>
              <div>
                <ProposalText>{proposal.sentence}</ProposalText>
              </div>
            </FlexColumn>
          );
        })}
      </ol>
    </>
  );
};

const Title = styled.h1`
  color: white;
`;

const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 8px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bold = styled.span`
  font-weight: bold;
  margin: 0px;
`;

const ProposalText = styled.h3`
  color: white;
  margin: 0px;
`;
