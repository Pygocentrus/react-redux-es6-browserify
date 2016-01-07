const filterActions = {

  setVisibilityFilter: (filter) => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    };
  }

}

export default filterActions;
