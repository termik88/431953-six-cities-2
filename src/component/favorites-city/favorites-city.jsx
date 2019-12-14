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
            className="locations__item-link"
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

};

export default FavoritesCity;
