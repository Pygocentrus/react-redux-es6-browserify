// NPM
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Components
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

// Reducers
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

// App component
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

// App bootstraping - combine reducers into a single one
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// Render the app
ReactDOM.render(
  <Provider store={ createStore(todoApp) }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
