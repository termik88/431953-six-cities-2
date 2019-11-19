import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      markersGroup: null
    };
  }

  componentDidMount() {
    const {placesSelected} = this.props;

    const map = leaflet.map(`map`);
    const city = [placesSelected[0].city.location.latitude, placesSelected[0].city.location.longitude];
    const zoom = placesSelected[0].city.location.zoom;

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [24, 30]
    });

    this.setState({
      markersGroup: leaflet
        .layerGroup(placesSelected.map((place) => leaflet
          .marker([place.location.latitude, place.location.longitude], {icon})))
        .addTo(map)
    });


    this.setState({
      map
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.placesSelected !== prevProps.placesSelected) {
      this.setState({
        markersGroup: this.state.markersGroup.clearLayers()
      });

      const {placesSelected} = this.props;

      console.log(`sda`);

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [24, 30]
      });

      const city = [placesSelected[0].city.location.latitude, placesSelected[0].city.location.longitude];
      const zoom = placesSelected[0].city.location.zoom;

      this.state.map.setView(city, zoom);

      this.setState({
        markersGroup: leaflet
          .layerGroup(placesSelected.map((place) => leaflet
            .marker([place.location.latitude, place.location.longitude], {icon})))
          .addTo(this.state.map)
      });

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

export {Map};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    placesSelected: state.placesSelected
  });

export default connect(mapStateToProps)(Map);
