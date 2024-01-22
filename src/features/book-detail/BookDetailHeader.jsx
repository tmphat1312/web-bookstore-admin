import styled from "styled-components";
import BackButton from "../../ui/BackButton";

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export default function BookDetailHeader({ book = {} }) {
  return (
    <StyledHeader>
      <h1>Thông tin sách #{book.id}</h1>
      <BackButton />
    </StyledHeader>
  );
}
