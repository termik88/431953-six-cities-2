import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';

import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import SortMethodList from "./sort-methods-list.jsx";
import {sortMethodsList} from "../../reducer/data/data";

Enzyme.configure({adapter: new Adapter()});

describe(`SortMethodList component test.`, () => {
  it(`Click button`, () => {
    const mockDate = {
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      isOpen: true,
      onChangeSortMethod: jest.fn(),
      handleToggle: jest.fn()
    };
    const component = mount(
        <Router history={createBrowserHistory()}>
          <SortMethodList
            {...mockDate}
          />
        </Router>);

    const button = component.find(`.places__sorting-type`);
    button.simulate(`click`, {
      preventDefault: () => {},
    });
    expect(mockDate.handleToggle).toHaveBeenCalledTimes(1);
  });
});
