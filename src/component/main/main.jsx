import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {getCitiesList, getCityCurrent, getPlacesSelected} from "../../reducer/data/selectors";

import Header from "../header/header.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import CityPlacesList from "../city-places-list/city-places-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import {ActionsCreator} from "../../reducer/data/data";

const CityPlacesListWrapped = withActiveItem(CityPlacesList);

const Main = ({cityCurrent, citiesList, placesSelected, changeCurrentCityAndPlaces}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">

        <CitiesList
          cityCurrent = {cityCurrent}
          citiesList = {citiesList}
          changeCurrentCityAndPlaces = {changeCurrentCityAndPlaces}
        />

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
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeCurrentCityAndPlaces: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: getCityCurrent(state),
    citiesList: getCitiesList(state),
    placesSelected: getPlacesSelected(state),
  });

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCityAndPlaces: (citySelected) => dispatch(ActionsCreator.changeCityCurrent(citySelected))
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export {Main, MainContainer};
