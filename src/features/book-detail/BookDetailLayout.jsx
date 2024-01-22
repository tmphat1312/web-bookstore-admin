import styled from "styled-components";
import BookDetailActions from "./BookDetailActions";
import BookDetailFooter from "./BookDetailFooter";
import BookDetailHeader from "./BookDetailHeader";
import BookDetailInformation from "./BookDetailInformation";

export const StyledLayout = styled.div`
  block-size: 100%;
  display: grid;
  grid-template-columns: 1.3fr 4fr;
  gap: 1rem;
  position: relative;
`;

export const StyledSticky = styled.div`
  position: sticky;
  position: sticky;
  inset-block-start: 0.5rem;
  block-size: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 9 / 12;
  border-radius: var(--border-radius-md);
  border: var(--border-200);
  box-shadow: var(--shadow-md);
`;

export default function BookDetailLayout({ book = {} }) {
  return (
    <StyledLayout>
      <BookDetailHeader book={book} />

      <StyledSticky>
        <StyledImage src={book.image} alt={book.name} />
        <BookDetailActions book={book} />
      </StyledSticky>

      <BookDetailInformation book={book} />

      <BookDetailFooter book={book} />
    </StyledLayout>
  );
}
