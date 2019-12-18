import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import {BrowserPaths} from "../../constants/constants.js";
import {Operations} from "../../reducer/data/data.js";

import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {getPlacesAll} from "../../reducer/data/selectors.js";

const widthIcon = {
  MIN: `18`,
  MAX: `31`
};

const heightIcon = {
  MIN: `19`,
  MAX: `33`
};

const FavoriteButton = ({buttonName = `place-card`, id, placesAll, onSendFavoriteData, isAuthorizationStatus}) => {
  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    if (isAuthorizationStatus) {
      history.push(BrowserPaths.SIG_IN);
    } else {
      onSendFavoriteData(id, +!isFavorite);
    }
  };

  const isFavorite = placesAll.find((item) => item.id === id).isFavorite;

  return (
    <>
    <button
      className={`button ${buttonName}__bookmark-button ${isFavorite ? `${buttonName}__bookmark-button--active` : ``}`}
      type="button"
      onClick={handleClick}>
      <svg
        className="place-card__bookmark-icon"
        width={buttonName === `property` ? widthIcon.MAX : widthIcon.MIN}
        height={buttonName === `property` ? heightIcon.MAX : heightIcon.MIN}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
      </>
  );
};

FavoriteButton.propTypes = {
  buttonName: PropTypes.string,
  id: PropTypes.number.isRequired,
  placesAll: PropTypes.arrayOf(PropTypes.exact({
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
  isAuthorizationStatus: PropTypes.bool.isRequired,
  onSendFavoriteData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationStatus: getAuthorizationStatus(state),
  placesAll: getPlacesAll(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSendFavoriteData: (id, status) => dispatch(Operations.sendFavoriteData(id, status)),
});


const FavoriteButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);

export {FavoriteButton, FavoriteButtonContainer};
