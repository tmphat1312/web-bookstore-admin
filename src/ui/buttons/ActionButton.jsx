import styled from "styled-components";

const ActionButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.25rem;
  border-radius: var(--border-radius-sm);

  &:hover:not(:disabled) {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:disabled svg {
    fill: var(--color-grey-400);
  }

  ${({ danger }) =>
    danger &&
    `
    & svg {
      fill: var(--color-red-700);
    }
  `}
`;

export default ActionButton;
