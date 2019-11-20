import React from "react";
import PropTypes from 'prop-types';
import {ActionsCreator} from "../../reducer";
import {connect} from "react-redux";
import {getPlacesSelected} from "../../until";

const CitiesList = ({cityCurrent, citiesList, placesAll, changeCurrentCityAndPlaces}) => {

  const handleClickCityName = (e) => {
    if (cityCurrent !== e.target.textContent) {
      e.preventDefault();
      const placesSelected = getPlacesSelected(e.target.textContent, placesAll);
      changeCurrentCityAndPlaces(e.target.textContent, placesSelected);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((cityName, i) => <li key={`${cityName}-${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${cityName === cityCurrent ? `tabs__item--active` : ``}`}
              href="#"
              onClick={handleClickCityName}>
              <span>{cityName}</span>
            </a>
          </li>)}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: state.cityCurrent,
    citiesList: state.citiesList,
    placesAll: state.placesAll
  });

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCityAndPlaces: (citySelected, placesSelected) => {
    dispatch(ActionsCreator.changeCityCurrent(citySelected));
    dispatch(ActionsCreator.setPlacesSelected(placesSelected));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
