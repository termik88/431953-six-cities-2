import React from 'react';
import Enzyme, {shallow} from "enzyme";
import PropTypes from "prop-types";
import Adapter from 'enzyme-adapter-react-16';
import withInputChange from './with-input-change.jsx';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = ({onInputChange}) => (
  <form>
    <input name="email" onChange={onInputChange}/>
    <input name="password" onChange={onInputChange}/>
  </form>
);

MockComponent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isValidationInput: PropTypes.bool.isRequired
};

const MockComponentWrapped = withInputChange(MockComponent);

describe(`withInputChange`, () => {
  it(`HOC works correct`, () => {
    const wrapper = shallow(<MockComponentWrapped onSendComment={jest.fn()} isLoading={false}/>);

    expect(wrapper.state().email).toEqual(``);
    expect(wrapper.state().password).toEqual(``);
    wrapper.props().onInputChange({target: {name: `email`, value: `e1@e1.ru`}});
    wrapper.props().onInputChange({target: {name: `password`, value: `qwerty`}});
    expect(wrapper.state().rating).toEqual(`e1@e1.ru`);
    expect(wrapper.state().password).toEqual(`qwerty`);
  });
});
