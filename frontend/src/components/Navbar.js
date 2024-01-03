import React, { useEffect } from "react";
import styled from "styled-components";
import Theme from "../contexts/theme";
import { useAuthStore } from "../contexts/auth";

const StyledHeader = styled.header`
  padding: 10px;
  min-height: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Navbar = () => {
  const [{ isAuthenticated }, actions] = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) actions.loadUser();
  }, [isAuthenticated, actions]);

  return (
    <Theme>
      <StyledHeader>
        <div className="inner text-center">
          <h3 className="masthead-brand">
            <a className="nav-link" href="/">
              Twelve.Community
            </a>
          </h3>
          <nav className="nav nav-masthead justify-content-center">
            {/* <a className="nav-link" href="/register">
              Register
            </a>
            <a className="nav-link" href="/login">
              Login
            </a>
            <a className="nav-link" href="/stories">
              Stories
            </a>*/}
          </nav>
        </div>
      </StyledHeader>
    </Theme>
  );
};

export default Navbar;
