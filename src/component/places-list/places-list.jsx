import React from "react";
import PropTypes from "prop-types";
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {placesSelected, onSelect} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {placesSelected.map((place) => (
        <PlaceCard
          key = {`place-${place.id}`}
          place = {place}
          onMouseEnter = {() => onSelect(place.id)}
          onMouseLeave = {() => onSelect(null)}
        />))}
      {!placesSelected.length && `No places to stay available`}
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
  onSelect: PropTypes.func.isRequired
};

export default PlacesList;
