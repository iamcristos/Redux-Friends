import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const authenticate = ({ component:Component, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (login ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      ))
      }
    />
  );
};

const mapStateToProps = state => ({
  login: state.login.login,
});

export default connect(mapStateToProps)(authenticate);
