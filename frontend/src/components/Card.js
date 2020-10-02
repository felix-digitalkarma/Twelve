import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const CardWrapper = styled.div`
  padding: 20px;
  margin: 10px;
`;

const StyledHeader3 = styled.h3`
  padding: 5px;
  margin: 0px;
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <StyledHeader3>{props.title}</StyledHeader3>
      <p>
        {props.user.firstName} {props.user.lastInitial}
      </p>
      <p>{props.body}</p>
      <p>
        <Moment format="LLL">{props.created}</Moment>
      </p>
    </CardWrapper>
  );
};

export default Card;
