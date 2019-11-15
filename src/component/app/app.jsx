import React from 'react';
import {ActionCreator} from '../../reducer.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import PlaceDetails from '../place-details/place-details.jsx';

const getPageScreen = ({city, places, cities, placesSelected}) => {
  switch (location.pathname) {
    case `/`:
      return <Main places={places} cities={cities} />;
    case `/place-details`:
      return <PlaceDetails place={places[0]} />;
  }

  return null;
};

const App = (props) => {
  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
};

getPageScreen.propTypes = {
  places: PropTypes.arrayOf(PropTypes.exact({
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
  })).isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities,
  places: state.places,
  placesSelected: state.places
});

export {App};
export default connect(mapStateToProps)(App);


