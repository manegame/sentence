import { useComponentValue, useEntityQuery } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";

export const  Sentences  = () => {
  const {
    components: { SentencesTable },
    world,
    singletonEntity
  } = useMUD();

  const entities = useEntityQuery([Has(SentencesTable)])
  
  return <div>
    {entities.map(ent => {
      const sentence = getComponentValueStrict(SentencesTable, ent)
      return <div key={ent}>{world.entities[ent]} 
      {sentence.sentence} {sentence.timestamp}</div>
    })}
  </div>
}