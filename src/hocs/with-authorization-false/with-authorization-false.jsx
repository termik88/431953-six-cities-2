import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from "../../reducer/user/selector.js";

const withAuthorizationFalse = (Component) => {
  class WithAuthorizationFalse extends React.Component {

    render() {
      return this.props.isAuthorizationRequired ?
        <Component {...this.props} /> :
        <Redirect to="/login"/>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: !getAuthorizationStatus(state)
  });

  WithAuthorizationFalse.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithAuthorizationFalse);
};

withAuthorizationFalse.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default withAuthorizationFalse;
