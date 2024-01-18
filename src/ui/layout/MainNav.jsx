import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ADMIN_ROUTES } from "../../constants/routes";

const Nav = styled.nav`
  block-size: 100%;
  font-family: var(--font-heading);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  block-size: 100%;

  li:has([data-meta="bottom"]) {
    margin-top: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    transition: all 200ms;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-400);
    transition: all 200ms;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <Nav>
      <NavList>
        {ADMIN_ROUTES.map((route) => (
          <li key={route.path}>
            <StyledNavLink to={route.path} data-meta={route.meta}>
              <route.icon />
              <span>{route.name}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
}

export default MainNav;
