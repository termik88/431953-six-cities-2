import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";

import places from "../../mocks/places";
import Card from './card.jsx';
import {createBrowserHistory} from "history";

jest.mock(`../favorite-button/favorite-button.jsx`);

describe(`Card component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      cardName: `cities`,
      place: places[0],
      handleAction: jest.fn(),
    };

    const test = renderer
      .create(
        <Router history={createBrowserHistory()}>
          <Card
            {...mockDate}
          />
        </Router>)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
