import React, { useState } from "react"
import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const  Sentences  = () => {
  const {
    components: { SentencesTable },
    singletonEntity
  } = useMUD();
  
  const sentences = useComponentValue(SentencesTable, singletonEntity);
  
  console.log('defiined ? ', sentences)

  return <div>Sentences</div>
}