import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import Card from "../card/card.jsx";

const FavoritesCity = ({cityName, path, handleClickCityName, favoritesOffers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link locations__item-link--test"
            to={path}
            onClick={handleClickCityName}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">

        {favoritesOffers.map((place) => place.city.name === cityName ? (
          <Card
            key = {`place-${place.id}`}
            cardName = {`favorites`}
            place = {place}
          />) : ``)}

      </div>
    </li>
  );
};

FavoritesCity.propTypes = {
  cityName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleClickCityName: PropTypes.func.isRequired,
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
};

export default FavoritesCity;
