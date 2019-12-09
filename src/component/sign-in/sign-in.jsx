import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {getCityCurrent} from "../../reducer/data/selectors.js";
import {Operations} from "../../reducer/user/user.js";

const SignIn = ({cityCurrent, email, password, isValidationInput, onInputChange, handleSendAuthorizationData, history}) => {
  const handleRedirect = () => history.push(`/`);

  const handleSend = (evt) => {
    evt.preventDefault();
    handleSendAuthorizationData(email, password, handleRedirect);
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={handleSend} className="login__form form" action="#" method="post">
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

SignIn.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  handleSendAuthorizationData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cityCurrent: getCityCurrent(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSendAuthorizationData: (email, password, handleRedirect) => dispatch(Operations.sendAuthorizationData(email, password, handleRedirect))
});

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export {SignIn, SignInContainer};

