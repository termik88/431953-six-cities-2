import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => <li key={`${it.name}-${i}`} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{it.name}</span>
            </a>
          </li>)}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
};

export default CitiesList;
