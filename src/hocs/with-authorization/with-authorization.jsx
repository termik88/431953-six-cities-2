import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from "../../reducer/user/selector.js";

const withAuthorization = (Component) => {
  class WithAuthorization extends React.Component {

    render() {
      return this.props.isAuthorizationRequired ?
        <Component {...this.props} /> :
        <Redirect to="/login"/>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: !getAuthorizationStatus(state)
  });

  WithAuthorization.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithAuthorization);
};

withAuthorization.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default withAuthorization;
