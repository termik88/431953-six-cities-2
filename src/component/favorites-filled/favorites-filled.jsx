import React from "react";
import PropTypes from "prop-types";

import {BrowserPaths} from "../../constants/constants.js";

import FavoritesCity from "../favorites-city/favorites-city.jsx";

const FavoritesFilled = ({favoritesCityList, favoritesOffers, handleClickCityName}) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {favoritesCityList.map((city, key) => (
              <FavoritesCity
                key = {`city-${city}-${key}`}
                cityName = {city}
                path = {BrowserPaths.MAIN}
                handleClickCityName = {handleClickCityName}

                favoritesOffers = {favoritesOffers}
              />
            ))}

          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesFilled.propTypes = {
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
  handleClickCityName: PropTypes.func.isRequired
};

export default FavoritesFilled;
