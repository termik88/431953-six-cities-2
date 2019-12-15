import React from "react";

import ReviewList from "../review-list/review-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";

const Review = ({comments, isAuthorizationRequired}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{comments.length > 10 ? 10 : comments.length}</span>
      </h2>

      <ReviewList comments = {comments}/>

      {
        !isAuthorizationRequired ? <ReviewForm/> : ``
      }

    </section>
  );
};

export default Review;
