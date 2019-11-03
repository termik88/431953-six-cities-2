import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

describe(`PlaceCard component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      place: {
        name: `Beautiful & luxurious studio at great location`,
        src: `img/apartment-01.jpg`,
        type: `Apartment`,
        premium: true,
        rating: 93,
        price: 180,
      },
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn()
    };

    const test = renderer
      .create(<PlaceCard
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
