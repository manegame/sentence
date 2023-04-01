import { useState, useEffect } from "react";
import styled from "styled-components";

import { Introduction } from "./Introduction";
import { Write } from "./Write";
import { Sentences } from "./Sentences";

import { getParameterByName } from "./util";
import { ShowBlock } from "./BlockCounter";

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
          <Write />
          <Sentences />
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
