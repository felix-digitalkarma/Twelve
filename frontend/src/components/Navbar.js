import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Theme from "../contexts/theme";

import { useAuthStore } from "../contexts/auth";

const ThemedNavbar = styled.nav`
  min-height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
`;

const NavLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.on.primary};
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const AuthBox = styled.div`
  display: flex;
  margin-left: auto;
`;

const AuthLink = styled(NavLink)``;
export const Navbar = () => {
  const [state, actions] = useAuthStore();

  useEffect(() => {
    actions.loadUser();
  }, [actions]);

  return (
    <Theme>
      <ThemedNavbar>
        <NavLink href="/">Twelve.Community</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        {state && state.isAuthenticated ? (
          <AuthBox>
            Welcome {state.user && state.user.firstName}
            <AuthLink href="/" onClick={actions.logout}>
              Log Out
            </AuthLink>
          </AuthBox>
        ) : (
          <Fragment>
            <AuthBox>
              <AuthLink href="/register">Register</AuthLink>
              <AuthLink href="/login">Login</AuthLink>
            </AuthBox>
          </Fragment>
        )}
      </ThemedNavbar>
    </Theme>
  );
};

export default Navbar;
