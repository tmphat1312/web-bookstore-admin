import styled from "styled-components";

export default styled.div`
  --_app-width: 98rem;
  --_sidebar-min-width: 16.25rem;
  --_sidebar-max-width: 20rem;

  max-inline-size: var(--_app-width, 120rem);
  min-block-size: 100vh;
  min-block-size: 100svh;
  margin-inline: auto;
  border: var(--border-200);
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-columns:
    minmax(var(--_sidebar-min-width), var(--_sidebar-max-width))
    1fr;
  grid-template-rows: auto 1fr;
`;
