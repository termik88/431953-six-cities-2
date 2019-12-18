import React from "react";
import PropTypes from "prop-types";

import {MAX_COMMENTS_NUMBER} from "../../constants/constants.js";

import ReviewItem from "../review-item/review-item.jsx";

const ReviewList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.slice(0, MAX_COMMENTS_NUMBER).map((comment) => (
        <ReviewItem key={`comment-${comment.id}`} comment = {comment}/>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string,
    date: PropTypes.string.isRequired,
  })),
};

export default ReviewList;
