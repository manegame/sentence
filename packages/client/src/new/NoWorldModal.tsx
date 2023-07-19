import { useState } from "react";
import styled from "styled-components";

import { useMUD } from "../MUDContext";

export const NoWorldModal = () => {
  const {
    network: { signer },
    worldSend,
  } = useMUD();

  const [modalIsOpen, setIsOpen] = useState(true);

  const createNewWorld = async () => {
    const s = signer.get();
    if (!s) throw new Error("No signer");

    console.log('creating story')
    worldSend("createStory", [])
      .then( (res) => console.log('success: story created', res))
      .catch( (e) => {
        console.log('hit error', JSON.parse(e.error.body) ) 
        alert(JSON.parse(e.error.body).error.message)
        } );
    setIsOpen(false);

  };

  return (
    <Backdrop onClick={() => setIsOpen(false)} isVisible={modalIsOpen}>
      <Content
        onClick={(e: any) => e.stopPropagation()}
        isVisible={modalIsOpen}
      >
        <p style={{ marginBottom: 24 }}>
          there are no current active sentences.
        </p>
        <button style={{ fontSize: 16 }} onClick={() => createNewWorld()}>
          New sentence
        </button>
      </Content>
    </Backdrop>
  );
};

const Backdrop = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${(p: any) => (p.isVisible ? 1 : 0)};
  visibility: ${(p: any) => (p.isVisible ? "visible" : "hidden")};
`;

const Content = styled.div<{ isVisible: boolean }>`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 64px;
  border-radius: 5px;
  text-align: start;
  max-height: 70vh;
  overflow-y: scroll;
  position: relative;

  transform: translateY(${(p: any) => (p.isVisible ? 0 : "-50px")});
`;
