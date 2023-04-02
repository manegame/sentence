import { useState, useEffect } from "react";
import styled from "styled-components";

import { Introduction } from "./Introduction";

import { getParameterByName } from "./util";
import { ShowBlock } from "./BlockCounter";
import { Proposals } from "./Proposals";
import { AddProposal } from "./AddProposal";
import { Archives } from "./new/Archives";
import { PlayerData } from "./new/PlayerData";
import { WelcomeModal } from "./new/WelcomeModal";
import { NewStory } from "./new/NewStory";
import { NoWorldModal } from "./new/NoWorldModal";
import { useMUD } from "./MUDContext";
import { useEntityQuery } from "@latticexyz/react";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

export const App = () => {
  const {
    components: { Entry, Story, ProposalPeriod },
  } = useMUD();

  const entries1 = useEntityQuery([Has(Entry)]);
  const entries2 = useEntityQuery([Has(Story)]);
  const entries3 = useEntityQuery([Has(ProposalPeriod)]);

  if (entries1.length) {
    console.log(getComponentValueStrict(Entry, entries1[0]));
  }

  if (entries2.length) {
    console.log(getComponentValueStrict(Story, entries2[0]));
  }

  if (entries3.length) {
    console.log(getComponentValueStrict(ProposalPeriod, entries3[0]));
  }

  return (
    <FullHeightDiv>
      <Nav>
        <PlayerData />
      </Nav>
      <TopFlexRow>
        <NewStory />
        <Archives />
      </TopFlexRow>
      <WelcomeModal />
      <NoWorldModal />
    </FullHeightDiv>
  );
};

const FullHeightDiv = styled.div`
  position: relative;
  height: 100vh;
  color: black;
`;

const Nav = styled.div`
  padding: 8px 0px 16px 0px;
  border-bottom: 2px solid black;
`;

const TopFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  padding: 24px;
`;
