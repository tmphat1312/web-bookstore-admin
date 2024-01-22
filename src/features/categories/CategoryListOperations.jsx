import styled from "styled-components";
import SearchBox from "../../ui/SearchBox";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CategoryListOperations() {
  return (
    <StyledContainer>
      <SearchBox />
    </StyledContainer>
  );
}
