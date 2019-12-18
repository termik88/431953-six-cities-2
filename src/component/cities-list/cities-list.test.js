import React from 'react';
import renderer from 'react-test-renderer';

import CitiesList from "./cities-list.jsx";
import {getCitiesList} from "../../until";
import places from "../../mocks/places";


describe(`CitiesList component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const citiesList = getCitiesList(places);

    const mockDate = {
      citiesList,
      cityCurrent: citiesList[0],
      onChangeCurrentCity: jest.fn()
    };

    const test = renderer
      .create(
          <CitiesList
            {...mockDate}
          />).toJSON();

    expect(test).toMatchSnapshot();
  });
});
