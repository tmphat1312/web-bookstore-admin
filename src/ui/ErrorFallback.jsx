/* eslint-disable react/prop-types */
import GlobalStyles from "../styles/GlobalStyles";

import styled from "styled-components";

import SubHeading from "./SubHeading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  height: 100svh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3rem;
  flex: 0 1 60rem;
  text-align: center;

  & h1 {
    margin-bottom: 1rem;
  }

  & p {
    margin-bottom: 2rem;
    color: var(--color-grey-500);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <SubHeading as="h1">Có lỗi xảy ra 🧐</SubHeading>
          <p>{error.message}</p>
          <Button size="large" onClick={resetErrorBoundary}>
            Thử lại
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
