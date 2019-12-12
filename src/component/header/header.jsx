import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {getAuthorizationStatus, getUserData} from "../../reducer/user/selector";

const Header = ({userData, isAuthorizationRequired}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${location.pathname === `/` ? `header__logo-link--active` : ``}`}
              to={`/`}>
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {location.pathname !== `/login` ?
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={`/favorites`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {isAuthorizationRequired ?
                      <span className="header__login">Sign in</span> :
                      <span className="header__user-name user__name">{userData.email}</span>}
                  </Link> : ``}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userData: PropTypes.exact({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  userData: getUserData(state)
});

const HeaderContainer = connect(mapStateToProps)(Header);

export {Header, HeaderContainer};
