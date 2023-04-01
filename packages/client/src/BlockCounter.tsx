import { useObservableState } from "observable-hooks";
import styled from "styled-components";

import { useMUD } from "./MUDContext";

export const ShowBlock = () => {
  const {
    network: { blockNumber$ },
  } = useMUD();

  const currentBlock = useObservableState(blockNumber$);

  return (
    <div>
      <p>
        Current block: <Bold>{currentBlock}</Bold>
      </p>
    </div>
  );
};

const Bold = styled.span`
  font-weight: bold;
  margin: 0px;
`;
