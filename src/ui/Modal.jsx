import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import FocusTrap from "focus-trap-react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useEscape } from "../hooks/useEscape";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 500ms;
`;

const StyledBaseModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

const StyledModal = styled(StyledBaseModal)`
  --_modal-padding: 2rem;

  padding: var(--_modal-padding);
`;

const Button = styled.button`
  --_button-offset: calc(var(--_modal-padding) * 0.25);

  background: transparent;
  border: none;
  padding: 0.25rem;
  border-radius: var(--border-radius-sm);
  position: absolute;
  top: var(--_button-offset);
  right: var(--_button-offset);

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
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

function Window({ children, name, closeButton = false }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  useEscape(close);

  if (name !== openName) return null;

  const Modal = closeButton ? (
    <StyledModal ref={ref}>
      <Button onClick={close}>
        <HiXMark />
      </Button>

      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </StyledModal>
  ) : (
    <StyledBaseModal ref={ref}>
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </StyledBaseModal>
  );

  return createPortal(
    <Overlay>
      <FocusTrap>{Modal}</FocusTrap>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
