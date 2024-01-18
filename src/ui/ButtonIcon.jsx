import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.375rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.375rem;
    height: 1.375rem;

    ${(props) => !props.raw && "fill: var(--color-brand-600)"}
  }

  &:disabled svg {
    fill: var(--color-grey-400);
  }
`;

export default ButtonIcon;
