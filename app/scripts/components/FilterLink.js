// NPM
import React from 'react';
import { connect } from 'react-redux';

// Components
import Link from './presentational/Link';

// Actions
import filterActions from '../actions/filters';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(filterActions.setVisibilityFilter(ownProps.filter));
    }
  };
};

// Filterlink container component wrapper, made with ReactRedux
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;
