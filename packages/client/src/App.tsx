import { useState } from "react"
import {Introduction} from "./Introduction"
import {Write} from "./Write"
import {Sentences} from "./Sentences"

export const App = () => {
  const [showIntro, setShowIntro] = useState(true)
  
  setTimeout(() => setShowIntro(false), 3000)

  return (
    <>
      {showIntro && <Introduction/>}
      <Write />
      <Sentences/>
    </>
  );
};
