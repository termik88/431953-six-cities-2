import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';

import withAuthorizationTrue from "./with-authorization-true.jsx";
import {createStore} from 'redux';
import reducer from "../../reducer";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => (
  <div>true</div>
);
const MockComponentWrapped = withAuthorizationTrue(MockComponent);

describe(`withAuthorizationFalse`, () => {
  it(`HOC works correct when isAuthorizationFalse = true`, () => {
    const store = createStore(reducer);
    const wrapper = shallow(
        <Provider store={store}>
          <Router history={createBrowserHistory()}>
            <MockComponentWrapped/>
          </Router>
        </Provider>
    );
    expect(wrapper.find(MockComponent)).toBeDefined();
  });
});
