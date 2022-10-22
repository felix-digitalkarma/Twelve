import React, { Fragment } from "react";

const Avatar = (props) => {
  return (
    <Fragment>
      <img src={props.image} width={props.width} height={props.height} alt="" />
    </Fragment>
  );
};

export default Avatar;
