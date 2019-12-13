import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Route, Switch, Redirect} from "react-router-dom";

import {Operations} from "../../reducer/data/data.js";

import withInputChange from "../../hocs/with-input-change/with-input-change.jsx";
import withLayout from '../../hocs/with-layout/with-layout.jsx';
import withAuthorization from "../../hocs/with-authorization/with-authorization.jsx";

import Main from '../main/main.jsx';
import {SignInContainer} from "../sign-in/sign-in.jsx";
import {FavoritesContainer} from "../favorites/favorites.jsx";
import {PropertyContainer} from '../property/property.jsx';

const WrappedSignIn = withLayout(withInputChange(SignInContainer), `page page--gray page--login`);
const WrappedMain = withLayout(Main, `page--gray page--main`);
const WrappedFavoritesContainer = withAuthorization(withLayout(FavoritesContainer, `page--favorites`));
const WrappedPropertyContainer = withLayout(PropertyContainer, ``);

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
        <Route path='/' exact component = {WrappedMain}/>
        <Route path='/login' exact component = {WrappedSignIn} />
        <Route path='/favorites' exact component = {WrappedFavoritesContainer}/>
        <Route path='/offer/:id' exact component = {WrappedPropertyContainer}/>
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
  loadData: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(Operations.loadData())
});

const AppContainer = connect(null, mapDispatchToProps)(App);

export {App, AppContainer};
