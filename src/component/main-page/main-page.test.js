import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import places from "../../mocks/places.js";

import {MainPage} from "./main-page.jsx";
import {sortMethodsList} from "../../reducer/data/data";
import {getCitiesList} from "../../until";

jest.mock(`../favorite-button/favorite-button.jsx`);
jest.mock(`../map/map.jsx`);

describe(`MainPage component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const citiesList = getCitiesList(places);

    const mockDate = {
      citiesList,
      cityCurrent: citiesList[0],
      onChangeCurrentCity: jest.fn(),

      placesSelected: places,
      sortMethodsList,
      sortMethodCurrent: sortMethodsList[0],
      onChangeSortMethod: jest.fn()
    };

    const component = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <MainPage
              {...mockDate}
            />
          </Router>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
