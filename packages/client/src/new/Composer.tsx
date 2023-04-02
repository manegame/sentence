import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EntityIndex, Has, getComponentValueStrict } from "@latticexyz/recs";

import { useMUD } from "../MUDContext";
import { useInput } from "../util";
import strings from "../strings.json"

export const Composer = ({parentEntryKey}:{parentEntryKey:EntityIndex}) => {
  const {
    network: { signer },
    worldSend,
    world
  } = useMUD();
  const [inputedPrompt, promptInput] = useInput({ type: "text" });

  useEffect(() => {
    // Handle people hitting enter to submit.
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        submit(inputedPrompt as string);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputedPrompt]);

  const submit = async (prompt: string) => {
    // Write a ton of logic here:
    // Ignore empty strings
    // Don't let user submit more than once.

    // Create a World contract instance
    const s = signer.get();
    if (!s) throw new Error("No signer");
    const parentEntityId = world.entities[parentEntryKey];

    const tx = await worldSend("proposeEntry", [parentEntityId, prompt]);

    console.log("proposeEntry tx", tx);
    console.log("proposeEntry result", await tx.wait());
  };

  return (
    <ComposerContainer>
      {/* <Label>
        {strings.propose}
      </Label> */}
      {promptInput}
    </ComposerContainer>
  );
};

const ComposerContainer = styled.div`  
`;

const Label = styled.div`
  display: block;
`
