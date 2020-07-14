import React from "react";

import "./styles/Button.css";

const Button = props => {
  return (
    <button onClick={props.onClick}
            className={`btn ${props.btnType} Button ${props.isDisabled ? 'Button--disabled' : ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
