import React from 'react';

import './Button.scss';

const Button = props => {
  return (
    <button className={`btn btn--${props.event}`} onClick={props.click}>
      {`${props.event} user`}
    </button>
  );
};

export default Button;
