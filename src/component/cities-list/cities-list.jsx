import React from "react";
import PropTypes from 'prop-types';
import {ActionsCreator} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getCitiesList, getCityCurrent} from "../../reducer/data/selectors";

const CitiesList = ({cityCurrent, citiesList, changeCurrentCityAndPlaces}) => {

  const handleClickCityName = (evt) => {
    evt.preventDefault();
    changeCurrentCityAndPlaces(evt.target.textContent);
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
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
    </>
  );
};

CitiesList.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeCurrentCityAndPlaces: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: getCityCurrent(state),
    citiesList: getCitiesList(state),
  });

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCityAndPlaces: (citySelected) => dispatch(ActionsCreator.changeCityCurrent(citySelected))
});

const CitiesListContainer = connect(mapStateToProps, mapDispatchToProps)(CitiesList);

export {CitiesList, CitiesListContainer};
