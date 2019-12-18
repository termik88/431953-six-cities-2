import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';

import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import SortMethod from "./sort-method.jsx";
import {sortMethodsList} from "../../reducer/data/data";

Enzyme.configure({adapter: new Adapter()});

describe(`SortMethod component test.`, () => {
  it(`Click button`, () => {
    const mockDate = {
      i: 1,
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      method: sortMethodsList[0],
      onChangeSortMethod: jest.fn(),
      handleToggle: jest.fn()
    };
    const component = mount(
        <Router history={createBrowserHistory()}>
          <SortMethod
            {...mockDate}
          />
        </Router>);

    const button = component.find(`.places__option`);
    button.simulate(`click`, {
      preventDefault: () => {},
    });
    expect(mockDate.handleToggle).toHaveBeenCalledTimes(1);
  });
});
