import React from 'react';

export const UserCircle = (props) => (
  <span className={`fa-stack ${props.spanClass || ''}`}>
    <i
      className={`fas fa-circle text-primary fa-stack-2x ${props.circleClass || ''
        }`}
    ></i>
    <i className={`fas fa-user fa-stack-1x ${props.userClass || ''}`}></i>
  </span>
);
