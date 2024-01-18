import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import SubHeading from "../ui/headings/SubHeading";
import Button from "../ui/buttons/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: var(--color-grey-50);
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3rem;
  flex: 0 1 47.5rem;
  text-align: center;
`;

const NotFound = styled.div`
  font-size: 4rem;
  letter-spacing: 1ch;
  color: var(--color-grey-400);
  margin-block: 1rem;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <SubHeading as="h1">Không thể tìm thấy trang 😢</SubHeading>
        <NotFound role="presentation">404</NotFound>
        <Button onClick={moveBack} size="large">
          <span role="presentation">&larr; </span>
          Quay lại
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
