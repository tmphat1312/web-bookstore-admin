import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserInfo from "../features/authentication/UserInfo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 0.75rem 3rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserInfo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
