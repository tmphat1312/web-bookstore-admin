import styled from "styled-components";

const Container = styled.div`
  --_container-width: 90rem;

  max-inline-size: var(--_container-width, 120rem);
  margin-inline: auto;
  padding: 1.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  contain: paint;
`;

export default Container;
