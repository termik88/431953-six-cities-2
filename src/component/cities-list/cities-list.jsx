import React from "react";
import {ActionsCreator} from '../../reducer.js';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const CitiesList = ({city, cities, onCityLinkClick}) => {

  const handleClickCityName = (e) => {
    e.preventDefault();
    onCityLinkClick(e.target.textContent);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => <li key={`${it}-${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${it === city ? `tabs__item--active` : ``}`}
              href="#"
              onClick={handleClickCityName}>
              <span>{it}</span>
            </a>
          </li>)}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick: (cityName) => {
    dispatch(ActionsCreator.changeCity(cityName));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
