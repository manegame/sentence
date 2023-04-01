import React, { useState } from "react";
import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    components: { CounterTable, SentencesTable },
    singletonEntity,
    network: { signer },
    worldSend,
  } = useMUD();

  const useInput = ({ type }: any) => {
    const [value, setValue] = useState("");
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };

  const [inputedSentence, sentenceInput] = useInput({ type: "text" });

  // const [sentence, setSentence] = useState("");

  console.log(SentencesTable);

  const counter = useComponentValue(CounterTable, singletonEntity);

  const sentence = useComponentValue(SentencesTable, singletonEntity);

  console.log(sentence);

  return (
    <>
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();

          // Create a World contract instance
          const s = signer.get();
          if (!s) throw new Error("No signer");

          const tx = await worldSend("increment", []);

          console.log("increment tx", tx);
          console.log("increment result", await tx.wait());
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {sentenceInput}
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();

          // Create a World contract instance
          const s = signer.get();
          if (!s) throw new Error("No signer");
          console.log(inputedSentence);
          const newString: string = inputedSentence as string;

          const tx = await worldSend("writeSentence", [newString]);

          console.log("sentenceWrite tx", tx);
          console.log("sentenceWrite result", await tx.wait());
        }}
      >
        Write sentence
      </button>
    </>
  );
};
