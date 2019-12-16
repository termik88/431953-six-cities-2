import React from "react";

import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

import withComment from "../../hocs/with-comment/with-comment.jsx";

const WrappedReviewForm = withComment(ReviewForm);

const Review = ({placeId, comments, isAuthorizationRequired, onSendComment, isLoading, errorInfo}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{comments.length > 10 ? 10 : comments.length}</span>
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

export default Review;
