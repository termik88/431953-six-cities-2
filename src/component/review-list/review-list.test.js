import React from 'react';
import renderer from 'react-test-renderer';

import reviews from "../../mocks/reviews.js";
import ReviewList from './review-list.jsx';

describe(`ReviewList component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const comments = reviews;
    const mockDate = {
      comments
    };

    const test = renderer
      .create(
          <ReviewList
            {...mockDate}
          />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
