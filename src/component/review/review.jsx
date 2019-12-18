import React from "react";
import PropTypes from "prop-types";

import {MAX_COMMENTS_NUMBER} from "../../constants/constants.js";

import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

import withComment from "../../hocs/with-comment/with-comment.jsx";

const WrappedReviewForm = withComment(ReviewForm);

const Review = ({placeId, comments, isAuthorizationRequired, onSendComment, isLoading, errorInfo}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span
          className="reviews__amount">{comments.length > MAX_COMMENTS_NUMBER ? MAX_COMMENTS_NUMBER : comments.length}</span>
      </h2>

      <ReviewList comments = {comments}/>

      {
        !isAuthorizationRequired ?
          <WrappedReviewForm
            placeId = {placeId}
            onSendComment = {onSendComment}
            isLoading = {isLoading}
            errorInfo = {errorInfo}
          /> : ``
      }

    </section>
  );
};

Review.propTypes = {
  placeId: PropTypes.number.isRequired,
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
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorInfo: PropTypes.string.isRequired,
  onSendComment: PropTypes.func.isRequired,
};

export default Review;
