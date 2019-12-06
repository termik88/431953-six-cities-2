import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import SvgBlock from '../svg-block/svg-block.jsx';
import {MainContainer} from '../main/main.jsx';
import {SignInContainer} from "../sign-in/sign-in.jsx";

import {Operations} from "../../reducer/data/data.js";
import withInputChange from "../../hocs/with-input-change/with-input-change.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";

const SignInWrapped = withInputChange(SignInContainer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return this.getPageScreen();
  }

  getPageScreen() {
    if (this.props.isAuthorizationRequired) {
      return (
        <>
          <SvgBlock/>
          <SignInWrapped/>
        </>
      );
    }

    switch (location.pathname) {
      case `/`:
        return (
          <>
            <SvgBlock/>
            <MainContainer/>
          </>
        );
      case `/login`:
        return (
          <>
            <SvgBlock/>
            <SignInWrapped/>
          </>
        );
    }

    return null;
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(Operations.loadData())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export {App, AppContainer};
