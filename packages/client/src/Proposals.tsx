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
            <FlexColumn key={ent}>
              <div>
                <p>Proposal: {proposal.entry}</p>
              </div>
              <FlexRow>
                <img src="https://i.pravatar.cc/100" alt="proposer" />
                <p>Proposer: {proposal.proposer}</p>
                <p></p>
              </FlexRow>
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

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
