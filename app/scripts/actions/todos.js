let nextTodoId = 0;

// Add todo action creator
const todoActions = {

  addTodo: (text) => {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    };
  },

  toggleTodo: (id) => {
    return {
      type: 'TOGGLE_TODO',
      id
    };
  }

}

export default todoActions;
