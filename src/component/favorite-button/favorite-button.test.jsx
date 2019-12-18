import React from 'react';
import renderer from 'react-test-renderer';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';

import {FavoriteButton} from "./favorite-button.jsx";
import places from "../../mocks/mocks";

it(`FavoriteButton is correctly rendered after launch`, () => {
  const mockDate = {
    buttonName: `place-card`,
    id: 1,
    placesAll: places,
    isAuthorizationStatus: false,
    onSendFavoriteData: jest.fn()
  };

  const test = renderer
    .create(
        <Router history={createBrowserHistory()}>
          <FavoriteButton
            {...mockDate}
          />
        </Router>)
    .toJSON();

  expect(test).toMatchSnapshot();
});
