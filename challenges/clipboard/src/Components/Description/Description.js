import React from 'react';

import './Description.css';

const Description = props => {
  return (
    <p className={`${props.margin ? 'desc desc--margin' : 'desc'}`} style={{ maxWidth: `${props.width}` }}>
      {props.children}
    </p>
  );
};

export default Description;
