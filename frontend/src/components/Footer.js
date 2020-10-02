import React from 'react';
import styled from 'styled-components';

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
display:flex;
flex-direction: row;
justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #FFF;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <NavContainer>
        <NavLink href="https://www.linkedin.com/in/felixmontanez/" rel="noopener noreferrer" target="_blank">LinkedIn</NavLink>
        <NavLink href="https://github.com/felix-digitalkarma/Twelve" rel="noopener noreferrer" target="_blank">Github</NavLink>
        <NavLink href="https://paypal.me/felixmontanez?locale.x=en_US" rel="noopener noreferrer" target="_blank">Paypal</NavLink>
      </NavContainer>
    </StyledFooter >
  );
}

export default Footer;



