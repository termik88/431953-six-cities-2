import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

describe(`PlacesList commponet test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = [
      {
        name: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        type: `Apartment`,
        premium: false,
        rating: 80,
        price: 132,
      },
      {
        name: `Nice, cozy, warm big bed apartment`,
        src: `img/apartment-03.jpg`,
        type: `Apartment`,
        premium: true,
        rating: 100,
        price: 180,
      }
    ];
    const test = renderer
      .create(<PlacesList
        places = {mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
