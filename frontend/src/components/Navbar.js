import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/theme';

const ThemedNavbar = styled.nav`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: ${({ theme }) => theme.color.on.primary};
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Navbar = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <ThemedNavbar theme={theme}>
      <NavLink href="/" theme={theme}>Twelve.Community</NavLink>
      <NavLink href="/stories" theme={theme}>Stories</NavLink>
      <NavLink href="/meetings" theme={theme}>Meetings</NavLink>
      <NavLink href="/register" theme={theme}>Register</NavLink>
      <NavLink href="/login" theme={theme}>Login</NavLink>
    </ThemedNavbar >
  );

}

export default Navbar;