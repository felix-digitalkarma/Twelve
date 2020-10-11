import React from "react";
import styled from "styled-components";

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
