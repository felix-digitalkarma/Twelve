import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}

export default Card;