import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlace: {}
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(activePlace) {
    this.setState({
      activePlace
    });
  }

  _onMouseLeave() {
    this.setState({
      activePlace: {},
    });
  }

  render() {
    const {places} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((it, i) => <PlaceCard
          key = {`${it.name}-${i}`}
          place = {it}
          onMouseEnter = {this._onMouseEnter}
          onMouseLeave = {this._onMouseLeave}
        />)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.string,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    price: PropTypes.number,
  })).isRequired
};

export default PlacesList;
