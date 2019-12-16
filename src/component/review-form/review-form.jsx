import React from "react";

import ReviewFormStart from "../review-form-star/review-form-start.jsx";

const stars = [
  {number: `5`, title: `perfect`},
  {number: `4`, title: `good`},
  {number: `3`, title: `not bad`},
  {number: `2`, title: `badly`},
  {number: `1`, title: `terribly`},
];

const ReviewForm = ({isActive, review, isValidationReviewForm, onInputChange, handleSendComment, isLoading, errorInfo}) => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <ReviewFormStart
            key = {`key-star-${star.number}-${isActive}`}
            star = {star}
            onInputChange = {onInputChange}
            isLoading = {isLoading}
          />))}
      </div>
      <textarea
        onChange={onInputChange}
        value={review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isLoading}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          onClick={handleSendComment}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidationReviewForm || isLoading}>Submit</button>
      </div>
      { errorInfo && <span style={{color: `red`}}>{errorInfo}</span> }
    </form>
  );
};

export default ReviewForm;
