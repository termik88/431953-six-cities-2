import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Operations} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {useHistory} from "react-router-dom";

const Card = ({cardName, place, onMouseEnter = () => {}, onMouseLeave = () => {}, sendFavoriteData, getAuthorizationStatus, getDataFavoritesPlaces}) => {
  let history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    if (getAuthorizationStatus) {
      history.push(`/login`);
    } else {
      sendFavoriteData(id, +!isFavorite);
      getDataFavoritesPlaces();
    }
  };

  const {
    id,
    title,
    previewImage,
    type,
    isFavorite,
    isPremium,
    rating,
    price
  } = place;

  return (
    <article
      className={`place-card place-card--${cardName}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper place-card__image-wrapper--${cardName}`}>
        <Link to={`../offer/${id}` || `#`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className={`place-card__info place-card__info--${cardName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            {price && (
              <b className="place-card__price-value">&euro;{price}</b>
            )}
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`}
            type="button"
            onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`../offer/${id}` || `#`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  place: PropTypes.exact({
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
  }).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

const mapStateToProps = (state) => ({
  getAuthorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendFavoriteData: (id, status) => dispatch(Operations.sendFavoriteData(id, status)),
  getDataFavoritesPlaces: () => dispatch(Operations.getDataFavoritesPlaces())
});


const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export {Card, CardContainer};
