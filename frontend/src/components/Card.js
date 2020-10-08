import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const CardWrapper = styled.div`
  padding: 20px;
  margin: 10px;
`;

const StyledHeader3 = styled.h3``;

const StyledContent = styled.p`
  padding: 0px;
  margin: 0px;
`;

const Card = (props) => {
  const { title, body, created } = props;
  return (
    <CardWrapper>
      <StyledHeader3>{title}</StyledHeader3>
      <Moment format="l">{created}</Moment>
      <StyledContent>{body}</StyledContent>
    </CardWrapper>
  );
};

export default Card;
