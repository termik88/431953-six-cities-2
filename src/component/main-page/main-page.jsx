import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {
  getCitiesList,
  getCityCurrent,
  getPlacesSelected,
  getSortMethodCurrent,
  getSortMethodsList,
} from "../../reducer/data/selectors.js";
import {ActionsCreator} from "../../reducer/data/data.js";

import CitiesList from "../cities-list/cities-list.jsx";
import CityPlacesList from "../city-places-list/city-places-list.jsx";

import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const WrappedCityPlacesList = withActiveItem(CityPlacesList);

const MainPage = ({cityCurrent, citiesList, onChangeCurrentCity,
  placesSelected, sortMethodsList, sortMethodCurrent, onChangeSortMethod}) => {

  return (
    <main className="page__main page__main--index">
      <CitiesList
        cityCurrent = {cityCurrent}
        citiesList = {citiesList}
        onChangeCurrentCity = {onChangeCurrentCity}
      />

      <WrappedCityPlacesList
        cityCurrent = {cityCurrent}
        placesSelected = {placesSelected}
        sortMethodsList = {sortMethodsList}
        sortMethodCurrent = {sortMethodCurrent}
        onChangeSortMethod = {onChangeSortMethod}
      />
    </main>
  );
};

MainPage.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChangeCurrentCity: PropTypes.func.isRequired,

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
  sortMethodsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  })),
  sortMethodCurrent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  }),
  onChangeSortMethod: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: getCityCurrent(state),
    citiesList: getCitiesList(state),
    placesSelected: getPlacesSelected(state),
    sortMethodsList: getSortMethodsList(state),
    sortMethodCurrent: getSortMethodCurrent(state)
  });

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrentCity: (citySelected) => dispatch(ActionsCreator.changeCityCurrent(citySelected)),
  onChangeSortMethod: (method) => dispatch(ActionsCreator.changeSortMethod(method))
});

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export {MainPage, MainPageContainer};
