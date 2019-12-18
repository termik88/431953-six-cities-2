import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import FavoritesCity from "./favorites-city.jsx";
import {getCitiesList} from "../../until";
import places from "../../mocks/places";

jest.mock(`../favorite-button/favorite-button.jsx`);

describe(`FavoritesCity component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const citiesList = getCitiesList(places);

    const mockDate = {
      cityName: citiesList[0],
      favoritesOffers: places,
      path: `/`,
      handleClickCityName: jest.fn()
    };

    const test = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <FavoritesCity
              {...mockDate}
            />
          </Router>).toJSON();

    expect(test).toMatchSnapshot();
  });
});
