import React from 'react';
import renderer from 'react-test-renderer';

import ReviewFormStar from './review-form-star.jsx';
import {stars} from "../review-form/review-form.jsx";

describe(`ReviewFormStar component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      star: stars[0],
      handleInputChange: jest.fn(),
      isLoading: false
    };

    const test = renderer
      .create(
          <ReviewFormStar
            {...mockDate}
          />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
