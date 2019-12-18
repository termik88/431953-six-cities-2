import React from 'react';
import renderer from 'react-test-renderer';

import ReviewForm from "./review-form.jsx";

describe(`ReviewForm component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      review: ``,
      isActive: false,
      isValidationReviewForm: true,
      isLoading: false,
      errorInfo: ``,
      handleInputChange: jest.fn(),
      handleSendComment: jest.fn()
    };

    const test = renderer
      .create(
          <ReviewForm
            {...mockDate}
          />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
