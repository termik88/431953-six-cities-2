import React from "react";
import {connect} from "react-redux";
import {Operations} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selector.js";
import {useHistory} from "react-router-dom";

const FavoriteButton = ({buttonName = `place-card`, id, isFavorite, sendFavoriteData, getAuthorizationStatus}) => {
  let history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
    console.log(`Click Handle`);
    console.log(`id`);
    console.log(id);
    console.log(`isFavorite`);
    console.log(isFavorite);
    if (getAuthorizationStatus) {
      history.push(`/login`);
    } else {
      sendFavoriteData(id, +!isFavorite);
    }
  };

  return (
    <button
      className={`button ${buttonName}__bookmark-button ${isFavorite ? `${buttonName}__bookmark-button--active` : ``}`}
      type="button"
      onClick={handleClick}>
      <svg
        className="place-card__bookmark-icon"
        width={buttonName === `property` ? `31` : `18`}
        height={buttonName === `property` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

const mapStateToProps = (state) => ({
  getAuthorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendFavoriteData: (id, status) => dispatch(Operations.sendFavoriteData(id, status)),
});


const FavoriteButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);

export {FavoriteButton, FavoriteButtonContainer};
