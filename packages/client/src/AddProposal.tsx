import { useRef, useState } from "react";
import { useMUD } from "./MUDContext";

export const AddProposal = () => {
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

  const [inputedPrompt, promptInput] = useInput({ type: "text" });

  const submit = async (event: any) => {
    event.preventDefault();

    // Create a World contract instance
    const s = signer.get();
    if (!s) throw new Error("No signer");
    const newString: string = inputedPrompt as string;
    console.log(newString);

    //need to get parent key here
    const tx = await worldSend("proposeEntry", [newString]);

    // if (inputRef.current) {
    //   inputRef.current.value = "";
    // }

    // Reset input value

    console.log("proposeEntry tx", tx);
    console.log("proposeEntry result", await tx.wait());
  };

  return (
    <div>
      {promptInput}
      <button type="button" onClick={submit}>
        Submit Prompt
      </button>
    </div>
  );
};
