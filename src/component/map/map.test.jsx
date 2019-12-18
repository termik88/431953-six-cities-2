import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

import places from "../../mocks/places.js";

describe(`Map component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      places,
      active: {
        id: 1,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      nameMap: `property`
    };
    const test = renderer
      .create(<Map
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
