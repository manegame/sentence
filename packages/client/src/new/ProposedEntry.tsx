import styled from "styled-components"

import { useMUD } from "../MUDContext"

export const ProposedEntry = ({
  entry,
  entityId,
  votes,
}: {
  entry: string
  entityId: string
  votes: number
}) => {
  const {
    network: { signer },
    worldSend,
  } = useMUD()

  const vote = async () => {
    // Create a World contract instance
    const s = signer.get()
    if (!s) throw new Error("No signer")

    const tx = await worldSend("vote", [entityId])

    console.log("vote tx", tx)
    console.log("vote result", await tx.wait())
  }
  return (
    <ProposedEntryContainer>
      <TextContainer>
        {entry}
      </TextContainer>
      <VotingContainer>
        <Clickable onClick={vote}>+</Clickable>
      </VotingContainer>
      <Clickable>({votes})</Clickable>
    </ProposedEntryContainer>
  )
}

const ProposedEntryContainer = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
`

const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;
`

const TextContainer = styled.div`
width: 100%;`

export const Clickable = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 0px;
  flex-shrink: 1;

  :focus {
    outline: none;
  }
`
