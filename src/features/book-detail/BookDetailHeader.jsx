import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import ButtonText from "../../ui/buttons/ButtonText";

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export default function BookDetailHeader({ book = {} }) {
  const moveBack = useMoveBack();

  return (
    <StyledHeader>
      <h1>Thông tin sách #{book.id}</h1>
      <ButtonText onClick={moveBack}>
        <span role="presentation">&larr;</span>
        <span>Quay lại</span>
      </ButtonText>
    </StyledHeader>
  );
}
