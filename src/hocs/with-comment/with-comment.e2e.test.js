import React from 'react';
import Enzyme, {shallow} from "enzyme";
import PropTypes from "prop-types";
import Adapter from 'enzyme-adapter-react-16';
import withComment from './with-comment.jsx';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = ({handleInputChange}) => (
  <form>
    <input name="rating" onChange={handleInputChange}/>
    <textarea name="review" onChange={handleInputChange}/>
  </form>
);

MockComponent.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSendComment: PropTypes.func.isRequired,
  isValidationReviewForm: PropTypes.bool.isRequired
};

const MockComponentWrapped = withComment(MockComponent);

describe(`withComment`, () => {
  it(`HOC works correct`, () => {
    const wrapper = shallow(<MockComponentWrapped onSendComment={jest.fn()} isLoading={false}/>);

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
    expect(wrapper.state().isActive).toEqual(false);
    wrapper.props().handleInputChange({target: {name: `rating`, value: 6}});
    wrapper.props().handleInputChange({target: {name: `review`, value: `Тестовый отзыв`}});
    expect(wrapper.state().rating).toEqual(6);
    expect(wrapper.state().review).toEqual(`Тестовый отзыв`);
  });
});
