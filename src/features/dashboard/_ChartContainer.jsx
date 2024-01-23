import styled from "styled-components";

const StyledChartContainer = styled.div`
  background-color: var(--color-grey-0);

  padding: 2rem;
  border: var(--border-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

export default StyledChartContainer;
