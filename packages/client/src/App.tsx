import { useState } from "react";
import styled from "styled-components";

import { Introduction } from "./Introduction";
import { Write } from "./Write";
import { Sentences } from "./Sentences";

export const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // // setTimeout(() => setShowIntro(false), 3000)

  return (
    <FullHeightDiv>
      {showIntro ? (
        <Introduction setShowIntro={setShowIntro} />
      ) : (
        <>
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
