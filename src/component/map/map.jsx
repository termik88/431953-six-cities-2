import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.container = null;
    this.markerCurrent = null;
    this.markersGroup = null;
  }

  renderMap() {
    this.container = leaflet.map(this.map.current, {zoomControl: false, scrollWheelZoom: false});

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(this.container);

    this.markerCurrent = leaflet.layerGroup().addTo(this.container);
    this.markersGroup = leaflet.layerGroup().addTo(this.container);
  }

  setOptionsMap(places) {
    const city = [places[0].city.location.latitude, places[0].city.location.longitude];
    const zoom = places[0].city.location.zoom;

    this.container.setView(city, zoom);
  }

  getPin(isActive) {
    const icon = leaflet.icon({
      iconUrl: `../img/pin${isActive ? `-active` : ``}.svg`,
      iconSize: [24, 30]
    });

    return {icon};
  }

  renderPin(place, groupLayers, isActive) {
    leaflet
      .marker([place.location.latitude, place.location.longitude], this.getPin(isActive))
      .addTo(groupLayers);
  }

  renderPins(places) {
    for (let place of places) {
      this.renderPin(place, this.markersGroup, false);
    }
  }

  componentDidMount() {
    this.renderMap();
    if (this.props.places.length !== 0) {
      this.setOptionsMap(this.props.places);
      this.renderPins(this.props.places);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.places !== prevProps.places) {
      this.setOptionsMap(this.props.places);
      this.markersGroup.clearLayers();
      this.renderPins(this.props.places);
    }

    if (prevProps.active) {
      this.markerCurrent.clearLayers();
    }

    if (this.props.active) {
      this.renderPin(this.props.active, this.markerCurrent, true);
    }
  }

  render() {
    return <div id="map" ref={this.map} style={{height: `100%`}}/>;
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.exact({
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

  active: PropTypes.shape({
    id: PropTypes.number,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }),
};

export default Map;
