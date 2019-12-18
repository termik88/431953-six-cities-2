import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const ReviewTextLength = {
  MIN: 50,
  MAX: 300
};

const initialState = {
  rating: ``,
  review: ``,
  isActive: false
};

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);
      this.state = initialState;

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSendComment = this.handleSendComment.bind(this);
      this.getInitialState = this.getInitialState.bind(this);
    }

    getInitialState() {
      this.setState((state) => {
        return {isActive: !state.isActive};
      });
      this.setState(initialState);
    }

    handleInputChange(active) {
      this.setState({[active.target.name]: active.target.value});
    }

    isValidationForm() {
      return !!this.state.rating &&
        this.state.review.length >= ReviewTextLength.MIN &&
        this.state.review.length <= ReviewTextLength.MAX;
    }

    handleSendComment(evt) {
      evt.preventDefault();
      this.props.onSendComment(this.props.placeId, {rating: +this.state.rating, comment: this.state.review}, this.getInitialState);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          handleInputChange = {this.handleInputChange}
          isValidationReviewForm = {this.isValidationForm()}
          handleSendComment = {this.handleSendComment}
        />
      );
    }
  }

  WithComment.propTypes = {
    placeId: PropTypes.number.isRequired,
    review: PropTypes.string,
    rating: PropTypes.string,
    onSendComment: PropTypes.func.isRequired
  };

  return WithComment;
};

export default withComment;
