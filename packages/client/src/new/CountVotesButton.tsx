import { EntityID } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";

export const CountVotesButton = ({
  proposalKey,
}: {
  proposalKey: EntityID | null;
}) => {
  const {
    network: { signer },
    worldSend,
  } = useMUD();

  const countVotes = async () => {
    const s = signer.get();
    if (!s) throw new Error("No signer");

    if (proposalKey) {
      worldSend("countVotes", [proposalKey])
        .then( (res) => console.log('success', res))
        .catch( (e) => {
          console.log('hit error', JSON.parse(e.error.body) ) 
          alert(JSON.parse(e.error.body).error.message)
          } );

    }
  };

  return <button onClick={countVotes}>Count votes</button>;
};
