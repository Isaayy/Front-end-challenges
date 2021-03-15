import React from 'react';

import './Heading.css';

const Heading = props => {
  return <h2 className="heading">{props.children}</h2>;
};

export default Heading;
