import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getPlacesAll, getComments} from "../../reducer/data/selectors.js";
import {transformRatingToStarsNumber, getPlacesNearest} from "../../until.js";
import {Operations} from "../../reducer/data/data.js";

import Review from "../review/review.jsx";
import Card from "../card/card.jsx";
import Map from "../map/map.jsx";
import {FavoriteButtonContainer} from "../favorite-button/favorite-button.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import {getErrorInfo, getIsLoading} from "../../reducer/data/selectors";

const IMAGES_MAX = 6;

class PropertyPage extends PureComponent {
  componentDidMount() {
    this.props.loadDataComments(this.props.match.params.id);
  }

  render() {
    const placeCurrent = this.props.places.find((item) => item.id === +this.props.match.params.id);
    const placesNearest = getPlacesNearest(placeCurrent, this.props.places);

    const {
      id,
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
      host,
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

                <FavoriteButtonContainer
                  buttonName = {`property`}
                  id = {id}
                  isFavorite = {isFavorite}
                />

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
                <div key={host.id} className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={`../${host.avatarUrl}`}
                      width="74"
                      height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (<span className="property__user-status">
                  Pro
                  </span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <Review
                placeId = {id}
                comments = {this.props.comments}
                isAuthorizationRequired = {this.props.isAuthorizationRequired}
                onSendComment = {this.props.onSendComment}
                isLoading = {this.props.isLoading}
                errorInfo = {this.props.errorInfo}
              />

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
                <Card
                  key = {`card-${item.id}`}
                  cardName = {`near`}
                  place = {item}
                />
              ))}

            </div>
          </section>
        </div>

      </main>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.loadDataComments(this.props.match.params.id);
    }
  }
}

const mapStateToProps = (state) => ({
  places: getPlacesAll(state),
  comments: getComments(state),
  isAuthorizationRequired: getAuthorizationStatus(state),
  isLoading: getIsLoading(state),
  errorInfo: getErrorInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadDataComments: (id) => dispatch(Operations.loadDataComments(id)),
  onSendComment: (id, comment, callBack) => dispatch(Operations.sendComment(id, comment, callBack))
});

const PropertyPageContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyPage);

export {PropertyPage, PropertyPageContainer};
