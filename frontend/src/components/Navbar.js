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
  const [state, actions] = useAuthStore();

  useEffect(() => {
    actions.loadUser();
  }, [actions]);

  return (
    <Theme>
      <StyledHeader>
        <div className="inner ">
          <h3 className="masthead-brand">
            <a className="nav-link" href="/">
              Twelve.Community
            </a>
          </h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/personas">
              Personas
            </a>
            <a className="nav-link" href="/stories">
              Stories
            </a>
            <a className="nav-link" href="#">
              Scenerio Mapping
            </a>
          </nav>
        </div>
      </StyledHeader>
    </Theme>
  );
};

export default Navbar;
