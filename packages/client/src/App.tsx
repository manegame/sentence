import { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

// import { Introduction } from "./Introduction";
import { Write } from "./Write";
import { Sentences } from "./Sentences";

export const App = () => {
  // const [showIntro, setShowIntro] = useState(true);

  // // setTimeout(() => setShowIntro(false), 3000)

  return (
    <FullHeightDiv>
      <Typewriter
        options={{
          delay: 30,
          autoStart: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<p style="margin: 0px; color: white">They are playing a game.<p/>'
            )
            .pauseFor(100)
            .typeString(
              '<p style="margin: 0px; color: white">They are playing at not playing a game.<p/>'
            )
            .pauseFor(100)
            .typeString(
              '<p style="margin: 0px; color: white">If I show them I see they are, I shall break the rules and they will punish me.<p/>'
            )
            .pauseFor(500)
            .typeString(
              '<b style="margin: 0px; color: white">I must play their game, of not seeing I see the game...</b>'
            )
            .start();
        }}
      />
      {/* <Write />
      <Sentences /> */}
    </FullHeightDiv>
  );
};

const FullHeightDiv = styled.div`
  position: relative;
  height: 100vh;
  background: black;
`;
