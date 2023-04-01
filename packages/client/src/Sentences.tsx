import { useState, useEffect } from "react"
import { useComponentValue, useEntityQuery } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";
import Becky from "./becky.json"

export const  Sentences  = () => {
  let index = 0
  // const [index, setIndex] = useState(0)
  let l: string[] = []
  const [lines, setLines]: [string[], any] = useState([])

  function tick (block: number) {
    const newLine = Becky[index % Becky.length]
    l = [...l, newLine]
    index++
    setLines(l)
    console.log(block)
  }

  useEffect(() => {
    blockNumber$.subscribe(tick)
  }, [])

  const {
    components: { SentencesTable },
    world,
    network: {
      blockNumber$
    }, 
    singletonEntity
  } = useMUD();

  const entities = useEntityQuery([Has(SentencesTable)])
  
  return (
    <div>
      <div>
        {entities.map(ent => {
          const sentence = getComponentValueStrict(SentencesTable, ent)
          return <div key={ent}>{world.entities[ent]} 
          {sentence.sentence} {sentence.timestamp}</div>
        })}
        <div>
          {lines.map(line => <div>{line}<br/></div>)}
        </div>
      </div>
    </div>

  )
}