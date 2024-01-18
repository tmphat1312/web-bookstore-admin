import styled, { css } from "styled-components";

const FormLayout = styled.main`
  --_max-width: 30rem;

  ${(props) =>
    props.size === "sm" &&
    css`
      --_max-width: 2rem;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      --_max-width: 4rem;
    `}

  min-height: 100vh;
  min-height: 100svh;

  display: grid;
  grid-template-columns: min(var(--_max-width, 52rem), 100%);
  place-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);
  padding: 2.5rem 0.75rem;
`;

export default FormLayout;
