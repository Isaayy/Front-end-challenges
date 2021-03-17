import React from 'react';
import './Input.scss'


const Input = props => {
  return (
    <input type="text" className="input" placeholder={props.children} onBlur={props.blur}></input>
  );
};

export default Input;