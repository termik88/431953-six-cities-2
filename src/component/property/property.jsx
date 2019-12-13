import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPlacesAll, getComments} from "../../reducer/data/selectors.js";
import {transformRatingToStarsNumber, getPlacesNearest} from "../../until.js";
import {Operations} from "../../reducer/data/data.js";

import Review from "../review/review.jsx";
import {CardContainer} from "../card/card.jsx";
import Map from "../map/map.jsx";

const IMAGES_MAX = 6;

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadDataComments(this.props.match.params.id);
  }

  render() {
    const placeCurrent = this.props.places.find((item) => item.id === +this.props.match.params.id);
    const placesNearest = getPlacesNearest(placeCurrent, this.props.places);

    const {
      images,
      title,
      isFavorite,
      isPremium,
      bedrooms,
      maxAdults,
      rating,
      price,
      goods,
      type,
      host: {id, isPro, name, avatarUrl},
      description
    } = placeCurrent;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, IMAGES_MAX).map((it, i) =>
                <div key={`image-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={it} alt="Photo studio"/>
                </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={isFavorite
                    ? `property__bookmark-button button`
                    : `property__bookmark-button property__bookmark-button--active button`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{transformRatingToStarsNumber(rating)}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((it, i) => <li key={i} className="property__inside-item"> {it} </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div key={id} className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={`../${avatarUrl}`}
                      width="74"
                      height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{name}</span>
                  {isPro && (<span className="property__user-status">
                  Pro
                  </span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <Review comments = {this.props.comments}/>

            </div>
          </div>

          <Map
            nameMap = {`property`}
            offers = {placesNearest}
            active = {placeCurrent}
          />

        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {placesNearest.map((item) => (
                <CardContainer
                  key = {`card-${item.id}`}
                  cardName = {`near`}
                  place = {item}
                />
              ))
              }

            </div>
          </section>
        </div>

      </main>
    );
  }
}


// Property.propTypes = {
//   place: PropTypes.exact({
//     id: PropTypes.number,
//     city: PropTypes.exact({
//       name: PropTypes.string,
//       location: PropTypes.exact({
//         latitude: PropTypes.number,
//         longitude: PropTypes.number,
//         zoom: PropTypes.number
//       })
//     }),
//     previewImage: PropTypes.string,
//     images: PropTypes.arrayOf(PropTypes.string),
//     title: PropTypes.string,
//     isFavorite: PropTypes.bool,
//     isPremium: PropTypes.bool,
//     rating: PropTypes.number,
//     type: PropTypes.string,
//     bedrooms: PropTypes.number,
//     maxAdults: PropTypes.number,
//     price: PropTypes.number,
//     goods: PropTypes.arrayOf(PropTypes.string),
//     host: PropTypes.exact({
//       id: PropTypes.number,
//       isPro: PropTypes.bool,
//       name: PropTypes.string,
//       avatarUrl: PropTypes.string
//     }),
//     description: PropTypes.string,
//     location: PropTypes.exact({
//       latitude: PropTypes.number,
//       longitude: PropTypes.number,
//       zoom: PropTypes.number
//     })
//   }).isRequired
// };

const mapStateToProps = (state) => ({
  places: getPlacesAll(state),
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadDataComments: (id) => dispatch(Operations.loadDataComments(id))
});

const PropertyContainer = connect(mapStateToProps, mapDispatchToProps)(Property);

export {Property, PropertyContainer};
