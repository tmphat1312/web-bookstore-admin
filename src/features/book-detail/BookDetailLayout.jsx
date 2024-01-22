import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/buttons/Button";
import ButtonText from "../../ui/buttons/ButtonText";
import BookDetailActions from "./BookDetailActions";
import BookDetailInformation from "./BookDetailInformation";

const StyledLayout = styled.div`
  block-size: 100%;
  display: grid;
  grid-template-columns: 1.3fr 4fr;
  gap: 1rem;
  position: relative;
`;

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  text-align: end;
`;

const StyledFooter = styled(StyledHeader).attrs({ as: "footer" })``;

const StyledSticky = styled.div`
  position: sticky;
  position: sticky;
  inset-block-start: 0.5rem;
  block-size: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 9 / 12;
  border-radius: var(--border-radius-md);
  border: var(--border-200);
  box-shadow: var(--shadow-md);
`;

export default function BookDetailLayout({ book = {} }) {
  const moveBack = useMoveBack();

  return (
    <StyledLayout>
      <StyledHeader>
        <ButtonText onClick={moveBack}>
          <span role="presentation">&larr;</span>
          <span>Quay lại</span>
        </ButtonText>
      </StyledHeader>

      <StyledSticky>
        <StyledImage src={book.image} alt={book.name} />
        <BookDetailActions book={book} />
      </StyledSticky>

      <BookDetailInformation book={book} />

      <StyledFooter>
        <Button variation="secondary" onClick={moveBack}>
          Quay lại
        </Button>
      </StyledFooter>
    </StyledLayout>
  );
}
