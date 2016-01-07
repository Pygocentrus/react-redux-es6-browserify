// NPM
import React from 'react';

// Single Todo presentational component
const Todo = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li
      onClick={ onClick }
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      { text }
    </li>
  );
};

export default Todo;
