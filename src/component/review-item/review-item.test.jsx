import React from 'react';
import renderer from 'react-test-renderer';

import reviews from "../../mocks/reviews.js";
import ReviewItem from './review-item.jsx';

describe(`ReviewItem component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const comment = reviews[0];
    const mockDate = {
      comment
    };

    const test = renderer
      .create(
          <ReviewItem
            {...mockDate}
          />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
