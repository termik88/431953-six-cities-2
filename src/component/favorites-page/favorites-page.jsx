import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ActionsCreator, Operations} from "../../reducer/data/data.js";
import {getCitiesListFavorites, getFavoritesPlaces} from "../../reducer/data/selectors.js";

import FavoritesFilled from "../favorites-filled/favorites-filled.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";

class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClickCityName = this.handleClickCityName.bind(this);
  }

  handleClickCityName(evt) {
    this.props.onChangeCurrentCity(evt.target.textContent);
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

FavoritesPage.propTypes = {
  favoritesOffers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      location: PropTypes.exact({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      })
    }),
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    rating: PropTypes.number,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    price: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.exact({
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string,
      avatarUrl: PropTypes.string
    }),
    description: PropTypes.string,
    location: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  })).isRequired,
  favoritesCityList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getDataFavoritesPlaces: PropTypes.func.isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  favoritesCityList: getCitiesListFavorites(state),
  favoritesOffers: getFavoritesPlaces(state),
});

const mapDispatchToProps = (dispatch) => ({
  getDataFavoritesPlaces: () => dispatch(Operations.getDataFavoritesPlaces()),
  onChangeCurrentCity: (citySelected) => dispatch(ActionsCreator.changeCityCurrent(citySelected))
});

const FavoritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

export {FavoritesPage, FavoritesPageContainer};
