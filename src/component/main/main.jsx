import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import Header from "../header/header.jsx";
import ContainerCitiesList from "../cities-list/cities-list.jsx";
import CityPlacesList from "../city-places-list/city-places-list.jsx";
import withActiveItem from "../../hocs/with-active-card.jsx";

const CityPlacesListWrapped = withActiveItem(CityPlacesList);

const Main = ({cityCurrent, placesSelected}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ContainerCitiesList/>

        <CityPlacesListWrapped
          cityCurrent = {cityCurrent}
          placesSelected = {placesSelected}
        />

      </main>
    </div>
  );
};

Main.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
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
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: state.cityCurrent,
    placesSelected: state.placesSelected,
  });

export {Main};
export default connect(mapStateToProps)(Main);
