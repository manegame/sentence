import styled from "styled-components";

import { useEntityQuery } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

export const Proposals = () => {
  const {
    components: { ProposedEntry },
  } = useMUD();

  const entities = useEntityQuery([Has(ProposedEntry)]);

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
              <p style={{ marginBottom: 4 }}>Proposed by:</p>
              <FlexRow style={{ marginBottom: 12 }}>
                <ProfileImg src="https://i.pravatar.cc/100" alt="proposer" />
                <p>
                  <Bold>{proposal.proposer}</Bold>
                </p>
                <p></p>
              </FlexRow>
              <div>
                <ProposalText>{proposal.entry}</ProposalText>
              </div>
            </FlexColumn>
          );
        })}
      </ol>
    </>
  );
};

const Title = styled.h1`
  color: black;
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
  align-items: center;s
`;

const Bold = styled.span`
  font-weight: bold;
  margin: 0px;
`;

const ProposalText = styled.h3`
  margin: 0px;
`;
