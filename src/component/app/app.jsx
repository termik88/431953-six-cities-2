import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Route, Switch, Redirect} from "react-router-dom";

import {Operations} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";

import {SignInContainer} from "../sign-in/sign-in.jsx";
import {MainContainer} from '../main/main.jsx';
// import {PlaceDetails} from '../place-details/place-details.jsx';
import Favorites from "../favorites/favorites.jsx";

import withInputChange from "../../hocs/with-input-change/with-input-change.jsx";
import withLayout from '../../hocs/with-layout/with-layout.jsx';

const WrappedSignIn = withLayout(withInputChange(SignInContainer), `page page--gray page--login`);
const WrappedMainContainer = withLayout(MainContainer, `page--gray page--main`);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadData();
  }


  render() {
    return (
      <Switch>
        <Route path='/' exact component = {WrappedMainContainer}/>
        <Route path='/login' component = {WrappedSignIn} />
        <Route path='/favorites' component = {Favorites}/>
        {/*<Route path='/place-details/:id' exact component = {} />*/}
        <Route
          render = {() => (
            <h1>
              404.
              <br/>
              <small>Page not found</small>
            </h1>
          )}
        />
        <Redirect to='/' />
      </Switch>
    );
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
