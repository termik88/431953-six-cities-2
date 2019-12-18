import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

jest.mock(`../favorite-button/favorite-button.jsx`);

import PlacesList from './places-list.jsx';
import places from "../../mocks/places.js";

describe(`PlacesList component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      placesSelected: places,
      handleAction: jest.fn()
    };
    const test = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <PlacesList
              {...mockDate}
            />
          </Router>)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
