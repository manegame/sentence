import Typewriter from "typewriter-effect";

export const Introduction = ({ setShowIntro }: any) => (
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
        .start()
        .pauseFor(1000)
        .callFunction(() => setShowIntro(false));
    }}
  />
);
