import styled from "styled-components";

export default styled.div`
  margin-inline: auto;
  inline-size: clamp(30rem, 50%, 48rem);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1rem;

  & > *:not(:last-child) {
    margin-block-end: 1rem;
  }
`;
