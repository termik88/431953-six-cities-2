import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Route, Switch, Redirect} from "react-router-dom";

import {BrowserPaths} from "../../constants/constants.js";

import {Operations as OperationsData} from "../../reducer/data/data.js";
import {Operations as OperationsUser} from "../../reducer/user/user.js";

import {MainPageContainer} from '../main-page/main-page.jsx';
import {SignInPageContainer} from "../sign-in-page/sign-in-page.jsx";
import {FavoritesPageContainer} from "../favorites-page/favorites-page.jsx";
import {PropertyPageContainer} from '../property-page/property-page.jsx';

import withInputChange from "../../hocs/with-input-change/with-input-change.jsx";
import withLayout from '../../hocs/with-layout/with-layout.jsx';
import withAuthorizationFalse from "../../hocs/with-authorization-false/with-authorization-false.jsx";
import withAuthorizationTrue from "../../hocs/with-authorization-true/with-authorization-true.jsx";

const WrappedSignInPageContainer = withAuthorizationTrue(withLayout(withInputChange(SignInPageContainer), `page page--gray page--login`));
const WrappedMainPageContainer = withLayout(MainPageContainer, `page--gray page--main`);
const WrappedFavoritesPageContainer = withAuthorizationFalse(withLayout(FavoritesPageContainer, `page--favorites`));
const WrappedPropertyPageContainer = withLayout(PropertyPageContainer, ``);

class App extends PureComponent {
  componentDidMount() {
    this.props.onLoadData();
    this.props.onCheckAuthorization();
  }

  render() {
    return (
      <Switch>
        <Route path={BrowserPaths.MAIN} exact component = {WrappedMainPageContainer}/>
        <Route path={BrowserPaths.SIG_IN} exact component = {WrappedSignInPageContainer} />
        <Route path={BrowserPaths.FAVORITES} exact component = {WrappedFavoritesPageContainer}/>
        <Route path={BrowserPaths.PLACE_ID} exact component = {WrappedPropertyPageContainer}/>
        <Redirect to={BrowserPaths.MAIN} />
      </Switch>
    );
  }
}

App.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  onCheckAuthorization: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(OperationsData.loadData()),
  onCheckAuthorization: () => dispatch(OperationsUser.checkAuthorization())
});

const AppContainer = connect(null, mapDispatchToProps)(App);

export {App, AppContainer};
