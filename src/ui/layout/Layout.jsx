import styled from "styled-components";

export default styled.div`
  --app-width: 90rem;

  max-inline-size: var(--app-width, 120rem);
  margin-inline: auto;
  min-block-size: 100vh;
  min-block-size: 100svh;
  border: var(--border-200);
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-columns: minmax(16.25rem, 20rem) 1fr;
  grid-template-rows: auto 1fr;
`;
