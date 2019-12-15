import React from "react";

import ReviewItem from "../review-item/review-item.jsx";

const ReviewList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.slice(0, 10).map((comment) => (
        <ReviewItem key={`comment-${comment.id}`} comment = {comment}/>
      ))}
    </ul>
  );
};

export default ReviewList;
