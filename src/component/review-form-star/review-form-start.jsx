import React from "react";

const ReviewFormStart = ({star}) => {
  const {
    number,
    title
  } = star;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={number} id={`${number}-stars`} type="radio"/>
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
};

export default ReviewFormStart;
