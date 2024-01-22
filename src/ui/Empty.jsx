import styled from "styled-components";

const Styled = styled.h3`
  color: var(--color-blue-700);
  background-color: var(--color-blue-100);
  font-weight: 500;
  padding: 1rem;
  border-radius: var(--border-radius-md);
`;

function Empty({ resourceName, description }) {
  return (
    <Styled>
      {description ? description : `Không thể tìm thấy ${resourceName} nào.`}
    </Styled>
  );
}

export default Empty;
