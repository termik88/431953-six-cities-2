import React from "react";
import PropTypes from 'prop-types';

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

export default CitiesList;
