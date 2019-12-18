import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

import {BrowserPaths} from "../../constants/constants.js";
import {getCityCurrent} from "../../reducer/data/selectors.js";
import {Operations} from "../../reducer/user/user.js";

const SignInPage = ({cityCurrent, email, password, isValidationInput, onInputChange, onSendAuthorizationData}) => {
  const history = useHistory();
  const handleRedirect = () => history.push(BrowserPaths.MAIN);

  const handleSend = (evt) => {
    evt.preventDefault();
    onSendAuthorizationData(email, password, handleRedirect);
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                onChange={onInputChange}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                onChange={onInputChange}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""/>
            </div>
            <button
              onClick={handleSend}
              className="login__submit form__submit button"
              type="submit"
              disabled={!isValidationInput}>Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={`/`}>
              <span>{cityCurrent}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

SignInPage.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSendAuthorizationData: PropTypes.func.isRequired,
  isValidationInput: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  cityCurrent: getCityCurrent(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendAuthorizationData: (email, password, handleRedirect) => dispatch(Operations.sendAuthorizationData(email, password, handleRedirect))
});

const SignInPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignInPage);

export {SignInPage, SignInPageContainer};

