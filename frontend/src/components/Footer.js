import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #222;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #fff;
`;

const Footer = () => {
  return (
    <footer className="mastfoot text-center">
      <NavContainer>
        <p>&copy; 2020 Twelve.Community {"  "}&middot;</p>
        <p>
          <NavLink href="" alt="linkedin">
            LinkedIn
          </NavLink>
          &middot;
        </p>
        <p>
          <NavLink href="" alt="github">
            Github
          </NavLink>
          &middot;
        </p>
        <p>
          <NavLink href="" alt="donate">
            Support
          </NavLink>
        </p>
      </NavContainer>
    </footer>
  );
};

export default Footer;
