import styled from "styled-components";
import CategoryItemActions from "./CategoryItemActions";

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

const StyledName = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: var(--font-body);
  text-transform: capitalize;
`;

export default function CategoryItem({ category }) {
  return (
    <StyledItem>
      <StyledName>{category.name}</StyledName>
      <CategoryItemActions category={category} />
    </StyledItem>
  );
}
