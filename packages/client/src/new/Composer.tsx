import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EntityIndex, Has, getComponentValueStrict } from "@latticexyz/recs";

import { useMUD } from "../MUDContext";
import { useInput } from "../util";
import strings from "../strings.json";
import { useEntityQuery } from "@latticexyz/react";

export const Composer = ({
  parentEntryKey,
}: {
  parentEntryKey: EntityIndex;
}) => {
  const {
    network: { signer },
    components: { ProposalPeriod },
    worldSend,
    world,
  } = useMUD();
  const [inputedPrompt, promptInput] = useInput({ type: "text" });

  const periods = useEntityQuery([Has(ProposalPeriod)]);

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

  // const proposalTiming = getComponentValueStrict(ProposalPeriod, periods[0]);

  return (
    <ComposerContainer>
      {promptInput}
      <p>Propose by block: {Number(proposalTiming.periodEndsBlock || 0)}</p>
    </ComposerContainer>
  );
};

const ComposerContainer = styled.div`
  width: 100%;
`;

const Label = styled.div`
  display: block;
`;
