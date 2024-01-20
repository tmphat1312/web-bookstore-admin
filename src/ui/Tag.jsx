import styled from "styled-components";

const Tag = styled.span`
  inline-size: fit-content;
  text-transform: uppercase;
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;
