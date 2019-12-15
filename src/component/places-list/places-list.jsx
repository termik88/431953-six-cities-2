import React from "react";
import PropTypes from "prop-types";

import Card from '../card/card.jsx';

const PlacesList = (props) => {
  const {placesSelected, handleAction} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {placesSelected.map((place) => (
        <Card
          key = {`place-${place.id}`}
          cardName = {`cities`}
          place = {place}
          handleAction = {handleAction}
        />))}
    </div>
  );
};

PlacesList.propTypes = {
  placesSelected: PropTypes.arrayOf(PropTypes.exact({
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
  handleAction: PropTypes.func.isRequired
};

export default PlacesList;
