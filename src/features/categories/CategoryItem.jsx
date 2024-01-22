import styled from "styled-components";
import CategoryItemActions from "./CategoryItemActions";
import { HiMiniChevronRight } from "react-icons/hi2";

const StyledItem = styled.details`
  --_padding: 0.5rem 0.75rem;

  &[open] [data-role="indicator"] {
    transform: rotate(90deg);
  }
`;

const StyledSummary = styled.summary`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--_padding);

  & > :last-child {
    margin-inline-start: auto;
  }
`;

const StyledName = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: var(--font-body);
  text-transform: capitalize;
`;

const StyledDescription = styled.p`
  padding: var(--_padding);
  font-size: 0.875rem;
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  border-block-start: var(--border-200);
  border-color: var(--color-grey-300);
`;

export default function CategoryItem({ category }) {
  return (
    <StyledItem>
      <StyledSummary>
        <HiMiniChevronRight
          role="presentation"
          size={18}
          data-role="indicator"
        />
        <StyledName>{category.name}</StyledName>
        <CategoryItemActions category={category} />
      </StyledSummary>
      <StyledDescription>
        <strong>Mô tả:</strong> {category.description}
      </StyledDescription>
    </StyledItem>
  );
}
