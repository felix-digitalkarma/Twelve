import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/theme';

const ThemedNavbar = styled.nav`
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.on.primary};
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const UserNavLink = styled(NavLink)`
display: flex;
margin-right: 10px;
margin-left: 10px;
justify-content: flex-end;
`;


export const Navbar = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <ThemedNavbar theme={theme}>
      <NavLink href="/" theme={theme}>Twelve.Community</NavLink>
      <NavLink href="/stories" theme={theme}>Stories</NavLink>
      <NavLink href="/meetings" theme={theme}>Meetings</NavLink>

      <UserNavLink href="/register" theme={theme}>Register</UserNavLink>
      <UserNavLink href="/login" theme={theme}>Login</UserNavLink>
    </ThemedNavbar >
  );

}

export default Navbar;