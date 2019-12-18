import React from 'react';
import renderer from 'react-test-renderer';

import SortMethodList from "./sort-methods-list.jsx";
import {sortMethodsList} from "../../reducer/data/data.js";

describe(`SortMethodList component test.`, () => {
  it(`SortMethodList renders after relaunch`, () => {
    const mockDate = {
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      isOpen: true,
      onChangeSortMethod: jest.fn(),
      handleToggle: jest.fn()
    };
    const component = renderer
      .create(<SortMethodList
        {...mockDate}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
