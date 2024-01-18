import styled from "styled-components";

const Container = styled.div`
  --_container-width: 75rem;

  max-inline-size: var(--_container-width, 120rem);
  margin-inline: auto;
  padding: 1.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  contain: paint;

  ${(props) => props.sm && `--main-width: var(--main-width-sm, 120rem);`}
`;

export default Container;
