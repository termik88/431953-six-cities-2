import React from 'react';
import renderer from 'react-test-renderer';

import FavoritesEmpty from "./favorites-empty.jsx";

describe(`FavoritesEmpty component test.`, () => {
  it(`Correctly renders after relaunch`, () => {

    const mockDate = {
    };

    const test = renderer
      .create(
          <FavoritesEmpty{...mockDate}/>).toJSON();
    expect(test).toMatchSnapshot();
  });
});
