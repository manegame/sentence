import { useObservableState } from "observable-hooks";
import styled from "styled-components";

import { useMUD } from "../MUDContext";

export const PlayerData = () => {
  const {
    network: { blockNumber$, connectedAddress },
  } = useMUD();

  const currentBlock = useObservableState(blockNumber$);

  return (
    <AddressBar>
      <p>
        me: <Bold>{connectedAddress.get()}</Bold>
      </p>
      <p>
        when: <Bold>{currentBlock}</Bold>
      </p>
    </AddressBar>
  );
};

const AddressBar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--container-margin);
`

const Bold = styled.span`
  font-weight: bold;
  margin: 0px;
`;
