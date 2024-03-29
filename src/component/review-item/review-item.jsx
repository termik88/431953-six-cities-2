import React from "react";
import PropTypes from "prop-types";

import {getMonthYear} from "../../until.js";

const ReviewItem = ({comment}) => {
  const {
    user: {id, name, avatarUrl, isPro},
    rating,
    date,
    commentText
  } = comment;

  return (
    <li className="reviews__item">
      <div key={id} className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Review avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
        {isPro && (<span className="reviews__user-status">Pro</span>)}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getMonthYear(date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    commentText: PropTypes.string,
    date: PropTypes.string.isRequired,
  }),
};


export default ReviewItem;
