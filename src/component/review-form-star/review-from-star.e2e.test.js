import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {stars} from "../review-form/review-form";
import ReviewFormStar from './review-form-star.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Card component e2e test.`, () => {
  const mockDate = {
    star: stars[0],
    handleInputChange: jest.fn(),
    isLoading: false
  };

  const component = shallow(
      <ReviewFormStar
        {...mockDate}
      />);

  it(`change input star`, () => {
    const input = component.find(`.form__rating-input`);
    input.simulate(`change`, {
      preventDefault: () => {
      },
    });
    expect(mockDate.handleInputChange).toHaveBeenCalledTimes(1);
  });
});
