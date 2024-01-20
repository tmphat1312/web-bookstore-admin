import FocusTrap from "focus-trap-react";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useEscape } from "../hooks/useEscape";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 500ms;
`;

const ModalContext = createContext();

function ConfirmModal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, close, open: setOpenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  useEscape(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <FocusTrap>
        <StyledModal ref={ref}>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModal>
      </FocusTrap>
    </Overlay>,
    document.body
  );
}

ConfirmModal.Open = Open;
ConfirmModal.Window = Window;

export default ConfirmModal;
