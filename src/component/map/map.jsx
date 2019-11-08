import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import propTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {places} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`)
      .addTo(map);

    for (const place of places) {
      leaflet
        .marker([place.location.latitude, place.location.longitude], {icon})
        .addTo(map);
    }
  }

  render() {
    return <section id="map" className="cities__map map" style={{width: `100%`, height: `100%`}}/>;
  }
}

export default Map;
