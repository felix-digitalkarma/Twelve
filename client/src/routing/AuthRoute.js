import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const AuthRoute = (props) => {
  const { type, isAuthenticated, user } = props;
  console.log('authroute user: ', user);
  // rules
  // admin route - admin: needs role 1
  // private route - service: 2
  // guest route - newcomer: 3

  // Handle the redirects
  // guest route and user is authenticated, we redirect them to rentals
  if (type === 'guest') {
    return <Route {...props} />;
  }

  // private route and user is not authenticated, we redirect them to /
  else if (type === 'private' && !isAuthenticated) {
    return <Redirect to="/" />;
  } else if (
    type === 'admin' &&
    !isAuthenticated &&
    user &&
    !user.role === 3
  ) {
    return <Redirect to="/" />;
  } else {
    // otherwise we pass them through
    return <Route {...props} />;
  }
};

AuthRoute.propTypes = {
  type: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(AuthRoute);
