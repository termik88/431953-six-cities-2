import React from 'react';
import Enzyme, {shallow} from "enzyme";
import PropTypes from "prop-types";
import Adapter from 'enzyme-adapter-react-16';
import withToggle from './with-toggle.jsx';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = ({handleToggle}) => (
  <button name="toggle" onClick={handleToggle}/>
);

MockComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

const MockComponentWrapped = withToggle(MockComponent);

describe(`withToggle`, () => {
  it(`HOC works correct`, () => {
    const wrapper = shallow(<MockComponentWrapped onSendComment={jest.fn()} isLoading={false}/>);

    expect(wrapper.state().isOpen).toEqual(false);
    wrapper.props().handleToggle({target: {name: `toggle`}});
    expect(wrapper.state().isOpen).toEqual(true);
  });
});
