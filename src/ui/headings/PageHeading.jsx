import styled from "styled-components";
import SubHeading from "./SubHeading";
import ResetURLButton from "./buttons/ResetURLButton";
import RefreshButton from "./buttons/RefreshButton";

const Container = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function PageHeading({ children, queryKey, reset }) {
  return (
    <Container>
      <SubHeading>{children}</SubHeading>
      {reset && <ResetURLButton />}
      {queryKey && <RefreshButton queryKey={queryKey} />}
    </Container>
  );
}

export default PageHeading;
