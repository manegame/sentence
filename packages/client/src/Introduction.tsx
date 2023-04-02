import styled from "styled-components"
import Typewriter from "typewriter-effect";

export const Introduction = ({ setShowIntro }: any) => (
  <IntroductionWrapper onClick={() => setShowIntro(false)}>

    <div className="inner">
      <div className="beckett">
        <Typewriter
          options={{
            delay: 30,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<p style="margin: 0px; color: black">They are playing a game.<p/>'
              )
              .pauseFor(100)
              .typeString(
                '<p style="margin: 0px; color: black">They are playing at not playing a game.<p/>'
              )
              .pauseFor(100)
              .typeString(
                '<p style="margin: 0px; color: black">If I show them I see they are, I shall break the rules and they will punish me.<p/>'
              )
              .pauseFor(500)
              .typeString(
                '<b style="margin: 0px; color: black">I must play their game, of not seeing I see the game...</b>'
              )
              .start()
              // .pauseFor(1000)
              // .callFunction(() => setShowIntro(false));
          }}
        />
      </div>
      <div className="explainer">
        Sentence is an improvisational game to collectively imagine a new world. You play as an observer -- an anthropologist, historian or journalist, describing the laws, rituals and customs that structure this world and make it unique.
      
        Every minute, anyone can propose an addition to the world’s description. These proposals are then voted on by players, and the winning entry is appended to the narrative, growing the depth and detail of the world.
        
        Worlds that don’t receive any entries within a minute are archived.
      </div>
    </div>
  </IntroductionWrapper>
);


const IntroductionWrapper = styled.div`
  position: fixed;
  inset: 0;
  color: black;


  .beckett {
    height: 120px;
    width: 600px;
    margin: 0 auto;
  }
  .inner {
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .explainer {

  }
`