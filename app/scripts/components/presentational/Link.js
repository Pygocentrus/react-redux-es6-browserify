// NPM
import React from 'react';

// Filter presentational component
const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }
    }>
      { children }
    </a>
  );
};

export default Link;
