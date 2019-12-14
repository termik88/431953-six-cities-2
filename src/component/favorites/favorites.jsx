import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getCitiesListFavorites, getFavoritesPlaces} from "../../reducer/data/selectors.js";
import {ActionsCreator, Operations} from "../../reducer/data/data.js";

import FavoritesFilled from "../favorites-filled/favorites-filled.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClickCityName = this.handleClickCityName.bind(this);
  }

  handleClickCityName(evt) {
    this.props.changeCurrentCityAndPlaces(evt.target.textContent);
  }

  componentDidMount() {
    this.props.getDataFavoritesPlaces();
  }

  getFavoritesScreen(favoritesOffers) {
    return favoritesOffers.length > 0 ?
      <FavoritesFilled
        favoritesCityList = {this.props.favoritesCityList}
        favoritesOffers = {this.props.favoritesOffers}
        handleClickCityName = {this.handleClickCityName}
      /> :
      <FavoritesEmpty/>;
  }

  render() {
    return (
      <>
        {this.getFavoritesScreen(this.props.favoritesOffers)}

        <footer className="footer container">
          <Link className="footer__logo-link" to={`/`}>
            <img className="footer__logo" src="../img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </>
    );
  }

  componentWillUnmount() {
    this.props.getDataFavoritesPlaces();
  }
}

const mapStateToProps = (state) => ({
  favoritesCityList: getCitiesListFavorites(state),
  favoritesOffers: getFavoritesPlaces(state),
});

const mapDispatchToProps = (dispatch) => ({
  getDataFavoritesPlaces: () => dispatch(Operations.getDataFavoritesPlaces()),
  changeCurrentCityAndPlaces: (citySelected) => dispatch(ActionsCreator.changeCityCurrent(citySelected))
});

const FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export {Favorites, FavoritesContainer};
