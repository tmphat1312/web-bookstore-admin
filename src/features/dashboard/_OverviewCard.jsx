import styled from "styled-components";

const _Layout = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;

    svg {
      color: var(--color-${(props) => props.color}-700);
    }
  }
`;

export default function _OverviewCard({ label, value, icon, color }) {
  return (
    <_Layout color={color}>
      <h4>{label}</h4>
      <div>
        <span>{icon}</span>
        <span>{value}</span>
      </div>
    </_Layout>
  );
}
