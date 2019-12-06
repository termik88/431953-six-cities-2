import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markerCurrent = null;
    this.markersGroup = null;
  }

  renderMap() {
    this.map = leaflet.map(`map`);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(this.map);

    this.markerCurrent = leaflet.layerGroup().addTo(this.map);
    this.markersGroup = leaflet.layerGroup().addTo(this.map);
  }

  setOptionsMap(placesSelected) {
    const city = [placesSelected[0].city.location.latitude, placesSelected[0].city.location.longitude];
    const zoom = placesSelected[0].city.location.zoom;

    this.map.setView(city, zoom);
  }

  getPin(isActive) {
    const icon = leaflet.icon({
      iconUrl: `img/pin${isActive ? `-active` : ``}.svg`,
      iconSize: [24, 30]
    });

    return {icon};
  }

  renderPin(place, groupLayers, isActive) {
    leaflet
      .marker([place.location.latitude, place.location.longitude], this.getPin(isActive))
      .addTo(groupLayers);
  }

  renderPins(placesSelected) {
    for (let place of placesSelected) {
      this.renderPin(place, this.markersGroup, false);
    }
  }

  componentDidMount() {
    this.renderMap();
    if (this.props.placesSelected.length !== 0) {
      this.setOptionsMap(this.props.placesSelected);
      this.renderPins(this.props.placesSelected);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.placesSelected !== prevProps.placesSelected) {
      this.setOptionsMap(this.props.placesSelected);
      this.markersGroup.clearLayers();
      this.renderPins(this.props.placesSelected);
    }

    if (prevProps.active) {
      this.markerCurrent.clearLayers();
    }

    if (this.props.active) {
      this.renderPin(this.props.active, this.markerCurrent, true);
    }
  }

  render() {
    return <section className="cities__map map">
      <div style={{height: `100%`}} id="map"/>
    </section>;
  }
}

Map.propTypes = {
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

  active: PropTypes.exact({
    id: PropTypes.number,
    location: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  })
};

export default Map;
