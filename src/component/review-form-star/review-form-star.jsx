import React from "react";
import PropTypes from "prop-types";

const ReviewFormStar = ({star, handleInputChange, isLoading}) => {
  const {
    number,
    title
  } = star;

  return (
    <>
      <input
        onChange = {handleInputChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
        disabled={isLoading}/>
      <label
        htmlFor={`${number}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}>
        <svg
          className="form__star-image"
          width="37"
          height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
};

ReviewFormStar.propTypes = {
  star: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }),
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default ReviewFormStar;
