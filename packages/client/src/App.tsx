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

export const App = () => {
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
`;

const TopFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  padding: var(--container-margin);
`;
