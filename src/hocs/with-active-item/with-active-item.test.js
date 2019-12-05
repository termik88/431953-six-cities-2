import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item.jsx';

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapper = withActiveItem(MockComponent);

it(`HOC withActiveItem render correctly`, () => {
  const wrapper = mount(<MockComponentWrapper/>);

  expect(wrapper.state().active).toEqual(undefined);
});
