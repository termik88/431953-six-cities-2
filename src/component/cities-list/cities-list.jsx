import React from "react";
import PropTypes from 'prop-types';
import {ActionsCreator} from "../../reducer/data/data.js";
import {connect} from "react-redux";

import {getCityCurrent, getCitiesList, getPlacesAll} from "../../reducer/data/selectors";
import {getPlacesSelected} from "../../until";

const CitiesList = ({cityCurrent, citiesList, placesAll, changeCurrentCityAndPlaces}) => {

  const handleClickCityName = (evt) => {
    if (cityCurrent !== evt.target.textContent) {
      evt.preventDefault();
      const placesSelected = getPlacesSelected(evt.target.textContent, placesAll);
      changeCurrentCityAndPlaces(evt.target.textContent, placesSelected);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((cityName, i) => (
            <li key={`${cityName}-${i}`} className="locations__item">
              <a className={`locations__item-link tabs__item ${cityName === cityCurrent ? `tabs__item--active` : ``}`}
                href="#"
                onClick={handleClickCityName}>
                <span>{cityName}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  placesAll: PropTypes.arrayOf(PropTypes.exact({
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
  changeCurrentCityAndPlaces: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: getCityCurrent(state),
    citiesList: getCitiesList(state),
    placesAll: getPlacesAll(state)
  });

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCityAndPlaces: (citySelected, placesSelected) => {
    dispatch(ActionsCreator.changeCityCurrent(citySelected));
    dispatch(ActionsCreator.setPlacesSelected(placesSelected));
  }
});

const CitiesListContainer = connect(mapStateToProps, mapDispatchToProps)(CitiesList);

export {CitiesList, CitiesListContainer};
