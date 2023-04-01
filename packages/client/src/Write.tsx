import React, { useState, useRef } from "react"
import { useMUD } from "./MUDContext";

export const Write = () => {
  const {
    network: { signer },
    worldSend,
  } = useMUD();

  const inputRef = useRef(null);
  
  const useInput = ({ type }: any) => {
    const [value, setValue] = useState("");
    const input = (
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };
  
  const [inputedSentence, sentenceInput] = useInput({ type: "text" });

  const submit = async (event) => {
    event.preventDefault();

    // Create a World contract instance
    const s = signer.get();
    if (!s) throw new Error("No signer");
    const newString: string = inputedSentence as string;

    const tx = await worldSend("writeSentence", [newString]);

    inputRef.current.value = ''

    // Reset input value

    console.log("sentenceWrite tx", tx);
    console.log("sentenceWrite result", await tx.wait());
  }
  
  return (
    <div>
      {sentenceInput}
      <button
        type="button"
        onClick={submit}
      >
        Write sentence
      </button>
    </div>
    )
  }
