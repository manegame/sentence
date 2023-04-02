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
      const tx = await worldSend("countVotes", [proposalKey]);

      console.log("countVotes tx", tx);
      console.log("countVotes result", await tx.wait());
    }
  };

  return <button onClick={countVotes}>Count votes</button>;
};
