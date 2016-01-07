// NPM
import React from 'react';

// Components
import Todo from './Todo';

// Todo list presentational component
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {
      todos.map(todo =>
        <Todo
          key={ todo.id }
          { ...todo }
          onClick={ () => onTodoClick(todo.id) }
        />
      )
    }
  </ul>
);

export default TodoList;
