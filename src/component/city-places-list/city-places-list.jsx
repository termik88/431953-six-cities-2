import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {getCityCurrent, getPlacesSelected, getSortMethodCurrent, getSortMethodsList} from "../../reducer/data/selectors.js";
import {ActionsCreator} from "../../reducer/data/data.js";

import SortMethodsList from "../sort-methods-list/sort-methods-list.jsx";
import PlacesList from '../places-list/places-list.jsx';
import Map from "../map/map.jsx";

import withToggle from "../../hocs/with-toggle/with-toggle.jsx";

const WrappedSortMethodsList = withToggle(SortMethodsList);

const CityPlacesList = ({cityCurrent, placesSelected, handleAction, active, sortMethodsList, sortMethodCurrent, changeSortMethod}) => {
  const isPlacesSelectedExist = placesSelected.length > 0;

  return (
    <div className="cities">
      <div className={`cities__places-container container ${!isPlacesSelectedExist ? `cities__places-container--empty` : ``}`}>
        {
          (isPlacesSelectedExist) ?
          <>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesSelected.length} places to stay in {cityCurrent}</b>

              <WrappedSortMethodsList
                sortMethodsList = {sortMethodsList}
                sortMethodCurrent = {sortMethodCurrent}
                changeSortMethod = {changeSortMethod}
              />

              <PlacesList
                placesSelected = {placesSelected}
                handleAction = {handleAction}
                active = {active}
              />
            </section>
            <div className="cities__right-section">
              <Map
                nameMap = {`cities`}
                offers = {placesSelected}
                active = {active}
              />
            </div>
          </> :
          <>
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property availbale at the moment in
                  Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"/>
          </>
        }
      </div>
    </div>
  );
};

CityPlacesList.propTypes = {
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
  handleAction: PropTypes.func.isRequired,
  active: PropTypes.exact({
    id: PropTypes.number,
    location: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  })
};

export default CityPlacesList;

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: getCityCurrent(state),
    placesSelected: getPlacesSelected(state),
    sortMethodsList: getSortMethodsList(state),
    sortMethodCurrent: getSortMethodCurrent(state)
  });

const mapDispatchToProps = (dispatch) => ({
  changeSortMethod: (method) => dispatch(ActionsCreator.changeSortMethod(method))
});

const CityPlacesListContainer = connect(mapStateToProps, mapDispatchToProps)(CityPlacesList);

export {CityPlacesList, CityPlacesListContainer};
