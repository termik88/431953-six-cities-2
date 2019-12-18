import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import CityPlacesList from "./city-places-list.jsx";
import {getCitiesList} from "../../until";
import places from "../../mocks/places";
import {sortMethodsList} from "../../reducer/data/data";

jest.mock(`../favorite-button/favorite-button.jsx`);
jest.mock(`../map/map.jsx`);

describe(`FavoritesCity component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const citiesList = getCitiesList(places);

    const mockDate = {
      cityCurrent: citiesList[0],
      placesSelected: places,
      active: {
        id: 1,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      handleAction: jest.fn(),
      onChangeSortMethod: jest.fn()
    };

    const test = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <CityPlacesList
              {...mockDate}
            />
          </Router>).toJSON();

    expect(test).toMatchSnapshot();
  });
});
