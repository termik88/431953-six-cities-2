import React from 'react';
import renderer from 'react-test-renderer';

import SortMethod from "./sort-method.jsx";
import {sortMethodsList} from "../../reducer/data/data.js";

describe(`SortMethod component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      i: 1,
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      method: sortMethodsList[0],
      onChangeSortMethod: jest.fn(),
      handleToggle: jest.fn()
    };
    const component = renderer
      .create(<SortMethod
        {...mockDate}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
