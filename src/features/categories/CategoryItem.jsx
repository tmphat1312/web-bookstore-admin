import styled from "styled-components";
import { toTitleCase } from "../../utils/helpers";
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
`;

export default function CategoryItem({ category }) {
  return (
    <StyledItem>
      <StyledName>{toTitleCase(category.name)}</StyledName>
      <CategoryItemActions category={category} />
    </StyledItem>
  );
}
