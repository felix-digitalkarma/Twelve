import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContextProvider';
import { AuthContext } from '../contexts/AuthContextProvider';

const ThemedNavbar = styled.nav`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: ${({ theme }) => theme.color.on.primary};
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const NavButton = styled.button`
  display: flex;
  position: absolute;
  right: 10px;
  padding: 10px;
`;


export const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <ThemedNavbar theme={theme}>
      <NavLink theme={theme} href="/">Twelve.Community</NavLink>
      <NavLink theme={theme} href="/stories">Stories</NavLink>

      { isAuthenticated ? <NavLink theme={theme} href="/">Log Out</NavLink>
        :
        <Fragment>
          <NavLink theme={theme} href="/register">Register</NavLink>
          <NavLink theme={theme} href="/login">Login</NavLink>
        </Fragment>
      }
      <NavButton onClick={toggleTheme}>Toggle Theme</NavButton>
    </ThemedNavbar >
  );

}

export default Navbar;