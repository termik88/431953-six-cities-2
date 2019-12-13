import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class PropertyMap extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markerCurrent = null;
    this.markersGroup = null;
  }

  renderMap() {
    this.map = leaflet.map(`map`, {zoomControl: false, scrollWheelZoom: false});

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(this.map);

    this.markerCurrent = leaflet.layerGroup().addTo(this.map);
    this.markersGroup = leaflet.layerGroup().addTo(this.map);
  }

  setOptionsMap(offers) {
    const city = [offers[0].city.location.latitude, offers[0].city.location.longitude];
    const zoom = offers[0].city.location.zoom;

    this.map.setView(city, zoom);
  }

  getPin(isActive) {
    const icon = leaflet.icon({
      iconUrl: `../img/pin${isActive ? `-active` : ``}.svg`,
      iconSize: [24, 30]
    });

    return {icon};
  }

  renderPin(offer, groupLayers, isActive) {
    leaflet
      .marker([offer.location.latitude, offer.location.longitude], this.getPin(isActive))
      .addTo(groupLayers);
  }

  renderPins(offers) {
    for (let offer of offers) {
      this.renderPin(offer, this.markersGroup, false);
    }
  }

  componentDidMount() {
    this.renderMap();
    if (this.props.offers.length !== 0) {
      this.setOptionsMap(this.props.offers);
      this.renderPins(this.props.offers);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.offers !== prevProps.offers) {
      this.setOptionsMap(this.props.offers);
      this.markersGroup.clearLayers();
      this.renderPins(this.props.offers);
    }

    if (prevProps.active) {
      this.markerCurrent.clearLayers();
    }

    if (this.props.active) {
      this.renderPin(this.props.active, this.markerCurrent, true);
    }
  }

  render() {
    console.log(`rerender map`);
    return <section className={`${this.props.nameMap}__map map`}>
      <div style={{height: `100%`}} id="map"/>
    </section>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
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

export default PropertyMap;
