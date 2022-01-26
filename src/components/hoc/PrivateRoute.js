import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import checkAuthorized from '../../utils/checkAuthorized';

const AuthRoute = ({
  component: Component,
  authenticated,
  roles,
  allowed = ['Super Admin'],
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const authorized = checkAuthorized(allowed, roles);
      if (!authenticated)
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      if (authorized) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        );
      }
    }}
  />
);

AuthRoute.propTypes = {
  roles: PropTypes.array.isRequired,
  allowed: PropTypes.array,
};

const mapStateToProps = (state) => ({
  roles: state.auth.roles,
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
