import { useState } from "react";
import styled from "styled-components";

export const WelcomeModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  return (
    <Backdrop onClick={() => setIsOpen(false)} isVisible={modalIsOpen}>
      <Content onClick={(e) => e.stopPropagation()} isVisible={modalIsOpen}>
        <p>
          Sentence is an improvisational game to collectively imagine a new
          world. You play as an observer -- an anthropologist, historian or
          journalist, describing the laws, rituals and customs that structure
          this world and make it unique.
          <br />
          <br />
          Every minute, anyone can propose an addition to the world's
          description. These proposals are then voted on by players, and the
          winning entry is appended to the narrative, growing the depth and
          detail of the world.
          <br />
          <br />
          Worlds that don't receive any entries within a minute are archived.
        </p>
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
