import React from "react";

import ReviewFormStart from "../review-form-star/review-form-start.jsx";

const ratingStars = [
  {number: `5`, title: `perfect`},
  {number: `4`, title: `good`},
  {number: `3`, title: `not bad`},
  {number: `2`, title: `badly`},
  {number: `1`, title: `terribly`},
];

const ReviewForm = ({}) => {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star, i) => (
          <ReviewFormStart
            key = {`key-star-${i}-${star.number}`}
            star = {star}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
