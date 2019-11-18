import React, {PureComponent} from "react";
import {ActionsCreator} from '../../reducer.js';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import SvgBlock from "../svg-block/svg-block.jsx";
import Header from "../header/header.jsx";
import ContainerCitiesList from "../cities-list/cities-list.jsx";
import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";
import {getCities, getPlacesSelected} from "../../until";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount() {
  //   this.props.getInitialState(this.props.places);
  // }

  replacePlaces(citySelected) {
    const {placesAll} = this.props;
    const placesSelected = getPlacesSelected(citySelected, placesAll);
    this.props.changeCurrentCityAndPlaces(citySelected, placesSelected);
  }

  render() {
    return (
      <React.Fragment>
        <SvgBlock/>
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <ContainerCitiesList
            cityCurrent = {this.props.cityCurrent}
            citiesList = {this.props.citiesList}
            onChangeCity = {(selectedCity) => this.replacePlaces(selectedCity)}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{this.props.placesSelected.length} places to stay in {this.props.cityCurrent}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                  {/*
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                */}

                </form>
                <PlacesList
                  places = {this.props.placesSelected}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  places = {this.props.placesSelected}
                />
              </div>
            </div>
          </div>

        </main>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
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
  })).isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    cityCurrent: state.city,
    citiesList: state.citiesList,
    placesSelected: state.placesSelected,
    placesAll: state.placesAll
  });

const mapDispatchToProps = (dispatch) => ({
  getInitialState: (placesAll) => {
    // dispatch(ActionsCreator.changeCity(places[0].city.name));
    // dispatch(ActionsCreator.setCitiesList(getCities(places)));
    // dispatch(ActionsCreator.setPlacesSelected(getPlacesSelected(places[0].city.name, places)));
  },

  changeCurrentCityAndPlaces: (citySelected, placesSelected) => {
    dispatch(ActionsCreator.changeCityCurrent(citySelected));
    dispatch(ActionsCreator.setPlacesSelected(placesSelected));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
