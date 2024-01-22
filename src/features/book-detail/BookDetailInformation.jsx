import styled from "styled-components";
import Column from "../../ui/Column";
import { HiMiniStar } from "react-icons/hi2";

const StyledContainer = styled.div``;

const StyledSection = styled.section`
  background-color: var(--color-grey-0);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  & > * + * {
    margin-block-start: 0.25rem;
  }

  &:not(:last-of-type) {
    margin-block-end: 1rem;
  }

  & strong {
    text-transform: capitalize;
  }
`;

const StyledCategory = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: var(--color-silver-100);
  color: var(--color-silver-700);
  inline-size: fit-content;
  border-radius: var(--border-radius-md);
`;

const StyledRating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;

  & svg {
    color: var(--color-yellow-700);
  }
`;

const StyledDescription = styled.details`
  &[open] [data-indicator="short-desc"] {
    display: none;
  }
`;

export default function BookDetailInformation({ book = {} }) {
  return (
    <StyledContainer>
      <StyledSection>
        <h1>{book.name}</h1>
        <div>
          <strong>Tác giả: </strong>
          <span>{book.author}</span>
        </div>
        <div>
          <strong>Năm xuất bản: </strong>
          <time>{book.publishedYear}</time>
        </div>
      </StyledSection>

      <StyledSection>
        <div>
          <strong>Giá nhập: </strong>
          <Column.Price>{book.purchasePrice}</Column.Price>
        </div>
        <div>
          <strong>Giá bán: </strong>
          <Column.Price>{book.sellingPrice}</Column.Price>
        </div>
        <div>
          <strong>Số lượng tồn: </strong>
          <span>{book.quantity}</span>
        </div>
      </StyledSection>
      <StyledSection>
        <StyledCategory>{book.category.name}</StyledCategory>
        <div>
          <strong>Đánh giá: </strong>
          <StyledRating>
            <HiMiniStar role="presentation" />
            <span>{book.ratingsAverage}</span>
          </StyledRating>
        </div>
        <StyledDescription>
          <summary>
            <strong>Mô tả: </strong>
            <p data-indicator="short-desc">{`${book.description.slice(
              0,
              256
            )}...`}</p>
          </summary>
          <p>{book.description}</p>
        </StyledDescription>
      </StyledSection>
    </StyledContainer>
  );
}
