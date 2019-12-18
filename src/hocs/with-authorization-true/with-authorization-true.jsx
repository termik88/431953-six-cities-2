import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {BrowserPaths} from "../../constants/constants.js";

import {getAuthorizationStatus} from "../../reducer/user/selector.js";

const withAuthorizationTrue = (Component) => {
  class WithAuthorizationTrue extends React.Component {

    render() {
      return this.props.isAuthorizationRequired ?
        <Component {...this.props} /> :
        <Redirect to={BrowserPaths.MAIN}/>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: getAuthorizationStatus(state)
  });

  WithAuthorizationTrue.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithAuthorizationTrue);
};

withAuthorizationTrue.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default withAuthorizationTrue;
