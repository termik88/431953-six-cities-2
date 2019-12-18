import React from 'react';
import renderer from 'react-test-renderer';

import Review from "./review.jsx";
import reviews from "../../mocks/reviews.js";

describe(`Review component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      placeId: 1,
      comments: reviews,
      isAuthorizationRequired: false,
      isLoading: false,
      errorInfo: ``,
      onSendComment: jest.fn(),
    };

    const test = renderer
      .create(
          <Review
            {...mockDate}
          />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
