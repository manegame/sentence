import { useState, useEffect } from "react";
import styled from "styled-components";

import { Introduction } from "./Introduction";

import { getParameterByName } from "./util";
import { ShowBlock } from "./BlockCounter";
import { Proposals } from "./Proposals";
import { AddProposal } from "./AddProposal";

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const skipIntro = getParameterByName("skipIntro") || false;
    setShowIntro(!skipIntro);
  }, []);

  // // setTimeout(() => setShowIntro(false), 3000)

  return (
    <FullHeightDiv>
      {showIntro ? (
        <Introduction setShowIntro={setShowIntro} />
      ) : (
        <>
          <ShowBlock />
          <AddProposal />
          <Proposals />
        </>
      )}
    </FullHeightDiv>
  );
};

const FullHeightDiv = styled.div`
  position: relative;
  height: 100vh;
  background: black;
`;
