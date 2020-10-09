import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <img src={props.image} width={props.width} height={props.height} alt="" />
    </div>
  );
};

export default Avatar;
