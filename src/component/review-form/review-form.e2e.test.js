import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReviewForm from "./review-form.jsx";

Enzyme.configure({adapter: new Adapter()});

const mockDate = {
  review: `comment`,
  isActive: true,
  isValidationReviewForm: true,
  isLoading: false,
  errorInfo: ``,
  handleInputChange: jest.fn(),
  handleSendComment: jest.fn()
};

describe(`ReviewForm component e2e test.`, () => {
  const component = mount(
      <ReviewForm
        {...mockDate}
      />);

  it(`On star click`, () => {
    const button = component.find(`.reviews__submit`);
    button.simulate(`click`, {
      preventDefault: () => {},
    });
    expect(mockDate.handleSendComment).toHaveBeenCalled();
  });

  it(`change input textarea`, () => {
    const input = component.find(`.reviews__textarea`);
    input.simulate(`change`, {
      preventDefault: () => {
      },
    });
    expect(mockDate.handleInputChange).toHaveBeenCalledTimes(1);
  });
});
