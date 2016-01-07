// NPM
import React from 'react';
import { connect } from 'react-redux';

// Actions
import todoActions from '../actions/todos';

// Header component, neither presentational nor container
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={(node) => {
          input = node;
        }
      }/>
      <button onClick={() => {
          dispatch(todoActions.addTodo(input.value));
          input.value = '';
        }
      }>
        Add todo
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
