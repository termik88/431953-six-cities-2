import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Route, Switch, Redirect} from "react-router-dom";

import {Operations as OperationsData} from "../../reducer/data/data.js";
import {Operations as OperationsUser} from "../../reducer/user/user.js";

import withInputChange from "../../hocs/with-input-change/with-input-change.jsx";
import withLayout from '../../hocs/with-layout/with-layout.jsx';
import withAuthorization from "../../hocs/with-authorization/with-authorization.jsx";

import MainPage from '../main-page/main-page.jsx';
import {SignInPageContainer} from "../sign-in-page/sign-in-page.jsx";
import {FavoritesPageContainer} from "../favorites-page/favorites-page.jsx";
import {PropertyPageContainer} from '../property-page/property-page.jsx';

const WrappedSignInPageContainer = withLayout(withInputChange(SignInPageContainer), `page page--gray page--login`);
const WrappedMainPage = withLayout(MainPage, `page--gray page--main`);
const WrappedFavoritesPageContainer = withAuthorization(withLayout(FavoritesPageContainer, `page--favorites`));
const WrappedPropertyPageContainer = withLayout(PropertyPageContainer, ``);

class App extends PureComponent {
  componentDidMount() {
    this.props.onLoadData();
    this.props.onCheckAuthorization();
  }

  render() {
    return (
      <Switch>
        <Route path='/' exact component = {WrappedMainPage}/>
        <Route path='/login' exact component = {WrappedSignInPageContainer} />
        <Route path='/favorites' exact component = {WrappedFavoritesPageContainer}/>
        <Route path='/offer/:id' exact component = {WrappedPropertyPageContainer}/>
        <Redirect to='/' />
        <Route
          render = {() => (
            <h1>
              404.
              <br/>
              <small>Page not found</small>
            </h1>
          )}
        />
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
