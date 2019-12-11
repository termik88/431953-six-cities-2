import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {FavoritesCardContainer} from "../favorites-card/favorites-card.jsx";

import {getCitiesListFavorites, getFavoritesPlaces} from "../../reducer/data/selectors.js";
import {Operations} from "../../reducer/data/data";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataFavoritesPlaces();
  }

  render() {
    const citiesListFavorites = this.props.citiesListFavorites;
    const placesFavorites = this.props.placesFavorites;

    console.log(placesFavorites);
    console.log(citiesListFavorites);
    return (
      <>
        {placesFavorites.length > 0 ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">

                  {citiesListFavorites.map((city, key) => (
                    <li key={`city-${city}-${key}`} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to={`/`}>
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">

                        {placesFavorites.map((place) => place.city.name === city ? (
                          <FavoritesCardContainer
                            key = {`place-${place.id}`}
                            place = {place}
                          />) : ``)}

                      </div>
                    </li>
                  ))}

                </ul>
              </section>
            </div>
          </main> :

          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                    trips.</p>
                </div>
              </section>
            </div>
          </main>
        }
        <footer className="footer container">
          <Link className="footer__logo-link" to={`/`}>
            <img className="footer__logo" src="../img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  citiesListFavorites: getCitiesListFavorites(state),
  placesFavorites: getFavoritesPlaces(state),
});

const mapDispatchToProps = (dispatch) => ({
  getDataFavoritesPlaces: () => dispatch(Operations.getDataFavoritesPlaces())
});

const FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export {Favorites, FavoritesContainer};
