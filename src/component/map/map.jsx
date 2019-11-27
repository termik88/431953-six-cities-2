import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markersGroup = null;
  }

  getPin() {
    const icon = leaflet.icon({
      iconUrl: `img/pin${this.props.active ? `-active` : ``}.svg`,
      iconSize: [24, 30]
    });

    return {icon};
  }

  renderMap() {
    this.map = leaflet.map(`map`);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(this.map);

    this.markersGroup = leaflet.layerGroup().addTo(this.map);
  }

  setOptionsMap(placesSelected) {
    const city = [placesSelected[0].city.location.latitude, placesSelected[0].city.location.longitude];
    const zoom = placesSelected[0].city.location.zoom;

    this.map.setView(city, zoom);
  }

  renderPin(placesSelected) {

    for (let place of placesSelected) {
      leaflet
        .marker([place.location.latitude, place.location.longitude], this.getPin())
        .addTo(this.markersGroup);
    }
  }

  componentDidMount() {
    this.renderMap();
    this.setOptionsMap(this.props.placesSelected);
    this.renderPin(this.props.placesSelected);

    console.log(this.markersGroup);
  }

  componentDidUpdate(prevProps) {

    if (this.props.placesSelected !== prevProps.placesSelected) {
      this.setOptionsMap(this.props.placesSelected);


      this.markersGroup.clearLayers();

      this.renderPin(this.props.placesSelected);
    }

    if (this.props.placesSelected === prevProps.placesSelected) {
      this.map.removeLayer([this.props.placesSelected.id[this.props.active].location.latitude,
        this.props.placesSelected.id[this.props.active].location.longitude], this.getPin());
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
  })).isRequired
};

export default Map;
